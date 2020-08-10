import 'phaser'

type Body = Phaser.Physics.Arcade.Body
type Vector2 = Phaser.Math.Vector2
type Point = Phaser.Geom.Point


export interface Wander {
    radialMag: number
    distanceExtension: number
    angle: number
    variance: number
}

export function facing(source: Body): number {
    return Math.atan2(source.velocity.x, -source.velocity.y) * 180 / Math.PI
}

export function seek(source: Vector2, target: Vector2): Vector2 {
    return target.clone().subtract(source)
}

export function flee(source: Vector2, target: Vector2): Vector2 {
    return source.clone().subtract(target)
}


export function seekSteer(source: Body, target: Vector2){
    const seek = this.seek(source.position, target)
    const desired = seek.normalize().scale(source.maxSpeed)
    const steer = desired.subtract(source.velocity)
    return steer
}

export function fleeSteer(source: Body, target: Vector2){
    const seek = this.flee(source.position, target)
    const desired = seek.normalize().scale(source.maxSpeed)
    const steer = desired.subtract(source.velocity)
    return steer
}


export function arrivalSteer(source: Body, target: Vector2, slowingRadius=50){
    const desired: Vector2 = this.seek(source, target)
    const distance = desired.length()
    if (distance < slowingRadius) {
        desired.normalize()
            .scale(source.maxSpeed)
            .scale(distance / slowingRadius)
    } else {
        desired.normalize()
            .scale(source.maxSpeed)
    }
    return arrivalSteer
}


export function pursuit(source: Body, target: Body){
    const distance = source.position.distance(target.position)
    const futurVelocityScaled = distance / target.maxSpeed
    const futurPosition = target.position.clone().add(target.velocity.scale(futurVelocityScaled))

    const desired = this.seek(source.position, futurPosition)
        .normalize()
        .scale(source.maxSpeed)

    const steer = desired.subtract(source.velocity)
    return steer
}


export function evade(source: Body, target: Body){
    const distance = source.position.distance(target.position)
    const futurVelocityScaled = distance / target.maxSpeed
    const futurPosition = target.position.clone().add(target.velocity.scale(futurVelocityScaled))

    const desired = this.flee(source.position, futurPosition)
        .normalize()
        .scale(source.maxSpeed)

    const steer = desired.subtract(source.velocity)
    return steer
}



export function limit(vector: Vector2, max: number)
{
    if(vector.length() > max)
    {
        vector.normalize().scale(max)
    }
    return vector
}


export function wander(source: Body, wander: Wander) {
    const circleCenter = source.velocity.clone()
    circleCenter.normalize()
    circleCenter.scale(wander.distanceExtension)

    const displacement = new Phaser.Math.Vector2(
        Math.cos(wander.angle) * wander.radialMag,
        Math.sin(wander.angle) * wander.radialMag,
    )
    const desired = circleCenter.add(displacement)
    return desired
}
