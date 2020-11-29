import {
    WeaponName,
    WeaponModel,
} from '../models'



const weaponsConfig: Record<WeaponName, WeaponModel> = 
{
    pistol: {
        name: 'pistol',
        frame: 'pistol-gun.png',
        cooldownDelay: 0.7,
        projectileKey: 'pistolBullet',
        laser: {
            color: 0xff5252,
            width: 3,
            alpha: 0.9,
        },
    },
    ak47: {
        name: 'ak47',
        frame: 'ak47.png',
        cooldownDelay: 0.5,
        projectileKey: 'ak47Bullet',
        laser: {
            color: 0x00f8f8,
            width: 3,
            alpha: 0.9,
        },
    },
    p90: {
        name: 'p90',
        frame: 'p90.png',
        cooldownDelay: 0.2,
        projectileKey: 'p90Bullet',
        laser: {
            color: 0x00ff00,
            width: 3,
            alpha: 0.9,
        },
    },
    revolver: {
        name: 'revolver',
        frame: 'revolver.png',
        cooldownDelay: 0.2,
        projectileKey: 'revolverBullet',
        laser: {
            color: 0x00ff00,
            width: 3,
            alpha: 0.9,
        },
    },
    thompson: {
        name: 'thompson',
        frame: 'thompson-m1928.png',
        cooldownDelay: 5,
        projectileKey: 'thompsonBullet',
        laser: {
            color: 0x0000ff,
            width: 3,
            alpha: 0.9,
        },
    },
}
    
export default weaponsConfig

