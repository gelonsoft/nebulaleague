import { Config } from '@shared/config'


export class HealthBar extends Phaser.GameObjects.Graphics {
    public scene: Phaser.Scene
    public maxHealth: number
    public health: number
    public x: number
    public y: number
    public width: number
    public height: number
    public innerWidth: number
    public innerHeight: number
    public padding: number
    public innerPadding: number

    constructor(
        scene: Phaser.Scene,
        x: number,
        y: number,
        width: number,
        height: number,
        padding: number,
        maxHealth: number,
    ) {
        super(scene)
        this.scene.add.existing(this)
        this.x = x
        this.y = y
        this.width = width
        this.height = height
        this.padding = padding
        this.innerPadding = padding / 2
        this.innerWidth = this.width - this.padding
        this.innerHeight = this.height - this.padding
        this.maxHealth = maxHealth
        this.health = 0
    }


    public refresh(health: number) {
        this.health = health
        this.clear()
        this.fillStyle(0x000000)
        this.fillRect(0, 0, this.width, this.height)
        this.fillStyle(Config.healthBar.colorBackground)
        this.fillRect(
            this.innerPadding,
            this.innerPadding,
            this.innerWidth,
            this.innerHeight,
        )
        if (health <= this.maxHealth / 10) {
            this.fillStyle(Config.healthBar.colorLow)
        } else if (health <= this.maxHealth / 10 * 3) {
            this.fillStyle(Config.healthBar.colorMedium)
        } else {
            this.fillStyle(Config.healthBar.colorHigh)
        }
        const percent = this.innerWidth / this.maxHealth
        const widthHealth = Math.floor(percent * health)
        this.fillRect(
            this.innerPadding,
            this.innerPadding,
            widthHealth,
            this.innerHeight)
    }
}
