import { MainScene } from "./mainScene"
import { MyGame } from "../phaserEngine"
import { DebugControl } from "../controls"
import { PlayerAI, WANDER_BEHAVIOUR } from "../ai"
import { Player } from "../player"



const formatCoord = function(x, y) {
	return '(' + x + ',' + y + ')'
}

const formatAngle = function(angle) {
	const angleDeg = angle * 180 / Math.PI;
	return angleDeg + ' (' + angle.toFixed(2) + ')'
}

export class DebugScene extends Phaser.Scene {
    public game: MyGame
    public globalProps: Array<string>
    public style: Record<string, unknown>
    public showCornerCoords: boolean
    public showDirectionAngles: boolean
    public gameDelay: number
    public gameDelayText: Phaser.GameObjects.Text
    public mainScene: MainScene
    public directions: Array<any>
    public cornerCoords: Array<any>
    public helpText: Array<any>
    public helpDisplayed: boolean
    public isPaused: boolean
    public debugControl: DebugControl
    public debugMenu: Phaser.GameObjects.DOMElement
    public debugEntities: Array<any>
    public debugEntitiesAI: Array<PlayerAI>
    public debugEntitiesAIGraphics: Map<string, Map<string, Phaser.GameObjects.Graphics>>
    
	constructor() {
		super({
			key: 'debugScene',
			active: false
		})
		
		const config = {
			props: [
                'x',
                'y',
                'angle',
                'body.velocity.x',
                'body.velocity.y',
                'body.acceleration.x',
                'body.acceleration.y',
                'health',
            ],
			color: '#da4d4d',
			showCornerCoords: true,
			showDirectionAngles: true,
		}
        this.globalProps = config.props
		
		this.style = {
			font: '12px Arial',
			fill: config.color,
			stroke: config.color,
			strokeThickness: 1
		};
		
		
		this.showCornerCoords = config.showCornerCoords
		this.showDirectionAngles = config.showDirectionAngles
		this.gameDelay = 0
        this.mainScene = null
		this.debugEntities = []
        this.debugEntitiesAI = []
        this.debugEntitiesAIGraphics = new Map()
	}
	
	init(scene) {
        if (this.game.debug) {
            window['d'] = this
        }
        
		// the scene being debugged
		this.mainScene = scene
        this.debugControl = new DebugControl(this)

		if(this.showCornerCoords) {
			// this.initCornerCoords()
		}

		if(this.showDirectionAngles) {
			// this.initDirectionAngles()
		}
		

        // debug players
        this.debugEntities = this.mainScene.players.getChildren() as Player[]
        // this.debug.push(...this.mainScene.players)
        // this.debug.push(...this.mainScene.consumables.getChildren())

        // debug AI
        this.debugEntitiesAI = this.mainScene.playersAI
        
        this.initDebugText()
        this.initDrawSteeringGraphics()
        this.createMenu()
	}


    createMenu() {
        this.debugMenu = this.add.dom(0, 0).createFromCache('debugMenuHTML')
            .setPosition(this.scale.width / 2, this.scale.height / 2)
            .setOrigin(0.5)
            .setAlpha(0.7)
            .setVisible(false)

        this.debugMenu.addListener('click')
        this.debugMenu.on('click', event => {
            if (event.target.name === 'switchPlayerButton') {
                this.switchToPlayer(event.target.dataset.id)
                this.debugMenu.setVisible(false)
            }
            if (event.target.name === 'switchMainPlayerButton') {
                this.switchMainPlayer()
                this.debugMenu.setVisible(false)
            }
        })
    }

    switchToPlayer(index: number) {
        const player: Player = this.mainScene.players.getChildren()[index]  as Player
        this.mainScene.cameras.main.startFollow(player, true)
        this.mainScene.playerControl.active = false
    }
    
    switchMainPlayer() {
        this.mainScene.playerControl.active = true
        this.mainScene.cameras.main.startFollow(this.mainScene.player, true)
    }

    initDrawSteeringGraphics() {
        for(const playerAI of this.debugEntitiesAI) {
            const graphics = new Map()

            const graphicRadial= this.mainScene.add.graphics({
                lineStyle: {width: 2, color: 0x00ffff }
            })
            const graphicDistanceExtension = this.mainScene.add.graphics({
                lineStyle: {width: 4, color: 0xff00ff }
            })
            graphics.set('wanderDistanceExtension', graphicDistanceExtension)
            graphics.set('wanderRadial', graphicRadial)


            const graphicNetForce = this.mainScene.add.graphics({lineStyle: {width: 2, color: 0xffffff }})
            graphics.set('netForce', graphicNetForce)
            this.debugEntitiesAIGraphics.set(playerAI.player.id, graphics)

        }
    }
    
    initPrestep() {
		this.events.on('prestep', () => {
			const start = new Date().getTime()
			for(let i = 0; i < 1e7; i++) {
				if((new Date().getTime() - start) > this.gameDelay) {
					break
				}
			}
		})        
    }
    
    initDebugText() {
		const offset = 20
		for(let i = 0; i < this.debugEntities.length; i++) {
			const obj = this.debugEntities[i]
			obj.props = this.getProps()
			obj.text = {}
			
			const x = this.getX(obj)
			const y = this.getY(obj)
            
			for(let j = 0; j < obj.props.length; j++) {
				const prop = obj.props[j]
				const value = this.getValue(obj, prop)
				obj.text[prop] = this.mainScene.add.text(x, y + offset * j, prop + ': ' + value, this.style)
			}
			
		}
		this.gameDelayText = this.add.text(20, 20, 'Game Delay: ' + (this.gameDelay/1000) + 's', this.style) 
    }


    updateText() {
		const offset = 20
		for(let i = 0; i < this.debugEntities.length; i++) {
			const entity = this.debugEntities[i]
			
            const x = this.getX(entity)
            const y = this.getY(entity)
			for(let j = 0; j < entity.props.length; j++) {
                const prop = entity.props[j]
                const value = this.getValue(entity, prop)
                const localJ = j
                const text = entity.text[prop]
				
				text.setText(prop + ': ' + value)
				text.x = x
				text.y = y + offset * localJ
			}
		}
    }
    
    updateSteeringGraphics() {
        for(const [key, graphics] of this.debugEntitiesAIGraphics) {
            const debugEntity = this.debugEntitiesAI.find((playerAI => playerAI.player.id === key))
            for(const [keyType, graphic] of graphics) {
                graphic.clear()
                if (keyType === 'netForce' ) {
                    const netForce = debugEntity.sumSteeringsForce()
                    const line = new Phaser.Geom.Line(
                        debugEntity.player.x,
                        debugEntity.player.y,
                        debugEntity.player.x + netForce.x,
                        debugEntity.player.y + netForce.y,
                    )
                    graphic.strokeLineShape(line)                    
                }
                if (keyType === 'wanderDistanceExtension' ) {
                    const distanceExtension = debugEntity.wander.distanceExtension
                    const normal = debugEntity.player.body.velocity.clone().normalize()
                    const line = new Phaser.Geom.Line(
                        debugEntity.player.x,
                        debugEntity.player.y,
                        debugEntity.player.x + normal.x * distanceExtension,
                        debugEntity.player.y + normal.y * distanceExtension,
                    )
                    graphic.strokeLineShape(line)
                }
                if (keyType === 'wanderRadial' ) {
                    const distanceExtension = debugEntity.wander.distanceExtension
                    const radialMag = debugEntity.wander.radialMag
                    const normal = debugEntity.player.body.velocity.clone().normalize()
                    const circle = new Phaser.Geom.Circle(
                        debugEntity.player.x + normal.x * distanceExtension,
                        debugEntity.player.y + normal.y * distanceExtension,
                        radialMag
                    )
                    graphic.strokeCircleShape(circle)
                }
                
            }
        }
    }
    
	
	update(time: number, delta: number) {
        this.debugControl.update(delta)
        
		if(this.gameDelay > 0) {
			this.gameDelayText.setText('Game Delay: ' + (this.gameDelay/1000) + 's');
		} else {
			this.gameDelayText.setText('');
		}

        this.updateText()
        this.updateSteeringGraphics()
	}


    toggleHelpMenu() {
        this.debugMenu.setVisible(!this.debugMenu.visible)
        this.mainScene.playerControl.toggleActive()
    }
	

	getValue(entity, prop) {
        const propParts = prop.split('.')
		
		let value = entity;
		for(let i = 0; i < propParts.length; i++) {
			value = value[propParts[i]]
		}
		
		if(Number.isFinite(value)) {
			value = value.toFixed(2)
		}
		
		return value
	}
	
	getX(entity) {
		return entity.x - entity.displayWidth / 2 + 5
	}
	
	getY(entity) {
		return entity.y + entity.displayHeight / 2 + 10
	}
	

	pauseScene() {
		this.scene.pause(this.mainScene.scene.key);
		// this.isPaused = true;
	}
	
	resumeScene() {
		this.scene.resume(this.mainScene.scene.key);
		// this.isPaused = false;
	}
	

	slowDownGame() {
		this.gameDelay += 10;
	}
	
	speedUpGame() {
		this.gameDelay -= 10;
		
		if(this.gameDelay < 0) {
			this.gameDelay = 0;
		}
	}
	
	resetGameSpeed() {
		this.gameDelay = 0
	}

	getProps() {
		return this.globalProps
	}
    
	
	initCornerCoords() {
		const camera = this.mainScene.cameras.main
		const inset = 5
		
		this.cornerCoords = [];
		
		let x, y, text
		
		x = camera.x
		y = camera.y
		text = this.add.text(x + inset, y + inset, formatCoord(x, y), this.style)
		this.cornerCoords.push(text)
		
		x = camera.x + camera.width
		y = camera.y
		text = this.add.text(x - inset, y + inset, formatCoord(x, y), this.style)
		text.setOrigin(1,0)
		this.cornerCoords.push(text)
		
		x = camera.x + camera.width
		y = camera.y + camera.height
		text = this.add.text(x - inset, y - inset, formatCoord(x, y), this.style)
		text.setOrigin(1,1)
		this.cornerCoords.push(text)
		
		x = camera.x
		y = camera.y + camera.height
		text = this.add.text(x + inset, y - inset, formatCoord(x, y), this.style)
		text.setOrigin(0,1)
		this.cornerCoords.push(text)
	}
	
	initDirectionAngles() {
		const camera = this.mainScene.cameras.main
		const  inset = 5
		
		this.directions = []
		
		let x, y, angle, text
        angle = 0
		x = camera.x + camera.width - inset
		y = camera.y + camera.height / 2
		text = this.add.text(x, y, formatAngle(angle), this.style)
		text.setOrigin(1,0.5)
		this.directions.push(text)
		
		angle = Math.PI / 2
		x = camera.x + camera.width / 2
		y = camera.y + camera.height - inset
		text = this.add.text(x, y, formatAngle(angle), this.style)
		text.setOrigin(0.5,1)
		this.directions.push(text)
		
		angle = Math.PI
		x = camera.x + inset
		y = camera.y + camera.height / 2
		text = this.add.text(x, y, formatAngle(angle), this.style)
		text.setOrigin(0,0.5)
		this.directions.push(text)
		
		angle = Math.PI * 3 / 2
		x = camera.x + camera.width / 2
		y = camera.y + inset
		text = this.add.text(x, y, formatAngle(angle), this.style)
		text.setOrigin(0.5,0)
		this.directions.push(text)
	}
	
	prettify(str) {
		let resultStr = ''
		for(let i = 0; i < str.length; i++) {
			const char = str.charAt(i)
			if(char !== char.toLowerCase()) {
				resultStr += ' '
			}
			
			if(i === 0) {
				resultStr += char.toUpperCase()
			} else {
				resultStr += char
			}
		}
		
		return resultStr
	}
}
