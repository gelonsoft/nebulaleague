import {MainRoom} from "~/server/rooms/mainRoom";
import {Client, ServerError} from "colyseus";
import {IncomingMessage} from "http";
import UserEntity from "~/server/entities/UserEntity";
import * as bcrypt from "bcrypt";
import crypto from "crypto";
import {MainPlayerModelSchema} from "~/shared/models";
import {SInventorySchema} from "~/shared/models/schemas/itemSchemas";
import HeroItemEntity, {IHeroItemEntity} from "~/server/entities/HeroItemEntity";

const cryptos = require('crypto')

export class MainRoomHelper {
    gameRoom: MainRoom
    constructor(gameRoom: MainRoom) {
        this.gameRoom=gameRoom
    }

    async onAuth(client: Client, options: {
        token?: string,
        login?: string,
        password?: string,
    }, request: IncomingMessage) {
        let user = await UserEntity.findOne({activeSessionId: client.sessionId});
        if (!user)   {
            if (options.token) {
                user = await UserEntity.findOne({token: options.token});
                if (!user) {
                    throw new ServerError(400, "Bad token!");
                }
            }
            if (options.login && options.password) {
                user = await UserEntity.findOne({login: options.login});
                if (user) {
                    const validPassword: boolean = await this.compareEncrypted(options.password, user.password);
                    if (!validPassword) {
                        throw new ServerError(400, "Bad login or password!");
                    } else {
                        user.activeSessionId = client.sessionId;
                        user.token = cryptos.randomBytes(64).toString('hex');
                        void user.save()
                    }
                } else {
                    throw new ServerError(400, "Bad login or password!");
                }
            }
        }
        if (user) {
            this.gameRoom.playerId =user.playerId
            this.gameRoom.state.player = new MainPlayerModelSchema().assign({
                playerId: user.playerId,
                playerName: user.playerName,
                gold: user.gold,
                token: user.token,
                stamina: user.stamina,
                lastStaminaUpdate: user.lastStaminaUpdate
            });
            this.gameRoom.state.inventory = new SInventorySchema().assign(

            )
        } else {
            throw new ServerError(400, "Something wrong!");
        }
    }

    async getInventory() {
            return HeroItemEntity.find({playerId: this.gameRoom.playerId}).lean().exec()
    }

    async getInventoryState() {
        const inventory = this.getInventoryState()

    }

    compareEncrypted(password: string, hash: string) {
        return bcrypt.compare(password, hash);
    }

}