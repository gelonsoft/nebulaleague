import {Config} from "~/shared/config";


export class HeroStatScene extends Phaser.Scene {

    public menuHTML: Phaser.GameObjects.DOMElement
    constructor() {
        super({ key: Config.scenes.heroStat.key })
    }

    create() {
        this.menuHTML = this.add
            .dom(0, 0)
            .createFromCache('heroStatHTML')
            .setOrigin(0.5, 0)
            .setPosition(this.scale.width / 2, 100)
            .setAlpha(0.8)
    }
}