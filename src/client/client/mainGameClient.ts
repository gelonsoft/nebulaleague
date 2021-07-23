import * as Colyseus from 'colyseus.js'
import { GameClient } from '~/client/client/gameClient'
import { GameChanged, MainGameStateSchema, MainPlayerModelSchema, PlayerAction} from '~/shared/models'
import {Player} from '~/client/entities/player'


export class MainGameClient extends GameClient {
    public inputUpdate(playerAction: PlayerAction): void {

    }
    public room: Colyseus.Room<MainGameStateSchema>
    public state: MainGameStateSchema
    get id(): string {
        return this.room.sessionId
    }

    public async init() {
        /*this.room = await this.game.client.colyseus.joinOrCreate('gameRoom', {
            playerConfig: this.game.client.playerConfig,
        })*/
        this.room.onStateChange.once((state: MainGameStateSchema) => {
            this.state = state
            this.onInit()
        })
        const a = await Promise.resolve(1)
    }

    public async tryLoginMainClient(login: string, password: string): Promise<{ result: boolean, message: string}> {
        return new Promise<{result: boolean, message: string}>( (resolve) => {
            void this.game.client.colyseus.joinOrCreate<MainGameStateSchema>('mainGameRoom', {login: login, password: password}).then((v) => {
                this.room = v;
                void this.init()
                resolve({result: true, message: ''})
            }).catch((reason) => {
                console.error(reason)
                resolve({result: false, message: reason})
            })
        });
    }


    public async tryInitByToken(token: string): Promise<boolean> {
        return new Promise<boolean>( (resolve,reject) => {
            void this.game.client.colyseus.joinOrCreate<MainGameStateSchema>('mainGameRoom', {token: token}).then((v) => {
                    this.room = v;
                    void this.init()
                    resolve(true)
                }).catch((reason) => {
                    console.error(reason)
                    resolve(false)

            })
        });
    }
}
