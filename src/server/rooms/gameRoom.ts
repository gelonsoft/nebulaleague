import { Client, Room } from 'colyseus'
import { PlayerChanged, PlayerConfig } from '~/shared/models'
import { GameStateSchema, PlayerModelSchema } from '~/shared/models/schemas/gameSchemas'
import { Game } from '~/server/games/game'
import { Player } from '~/server/games/entities/player'
import { GameScene } from '~/server/games/scenes/gameScene'

type Option = {
    playerConfig: PlayerConfig
}

export class GameRoom extends Room<GameStateSchema> {
    game: Game
    scene: GameScene
    state: GameStateSchema
    maxClients: 1
    onCreate(_option: Option) {
        this.setState(new GameStateSchema())
        this.game = new Game(this.state)
        this.scene = this.game.gameScene
        
        this.onMessage('playerChanged', (client, playerChanged: PlayerChanged) => {
            Object.assign(this.state.players.get(client.sessionId), playerChanged)
        })
    }

    onJoin(client: Client, option: Option) {
        const player = new PlayerModelSchema().assign({
            ...option.playerConfig,
            id: client.sessionId,
            x: 0,
            y: 0,
        })

        this.state.players.set(client.sessionId, player)
        
        this.scene.players.add(
            new Player(this.scene, player)
        )
    }

    onLeave(client: Client) {
        this.state.players.delete(client.sessionId)
    }
}
