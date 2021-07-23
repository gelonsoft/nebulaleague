import {Client, Room, ServerError} from "colyseus";
import {GameStateSchema, MainGameStateSchema, MainPlayerModelSchema, PlayerConfig} from "~/shared/models";
import {IncomingMessage} from "http";
import * as crypto from "crypto";
import * as bcrypt from "bcrypt";
import UserEntity, {IUserEntity} from "~/server/entities/UserEntity";
import mongoose from "mongoose";
import {MainRoomHelper} from "~/server/rooms/helpers/mainRoomHelper";

const logger = require("../helpers/logger");

export class MainRoom extends Room<MainGameStateSchema> {
    maxClients: 1
    state: MainGameStateSchema
    helper: MainRoomHelper
    onCreate() {
        this.setState(new MainGameStateSchema())
        this.helper=new MainRoomHelper(this)
    }

    async onAuth(client: Client, options: {
        token?: string,
        login?: string,
        password?: string,
    }, request: IncomingMessage) {
        return this.helper.onAuth(client,options,request)
    }

    onJoin(client: Client, options: any, auth: {
        token: string,playerId: number, playerName: string, coins: number }) {
        console.log(auth)
        const player = new MainPlayerModelSchema().assign({
            playerId: auth.playerId,
            playerName: auth.playerName,
            coins: auth.coins,
            token: auth.token
        });

        this.state.player= player
    }



    async onLeave(client: Client, consented: boolean) {


        // Find the user object in the database by their activeSessionId
        const user = await UserEntity.findOne({activeSessionId: client.sessionId});

        if (user) {
            // Clear the user's active session
            user.activeSessionId = "";
            //user.position = this.state.getUserPosition(client.sessionId);
            //user.rotation = this.state.getUserRotation(client.sessionId);

            // Save the user's changes to the database
            await user.save()
        }

        try {
            if (consented) {
                throw new Error("consented leave!");
            }

            logger.info("let's wait for reconnection for client: " + client.id);
            const newClient = await this.allowReconnection(client, 3);
            logger.info("reconnected! client: " + newClient.id);

        } catch (e) {
            logger.info("disconnected! client: " + client.id);
            logger.silly(`*** Removing Networked User and Entity ${client.id} ***`);

            //remove user
            /*let entityStateToLeave = this.state. get(client.id);
            if (entityStateToLeave) {
                this.state.networkedUsers.delete(client.id);
            }*/
        }
    }

    onDispose() {
        console.log("room", this.roomId, "disposing...");
    }

    async validateToken(token: any) {
        return new Promise((resolve) => {
            resolve("41");
        });
    }





}