import {Config} from "~/shared/config";
import { Tabs } from 'phaser3-rex-plugins/templates/ui/ui-components.js';
import Random = Phaser.Math.Between;
import RexUIPlugin from "phaser3-rex-plugins/templates/ui/ui-plugin.js";

export class HeroStatScene extends Phaser.Scene {

    rexUI: RexUIPlugin;
    textA: Phaser.GameObjects.Text;
   // public menuHTML: Phaser.GameObjects.DOMElement
    constructor() {
        super({ key: Config.scenes.heroStat.key })
    }

    initGUI() {
        
    }
    create() {
        const tabs = this.rexUI.add.tabs({
            x: 400,
            y: 400,
            background: this.rexUI.add.roundRectangle(0, 0, 10, 10, 0, 0x333333),
            panel: this.rexUI.add.roundRectangle(0, 0, 400, 400, 20, 0x283593),
            leftButtons: [
                this.rexUI.add.roundRectangle(0, 0, 100, 50, {
                    tl: 25,
                    bl: 25
                }, Random(0, 0xffffff)),
                this.rexUI.add.roundRectangle(0, 0, 100, 50, {
                    tl: 25,
                    bl: 25
                }, Random(0, 0xffffff)),
                this.rexUI.add.roundRectangle(0, 0, 100, 50, {
                    tl: 25,
                    bl: 25
                }, Random(0, 0xffffff)),
            ],


            space: {
                left: 20,
                right: 20,
                top: 20,
                bottom: 20,
                leftButtonsOffset: 20,
                leftButton: 10,
            }
        })
            .layout()
        // .drawBounds(this.add.graphics(), 0xff0000);

        this.textA = this.add.text(0, 0, '');
        tabs
            .on('button.click', function (button: { fillColor: any; }, groupName: string, index: string) {
                this.textA.text += groupName + '-' + index + '\n';
                const panel = tabs.getElement('panel') as Phaser.GameObjects.Shape;
                if (panel) {
                    panel.setFillStyle(button.fillColor);
                }
            }, this)

    }

    createButton(text:string) {
        return this.rexUI.add.label({
            background: this.rexUI.add.roundRectangle(0, 0, 100, 40, 20, 0x6a4f4b),

            text: this.add.text(0, 0, text, {
                fontSize: '24px'
            }),

            space: {
                left: 10,
                right: 10,
                top: 10,
                bottom: 10
            }
        });
    }
}