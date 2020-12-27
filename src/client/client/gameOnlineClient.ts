import * as Colyseus from 'colyseus.js'
import { GameClient } from '~/client/client/gameClient'
import { GameChanged, GameStateSchema, PlayerAction, PlayerModelSchema } from '~/shared/models'
import { Player } from '~/client/entities/player'

export class GameOnlineClient extends GameClient {
    public room: Colyseus.Room<GameStateSchema>

    get id(): string {
        return this.room.sessionId
    }

    public async init() {
        this.room = await this.game.client.colyseus.joinOrCreate('gameRoom', {
            playerConfig: this.game.client.playerConfig,
        })

        this.room.onStateChange.once((state: GameStateSchema) => {
            this.state = state
            this.onInit()
            const getPlayers = () => this.game.scenes.game.players.getChildren()
            const getPlayer = (playerId: string): Player => {
                return getPlayers().find((player: Player) => player.id === playerId) as Player
            }
            const updatePlayer = (playerId: string, playerModelSchema: PlayerModelSchema) => {
                const player = getPlayer(playerId)
                player.x = playerModelSchema.x
                player.y = playerModelSchema.y
            }
            
            this.room.state.players.forEach((playerModel: PlayerModelSchema, playerId: string) => {
                playerModel.onChange = (_changes) => updatePlayer(playerId, playerModel)
            })

            this.room.state.players.onAdd = (playerModel: PlayerModelSchema, playerId: string) => {
                this.game.scenes.game.players.add(new Player(this.game.scenes.game, playerModel))
                playerModel.onChange = (_changes) => updatePlayer(playerId, playerModel)
            }

            this.room.state.players.onRemove = (_playerModel: PlayerModelSchema, playerId: string) => {
                const player = getPlayer(playerId)
                // player.healthBar.destroy()
                this.game.scenes.game.players.remove(player, true, true)
            }
        })
    }

    public inputUpdate(playerAction: PlayerAction): void {
        this.room.send('inputUpdate', playerAction)
    }
}
