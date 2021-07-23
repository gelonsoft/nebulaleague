import  'phaser'
import RexUIPlugin from "phaser3-rex-plugins/templates/ui/ui-plugin.js";
import {MyGame} from "~/client/games/myGame";
import {Config} from "~/shared/config";
import Buttons from "phaser3-rex-plugins/templates/ui/buttons/Buttons";

export class LoginScene extends Phaser.Scene {
    public game: MyGame
    rexUI: RexUIPlugin;
    loginInput: Phaser.GameObjects.Text;
    passwordInput: Phaser.GameObjects.Text;
    submitButton: Buttons;
    messageText: Phaser.GameObjects.Text;

    constructor() {
        super({ key: Config.scenes.login.key })
    }

    create() {
        this.rexUI.add.roundRectangle(437, 360, 150, 36, 10, 0x333333)
            .setStrokeStyle(2, 0x555555);
        this.loginInput = this.add.text(437, 360, this.game.client.mainPlayerConfig.login?this.game.client.mainPlayerConfig.login:'Login', {fixedWidth: 150}).setAlign("center").setOrigin(0.5, 0.5)

        this.loginInput.setInteractive().on('pointerdown', () => {
            if (this.loginInput.text == "Login") {
                this.loginInput.setText("")
            }
            this.rexUI.edit(this.loginInput, {onTextChanged: (parent: Phaser.GameObjects.Text,text) => {
                    parent.text = text;
                    if (this.checkSubmit()) {
                        this.submitButton.showButton(0)
                    } else {
                        this.submitButton.hideButton(0)
                    }

            }
            } )
        })

        this.rexUI.add.roundRectangle(437, 396, 150, 36, 10, 0x333333)
            .setStrokeStyle(2, 0x555555);
        this.passwordInput = this.add.text(437, 396, 'Password', {fixedWidth: 150}).setAlign("center").setOrigin(0.5, 0.5)

        this.passwordInput.setInteractive().on('pointerdown', () => {
            if (this.passwordInput.text == "Password") {
                this.passwordInput.setText("")
            }
            this.rexUI.edit(this.passwordInput,{type: "password", onTextChanged: (parent: Phaser.GameObjects.Text,text) => {
                    parent.text = text;
                    if (this.checkSubmit()) {
                        this.submitButton.showButton(0)
                    } else {
                        this.submitButton.hideButton(0)
                    }
                }})
        })

        this.submitButton = this.rexUI.add.buttons({
            x: 437,
            y: 396+36+20,
            width: 150,
            height: 36,
            orientation: 0,
            // Elements
            buttons: [
                this.rexUI.add.label({
                    background: this.rexUI.add.roundRectangle(437, 396+36, 150, 36, 10, 0xCCCCCC).setStrokeStyle(4,0x336433),
                    text: (this.add.text(437, 396+36, 'submit', { fixedWidth: 150, fontSize: '24px',color: '0xFF0000'}).setAlign("center").setOrigin(0.5, 0.5)),
                    space: {
                        left: 5,
                        right: 5,
                        top: 5,
                        bottom: 5
                    }
                })
            ],
            expand: false,
            align: "center",
            click: {
                mode: 'pointerup',
                clickInterval: 100
            },

        });

        this.submitButton.on('button.click', () => {
            if (this.checkSubmit()) {
                void this.tryLogin()
            } else {
                this.submitButton.hideButton(0)
            }
        }, this).layout()

        this.submitButton.hideButton(0)

        this.messageText = this.add.text(437, 460, '', {color: '0xCC0000'}).setAlign("center").setOrigin(0.5, 0.5)

    }

    checkSubmit(): boolean {
        return this.loginInput.text.length>0 && this.passwordInput.text.length>0 && this.loginInput.text !== "Login" && this.passwordInput.text !== "Password"
    }


    tryLogin() {
        console.log('submit')
        void this.game.client.mainGameClient.tryLoginMainClient(this.loginInput.text,this.passwordInput.text).then(
            (v) => {
                if (v.result) {
                    this.game.client.mainPlayerConfig.login=this.loginInput.text
                } else {
                    this.messageText.text=v.message
                }
            }

        )


    }

}