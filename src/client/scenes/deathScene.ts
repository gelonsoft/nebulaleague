import { MyGame } from "../phaserEngine"
import { MainScene } from "./mainScene"

export class DeathScene extends Phaser.Scene {
    public game: MyGame
    public mainScene: MainScene
    
    constructor() {
        super({key: "deathScene"})

    }

    public init(mainScene): void {
        console.log('init')
        this.mainScene = mainScene
    }

    public handleMouse(): void {
        const pointer = this.input.activePointer
        if (pointer.leftButtonReleased()) {
            console.log('hello')
        }

    }

    
    
    public update(time: number, delta: number): void {
        

    }
}
