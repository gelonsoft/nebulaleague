import {MainRoom} from "~/server/rooms/mainRoom";
import {Client, ServerError} from "colyseus";
import {IncomingMessage} from "http";
import UserEntity from "~/server/entities/UserEntity";
import crypto from "crypto";
import * as bcrypt from "bcrypt";

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
                        user.token = crypto.randomBytes(64).toString('hex');
                        void user.save()
                    }
                } else {
                    throw new ServerError(400, "Bad login or password!");
                }
            }
        }
        if (user) {
            return {
            token: user.token,
            playerId: user.playerId, playerName: user.playerName, coins: user.coins } } else {
            throw new ServerError(400, "Something wrong!");
        }
    }

    compareEncrypted(password: string, hash: string) {
        return bcrypt.compare(password, hash);
    }

}