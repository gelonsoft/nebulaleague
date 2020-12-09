import { MyGame } from '~/client/index'
import { Client } from '.'

import { PlayerModel, GameState, User, ControlledBy, LobyState, PlayerSelectionState } from '~/shared/models'

import { UserSchema } from '~/server/gameServer/lobbyRoom'

import { Config } from '~/shared/config'
import * as Colyseus from 'colyseus.js'
import { LobbyStateSchema } from '~/server/gameServer/lobbyRoom'
import { PlayerConfigSchema, PlayerSelectionRoom, PlayerSelectionStateSchema } from '~/server/gameServer/playerSelectionRoom'
import { GameStateSchema } from '~/server/gameServer/gameRoom'


export class ColyseusClient extends Client {
    public lobyUser: User
    public isHost: boolean
    public isGameInit: boolean
    public isGameJoined: boolean
    public colyseus: Colyseus.Client
    public lobyRoom: Colyseus.Room<LobbyStateSchema>
    public playerSelectionRoom: Colyseus.Room<PlayerSelectionStateSchema>
    public gameRoom: Colyseus.Room<GameStateSchema>



    constructor(game: MyGame) {
        super(game)
        const host = window.document.location.host.replace(/:.*/, '')
        this.colyseus = new Colyseus.Client(
            location.protocol.replace('http', 'ws') +
                '//' +
                host +
                (window.document.location.port ? ':' + window.document.location.port : '')
        )
    }


    get id(): string {
        return this.playerSelectionRoom.sessionId
    }
    
    get lobyRoomId(): string {
        return this.lobyRoom.sessionId
    }
    get playerSelectionRoomId(): string {
        return this.playerSelectionRoom.sessionId
    }
    

    public async emitLobyInit() {
        this.lobyRoom = await this.colyseus.joinOrCreate('loby', {})
        this.lobyRoom.state.users.onAdd = (user: UserSchema, userId: string) => {
            user.onChange = (changes) => {
                changes.forEach(change => {
                    if(userId === this.lobyRoom.sessionId) {
                        if(change.field === 'ready' && change.value === true) {
                            this.lobyRoom.leave()
                            this.lobyScene.scene.start(Config.scenes.playerSelection.key)
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
    }

    public async emitPlayerSelectionInit(): Promise<PlayerSelectionState> {
        this.playerSelectionRoom = await this.colyseus.joinOrCreate('playerSelection', {
            gameMode: this.lobyUser.gameMode,
            player: this.playerConfig,
        })

        this.playerSelectionRoom.state.players.onAdd = (playerConfig: PlayerConfigSchema, playerId: string) => {
            playerConfig.onChange = (changes) => {
                changes.forEach(change => {
                    if(playerId === this.playerSelectionRoom.sessionId) {
                        if(change.field === 'ready' && change.value === true) {
                            this.playerSelectionRoom.leave()
                            this.gameState.players[this.id] = {
                                ...playerConfig,
                                id: this.id,
                                x: 0,
                                y: 0,
                                rotation: 0,
                                controlledBy: 'human',
                            }
                            this.game.scene.start(Config.scenes.playerSelection.key)
                            this.gameScene.scene.launch(Config.scenes.hud.key).sendToBack() // 
                        }
                    }                    
                })
            }
        }

        this.playerSelectionRoom.o
        this.playerSelectionState = this.playerSelectionRoom.state
        console.log(this.playerSelectionRoom.state)
        console.log(this.playerSelectionRoom.state.players.values())
        return this.playerSelectionState
    }

    public emitPlayerSelectionStart(playerConfig: PlayerModel): void {
        window.localStorage.setItem('playerConfig', JSON.stringify(playerConfig))
        this.playerConfig = playerConfig
        this.playerSelectionRoom.send('playerReady', this.playerConfig)
       
    }
}
