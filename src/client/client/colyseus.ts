import { MyGame } from '~/client/index'
import { Client } from '.'

import { PlayerConfig, GameState, User, ControlledBy, LobyState } from '~/shared/models'

import { UserSchema } from '~/server/gameServer/lobbyRoom'

import { Config } from '~/shared/config'
import * as Colyseus from 'colyseus.js'
import { LobbySchema } from '~/server/gameServer/lobbyRoom'
import { PlayerSelectionStateSchema } from '~/server/gameServer/playerSelectionRoom'

export class ColyseusClient extends Client {
    public lobyUser: User
    public gameState: GameState
    public isHost: boolean
    public isGameInit: boolean
    public isGameJoined: boolean
    public colyseus: Colyseus.Client
    public lobyRoom: Colyseus.Room<LobbySchema>
    public playerSelectionRoom: Colyseus.Room<PlayerSelectionStateSchema>

    constructor(game: MyGame) {
        super(game)
        const host = window.document.location.host.replace(/:.*/, '')
        this.colyseus = new Colyseus.Client(
            location.protocol.replace('http', 'ws') +
                '//' +
                host +
                (window.document.location.port ? ':' + window.document.location.port : '')
        )
        console.log(this.colyseus)
    }


    get id(): string {
        return 'offline'
    }
    
    get lobyRoomId(): string {
        return this.lobyRoom.sessionId
    }
    get playerSelectionRoomId(): string {
        return this.playerSelectionRoom.sessionId
    }
    

    public async emitLobyInit() {
        this.lobyRoom = await this.colyseus.joinOrCreate('loby', Config.userDefault)
        this.lobyRoom.state.users.onAdd = (user: UserSchema, userId: string) => {
            user.onChange = (changes) => {
                changes.forEach(change => {
                    if(userId === this.lobyRoom.sessionId) {
                        if(change.field === 'ready' && change.value === true) {
                            this.lobyRoom.leave()
                        }
                    }                    
                })
            }
        }

        this.lobyRoom.state.users.onRemove = (user, key) => {
            
        }

        this.lobyRoom.onMessage('*', (_message: LobyState) => {})
    }

    public emitLobyStart(user: User): void {
        this.lobyUser = user
        this.lobyRoom.send('userReady', user)
        this.lobyScene.scene.start(Config.scenes.playerSelection.key)

    }

    public async emitPlayerSelectionInit() {
        this.playerSelectionRoom = await this.colyseus.joinOrCreate('playerSelection', {
            gameMode: this.lobyUser.gameMode,
        })
        console.log(this.playerSelectionRoom)
    }

    
    public emitPlayerSelectionEnd(): void {}
    
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
