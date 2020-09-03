import { Wander } from './steering'


export interface PlayerAIConfig {
    wander: Wander
    weaponPrecisionHandicap: number
    fleeForSecondRange: [number, number]
    fleeAfterSecondRange: [number, number]
    moveCombatAngleRange: [number, number]
    moveCombatSecondRange: [number, number],
    actionsTriggerSecondRange: {
        weaponPrimary: [number, number],
        weaponSecondary: [number, number],
        ability1: [number, number],
        ability2: [number, number],
        ability3: [number, number],
        ability4: [number, number],
    }
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
    weaponPrecisionHandicap: 3,
    fleeAfterSecondRange: [3, 20],
    fleeForSecondRange: [1, 2],
    moveCombatSecondRange: [1, 2],
    moveCombatAngleRange: [-60, 60],
    actionsTriggerSecondRange: {
        weaponPrimary: [0.3, 0.5],
        weaponSecondary: [0.3, 0.7],
        ability1: [0.2, 0.3],
        ability2: [0.2, 0.3],
        ability3: [0.1, 0.2],
        ability4: [0, 0.1],
    }
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
    weaponPrecisionHandicap: 6,
    fleeAfterSecondRange: [1, 20],
    fleeForSecondRange: [0.5, 0.5],
    moveCombatAngleRange: [-60, 60],
    moveCombatSecondRange: [1, 3],
    actionsTriggerSecondRange: {
        weaponPrimary: [0.3, 0.3],
        weaponSecondary: [0.3, 0.7],
        ability1: [0.2, 0.3],
        ability2: [0.2, 0.3],
        ability3: [0.1, 0.1],
        ability4: [0, 0.1],
    }
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
    weaponPrecisionHandicap: 4,
    fleeAfterSecondRange: [1, 60],
    fleeForSecondRange: [0.5, 3],
    moveCombatAngleRange: [-100, 100],
    moveCombatSecondRange: [1, 2],
    actionsTriggerSecondRange: {
        weaponPrimary: [0, 0],
        weaponSecondary: [0.1, 0.3],
        ability1: [0, 0],
        ability2: [0, 0],
        ability3: [0, 0],
        ability4: [0, 0.2],
    }
}



export const playerAI4 = {
    id: 'playerAI4',
    weaponPrimaryKey: 'p90',
    weaponSecondaryKey: 'revolver',
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
    weaponPrecisionHandicap: 4,
    fleeAfterSecondRange: [30, 50],
    fleeForSecondRange: [1, 2],
    moveCombatAngleRange: [-100, 100],
    moveCombatSecondRange: [2, 2],
    actionsTriggerSecondRange: {
        weaponPrimary: [0.2, 0.3],
        weaponSecondary: [0.2, 0.3],
        ability1: [0, 0.5],
        ability2: [0, 0.2],
        ability3: [0, 0.1],
        ability4: [0, 0.4],
    }
}


export const playerAI5 = {
    id: 'playerAI5',
    weaponPrimaryKey: 'p90',
    weaponSecondaryKey: 'thompson',
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
    weaponPrecisionHandicap: 10,
    fleeAfterSecondRange: [30, 50],
    fleeForSecondRange: [1, 2],
    moveCombatAngleRange: [-35, 35],
    moveCombatSecondRange: [1, 3],
    actionsTriggerSecondRange: {
        weaponPrimary: [0.1, 0.1],
        weaponSecondary: [1, 1],
        ability1: [0.1, 1],
        ability2: [0.2, 1],
        ability3: [0.1, 1],
        ability4: [0.1, 1],
    }
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
    weaponPrecisionHandicap: 4,
    fleeAfterSecondRange: [30, 50],
    fleeForSecondRange: [1, 2],
    moveCombatAngleRange: [-20, 20],
    moveCombatSecondRange: [1, 4],
    actionsTriggerSecondRange: {
        weaponPrimary: [0.2, 0.7],
        weaponSecondary: [0, 1],
        ability1: [0.2, 0.8],
        ability2: [0.2, 0.8],
        ability3: [0.2, 0.8],
        ability4: [0.2, 0.8],
    }
    
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
    weaponPrecisionHandicap: 7,
    fleeAfterSecondRange: [30, 50],
    fleeForSecondRange: [1, 2],
    moveCombatAngleRange: [-100, 100],
    moveCombatSecondRange: [1, 3],
    actionsTriggerSecondRange: {
        weaponPrimary: [0.1, 0.8],
        weaponSecondary: [1, 1],
        ability1: [0.1, 0.6],
        ability2: [0.1, 0.6],
        ability3: [0.1, 0.6],
        ability4: [0.1, 0.6],
    }
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
    weaponPrecisionHandicap: 1,
    fleeAfterSecondRange: [30, 50],
    fleeForSecondRange: [1, 2],
    moveCombatAngleRange: [-55, 55],
    moveCombatSecondRange: [1, 5],
    actionsTriggerSecondRange: {
        weaponPrimary: [0.1, 0.3],
        weaponSecondary: [0.1, 0.9],
        ability1: [0.2, 0.9],
        ability2: [0.2, 0.9],
        ability3: [0.2, 0.9],
        ability4: [0.2, 0.9],
    }
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
    weaponPrecisionHandicap: 3.5,
    fleeAfterSecondRange: [30, 50],
    fleeForSecondRange: [1, 2],
    moveCombatAngleRange: [-80, 80],
    moveCombatSecondRange: [1, 6],
    actionsTriggerSecondRange: {
        weaponPrimary: [0.1, 1],
        weaponSecondary: [0.1, 1],
        ability1: [0.3, 0.4],
        ability2: [0.3, 0.4],
        ability3: [0.3, 0.4],
        ability4: [0.3, 0.4],
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
