import { MyGame } from '~/client/index'
import { Client } from '.'

import {
    PlayerConfig,
    GameState,
    User,
    ControlledBy,
} from '~/shared/models'
import { Config } from '~/shared/config'
import * as Colyseus from "colyseus.js"
import { LobbyState } from '~/server/gameServer/lobbyRoom'


export class ColyseusClient extends Client {
    public lobyUser: User
    public gameState: GameState
    public isHost: boolean
    public isGameInit: boolean
    public isGameJoined: boolean
    public colyseus: Colyseus.Client
    public lobyRoom: Colyseus.Room<LobbyState>

    constructor(game: MyGame) {
        super(game)
        const host = window.document.location.host.replace(/:.*/, '')
        this.colyseus = new Colyseus.Client(
            location.protocol.replace("http", "ws")
            + "//" + host +
            (window.document.location.port ? ':' + window.document.location.port : ''))
        console.log(this.colyseus)
    }

    get id(): string {
        return 'colyseus'
    }

    
    public async emitLobyInit() {
        this.lobyRoom = await this.colyseus.joinOrCreate('loby', Config.userDefault)
        this.lobyRoom.state.users.onChange = (user: User, clientId: string) => {
            console.log('onChange')
            console.log(user)
            console.log(clientId)
        }
        
        this.lobyRoom.state.users.onAdd = (user: User, clientId: string) => {
            console.log('onAdd')
            console.log(user)
            console.log(clientId)
        }
        
    }


    public async emitLobyEnd() {
        
    }
    
    
    public emitLobyStart(user: User): void {
        this.lobyUser = user
        // this.lobyRoom.send("updateUser", user)
        this.lobyScene.scene.start(Config.scenes.playerSelection.key)
    }

    public emitPlayerSelectionStart(playerConfig: PlayerConfig): void {
        this.gameState = {
            players: {
                offline: {
                    id: this.id,
                    x: 0,
                    y: 0,
                    rotation: 0,
                    controlledBy: ControlledBy.Human,
                    ...playerConfig,
                },
            },
            projectiles: {},
            gameMode: this.lobyUser.gameMode || 'training',
            hostId: 'hello',
        }

        window.localStorage.setItem('playerConfig', JSON.stringify(playerConfig))
        this.playerSelectionScene.scene.start(this.gameKey)
        this.gameScene.scene.launch(Config.scenes.hud.key).sendToBack()
    }

}
