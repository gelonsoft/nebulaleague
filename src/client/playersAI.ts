import { Wander } from './steering'


export interface PlayerAIConfig {
    wander: Wander
    weaponPrecisionHandicap: number
    fleeRatio: number
    weaponPrimaryTriggerRange: [number, number]
    weaponSecondaryTriggerRange: [number, number]
    ability1TriggerRange: [number, number]
    ability2TriggerRange: [number, number]
    ability3TriggerRange: [number, number]
    ability4TriggerRange: [number, number]
}


export const playerAI1 = {
    id: 'playerAI1',
    weaponPrimaryKey: 'pistol',
    weaponSecondaryKey: 'ak47',
    abilityKey1: 'chargedArrow',
    abilityKey2: 'flame',
    abilityKey3: 'blink',
    abilityKey4: 'rootTip',
    wander: {
        radialMag: 200,
        distanceExtension: 100,
        angle: 0,
        variance: 0.1,
    },
    weaponPrecisionHandicap: 14,
    fleeRatio: 0.3,
    weaponPrimaryTriggerRange: [1, 5],
    weaponSecondaryTriggerRange: [1, 5],
    ability1TriggerRange: [1, 5],
    ability2TriggerRange: [1, 5],
    ability3TriggerRange: [1, 5],
    ability4TriggerRange: [1, 5],
}


export const playerAI2 = {
    id: 'playerAI2',
    weaponPrimaryKey: 'p90',
    weaponSecondaryKey: 'ak47',
    abilityKey1: 'chargedArrow',
    abilityKey2: 'flame',
    abilityKey3: 'blink',
    abilityKey4: 'rootTip',
    wander: {
        radialMag: 100,
        distanceExtension: 150,
        angle: 0,
        variance: 0.01,
    },
    weaponPrecisionHandicap: 14,
    fleeRatio: 0.3,
    weaponPrimaryTriggerRange: [1, 5],
    weaponSecondaryTriggerRange: [1, 5],
    ability1TriggerRange: [1, 5],
    ability2TriggerRange: [1, 5],
    ability3TriggerRange: [1, 5],
    ability4TriggerRange: [1, 5],
}


export const playerAI3 = {
    id: 'playerAI3',
    weaponPrimaryKey: 'revolver',
    weaponSecondaryKey: 'thompson',
    abilityKey1: 'chargedArrow',
    abilityKey2: 'flame',
    abilityKey3: 'blink',
    abilityKey4: 'rootTip',
    wander: {
        radialMag: 300,
        distanceExtension: 200,
        angle: 0,
        variance: 0.03,
    },
    weaponPrecisionHandicap: 14,
    fleeRatio: 0.3,
    weaponPrimaryTriggerRange: [1, 5],
    weaponSecondaryTriggerRange: [1, 5],
    ability1TriggerRange: [1, 5],
    ability2TriggerRange: [1, 5],
    ability3TriggerRange: [1, 5],
    ability4TriggerRange: [1, 5],
}



export const playerAI4 = {
    id: 'playerAI4',
    weaponPrimaryKey: 'pistol',
    weaponSecondaryKey: 'ak47',
    abilityKey1: 'chargedArrow',
    abilityKey2: 'flame',
    abilityKey3: 'blink',
    abilityKey4: 'rootTip',
    wander: {
        radialMag: 400,
        distanceExtension: 600,
        angle: 0,
        variance: 0.004,
    },
    weaponPrecisionHandicap: 18,
    fleeRatio: 0.3,
    weaponPrimaryTriggerRange: [1, 5],
    weaponSecondaryTriggerRange: [1, 5],
    ability1TriggerRange: [1, 5],
    ability2TriggerRange: [1, 5],
    ability3TriggerRange: [1, 5],
    ability4TriggerRange: [1, 5],
}


export const playerAI5 = {
    id: 'playerAI5',
    weaponPrimaryKey: 'pistol',
    weaponSecondaryKey: 'ak47',
    abilityKey1: 'chargedArrow',
    abilityKey2: 'flame',
    abilityKey3: 'blink',
    abilityKey4: 'rootTip',
    wander: {
        radialMag: 100,
        distanceExtension: 100,
        angle: 0,
        variance: 0.005,        
    },
    weaponPrecisionHandicap: 20,
    fleeRatio: 0.3,
    weaponPrimaryTriggerRange: [1, 5],
    weaponSecondaryTriggerRange: [1, 5],
    ability1TriggerRange: [1, 5],
    ability2TriggerRange: [1, 5],
    ability3TriggerRange: [1, 5],
    ability4TriggerRange: [1, 5],
}


export const playerAI6 = {
    id: 'playerAI6',
    weaponPrimaryKey: 'pistol',
    weaponSecondaryKey: 'ak47',
    abilityKey1: 'chargedArrow',
    abilityKey2: 'flame',
    abilityKey3: 'blink',
    abilityKey4: 'rootTip',
    wander: {
        radialMag: 400,
        distanceExtension: 500,
        angle: 0,
        variance: 0.03,        
    },
    weaponPrecisionHandicap: 20,
    fleeRatio: 0.3,
    weaponPrimaryTriggerRange: [1, 5],
    weaponSecondaryTriggerRange: [1, 5],
    ability1TriggerRange: [1, 5],
    ability2TriggerRange: [1, 5],
    ability3TriggerRange: [1, 5],
    ability4TriggerRange: [1, 5],
    
}


export const playerAI7 = {
    id: 'playerAI7',
    weaponPrimaryKey: 'pistol',
    weaponSecondaryKey: 'ak47',
    abilityKey1: 'chargedArrow',
    abilityKey2: 'flame',
    abilityKey3: 'blink',
    abilityKey4: 'rootTip',
    wander: {
        radialMag: 189,
        distanceExtension: 170,
        angle: 0,
        variance: 0.05,
    },
    weaponPrecisionHandicap: 30,
    fleeRatio: 0.3,
    weaponPrimaryTriggerRange: [1, 5],
    weaponSecondaryTriggerRange: [1, 5],
    ability1TriggerRange: [1, 5],
    ability2TriggerRange: [1, 5],
    ability3TriggerRange: [1, 5],
    ability4TriggerRange: [1, 5],
}


export const playerAI8 = {
    id: 'playerAI8',
    weaponPrimaryKey: 'pistol',
    weaponSecondaryKey: 'ak47',
    abilityKey1: 'chargedArrow',
    abilityKey2: 'flame',
    abilityKey3: 'blink',
    abilityKey4: 'rootTip',
    wander: {
        radialMag: 400,
        distanceExtension: 300,
        angle: 0,
        variance: 0.1,        
    },
    weaponPrecisionHandicap: 28,
    fleeRatio: 0.3,
    weaponPrimaryTriggerRange: [1, 5],
    weaponSecondaryTriggerRange: [1, 5],
    ability1TriggerRange: [1, 5],
    ability2TriggerRange: [1, 5],
    ability3TriggerRange: [1, 5],
    ability4TriggerRange: [1, 5],
}


export const playerAI9 = {
    id: 'playerAI9',
    weaponPrimaryKey: 'pistol',
    weaponSecondaryKey: 'ak47',
    abilityKey1: 'chargedArrow',
    abilityKey2: 'flame',
    abilityKey3: 'blink',
    abilityKey4: 'rootTip',
    wander: {
        radialMag: 1000,
        distanceExtension: 200,
        angle: 0,
        variance: 0.01,
    },
    weaponPrecisionHandicap: 30,
    fleeRatio: 0.3,
    weaponPrimaryTriggerRange: [1, 5],
    weaponSecondaryTriggerRange: [1, 5],
    ability1TriggerRange: [1, 5],
    ability2TriggerRange: [1, 5],
    ability3TriggerRange: [1, 5],
    ability4TriggerRange: [1, 5],
    
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
