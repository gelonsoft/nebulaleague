import * as Colyseus from 'colyseus.js'
import { Client, GameClient } from '.'
import { Config } from '~/shared/config'
import { GameChanged, GameState, GameStateSchema, PlayerModelSchema } from '~/shared/models'
import { Player } from '~/client/entities/player'


export class GameOnlineClient extends GameClient {
    public room: Colyseus.Room<GameStateSchema>
    public state: GameState
    public client: Client
    
    constructor(client: Client) {
        super(client)
        this.state = Config.defaultGameState
    }

    get id(): string {
        return this.room.sessionId
    }
    
    public async init() {
        this.room = await this.client.colyseus.joinOrCreate('gameRoom', {
            playerConfig: this.client.playerConfig,
        })
        
        this.room.onStateChange.once((state: GameStateSchema) => {
            this.state = state
            this.room.state.players.forEach((playerModel: PlayerModelSchema, playerId: string) => {
                playerModel.onChange = (_changes) => {
                    const targetedPlayer = this.client.gameScene.players.getChildren().
                        find((player: Player) => player.id === playerId) as Player

                    Object.assign(targetedPlayer, playerModel)
                }})
            
            this.room.state.players.onAdd = (playerModel: PlayerModelSchema, playerId: string) => {
                this.client.gameScene.players.add(new Player(this.client.gameScene, playerModel))
                playerModel.onChange = (_changes) => {
                    const targetedPlayer = this.client.gameScene.players.getChildren().
                        find((player: Player) => player.id === playerId) as Player
                    Object.assign(targetedPlayer, playerModel)
                }
            }

            this.room.state.players.onRemove = (_playerModel: PlayerModelSchema, playerId: string) => {
                const player = this.client.gameScene.players.getChildren()
                    .find((player: Player) => player.id === playerId) as Player
                player.healthBar.destroy()
                this.client.gameScene.players.remove(player, true, true)
            }

            this.client.playerSelectionScene.scene.start(this.client.gameKey)
            this.client.gameScene.scene.launch(Config.scenes.hud.key).sendToBack()
            
        })
    }
    
    public update(gameChanged: GameChanged): void {
        this.room.send('playerChanged', gameChanged.player)
    }    
}
