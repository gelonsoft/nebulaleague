import { Wander } from './steering'


export interface PlayerAIConfig {
    wander: Wander
}

export const playerAI1 = {
    wander: {
        radialMag: 200,
        distanceExtension: 100,
        angle: 0,
        variance: 0.1,        
    }
}


export const playerAI2 = {
    wander: {
        radialMag: 100,
        distanceExtension: 150,
        angle: 0,
        variance: 0.01, 
    }
}


export const playerAI3 = {
    wander: {
        radialMag: 300,
        distanceExtension: 200,
        angle: 0,
        variance: 0.03,        
    }
}



export const playerAI4 = {
    wander: {
        radialMag: 400,
        distanceExtension: 600,
        angle: 0,
        variance: 0.004,
    }
}


export const playerAI5 = {
    wander: {
        radialMag: 100,
        distanceExtension: 100,
        angle: 0,
        variance: 0.005,        
    }
}


export const playerAI6 = {
    wander: {
        radialMag: 400,
        distanceExtension: 500,
        angle: 0,
        variance: 0.03,        
    }
}


export const playerAI7 = {
    wander: {
        radialMag: 189,
        distanceExtension: 170,
        angle: 0,
        variance: 0.05,
    }
}


export const playerAI8 = {
    wander: {
        radialMag: 400,
        distanceExtension: 300,
        angle: 0,
        variance: 0.1,        
    }
}


export const playerAI9 = {
    wander: {
        radialMag: 1000,
        distanceExtension: 200,
        angle: 0,
        variance: 0.01,
    }
}

export const playersAIConfig = [
    playerAI1,
    playerAI2,
    playerAI3,
    playerAI4,
    playerAI5,
    playerAI6,
    playerAI7,
    playerAI8,
    playerAI9,
]


