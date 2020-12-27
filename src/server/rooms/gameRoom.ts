import { Client, Room } from 'colyseus'
import { PlayerAction, PlayerChanged, PlayerConfig } from '~/shared/models'
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
        
        this.onMessage('inputUpdate', (client, playerAction: PlayerAction) => {
            const player = this.scene.playerById(client.sessionId)

            if (playerAction.direction) {
                player.move(playerAction.direction)
            }
            // if (playerAction.rotation) {
            //     player.rotateFromPointer(playerAction.rotation)
            // }
            // if (playerAction.selectAbility) {
            //     player.selectAbility(playerAction.selectAbility)
            // }
            // if (playerAction.action) {
            //     const pointerVector = new Phaser.Math.Vector2(
            //         playerAction.pointerPosition!.x,
            //         playerAction.pointerPosition!.y
            //     )
            //     player.action(playerAction.action, pointerVector)
            // }
            
        })
    }

    onJoin(client: Client, option: Option) {
        const player = new PlayerModelSchema().assign({
            ...option.playerConfig,
            id: client.sessionId,
            x: 20,
            y: 20,
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
