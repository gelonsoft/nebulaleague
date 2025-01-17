import {Skill} from "~/shared/datamodels/skill";

const skillConfig: Record<string, Skill> = {
    "1": {
        "id": 1,
        "hero": 1,
        "power": 0,
        "tier": 0,
        "behavior": {
            "animationDelay": 0.45,
            "area": 47,
            "behavior": "Melee",
            "cooldown": 4.95,
            "params": [],
            "prime": {
                "base": "PA",
                "type": "physical"
            },
            "range": 50
        },

        "icon": "",
        "disabled": 0,


    },
    "2": {
        "id": 2,
        "hero": 1,
        "power": 20,
        "tier": 1,
        "behavior": {
            "animationDelay": 0.6,
            "area": 250,
            "behavior": "UltSolar",
            "params": [
                {
                    "name": "delay",
                    "value": "0.9"
                }
            ],
            "prime": {
                "base": "MP",
                "K": 0.5,
                "scale": 40,
                "type": "magic"
            }
        },

        "icon": "",
        "disabled": 0,


    },
    "3": {
        "id": 3,
        "hero": 1,
        "power": 20,
        "tier": 2,
        "behavior": {
            "animationDelay": 0.63,
            "behavior": "MeleeSTStun",
            "cooldown": 16,
            "duration": 3,
            "effect": "stun",
            "hitrate": 1,
            "params": [],
            "prime": {
                "base": "MP",
                "K": 0.4,
                "scale": 25,
                "type": "magic"
            },
            "range": 100
        },

        "icon": "",
        "disabled": 0,


    },
    "4": {
        "id": 4,
        "hero": 1,
        "power": 20,
        "tier": 3,
        "behavior": {
            "animationDelay": 0.36,
            "behavior": "ProjectilePassingThrough",
            "cooldown": 19.5,
            "params": [],
            "prime": {
                "base": "MP",
                "c": -600,
                "K": 0.4,
                "scale": 35,
                "type": "magic"
            },
            "projectile": {
                "speed": 600,
                "x": 248,
                "y": -97
            }
        },

        "icon": "",
        "disabled": 0,


    },
    "5": {
        "id": 5,
        "hero": 1,
        "power": 20,
        "tier": 4,
        "behavior": {
            "animationDelay": 0.45,
            "area": 200,
            "behavior": "BurstingShield",
            "params": [],
            "prime": {
                "base": "HP",
                "K": 0.1,
                "type": "magic"
            },
            "secondary": {
                "c": 20,
                "scale": 0.5
            }
        },

        "icon": "",
        "disabled": 0,


    },
    "6": {
        "id": 6,
        "hero": 2,
        "power": 0,
        "tier": 0,
        "behavior": {
            "animationDelay": 0.37,
            "area": 47,
            "behavior": "Melee",
            "cooldown": 5.85,
            "params": [],
            "prime": {
                "base": "PA",
                "type": "physical"
            },
            "range": 100
        },

        "icon": "",
        "disabled": 1,


    },
    "7": {
        "id": 7,
        "hero": 2,
        "power": 20,
        "tier": 1,
        "behavior": {
            "animationDelay": 0.75,
            "area": 120,
            "behavior": "UltKnight",
            "params": [],
            "prime": {
                "base": "PA",
                "K": 0.25,
                "scale": 25,
                "type": "physical"
            },
            "range": 100
        },

        "icon": "",
        "disabled": 1,


    },
    "8": {
        "id": 8,
        "hero": 2,
        "power": 20,
        "tier": 2,
        "behavior": {
            "animationDelay": 1.45,
            "behavior": "UnchainedStrike",
            "cooldown": 12.5,
            "duration": 2,
            "effect": "silence",
            "hitrate": 1,
            "params": [],
            "prime": {
                "base": "PA",
                "K": 0.4,
                "scale": 25,
                "type": "physical"
            },
            "range": 100
        },

        "icon": "",
        "disabled": 1,


    },
    "9": {
        "id": 9,
        "hero": 2,
        "power": 20,
        "tier": 3,
        "behavior": {
            "animationDelay": 0.83,
            "behavior": "LowestHpJumpAttack",
            "cooldown": 20.5,
            "params": [],
            "prime": {
                "base": "PA",
                "c": -900,
                "K": 0.8,
                "scale": 45,
                "type": "physical"
            }
        },

        "icon": "",
        "disabled": 1,


    },
    "10": {
        "id": 10,
        "hero": 2,
        "power": 20,
        "tier": 4,
        "behavior": {
            "behavior": "PassiveSelfBuff",
            "effect": "armor",
            "params": [
                {
                    "name": "statName",
                    "value": "armor"
                }
            ],
            "prime": {
                "c": -150,
                "scale": 10,
                "type": "stat"
            }
        },

        "icon": "",
        "disabled": 1,


    },
    "11": {
        "id": 11,
        "hero": 3,
        "power": 0,
        "tier": 0,
        "behavior": {
            "animationDelay": 0.61,
            "behavior": "AutoAttackHuntress",
            "cooldown": 4.65,
            "params": [],
            "prime": {
                "base": "PA",
                "type": "physical"
            },
            "projectile": {
                "speed": 600,
                "x": 143,
                "y": -91
            },
            "range": 200
        },

        "icon": "",
        "disabled": 1,


    },
    "12": {
        "id": 12,
        "hero": 3,
        "power": 20,
        "tier": 1,
        "behavior": {
            "animationDelay": 0.56,
            "behavior": "UltHuntress",
            "params": [],
            "prime": {
                "base": "PA",
                "K": 0.23,
                "scale": 20,
                "type": "physical"
            },
            "projectile": {
                "speed": 600,
                "x": 13,
                "y": -91
            }
        },

        "icon": "",
        "disabled": 1,


    },
    "13": {
        "id": 13,
        "hero": 3,
        "power": 20,
        "tier": 2,
        "behavior": {
            "animationDelay": 0.87,
            "behavior": "SelfEffect",
            "cooldown": 11,
            "duration": 2.5,
            "effect": "Immune",
            "hitrate": -1,
            "params": []
        },

        "icon": "",
        "disabled": 1,


    },
    "14": {
        "id": 14,
        "hero": 3,
        "power": 20,
        "tier": 3,
        "behavior": {
            "animationDelay": 0.87,
            "behavior": "AttackSpeedTeamBuffHuntress",
            "cooldown": 22.5,
            "duration": 3,
            "hitrate": -1,
            "params": [],
            "prime": {
                "c": 40,
                "scale": 0.5
            }
        },

        "icon": "",
        "disabled": 1,


    },
    "15": {
        "id": 15,
        "hero": 3,
        "power": 20,
        "tier": 4,
        "behavior": {
            "behavior": "DamageSkillModifier",
            "params": [
                {
                    "name": "tier",
                    "value": "0"
                }
            ],
            "prime": {
                "base": "PA",
                "c": -350,
                "K": 0.08,
                "scale": 10,
                "type": "physical"
            }
        },

        "icon": "",
        "disabled": 1,


    },
    "16": {
        "id": 16,
        "hero": 4,
        "power": 0,
        "tier": 0,
        "behavior": {
            "animationDelay": 0.63,
            "area": 47,
            "behavior": "Melee",
            "cooldown": 5.6,
            "params": [],
            "prime": {
                "base": "PA",
                "type": "physical"
            },
            "range": 100
        },

        "icon": "",
        "disabled": 1,


    },
    "17": {
        "id": 17,
        "hero": 4,
        "power": 20,
        "tier": 1,
        "behavior": {
            "animationDelay": 0.63,
            "behavior": "UltAbaddonOld",
            "duration": -1,
            "effect": "shield",
            "hitrate": -1,
            "params": [],
            "prime": {
                "base": "MP",
                "K": 0.25,
                "scale": 35,
                "type": "physical"
            }
        },

        "icon": "",
        "disabled": 1,


    },
    "18": {
        "id": 18,
        "hero": 4,
        "power": 20,
        "tier": 2,
        "behavior": {
            "animationDelay": 0.52,
            "area": 150,
            "behavior": "FurthestAoeBurnEnergyOld",
            "cooldown": 12,
            "params": [],
            "prime": {
                "base": "MP",
                "K": 0.35,
                "scale": 50,
                "type": "magic"
            },
            "range": 150,
            "secondary": {
                "c": 0,
                "type": "energy %"
            }
        },

        "icon": "",
        "disabled": 1,


    },
    "19": {
        "id": 19,
        "hero": 4,
        "power": 20,
        "tier": 3,
        "behavior": {
            "animationDelay": 0.35,
            "behavior": "ChainedChalicesOld",
            "cooldown": 18,
            "duration": 11,
            "hitrate": -1,
            "params": [],
            "prime": {
                "base": "MP",
                "K": 1.5,
                "scale": 75
            },
            "secondary": {
                "c": 0,
                "type": "mitigation %"
            }
        },

        "icon": "",
        "disabled": 1,


    },
    "20": {
        "id": 20,
        "hero": 4,
        "power": 20,
        "tier": 4,
        "behavior": {
            "animationDelay": 0.92,
            "area": 400,
            "behavior": "OnDeathDamage",
            "params": [
                {
                    "name": "tier",
                    "value": "1"
                }
            ],
            "prime": {
                "base": "MP",
                "c": -4000,
                "K": 2,
                "scale": 100,
                "type": "magic"
            },
            "projectile": {
                "speed": 700,
                "x": 0,
                "y": 0
            },
            "secondary": {
                "c": 0,
                "type": "energy %"
            }
        },

        "icon": "",
        "disabled": 1,


    },
    "21": {
        "id": 21,
        "hero": 5,
        "power": 0,
        "tier": 0,
        "behavior": {
            "animationDelay": 0.26,
            "behavior": "Projectile",
            "cooldown": 4.7,
            "params": [],
            "prime": {
                "base": "PA",
                "type": "physical"
            },
            "projectile": {
                "speed": 650,
                "x": 113,
                "y": -109
            },
            "range": 225
        },

        "icon": "",
        "disabled": 1,


    },
    "22": {
        "id": 22,
        "hero": 999,
        "power": 20,
        "tier": 1,
        "behavior": {
            "animationDelay": 0.75,
            "area": 100,
            "behavior": "UltMageV63",
            "params": [],
            "prime": {
                "base": "MP",
                "K": 1.5,
                "scale": 20,
                "type": "magic"
            },
            "projectile": {
                "speed": 300,
                "x": 179,
                "y": -128
            }
        },

        "icon": "",
        "disabled": 1,


    },
    "23": {
        "id": 23,
        "hero": 999,
        "power": 20,
        "tier": 2,
        "behavior": {
            "animationDelay": 0.51,
            "behavior": "MageTornadoV63",
            "cooldown": 13.5,
            "duration": 1,
            "effect": "Levitation(0.15)",
            "hitrate": 1,
            "params": [],
            "prime": {
                "base": "MP",
                "K": 0.4,
                "scale": 20,
                "type": "magic"
            },
            "projectile": {
                "speed": 300,
                "x": 179,
                "y": -128
            },
            "range": 225
        },

        "icon": "",
        "disabled": 1,


    },
    "24": {
        "id": 24,
        "hero": 5,
        "power": 20,
        "tier": 3,
        "behavior": {
            "animationDelay": 0.41,
            "area": 100,
            "behavior": "MageBomb",
            "cooldown": 17.5,
            "duration": 3,
            "params": [],
            "prime": {
                "base": "MP",
                "K": 0.3,
                "scale": 40,
                "type": "dot"
            },
            "projectile": {
                "speed": 300,
                "x": 64,
                "y": -103
            },
            "range": 225,
            "secondary": {
                "base": "MP",
                "K": 0.3,
                "scale": 60,
                "type": "magic"
            }
        },

        "icon": "",
        "disabled": 1,


    },
    "25": {
        "id": 25,
        "hero": 5,
        "power": 20,
        "tier": 4,
        "behavior": {
            "behavior": "PassiveSelfBuff",
            "effect": "lifesteal",
            "params": [
                {
                    "name": "statName",
                    "value": "lifesteal"
                }
            ],
            "prime": {
                "c": -20,
                "scale": 1,
                "type": "stat"
            }
        },

        "icon": "",
        "disabled": 1,


    },
    "26": {
        "id": 26,
        "hero": 6,
        "power": 0,
        "tier": 0,
        "behavior": {
            "animationDelay": 0.75,
            "behavior": "Projectile",
            "cooldown": 5.2,
            "params": [],
            "prime": {
                "base": "PA",
                "type": "physical"
            },
            "projectile": {
                "speed": 900,
                "x": 63,
                "y": -183
            },
            "range": 375
        },

        "icon": "",
        "disabled": 1,


    },
    "27": {
        "id": 27,
        "hero": 6,
        "power": 20,
        "tier": 1,
        "behavior": {
            "animationDelay": 1.23,
            "behavior": "UltDreamDevourer",
            "duration": 6.6,
            "hitrate": -1,
            "hits": 6,
            "params": [],
            "prime": {
                "base": "MP",
                "K": 0.2,
                "scale": 40,
                "type": "magic"
            }
        },

        "icon": "",
        "disabled": 1,


    },
    "28": {
        "id": 28,
        "hero": 6,
        "power": 20,
        "tier": 2,
        "behavior": {
            "animationDelay": 0.68,
            "behavior": "NearestDotDebuff",
            "cooldown": 10.5,
            "duration": 3,
            "hitrate": 1,
            "params": [
                {
                    "name": "statName",
                    "value": "physicalAttack"
                }
            ],
            "prime": {
                "base": "MP",
                "K": 0.5,
                "scale": 60,
                "type": "dot"
            },
            "range": 375,
            "secondary": {
                "base": "MP",
                "c": 25,
                "K": 0.15,
                "scale": 7.5,
                "type": "stat decrease"
            }
        },

        "icon": "",
        "disabled": 1,


    },
    "29": {
        "id": 29,
        "hero": 6,
        "power": 20,
        "tier": 3,
        "behavior": {
            "animationDelay": 1,
            "behavior": "StealHpToTeammate",
            "cooldown": 18,
            "params": [],
            "prime": {
                "base": "MP",
                "K": 0.4,
                "scale": 50,
                "type": "magic"
            }
        },

        "icon": "",
        "disabled": 1,


    },
    "30": {
        "id": 30,
        "hero": 6,
        "power": 20,
        "tier": 4,
        "behavior": {
            "behavior": "ValueSkillModifier",
            "params": [
                {
                    "name": "tier",
                    "value": "1"
                }
            ],
            "prime": {
                "c": -300,
                "scale": 15
            },
            "secondary": {
                "base": "MP",
                "K": 0.5,
                "scale": 50,
                "type": "magic"
            }
        },

        "icon": "",
        "disabled": 1,


    },
    "31": {
        "id": 31,
        "hero": 7,
        "power": 0,
        "tier": 0,
        "behavior": {
            "animationDelay": 0.66,
            "behavior": "Ray",
            "cooldown": 4.8,
            "params": [],
            "prime": {
                "base": "PA",
                "type": "physical"
            },
            "range": 400
        },

        "icon": "",
        "disabled": 0,


    },
    "32": {
        "id": 32,
        "hero": 7,
        "power": 20,
        "tier": 1,
        "behavior": {
            "animationDelay": 0.66,
            "behavior": "UltSunSupport",
            "params": [],
            "prime": {
                "base": "MP",
                "c": 200,
                "K": 0.3,
                "scale": 50,
                "type": "heal"
            }
        },

        "icon": "",
        "disabled": 0,


    },
    "33": {
        "id": 33,
        "hero": 7,
        "power": 20,
        "tier": 2,
        "behavior": {
            "animationDelay": 0.66,
            "behavior": "SunSupportHealOne",
            "cooldown": 13,
            "params": [],
            "prime": {
                "base": "MP",
                "K": 0.4,
                "scale": 70,
                "type": "heal"
            }
        },

        "icon": "",
        "disabled": 0,


    },
    "34": {
        "id": 34,
        "hero": 7,
        "power": 20,
        "tier": 3,
        "behavior": {
            "animationDelay": 0.1,
            "area": 175,
            "behavior": "SunSupportAoe",
            "cooldown": 21,
            "duration": 3,
            "effect": "silence",
            "hitrate": 1,
            "params": [
                {
                    "name": "delay",
                    "value": "0.67"
                }
            ],
            "prime": {
                "base": "MP",
                "K": 0.1,
                "scale": 15,
                "type": "magic"
            },
            "range": 400
        },

        "icon": "",
        "disabled": 0,


    },
    "35": {
        "id": 35,
        "hero": 7,
        "power": 20,
        "tier": 4,
        "behavior": {
            "behavior": "SunSupportPassive",
            "params": [
                {
                    "name": "hpLeftLimit",
                    "value": "0.3"
                }
            ],
            "prime": {
                "c": -10,
                "scale": 0.5
            },
            "secondary": {
                "c": 30
            }
        },

        "icon": "",
        "disabled": 0,


    },
    "36": {
        "id": 36,
        "hero": 8,
        "power": 0,
        "tier": 0,
        "behavior": {
            "animationDelay": 0.56,
            "behavior": "DaredevilAutoAttack",
            "cooldown": 4.8,
            "params": [],
            "prime": {
                "base": "PA",
                "type": "physical"
            },
            "projectile": {
                "speed": 700,
                "x": 119,
                "y": -139
            },
            "range": 325
        },

        "icon": "",
        "disabled": 1,


    },
    "37": {
        "id": 37,
        "hero": 8,
        "power": 20,
        "tier": 1,
        "behavior": {
            "animationDelay": 1.18,
            "area": 270,
            "behavior": "UltDaredevil",
            "params": [
                {
                    "name": "delay",
                    "value": "2.2"
                }
            ],
            "prime": {
                "base": "PA",
                "K": 0.6,
                "scale": 40,
                "type": "physical"
            },
            "projectile": {
                "speed": 600,
                "x": 58,
                "y": 0
            }
        },

        "icon": "",
        "disabled": 1,


    },
    "38": {
        "id": 38,
        "hero": 8,
        "power": 20,
        "tier": 2,
        "behavior": {
            "animationDelay": 0.48,
            "behavior": "DaredevilTaser",
            "cooldown": 12.5,
            "duration": 3,
            "effect": "freeze(0.5)",
            "hitrate": -1,
            "params": [],
            "prime": {
                "base": "PA",
                "K": 0.3,
                "scale": 70,
                "type": "physical"
            },
            "projectile": {
                "speed": 700,
                "x": 194,
                "y": -120
            }
        },

        "icon": "",
        "disabled": 1,


    },
    "39": {
        "id": 39,
        "hero": 8,
        "power": 20,
        "tier": 3,
        "behavior": {
            "animationDelay": 0.45,
            "area": 100,
            "behavior": "DaredevilGrenade",
            "cooldown": 22,
            "duration": 3,
            "params": [],
            "prime": {
                "base": "PA",
                "K": 0.15,
                "scale": 40,
                "type": "physical"
            },
            "projectile": {
                "speed": 350,
                "x": 180,
                "y": -110
            },
            "range": 325,
            "secondary": {
                "base": "PA",
                "K": 0.06,
                "scale": 15,
                "type": "dot"
            }
        },

        "icon": "",
        "disabled": 1,


    },
    "40": {
        "id": 40,
        "hero": 8,
        "power": 20,
        "tier": 4,
        "behavior": {
            "behavior": "DaredevilPassive",
            "duration": 3,
            "params": [
                {
                    "name": "increaseRate",
                    "scale": 0.005,
                    "value": "1"
                },
                {
                    "name": "stackable",
                    "value": "true"
                }
            ],
            "prime": {
                "scale": 0.5
            }
        },

        "icon": "",
        "disabled": 1,


    },
    "41": {
        "id": 41,
        "hero": 9,
        "power": 0,
        "tier": 0,
        "behavior": {
            "animationDelay": 0.3,
            "behavior": "Projectile",
            "cooldown": 4.05,
            "params": [],
            "prime": {
                "base": "PA",
                "type": "physical"
            },
            "projectile": {
                "speed": 800,
                "x": 59,
                "y": -62
            },
            "range": 250
        },

        "icon": "",
        "disabled": 1,


    },
    "42": {
        "id": 42,
        "hero": 9,
        "power": 20,
        "tier": 1,
        "behavior": {
            "animationDelay": 0.86,
            "area": 300,
            "behavior": "UltPoisoner",
            "duration": 3,
            "params": [],
            "prime": {
                "base": "MP",
                "K": 0.35,
                "scale": 65,
                "type": "dot"
            },
            "projectile": {
                "speed": 0,
                "x": 116,
                "y": -103
            }
        },

        "icon": "",
        "disabled": 1,


    },
    "43": {
        "id": 43,
        "hero": 9,
        "power": 20,
        "tier": 2,
        "behavior": {
            "animationDelay": 0.33,
            "behavior": "PoisonerPoison",
            "cooldown": 11.5,
            "duration": 5,
            "effect": "Blindness",
            "hitrate": 1,
            "params": [],
            "prime": {
                "base": "MP",
                "K": 0.5,
                "scale": 75,
                "type": "dot"
            },
            "projectile": {
                "speed": 700,
                "x": 70,
                "y": -58
            }
        },

        "icon": "",
        "disabled": 1,


    },
    "44": {
        "id": 44,
        "hero": 9,
        "power": 20,
        "tier": 3,
        "behavior": {
            "animationDelay": 0.51,
            "behavior": "PoisonerSnake",
            "cooldown": 19.5,
            "params": [],
            "prime": {
                "base": "MP",
                "K": 0.6,
                "scale": 100,
                "type": "dot"
            },
            "projectile": {
                "speed": 270,
                "x": 57,
                "y": 9
            }
        },

        "icon": "",
        "disabled": 1,


    },
    "45": {
        "id": 45,
        "hero": 9,
        "power": 20,
        "tier": 4,
        "behavior": {
            "behavior": "PoisonerPassive",
            "params": [
                {
                    "name": "minApplyTime",
                    "value": "2"
                },
                {
                    "name": "fullApplyTime",
                    "value": "7"
                }
            ],
            "prime": {
                "c": 20,
                "type": "minDodgePercent"
            },
            "secondary": {
                "c": 20,
                "scale": 0.5,
                "type": "fullDodgePercent"
            }
        },

        "icon": "",
        "disabled": 1,


    },
    "46": {
        "id": 46,
        "hero": 10,
        "power": 0,
        "tier": 0,
        "behavior": {
            "animationDelay": 0.91,
            "behavior": "Projectile",
            "cooldown": 4.95,
            "params": [],
            "prime": {
                "base": "PA",
                "type": "physical"
            },
            "projectile": {
                "speed": 700,
                "x": 164,
                "y": -97
            },
            "range": 350
        },

        "icon": "",
        "disabled": 0,


    },
    "47": {
        "id": 47,
        "hero": 10,
        "power": 20,
        "tier": 1,
        "behavior": {
            "animationDelay": 0.92,
            "behavior": "UltSpellStealer",
            "params": [],
            "prime": {
                "scale": 2,
                "type": "levelMultiplier"
            }
        },

        "icon": "",
        "disabled": 0,


    },
    "48": {
        "id": 48,
        "hero": 10,
        "power": 20,
        "tier": 2,
        "behavior": {
            "area": 350,
            "behavior": "TelekinesisThrow",
            "cooldown": 13,
            "duration": 2,
            "effect": "stun",
            "hitrate": 1,
            "params": [],
            "prime": {
                "base": "MP",
                "K": 0.3,
                "scale": 15,
                "type": "magic"
            }
        },

        "icon": "",
        "disabled": 0,


    },
    "49": {
        "id": 49,
        "hero": 10,
        "power": 20,
        "tier": 3,
        "behavior": {
            "animationDelay": 0.73,
            "behavior": "ChainBolt",
            "cooldown": 18,
            "duration": 4,
            "hits": 3,
            "params": [
                {
                    "name": "statName",
                    "value": "physicalAttack"
                }
            ],
            "prime": {
                "base": "MP",
                "c": -700,
                "K": 0.3,
                "scale": 45,
                "type": "magic"
            },
            "secondary": {
                "scale": -15,
                "type": "stat"
            }
        },

        "icon": "",
        "disabled": 0,


    },
    "50": {
        "id": 50,
        "hero": 10,
        "power": 20,
        "tier": 4,
        "behavior": {
            "behavior": "PassiveAllyTeamBuff",
            "effect": "magicResist",
            "params": [
                {
                    "name": "statName",
                    "value": "magicResist"
                }
            ],
            "prime": {
                "c": -600,
                "scale": 30,
                "type": "stat"
            }
        },

        "icon": "",
        "disabled": 0,


    },
    "51": {
        "id": 51,
        "hero": 11,
        "power": 0,
        "tier": 0,
        "behavior": {
            "animationDelay": 0.47,
            "area": 47,
            "behavior": "Melee",
            "cooldown": 5.1,
            "params": [],
            "prime": {
                "base": "PA",
                "type": "physical"
            },
            "range": 50
        },

        "icon": "",
        "disabled": 1,


    },
    "52": {
        "id": 52,
        "hero": 11,
        "power": 20,
        "tier": 1,
        "behavior": {
            "animationDelay": 0.33,
            "behavior": "UltGlutton",
            "duration": 4,
            "hits": 4,
            "params": [],
            "prime": {
                "base": "PA",
                "K": 0.5,
                "scale": 60,
                "type": "dot"
            },
            "range": 80
        },

        "icon": "",
        "disabled": 1,


    },
    "53": {
        "id": 53,
        "hero": 11,
        "power": 20,
        "tier": 2,
        "behavior": {
            "animationDelay": 0.48,
            "behavior": "GluttonMagmaBlast",
            "cooldown": 11.5,
            "duration": 4,
            "effect": "freeze(0.5)",
            "hitrate": -1,
            "params": [],
            "prime": {
                "base": "PA",
                "K": 0.25,
                "scale": 40,
                "type": "physical"
            },
            "projectile": {
                "speed": 700,
                "x": 130,
                "y": -126
            },
            "range": 100,
            "secondary": {
                "scale": 0
            }
        },

        "icon": "",
        "disabled": 1,


    },
    "54": {
        "id": 54,
        "hero": 11,
        "power": 20,
        "tier": 3,
        "behavior": {
            "animationDelay": 1.3,
            "behavior": "GluttonShield",
            "params": [],
            "prime": {
                "scale": 10
            }
        },

        "icon": "",
        "disabled": 1,


    },
    "55": {
        "id": 55,
        "hero": 11,
        "power": 20,
        "tier": 4,
        "behavior": {
            "behavior": "ValueSkillModifier",
            "params": [
                {
                    "name": "tier",
                    "value": "1"
                }
            ],
            "prime": {
                "c": -20,
                "scale": 1
            }
        },

        "icon": "",
        "disabled": 1,


    },
    "56": {
        "id": 56,
        "hero": 12,
        "power": 0,
        "tier": 0,
        "behavior": {
            "animationDelay": 0.9,
            "behavior": "Projectile",
            "cooldown": 4.5,
            "params": [],
            "prime": {
                "base": "PA",
                "type": "physical"
            },
            "projectile": {
                "speed": 700,
                "x": 0,
                "y": -169
            },
            "range": 175
        },

        "icon": "",
        "disabled": 1,


    },
    "57": {
        "id": 57,
        "hero": 12,
        "power": 20,
        "tier": 1,
        "behavior": {
            "animationDelay": 0.8,
            "area": 150,
            "behavior": "UltArachne",
            "duration": 2,
            "effect": "stun",
            "hitrate": -1,
            "params": [],
            "prime": {
                "base": "MP",
                "K": 0.25,
                "scale": 40,
                "type": "magic"
            },
            "projectile": {
                "speed": 800,
                "x": -300,
                "y": 0
            }
        },

        "icon": "",
        "disabled": 1,


    },
    "58": {
        "id": 58,
        "hero": 12,
        "power": 20,
        "tier": 2,
        "behavior": {
            "animationDelay": 1,
            "behavior": "ArachneJump",
            "cooldown": 12,
            "params": [],
            "prime": {
                "base": "MP",
                "K": 1.2,
                "scale": 55,
                "type": "magic"
            }
        },

        "icon": "",
        "disabled": 1,


    },
    "59": {
        "id": 59,
        "hero": 12,
        "power": 20,
        "tier": 3,
        "behavior": {
            "animationDelay": 0.5,
            "area": 75,
            "behavior": "NearestAoe",
            "cooldown": 21.5,
            "duration": 3,
            "effect": "stun",
            "hitrate": 1,
            "params": [],
            "prime": {
                "base": "MP",
                "K": 0.9,
                "scale": 40,
                "type": "magic"
            }
        },

        "icon": "",
        "disabled": 1,


    },
    "60": {
        "id": 60,
        "hero": 12,
        "power": 20,
        "tier": 4,
        "behavior": {
            "behavior": "PoisonTouch",
            "duration": 3,
            "params": [],
            "prime": {
                "base": "MP",
                "c": -300,
                "K": 0.05,
                "scale": 10
            }
        },

        "icon": "",
        "disabled": 1,


    },
    "61": {
        "id": 61,
        "hero": 13,
        "power": 0,
        "tier": 0,
        "behavior": {
            "animationDelay": 0.05,
            "behavior": "AutoAttackVoidElemental",
            "cooldown": 4.95,
            "params": [],
            "prime": {
                "base": "PA",
                "type": "physical"
            },
            "projectile": {
                "speed": 700,
                "x": 89,
                "y": -111
            },
            "range": 300
        },

        "icon": "",
        "disabled": 0,


    },
    "62": {
        "id": 62,
        "hero": 13,
        "power": 20,
        "tier": 1,
        "behavior": {
            "animationDelay": 0.45,
            "behavior": "UltOrion",
            "hits": 6,
            "params": [],
            "prime": {
                "base": "MP",
                "K": 0.45,
                "scale": 50,
                "type": "magic"
            }
        },

        "icon": "",
        "disabled": 0,


    },
    "63": {
        "id": 63,
        "hero": 13,
        "power": 20,
        "tier": 2,
        "behavior": {
            "animationDelay": 0.67,
            "area": 80,
            "behavior": "OrionFurthestAoe",
            "cooldown": 14.5,
            "duration": 4,
            "effect": "freeze(0.5)",
            "hitrate": 1,
            "params": [],
            "prime": {
                "base": "MP",
                "K": 0.2,
                "scale": 10,
                "type": "magic"
            }
        },

        "icon": "",
        "disabled": 0,


    },
    "64": {
        "id": 64,
        "hero": 13,
        "power": 20,
        "tier": 3,
        "behavior": {
            "animationDelay": 0.73,
            "behavior": "ProjectileStun",
            "cooldown": 22,
            "duration": 4,
            "effect": "stun",
            "hitrate": 1,
            "params": [],
            "prime": {
                "base": "MP",
                "K": 0.65,
                "scale": 45,
                "type": "magic"
            },
            "projectile": {
                "speed": 300,
                "x": 27,
                "y": -192
            },
            "range": 500
        },

        "icon": "",
        "disabled": 0,


    },
    "65": {
        "id": 65,
        "hero": 13,
        "power": 20,
        "tier": 4,
        "behavior": {
            "behavior": "ValueSkillModifier",
            "params": [
                {
                    "name": "tier",
                    "value": "0"
                }
            ],
            "prime": {
                "c": -100,
                "scale": 5
            }
        },

        "icon": "",
        "disabled": 0,


    },
    "66": {
        "id": 66,
        "hero": 14,
        "power": 0,
        "tier": 0,
        "behavior": {
            "animationDelay": 0.41,
            "behavior": "AutoAttackCanonneer",
            "cooldown": 5.4,
            "params": [],
            "prime": {
                "base": "PA",
                "type": "physical"
            },
            "projectile": {
                "speed": 800,
                "x": 63,
                "y": -164
            },
            "range": 350
        },

        "icon": "",
        "disabled": 1,


    },
    "67": {
        "id": 67,
        "hero": 14,
        "power": 20,
        "tier": 1,
        "behavior": {
            "animationDelay": 0.78,
            "behavior": "UltCanonneer",
            "effect": "knockback(150,0.2)",
            "hitrate": -1,
            "params": [],
            "prime": {
                "base": "PA",
                "K": 1,
                "scale": 60,
                "type": "physical"
            },
            "projectile": {
                "speed": 1050,
                "x": 63,
                "y": -169
            }
        },

        "icon": "",
        "disabled": 1,


    },
    "68": {
        "id": 68,
        "hero": 14,
        "power": 20,
        "tier": 2,
        "behavior": {
            "animationDelay": 0.41,
            "area": 80,
            "behavior": "ProjectileRandomAoe",
            "cooldown": 14.5,
            "duration": 2,
            "effect": "freeze(0.5)",
            "hitrate": 1,
            "params": [],
            "prime": {
                "base": "PA",
                "K": 0.1,
                "scale": 25,
                "type": "physical"
            },
            "projectile": {
                "speed": 700,
                "x": 63,
                "y": -169
            }
        },

        "icon": "",
        "disabled": 1,


    },
    "69": {
        "id": 69,
        "hero": 14,
        "power": 20,
        "tier": 3,
        "behavior": {
            "animationDelay": 1.05,
            "behavior": "CanonneerSpeedfire",
            "cooldown": 23.5,
            "hits": 6,
            "params": [
                {
                    "name": "delay",
                    "value": "0.8"
                }
            ],
            "prime": {
                "base": "PA",
                "K": 0.25,
                "scale": 30,
                "type": "physical"
            },
            "projectile": {
                "speed": 800,
                "x": 63,
                "y": -164
            }
        },

        "icon": "",
        "disabled": 1,


    },
    "70": {
        "id": 70,
        "hero": 14,
        "power": 20,
        "tier": 4,
        "behavior": {
            "area": 150,
            "behavior": "ValueSkillModifierWithArea",
            "duration": 5,
            "params": [
                {
                    "name": "tier",
                    "value": "0"
                }
            ],
            "prime": {
                "base": "PA",
                "K": 0.3,
                "scale": 50,
                "type": "physical"
            }
        },

        "icon": "",
        "disabled": 1,


    },
    "71": {
        "id": 71,
        "hero": 15,
        "power": 0,
        "tier": 0,
        "behavior": {
            "animationDelay": 0.58,
            "behavior": "PirateAutoAttack",
            "cooldown": 5,
            "params": [],
            "prime": {
                "base": "PA",
                "type": "physical"
            },
            "projectile": {
                "speed": 650,
                "x": 147,
                "y": -73
            },
            "range": 300
        },

        "icon": "",
        "disabled": 0,


    },
    "72": {
        "id": 72,
        "hero": 15,
        "power": 20,
        "tier": 1,
        "behavior": {
            "animationDelay": 1,
            "behavior": "UltPirate",
            "hits": 7,
            "params": [
                {
                    "name": "delay",
                    "value": "0.3"
                }
            ],
            "prime": {
                "base": "PA",
                "K": 0.1,
                "scale": 20,
                "type": "physical"
            },
            "projectile": {
                "speed": 2100,
                "x": 0,
                "y": 0
            },
            "range": 320
        },

        "icon": "",
        "disabled": 0,


    },
    "73": {
        "id": 73,
        "hero": 15,
        "power": 20,
        "tier": 2,
        "behavior": {
            "animationDelay": 0.6,
            "behavior": "PiratePiercingShoot",
            "cooldown": 13.5,
            "params": [],
            "prime": {
                "base": "PA",
                "K": 0.6,
                "scale": 65,
                "type": "physical"
            },
            "projectile": {
                "speed": 300,
                "x": 138,
                "y": -74
            },
            "range": 320
        },

        "icon": "",
        "disabled": 0,


    },
    "74": {
        "id": 74,
        "hero": 15,
        "power": 20,
        "tier": 3,
        "behavior": {
            "animationDelay": 1.4,
            "behavior": "PirateBuckshot",
            "cooldown": 19,
            "params": [
                {
                    "name": "delay",
                    "value": "0.1"
                }
            ],
            "prime": {
                "base": "PA",
                "c": -700,
                "K": 0.2,
                "scale": 45,
                "type": "physical"
            },
            "range": 320
        },

        "icon": "",
        "disabled": 0,


    },
    "75": {
        "id": 75,
        "hero": 15,
        "power": 20,
        "tier": 4,
        "behavior": {
            "behavior": "PirateAutoAttackModifier",
            "params": [
                {
                    "name": "tier",
                    "value": "0"
                },
                {
                    "name": "maxStacks",
                    "value": "5"
                }
            ],
            "prime": {
                "base": "PA",
                "c": -4000,
                "K": 1.4,
                "scale": 100,
                "type": "physical"
            },
            "range": 320
        },

        "icon": "",
        "disabled": 0,


    },
    "76": {
        "id": 76,
        "hero": 16,
        "power": 0,
        "tier": 0,
        "behavior": {
            "animationDelay": 0.6,
            "behavior": "Projectile",
            "cooldown": 6.3,
            "params": [],
            "prime": {
                "base": "PA",
                "type": "physical"
            },
            "projectile": {
                "speed": 750,
                "x": -26,
                "y": -153
            },
            "range": 175
        },

        "icon": "",
        "disabled": 1,


    },
    "77": {
        "id": 77,
        "hero": 16,
        "power": 20,
        "tier": 1,
        "behavior": {
            "animationDelay": 0.75,
            "behavior": "UltSpearman",
            "params": [
                {
                    "name": "damageMultiplierPerHit",
                    "value": "0.8"
                }
            ],
            "prime": {
                "base": "PA",
                "K": 0.5,
                "scale": 70,
                "type": "physical"
            },
            "projectile": {
                "speed": 300,
                "x": 221,
                "y": -160
            }
        },

        "icon": "",
        "disabled": 1,


    },
    "78": {
        "id": 78,
        "hero": 16,
        "power": 20,
        "tier": 2,
        "behavior": {
            "animationDelay": 0.87,
            "behavior": "SelfEffect",
            "cooldown": 14,
            "duration": 2.5,
            "effect": "Immune",
            "hitrate": -1,
            "params": []
        },

        "icon": "",
        "disabled": 1,


    },
    "79": {
        "id": 79,
        "hero": 16,
        "power": 20,
        "tier": 3,
        "behavior": {
            "animationDelay": 1.3,
            "behavior": "SpearmanAllyLinkSpeedBoost",
            "cooldown": 18,
            "duration": 4,
            "hitrate": -1,
            "params": [],
            "prime": {
                "c": 1.2,
                "scale": 0.005,
                "type": "boost"
            },
            "secondary": {
                "c": 120,
                "scale": 0.5
            }
        },

        "icon": "",
        "disabled": 1,


    },
    "81": {
        "id": 81,
        "hero": 17,
        "power": 0,
        "tier": 0,
        "behavior": {
            "animationDelay": 0.5,
            "behavior": "Projectile",
            "cooldown": 4.95,
            "params": [],
            "prime": {
                "base": "PA",
                "type": "physical"
            },
            "projectile": {
                "speed": 550,
                "x": 188,
                "y": -88
            },
            "range": 225
        },

        "icon": "",
        "disabled": 0,


    },
    "82": {
        "id": 82,
        "hero": 17,
        "power": 20,
        "tier": 1,
        "behavior": {
            "animationDelay": 1.03,
            "behavior": "UltShaman",
            "duration": 6,
            "hits": 20,
            "params": [
                {
                    "name": "delay",
                    "value": "0.3"
                }
            ],
            "prime": {
                "base": "MP",
                "K": 0.2,
                "scale": 10,
                "type": "magic"
            },
            "projectile": {
                "speed": 350,
                "x": 0,
                "y": -340
            },
            "range": 300
        },

        "icon": "",
        "disabled": 0,


    },
    "83": {
        "id": 83,
        "hero": 17,
        "power": 20,
        "tier": 2,
        "behavior": {
            "animationDelay": 0.5,
            "behavior": "ShamanHeal",
            "cooldown": 12.5,
            "hits": 1,
            "params": [
                {
                    "name": "delay",
                    "value": "0.3"
                }
            ],
            "prime": {
                "base": "MP",
                "K": 0.25,
                "scale": 45,
                "type": "heal"
            }
        },

        "icon": "",
        "disabled": 0,


    },
    "84": {
        "id": 84,
        "hero": 17,
        "power": 20,
        "tier": 3,
        "behavior": {
            "animationDelay": 0.5,
            "area": 220,
            "behavior": "ShamanChainBomb",
            "cooldown": 21,
            "duration": 0.3,
            "effect": "stun",
            "hitrate": 1,
            "hits": 8,
            "params": [],
            "prime": {
                "base": "MP",
                "c": -500,
                "K": 0.1,
                "scale": 30,
                "type": "magic"
            },
            "projectile": {
                "speed": 250,
                "x": 182,
                "y": -106
            },
            "range": 280
        },

        "icon": "",
        "disabled": 0,


    },
    "85": {
        "id": 85,
        "hero": 17,
        "power": 20,
        "tier": 4,
        "behavior": {
            "behavior": "ShamanPassive",
            "duration": -1,
            "hitrate": -1,
            "params": [
                {
                    "name": "delay",
                    "value": "2"
                },
                {
                    "name": "damageMultiplier",
                    "scale": 0.005,
                    "value": "0"
                }
            ],
            "prime": {
                "type": "magic"
            },
            "secondary": {
                "c": 0,
                "scale": 0.5
            }
        },

        "icon": "",
        "disabled": 0,


    },
    "86": {
        "id": 86,
        "hero": 18,
        "power": 0,
        "tier": 0,
        "behavior": {
            "animationDelay": 0.46,
            "behavior": "Projectile",
            "cooldown": 5.1,
            "params": [],
            "prime": {
                "base": "PA",
                "type": "physical"
            },
            "projectile": {
                "speed": 600,
                "x": 105,
                "y": -142
            },
            "range": 200
        },

        "icon": "",
        "disabled": 0,


    },
    "87": {
        "id": 87,
        "hero": 18,
        "power": 20,
        "tier": 1,
        "behavior": {
            "animationDelay": 1.25,
            "behavior": "UltJudge",
            "hits": 4,
            "params": [
                {
                    "name": "ticksDelay",
                    "value": "0.8"
                }
            ],
            "prime": {
                "base": "MP",
                "K": 0.15,
                "scale": 25,
                "type": "magic"
            }
        },

        "icon": "",
        "disabled": 0,


    },
    "88": {
        "id": 88,
        "hero": 18,
        "power": 20,
        "tier": 2,
        "behavior": {
            "animationDelay": 0.5,
            "behavior": "JudgeShield",
            "cooldown": 10.5,
            "cooldownInitial": 1,
            "duration": -1,
            "hitrate": -1,
            "params": [],
            "prime": {
                "base": "MP",
                "c": 200,
                "K": 1.2,
                "scale": 50,
                "type": "any"
            }
        },

        "icon": "",
        "disabled": 0,


    },
    "89": {
        "id": 89,
        "hero": 18,
        "power": 20,
        "tier": 3,
        "behavior": {
            "animationDelay": 0.33,
            "behavior": "JudgeDodge",
            "cooldown": 19.5,
            "duration": -1,
            "params": [],
            "prime": {
                "base": "MP",
                "K": 0.45,
                "scale": 20
            }
        },

        "icon": "",
        "disabled": 0,


    },
    "90": {
        "id": 90,
        "hero": 18,
        "power": 20,
        "tier": 4,
        "behavior": {
            "behavior": "JudgePassive",
            "params": [],
            "prime": {
                "c": -200,
                "scale": 10
            }
        },

        "icon": "",
        "disabled": 0,


    },
    "91": {
        "id": 91,
        "hero": 19,
        "power": 0,
        "tier": 0,
        "behavior": {
            "animationDelay": 0.8,
            "area": 20,
            "behavior": "ArcherProjectile",
            "cooldown": 4.8,
            "params": [
                {
                    "name": "velocity",
                    "value": "800"
                }
            ],
            "prime": {
                "base": "PA",
                "type": "physical"
            },
            "projectile": {
                "speed": 0,
                "x": 86,
                "y": -155
            },
            "range": 325
        },

        "icon": "",
        "disabled": 0,


    },
    "92": {
        "id": 92,
        "hero": 19,
        "power": 20,
        "tier": 1,
        "behavior": {
            "animationDelay": 0.416,
            "area": 100,
            "behavior": "UltArcherJump",
            "duration": 3,
            "effect": "stun",
            "hitrate": 1,
            "params": [],
            "prime": {
                "base": "PA",
                "K": 0.3,
                "scale": 50,
                "type": "physical"
            }
        },

        "icon": "",
        "disabled": 0,


    },
    "93": {
        "id": 93,
        "hero": 19,
        "power": 20,
        "tier": 2,
        "behavior": {
            "animationDelay": 0.78,
            "area": 300,
            "behavior": "DamageAreaInFront",
            "cooldown": 15,
            "duration": 2,
            "effect": "freeze(0.5)",
            "hitrate": 1,
            "params": [],
            "prime": {
                "base": "PA",
                "K": 0.1,
                "scale": 50,
                "type": "physical"
            }
        },

        "icon": "",
        "disabled": 0,


    },
    "94": {
        "id": 94,
        "hero": 19,
        "power": 20,
        "tier": 3,
        "behavior": {
            "animationDelay": 0.46,
            "behavior": "ArcherConvertProjectile",
            "cooldown": 22,
            "duration": 4,
            "effect": "convert",
            "hitrate": 1,
            "params": [],
            "projectile": {
                "speed": 700,
                "x": 86,
                "y": -155
            }
        },

        "icon": "",
        "disabled": 0,


    },
    "95": {
        "id": 95,
        "hero": 19,
        "power": 20,
        "tier": 4,
        "behavior": {
            "behavior": "ValueSkillModifier",
            "params": [
                {
                    "name": "tier",
                    "value": "0"
                }
            ],
            "prime": {
                "c": 5,
                "scale": 0.5
            },
            "projectile": {
                "speed": 0,
                "x": -77,
                "y": -149
            }
        },

        "icon": "",
        "disabled": 0,


    },
    "96": {
        "id": 96,
        "hero": 20,
        "power": 0,
        "tier": 0,
        "behavior": {
            "animationDelay": 0.76,
            "behavior": "ArbalesterAutoAttack",
            "cooldown": 4.65,
            "params": [
                {
                    "name": "visualHpLeftGlowLimit"
                }
            ],
            "prime": {
                "base": "PA",
                "type": "physical"
            },
            "projectile": {
                "speed": 750,
                "x": 51,
                "y": -113
            },
            "range": 375
        },

        "icon": "",
        "disabled": 0,


    },
    "97": {
        "id": 97,
        "hero": 20,
        "power": 20,
        "tier": 1,
        "behavior": {
            "animationDelay": 0.85,
            "area": 700,
            "behavior": "UltArbalester",
            "hits": 10,
            "params": [
                {
                    "name": "delay",
                    "value": "0.058"
                },
                {
                    "name": "flightTime",
                    "value": "1"
                },
                {
                    "name": "arrowHitRange",
                    "value": "5"
                }
            ],
            "prime": {
                "base": "PA",
                "K": 0.1,
                "scale": 10,
                "type": "physical"
            },
            "projectile": {
                "speed": 0,
                "x": 22,
                "y": -185
            },
            "range": 375
        },

        "icon": "",
        "disabled": 0,


    },
    "98": {
        "id": 98,
        "hero": 20,
        "power": 20,
        "tier": 2,
        "behavior": {
            "animationDelay": 0.88,
            "area": 200,
            "behavior": "ArbalesterRicochet",
            "cooldown": 13,
            "hits": 3,
            "params": [],
            "prime": {
                "base": "PA",
                "K": 0.4,
                "scale": 25,
                "type": "physical"
            },
            "projectile": {
                "speed": 600,
                "x": 92,
                "y": -115
            },
            "range": 375
        },

        "icon": "",
        "disabled": 0,


    },
    "99": {
        "id": 99,
        "hero": 20,
        "power": 20,
        "tier": 3,
        "behavior": {
            "animationDelay": 0.91,
            "area": 580,
            "behavior": "DamageAreaInFront",
            "cooldown": 20.5,
            "duration": 3,
            "effect": "blindness",
            "hitrate": 1,
            "params": [],
            "prime": {
                "base": "PA",
                "K": 0.1,
                "scale": 5,
                "type": "physical"
            },
            "range": 375
        },

        "icon": "",
        "disabled": 0,


    },
    "100": {
        "id": 100,
        "hero": 20,
        "power": 20,
        "tier": 4,
        "behavior": {
            "behavior": "ValueSkillModifier",
            "params": [
                {
                    "name": "tier",
                    "value": "0"
                }
            ],
            "prime": {
                "base": "PA",
                "c": -1000,
                "K": 0.5,
                "scale": 25
            }
        },

        "icon": "",
        "disabled": 0,


    },
    "101": {
        "id": 101,
        "hero": 5,
        "power": 20,
        "tier": 1,
        "behavior": {
            "animationDelay": 1.21,
            "behavior": "UltMage",
            "duration": 0.5,
            "effect": "Levitation(0.12)",
            "hitrate": 1,
            "params": [],
            "prime": {
                "base": "MP",
                "K": 0.45,
                "scale": 75,
                "type": "magic"
            },
            "projectile": {
                "speed": 300,
                "x": 179,
                "y": -128
            }
        },

        "icon": "",
        "disabled": 1,


    },
    "102": {
        "id": 102,
        "hero": 5,
        "power": 20,
        "tier": 2,
        "behavior": {
            "animationDelay": 0.75,
            "area": 100,
            "behavior": "MageBurst",
            "cooldown": 13.5,
            "params": [],
            "prime": {
                "base": "MP",
                "K": 0.3,
                "scale": 20,
                "type": "magic"
            },
            "range": 225
        },

        "icon": "",
        "disabled": 1,


    },
    "103": {
        "id": 103,
        "hero": 16,
        "power": 20,
        "tier": 4,
        "behavior": {
            "behavior": "PassiveAllyTeamBuff",
            "effect": "agility",
            "params": [
                {
                    "name": "statName",
                    "value": "agility"
                }
            ],
            "prime": {
                "c": -170,
                "scale": 5
            }
        },

        "icon": "",
        "disabled": 1,


    },
    "104": {
        "id": 104,
        "hero": 21,
        "power": 0,
        "tier": 0,
        "behavior": {
            "animationDelay": 0.46,
            "area": 47,
            "behavior": "Melee",
            "cooldown": 5.4,
            "params": [],
            "prime": {
                "base": "PA",
                "type": "physical"
            },
            "range": 100
        },

        "icon": "",
        "disabled": 1,


    },
    "105": {
        "id": 105,
        "hero": 21,
        "power": 20,
        "tier": 1,
        "behavior": {
            "animationDelay": 0.85,
            "behavior": "UltPaladin",
            "duration": 5,
            "hitrate": -1,
            "params": [],
            "prime": {
                "base": "MP",
                "K": 0.05,
                "scale": 50,
                "type": "shield"
            },
            "range": 375
        },

        "icon": "",
        "disabled": 1,


    },
    "106": {
        "id": 106,
        "hero": 21,
        "power": 20,
        "tier": 2,
        "behavior": {
            "animationDelay": 1,
            "behavior": "PaladinWave",
            "cooldown": 13,
            "params": [],
            "prime": {
                "base": "MP",
                "K": 0.15,
                "scale": 35,
                "type": "magic"
            },
            "projectile": {
                "speed": 600,
                "x": 123,
                "y": -115
            },
            "range": 375,
            "secondary": {
                "base": "MP",
                "K": 0.15,
                "scale": 35,
                "type": "heal"
            }
        },

        "icon": "",
        "disabled": 1,


    },
    "107": {
        "id": 107,
        "hero": 21,
        "power": 20,
        "tier": 3,
        "behavior": {
            "animationDelay": 0.66,
            "behavior": "PaladinHeal",
            "cooldown": 18,
            "params": [],
            "prime": {
                "base": "MP",
                "c": -2000,
                "K": 0.25,
                "scale": 100,
                "type": "heal"
            }
        },

        "icon": "",
        "disabled": 1,


    },
    "108": {
        "id": 108,
        "hero": 21,
        "power": 20,
        "tier": 4,
        "behavior": {
            "animationDelay": 0.8,
            "behavior": "PaladinPassive",
            "params": [],
            "prime": {
                "c": -6,
                "scale": 0.4
            }
        },

        "icon": "",
        "disabled": 1,


    },
    "109": {
        "id": 109,
        "hero": 22,
        "power": 0,
        "tier": 0,
        "behavior": {
            "animationDelay": 0.41,
            "behavior": "Projectile",
            "cooldown": 5.1,
            "params": [],
            "prime": {
                "base": "PA",
                "type": "physical"
            },
            "projectile": {
                "speed": 500,
                "x": 60,
                "y": -65
            },
            "range": 400
        },

        "icon": "",
        "disabled": 0,


    },
    "110": {
        "id": 110,
        "hero": 22,
        "power": 20,
        "tier": 1,
        "behavior": {
            "animationDelay": 0.5,
            "behavior": "JesterUlt",
            "duration": 6,
            "hitrate": 1,
            "params": [],
            "prime": {
                "base": "MP",
                "K": 0.3,
                "scale": 100,
                "type": "magic"
            },
            "projectile": {
                "speed": 1000,
                "x": 0,
                "y": 0
            }
        },

        "icon": "",
        "disabled": 0,


    },
    "111": {
        "id": 111,
        "hero": 22,
        "power": 20,
        "tier": 2,
        "behavior": {
            "animationDelay": 0.5,
            "area": 200,
            "behavior": "JesterShield",
            "cooldown": 14,
            "duration": 4,
            "hitrate": -1,
            "params": [],
            "prime": {
                "base": "MP",
                "K": 0.15,
                "scale": 50,
                "type": "magic"
            }
        },

        "icon": "",
        "disabled": 0,


    },
    "112": {
        "id": 112,
        "hero": 22,
        "power": 20,
        "tier": 3,
        "behavior": {
            "animationDelay": 0.5,
            "behavior": "JesterRay",
            "cooldown": 17,
            "duration": 3,
            "effect": "stun",
            "hitrate": 1,
            "params": [],
            "prime": {
                "base": "MP",
                "K": 0.35,
                "scale": 75,
                "type": "magic"
            }
        },

        "icon": "",
        "disabled": 0,


    },
    "113": {
        "id": 113,
        "hero": 22,
        "power": 20,
        "tier": 4,
        "behavior": {
            "animationDelay": 0.5,
            "behavior": "ValueSkillModifier",
            "duration": -1,
            "hitrate": -1,
            "params": [
                {
                    "name": "tier",
                    "value": "3"
                }
            ],
            "prime": {
                "c": 10,
                "scale": 0.5,
                "type": "x2 % chance"
            },
            "projectile": {
                "speed": 500,
                "x": 0,
                "y": -159
            },
            "secondary": {
                "scale": 0.25,
                "type": "x4 % chance"
            }
        },

        "icon": "",
        "disabled": 0,


    },
    "114": {
        "id": 114,
        "hero": 23,
        "power": 0,
        "tier": 0,
        "behavior": {
            "animationDelay": 0.45,
            "behavior": "Projectile",
            "cooldown": 4.65,
            "params": [],
            "prime": {
                "base": "PA",
                "type": "physical"
            },
            "projectile": {
                "speed": 500,
                "x": 108,
                "y": -119
            },
            "range": 350
        },

        "icon": "",
        "disabled": 1,


    },
    "115": {
        "id": 115,
        "hero": 23,
        "power": 20,
        "tier": 1,
        "behavior": {
            "animationDelay": 1.3,
            "behavior": "UltTailed",
            "duration": 7,
            "hitrate": 1,
            "params": []
        },

        "icon": "",
        "disabled": 1,


    },
    "116": {
        "id": 116,
        "hero": 23,
        "power": 20,
        "tier": 2,
        "behavior": {
            "animationDelay": 0.75,
            "area": 100,
            "behavior": "TailedSphere",
            "cooldown": 14.5,
            "hits": 5,
            "params": [],
            "prime": {
                "base": "MP",
                "K": 0.35,
                "scale": 50,
                "type": "dot"
            },
            "projectile": {
                "speed": 500,
                "x": 81,
                "y": -132
            }
        },

        "icon": "",
        "disabled": 1,


    },
    "117": {
        "id": 117,
        "hero": 23,
        "power": 20,
        "tier": 3,
        "behavior": {
            "animationDelay": 0.73,
            "behavior": "TailedBurst",
            "cooldown": 18,
            "hits": 5,
            "params": [],
            "prime": {
                "base": "MP",
                "K": 0.15,
                "scale": 30,
                "type": "magic"
            },
            "projectile": {
                "speed": 500,
                "x": 44,
                "y": -270
            }
        },

        "icon": "",
        "disabled": 1,


    },
    "118": {
        "id": 118,
        "hero": 23,
        "power": 20,
        "tier": 4,
        "behavior": {
            "animationDelay": 0.5,
            "behavior": "TailedPassive",
            "duration": 2,
            "hitrate": 1,
            "params": []
        },

        "icon": "",
        "disabled": 1,


    },
    "119": {
        "id": 119,
        "hero": 24,
        "power": 0,
        "tier": 0,
        "behavior": {
            "animationDelay": 0.38,
            "area": 47,
            "behavior": "Melee",
            "cooldown": 5.2,
            "params": [],
            "prime": {
                "base": "PA",
                "type": "physical"
            },
            "range": 50
        },

        "icon": "",
        "disabled": 0,


    },
    "120": {
        "id": 120,
        "hero": 24,
        "power": 20,
        "tier": 1,
        "behavior": {
            "animationDelay": 0.43,
            "area": 150,
            "behavior": "Hero24Ult",
            "hitrate": -1,
            "params": [],
            "prime": {
                "base": "PA",
                "K": 1,
                "scale": 120,
                "type": "physical"
            },
            "projectile": {
                "speed": 1000,
                "x": 80,
                "y": -75
            },
            "range": 590
        },

        "icon": "",
        "disabled": 0,


    },
    "121": {
        "id": 121,
        "hero": 24,
        "power": 20,
        "tier": 2,
        "behavior": {
            "animationDelay": 0.75,
            "area": 200,
            "behavior": "Hero24ToxicCloud",
            "cooldown": 15,
            "duration": 5,
            "params": [],
            "prime": {
                "base": "PA",
                "K": 0.25,
                "scale": 40,
                "type": "dot"
            }
        },

        "icon": "",
        "disabled": 0,


    },
    "122": {
        "id": 122,
        "hero": 24,
        "power": 20,
        "tier": 3,
        "behavior": {
            "animationDelay": 0.45,
            "area": 47,
            "behavior": "Hero24Strike",
            "cooldown": 19,
            "duration": 2,
            "effect": "stun",
            "hitrate": 1,
            "params": [],
            "prime": {
                "base": "PA",
                "K": 0.2,
                "scale": 30,
                "type": "physical"
            },
            "range": 50
        },

        "icon": "",
        "disabled": 0,


    },
    "123": {
        "id": 123,
        "hero": 24,
        "power": 20,
        "tier": 4,
        "behavior": {
            "animationDelay": 0.5,
            "behavior": "PassiveSelfBuff",
            "effect": "strength",
            "params": [
                {
                    "name": "statName",
                    "value": "strength"
                }
            ],
            "prime": {
                "c": -380,
                "scale": 10,
                "type": "stat"
            }
        },

        "icon": "",
        "disabled": 0,


    },
    "124": {
        "id": 124,
        "hero": 25,
        "power": 0,
        "tier": 0,
        "behavior": {
            "animationDelay": 0.45,
            "behavior": "Hero25AutoAttack",
            "cooldown": 4.6,
            "params": [],
            "prime": {
                "base": "PA",
                "type": "physical"
            },
            "range": 100
        },

        "icon": "",
        "disabled": 0,


    },
    "125": {
        "id": 125,
        "hero": 25,
        "power": 20,
        "tier": 1,
        "behavior": {
            "animationDelay": 1,
            "behavior": "Hero25Ult",
            "params": [],
            "prime": {
                "scale": 10,
                "type": "physicalCritChance"
            },
            "secondary": {
                "c": 150,
                "type": "speed"
            }
        },

        "icon": "",
        "disabled": 0,


    },
    "126": {
        "id": 126,
        "hero": 25,
        "power": 20,
        "tier": 2,
        "behavior": {
            "animationDelay": 0.6,
            "behavior": "SelfEffect",
            "cooldown": 20,
            "duration": 3,
            "effect": "Hero25Dodge",
            "hitrate": -1,
            "params": []
        },

        "icon": "",
        "disabled": 0,


    },
    "127": {
        "id": 127,
        "hero": 25,
        "power": 20,
        "tier": 3,
        "behavior": {
            "behavior": "PassiveSelfBuff",
            "effect": "lifesteal",
            "params": [
                {
                    "name": "statName",
                    "value": "lifesteal"
                }
            ],
            "prime": {
                "scale": 0.5,
                "type": "stat"
            }
        },

        "icon": "",
        "disabled": 0,


    },
    "128": {
        "id": 128,
        "hero": 25,
        "power": 20,
        "tier": 4,
        "behavior": {
            "animationDelay": 0.5,
            "behavior": "ValueSkillModifier",
            "duration": 1,
            "effect": "stun",
            "hitrate": 1,
            "hits": 4,
            "params": [
                {
                    "name": "tier",
                    "value": "0"
                }
            ]
        },

        "icon": "",
        "disabled": 0,


    },
    "129": {
        "id": 129,
        "hero": 26,
        "power": 0,
        "tier": 0,
        "behavior": {
            "animationDelay": 0.28,
            "behavior": "Projectile",
            "cooldown": 5,
            "params": [],
            "prime": {
                "base": "PA",
                "type": "physical"
            },
            "projectile": {
                "speed": 600,
                "x": 97,
                "y": -144
            },
            "range": 100
        },

        "icon": "",
        "disabled": 0,


    },
    "130": {
        "id": 130,
        "hero": 26,
        "power": 20,
        "tier": 1,
        "behavior": {
            "animationDelay": 0.43,
            "behavior": "Hero26Ult",
            "duration": 1,
            "effect": "stun",
            "hitrate": 1,
            "params": [],
            "prime": {
                "base": "MP",
                "K": 0.2,
                "scale": 50,
                "type": "magic"
            }
        },

        "icon": "",
        "disabled": 0,


    },
    "131": {
        "id": 131,
        "hero": 26,
        "power": 20,
        "tier": 2,
        "behavior": {
            "animationDelay": 0.5,
            "area": 50,
            "behavior": "Melee",
            "cooldown": 14,
            "params": [],
            "prime": {
                "base": "MP",
                "K": 0.15,
                "scale": 50,
                "type": "magic"
            },
            "range": 250
        },

        "icon": "",
        "disabled": 0,


    },
    "132": {
        "id": 132,
        "hero": 26,
        "power": 20,
        "tier": 3,
        "behavior": {
            "animationDelay": 0.42,
            "behavior": "Hero26Punch",
            "cooldown": 20,
            "effect": "knockback(110,0.15)",
            "hitrate": -1,
            "params": [],
            "prime": {
                "base": "MP",
                "K": 0.2,
                "scale": 75,
                "type": "magic"
            },
            "range": 500
        },

        "icon": "",
        "disabled": 0,


    },
    "133": {
        "id": 133,
        "hero": 26,
        "power": 20,
        "tier": 4,
        "behavior": {
            "animationDelay": 0.5,
            "behavior": "ValueSkillModifier",
            "hitrate": -1,
            "params": [
                {
                    "name": "tier",
                    "value": "3"
                }
            ],
            "prime": {
                "c": -4,
                "scale": 0.3,
                "type": "percentIncrease"
            }
        },

        "icon": "",
        "disabled": 0,


    },
    "134": {
        "id": 134,
        "hero": 27,
        "power": 0,
        "tier": 0,
        "behavior": {
            "animationDelay": 0.33,
            "area": 100,
            "behavior": "Melee",
            "cooldown": 5.5,
            "params": [],
            "prime": {
                "base": "PA",
                "type": "physical"
            },
            "range": 50
        },

        "icon": "",
        "disabled": 0,


    },
    "135": {
        "id": 135,
        "hero": 27,
        "power": 20,
        "tier": 1,
        "behavior": {
            "animationDelay": 0.93,
            "area": 90,
            "behavior": "PaladinWarriorUlt",
            "params": [],
            "prime": {
                "base": "PA",
                "K": 0.1,
                "scale": 50,
                "type": "physical"
            },
            "range": 590
        },

        "icon": "",
        "disabled": 0,


    },
    "136": {
        "id": 136,
        "hero": 27,
        "power": 20,
        "tier": 2,
        "behavior": {
            "animationDelay": 1.16,
            "area": 200,
            "behavior": "PaladinWarriorStun",
            "cooldown": 15,
            "duration": 1,
            "effect": "stun",
            "hitrate": 1,
            "params": [],
            "prime": {
                "base": "PA",
                "K": 0.3,
                "scale": 50,
                "type": "physical"
            },
            "range": 50
        },

        "icon": "",
        "disabled": 0,


    },
    "137": {
        "id": 137,
        "hero": 27,
        "power": 20,
        "tier": 3,
        "behavior": {
            "area": 180,
            "behavior": "ValueSkillModifier",
            "duration": 2,
            "effect": "stun",
            "hitrate": 1,
            "params": [
                {
                    "name": "tier",
                    "value": "1"
                }
            ],
            "prime": {
                "base": "PA",
                "K": 0.2,
                "scale": 25,
                "type": "physical"
            }
        },

        "icon": "",
        "disabled": 0,


    },
    "138": {
        "id": 138,
        "hero": 27,
        "power": 20,
        "tier": 4,
        "behavior": {
            "behavior": "PassiveSelfBuff",
            "effect": "magicResist",
            "params": [
                {
                    "name": "statName",
                    "value": "magicResist"
                }
            ],
            "prime": {
                "c": -200,
                "scale": 10,
                "type": "stat"
            }
        },

        "icon": "",
        "disabled": 0,


    },
    "139": {
        "id": 139,
        "hero": 28,
        "power": 0,
        "tier": 0,
        "behavior": {
            "animationDelay": 0.5,
            "area": 47,
            "behavior": "DemonSpearAutoAttack",
            "cooldown": 5,
            "params": [],
            "prime": {
                "base": "PA",
                "type": "physical"
            },
            "range": 125
        },

        "icon": "",
        "disabled": 1,


    },
    "140": {
        "id": 140,
        "hero": 28,
        "power": 20,
        "tier": 1,
        "behavior": {
            "animationDelay": 0.05,
            "area": 150,
            "behavior": "DemonSpearUlt",
            "duration": 5,
            "hitrate": -1,
            "params": [],
            "prime": {
                "base": "PA",
                "K": 0.3,
                "scale": 50,
                "type": "physical"
            },
            "range": 125,
            "secondary": {
                "base": "PA",
                "K": 0.2,
                "scale": 30,
                "type": "dot"
            }
        },

        "icon": "",
        "disabled": 1,


    },
    "141": {
        "id": 141,
        "hero": 28,
        "power": 20,
        "tier": 2,
        "behavior": {
            "animationDelay": 0.58,
            "area": 440,
            "behavior": "DemonSpearBlind",
            "cooldown": 15,
            "duration": 2,
            "effect": "Blindness",
            "hitrate": 1,
            "params": [],
            "prime": {
                "base": "PA",
                "K": 0.2,
                "scale": 20,
                "type": "physical"
            }
        },

        "icon": "",
        "disabled": 1,


    },
    "142": {
        "id": 142,
        "hero": 28,
        "power": 20,
        "tier": 3,
        "behavior": {
            "animationDelay": 1.1,
            "area": 47,
            "behavior": "DemonSpearPercentage",
            "cooldown": 23,
            "cooldownInitial": 7,
            "params": [],
            "prime": {
                "c": 8,
                "scale": 0.1,
                "type": "dot % from current  hp"
            },
            "range": 125
        },

        "icon": "",
        "disabled": 1,


    },
    "143": {
        "id": 143,
        "hero": 28,
        "power": 20,
        "tier": 4,
        "behavior": {
            "behavior": "ValueSkillModifier",
            "params": [
                {
                    "name": "tier",
                    "value": "0"
                }
            ],
            "prime": {
                "c": -50,
                "scale": 3,
                "type": "armorDecrease"
            }
        },

        "icon": "",
        "disabled": 1,


    },
    "144": {
        "id": 144,
        "hero": 29,
        "power": 0,
        "tier": 0,
        "behavior": {
            "animationDelay": 0.51,
            "area": 47,
            "behavior": "Projectile",
            "cooldown": 4.5,
            "params": [],
            "prime": {
                "base": "PA",
                "type": "physical"
            },
            "projectile": {
                "speed": 700,
                "x": 86,
                "y": -101
            },
            "range": 375
        },

        "icon": "",
        "disabled": 0,


    },
    "145": {
        "id": 145,
        "hero": 29,
        "power": 20,
        "tier": 1,
        "behavior": {
            "animationDelay": 0.61,
            "behavior": "VampireUlt",
            "duration": 7,
            "hitrate": -1,
            "params": [],
            "prime": {
                "c": 25,
                "scale": 1,
                "type": "% of damage to return"
            },
            "projectile": {
                "speed": 1000,
                "x": 80,
                "y": -75
            },
            "range": 590
        },

        "icon": "",
        "disabled": 0,


    },
    "146": {
        "id": 146,
        "hero": 29,
        "power": 20,
        "tier": 2,
        "behavior": {
            "animationDelay": 0.6,
            "behavior": "VampireHeal",
            "cooldown": 12,
            "cooldownInitial": 18,
            "params": [],
            "prime": {
                "c": 20,
                "type": "% hp to sacrifice"
            },
            "secondary": {
                "c": 100,
                "scale": 0.5,
                "type": "% of heal"
            }
        },

        "icon": "",
        "disabled": 0,


    },
    "147": {
        "id": 147,
        "hero": 29,
        "power": 20,
        "tier": 3,
        "behavior": {
            "animationDelay": 0.53,
            "behavior": "VampireWave",
            "cooldown": 19,
            "params": [],
            "prime": {
                "base": "MP",
                "c": 500,
                "K": 0.11,
                "scale": 30,
                "type": "magic"
            },
            "projectile": {
                "speed": 1000,
                "x": 0,
                "y": 0
            },
            "range": 375,
            "secondary": {
                "c": 100,
                "type": "% of heal"
            }
        },

        "icon": "",
        "disabled": 0,


    },
    "148": {
        "id": 148,
        "hero": 29,
        "power": 20,
        "tier": 4,
        "behavior": {
            "animationDelay": 0.5,
            "area": 130,
            "behavior": "VampireAura",
            "params": [],
            "prime": {
                "c": -15,
                "scale": 1,
                "type": "lifesteal buff"
            }
        },

        "icon": "",
        "disabled": 0,


    },
    "149": {
        "id": 149,
        "hero": 30,
        "power": 0,
        "tier": 0,
        "behavior": {
            "animationDelay": 0.51,
            "behavior": "ProjectileWithWeapon",
            "cooldown": 4.65,
            "params": [],
            "prime": {
                "base": "MP",
                "type": "physical"
            },
            "projectile": {
                "speed": 600,
                "x": 148,
                "y": -174
            },
            "range": 350
        },

        "icon": "",
        "disabled": 0,


    },
    "150": {
        "id": 150,
        "hero": 30,
        "power": 20,
        "tier": 1,
        "behavior": {
            "animationDelay": 0.4,
            "behavior": "AntimageUlt",
            "hitrate": -1,
            "params": [],
            "prime": {
                "base": "MP",
                "K": 0.1,
                "scale": 20,
                "type": "physical"
            },
            "projectile": {
                "speed": 350,
                "x": 14,
                "y": -335
            },
            "range": 590
        },

        "icon": "",
        "disabled": 0,


    },
    "151": {
        "id": 151,
        "hero": 30,
        "power": 20,
        "tier": 2,
        "behavior": {
            "animationDelay": 1,
            "behavior": "AntimageDebuff",
            "cooldown": 12,
            "duration": 12,
            "hitrate": -1,
            "params": [],
            "prime": {
                "base": "MP",
                "K": 0.4,
                "scale": 75,
                "type": "magicPower"
            }
        },

        "icon": "",
        "disabled": 0,


    },
    "152": {
        "id": 152,
        "hero": 30,
        "power": 20,
        "tier": 3,
        "behavior": {
            "animationDelay": 0.6,
            "behavior": "AntimageBuff",
            "cooldown": 15,
            "duration": 6,
            "hitrate": -1,
            "params": [],
            "prime": {
                "base": "MP",
                "c": 500,
                "K": 0.25,
                "scale": 30,
                "type": "magicResist"
            },
            "range": 350
        },

        "icon": "",
        "disabled": 0,


    },
    "153": {
        "id": 153,
        "hero": 30,
        "power": 20,
        "tier": 4,
        "behavior": {
            "animationDelay": 0.5,
            "behavior": "AntimagePassive",
            "duration": -1,
            "hitrate": -1,
            "params": [],
            "prime": {
                "c": -30,
                "scale": 1,
                "type": "levelDecrease"
            }
        },

        "icon": "",
        "disabled": 0,


    },
    "154": {
        "id": 154,
        "hero": 31,
        "power": 0,
        "tier": 0,
        "behavior": {
            "animationDelay": 0.76,
            "behavior": "Projectile",
            "cooldown": 5,
            "params": [],
            "prime": {
                "base": "PA",
                "type": "physical"
            },
            "projectile": {
                "speed": 600,
                "x": 113,
                "y": -102
            },
            "range": 400
        },

        "icon": "",
        "disabled": 0,


    },
    "155": {
        "id": 155,
        "hero": 31,
        "power": 20,
        "tier": 1,
        "behavior": {
            "animationDelay": 1.5,
            "behavior": "AlchemistUlt",
            "duration": -1,
            "hitrate": -1,
            "params": [],
            "prime": {
                "base": "MP",
                "K": 0.2,
                "scale": 50,
                "type": "PA buff"
            },
            "range": 590,
            "secondary": {
                "base": "MP",
                "K": 0.25,
                "scale": 50,
                "type": "heal per second"
            }
        },

        "icon": "",
        "disabled": 0,


    },
    "156": {
        "id": 156,
        "hero": 31,
        "power": 20,
        "tier": 2,
        "behavior": {
            "animationDelay": 1,
            "behavior": "AlchemistArmorDebuff",
            "cooldown": 8,
            "duration": 8,
            "hitrate": -1,
            "params": [],
            "prime": {
                "base": "MP",
                "K": 0.1,
                "scale": 25,
                "type": "armor debuff"
            },
            "projectile": {
                "speed": 600,
                "x": 98,
                "y": -62
            }
        },

        "icon": "",
        "disabled": 0,


    },
    "157": {
        "id": 157,
        "hero": 31,
        "power": 20,
        "tier": 3,
        "behavior": {
            "animationDelay": 0.56,
            "area": 150,
            "behavior": "AlchemistHealPrevent",
            "cooldown": 12,
            "duration": 8,
            "hitrate": 1,
            "params": [],
            "projectile": {
                "x": 29,
                "y": -182
            }
        },

        "icon": "",
        "disabled": 0,


    },
    "158": {
        "id": 158,
        "hero": 31,
        "power": 20,
        "tier": 4,
        "behavior": {
            "animationDelay": 0.5,
            "behavior": "AlchemistPassive",
            "duration": -1,
            "hitrate": -1,
            "params": [],
            "prime": {
                "base": "MP",
                "c": -500,
                "K": 0.025,
                "scale": 15,
                "type": "flat crit +"
            },
            "secondary": {
                "type": "antidodge +"
            }
        },

        "icon": "",
        "disabled": 0,


    },
    "159": {
        "id": 159,
        "hero": 32,
        "power": 0,
        "tier": 0,
        "behavior": {
            "animationDelay": 0.81,
            "area": 100,
            "behavior": "Projectile",
            "cooldown": 5.5,
            "params": [],
            "prime": {
                "base": "PA",
                "type": "physical"
            },
            "projectile": {
                "speed": 600,
                "x": 160,
                "y": -195
            },
            "range": 400
        },

        "icon": "",
        "disabled": 0,


    },
    "160": {
        "id": 160,
        "hero": 32,
        "power": 20,
        "tier": 1,
        "behavior": {
            "animationDelay": 0.1,
            "area": 90,
            "behavior": "SunPriestUlt",
            "hits": 3,
            "params": [],
            "prime": {
                "base": "MP",
                "K": 0.45,
                "scale": 50,
                "type": "magic"
            },
            "projectile": {
                "x": 121,
                "y": -247
            },
            "range": 600
        },

        "icon": "",
        "disabled": 0,


    },
    "161": {
        "id": 161,
        "hero": 32,
        "power": 20,
        "tier": 2,
        "behavior": {
            "animationDelay": 0.8,
            "area": 170,
            "behavior": "SunPriestFlamingSphere",
            "cooldown": 14,
            "cooldownInitial": 1,
            "duration": 10,
            "hits": 14,
            "params": [],
            "prime": {
                "base": "MP",
                "K": 0.1,
                "scale": 10,
                "type": "magic"
            }
        },

        "icon": "",
        "disabled": 0,


    },
    "162": {
        "id": 162,
        "hero": 32,
        "power": 20,
        "tier": 3,
        "behavior": {
            "animationDelay": 0.5,
            "area": 180,
            "behavior": "SunPriestDefenders",
            "cooldown": 18,
            "hits": 2,
            "params": [],
            "prime": {
                "base": "MP",
                "K": 0.9,
                "scale": 125,
                "type": "physical"
            }
        },

        "icon": "",
        "disabled": 0,


    },
    "163": {
        "id": 163,
        "hero": 32,
        "power": 20,
        "tier": 4,
        "behavior": {
            "behavior": "ValueSkillModifier",
            "params": [
                {
                    "name": "tier",
                    "value": "2"
                }
            ],
            "prime": {
                "base": "MP",
                "K": 0.75,
                "scale": 150,
                "type": "magic"
            }
        },

        "icon": "",
        "disabled": 0,


    },
    "164": {
        "id": 164,
        "hero": 33,
        "power": 0,
        "tier": 0,
        "behavior": {
            "animationDelay": 0.8,
            "area": 100,
            "behavior": "DeerOfThunderProjectile",
            "cooldown": 4,
            "params": [],
            "prime": {
                "base": "PA",
                "type": "physical"
            },
            "projectile": {
                "speed": 700,
                "x": 124,
                "y": -107
            },
            "range": 325
        },

        "icon": "",
        "disabled": 0,


    },
    "165": {
        "id": 165,
        "hero": 33,
        "power": 20,
        "tier": 1,
        "behavior": {
            "animationDelay": 0.7,
            "area": 90,
            "behavior": "DeerOfThunderUlt",
            "duration": 10,
            "hitrate": 1,
            "params": [],
            "prime": {
                "base": "MP",
                "type": "magic"
            },
            "range": 590
        },

        "icon": "",
        "disabled": 0,


    },
    "166": {
        "id": 166,
        "hero": 33,
        "power": 20,
        "tier": 2,
        "behavior": {
            "animationDelay": 0.92,
            "area": 200,
            "behavior": "DeerOfThunderChainBolt",
            "cooldown": 16,
            "cooldownInitial": 3,
            "params": [],
            "prime": {
                "base": "MP",
                "K": 0.35,
                "scale": 50,
                "type": "magic"
            }
        },

        "icon": "",
        "disabled": 0,


    },
    "167": {
        "id": 167,
        "hero": 33,
        "power": 20,
        "tier": 3,
        "behavior": {
            "animationDelay": 0.9,
            "area": 180,
            "behavior": "DeerOfThunderStrike",
            "cooldown": 12,
            "duration": 4,
            "effect": "stun",
            "hitrate": 1,
            "params": [],
            "prime": {
                "base": "MP",
                "K": 0.45,
                "scale": 60,
                "type": "magic"
            }
        },

        "icon": "",
        "disabled": 0,


    },
    "168": {
        "id": 168,
        "hero": 33,
        "power": 20,
        "tier": 4,
        "behavior": {
            "behavior": "DeerOfThunderPassive",
            "params": [],
            "prime": {
                "c": -40,
                "scale": 2,
                "type": "damage +%"
            },
            "secondary": {
                "c": -20,
                "scale": 1,
                "type": "duration +%"
            }
        },

        "icon": "",
        "disabled": 0,


    },
    "169": {
        "id": 169,
        "hero": 34,
        "power": 0,
        "tier": 0,
        "behavior": {
            "animationDelay": 0.68,
            "area": 100,
            "behavior": "Projectile",
            "cooldown": 5,
            "params": [],
            "prime": {
                "base": "PA",
                "type": "physical"
            },
            "projectile": {
                "speed": 700,
                "x": 228,
                "y": -106
            },
            "range": 200
        },

        "icon": "",
        "disabled": 0,


    },
    "170": {
        "id": 170,
        "hero": 34,
        "power": 20,
        "tier": 1,
        "behavior": {
            "animationDelay": 0.5,
            "area": 90,
            "behavior": "DeerOfIceUlt",
            "hits": 5,
            "params": [],
            "prime": {
                "base": "MP",
                "K": 0.25,
                "scale": 50,
                "type": "magic"
            },
            "range": 590
        },

        "icon": "",
        "disabled": 0,


    },
    "171": {
        "id": 171,
        "hero": 34,
        "power": 20,
        "tier": 2,
        "behavior": {
            "animationDelay": 0.66,
            "area": 120,
            "behavior": "DeerOfIceCurse",
            "cooldown": 12,
            "duration": 8,
            "hitrate": 1,
            "params": [],
            "prime": {
                "base": "MP",
                "K": 0.05,
                "scale": 10,
                "type": "-magicResist"
            }
        },

        "icon": "",
        "disabled": 0,


    },
    "172": {
        "id": 172,
        "hero": 34,
        "power": 20,
        "tier": 3,
        "behavior": {
            "animationDelay": 0.5,
            "area": 550,
            "behavior": "DeerOfIceIceGround",
            "cooldown": 14,
            "duration": 8,
            "hitrate": 1,
            "params": [],
            "prime": {
                "base": "MP",
                "K": 0.12,
                "scale": 25,
                "type": "magic"
            }
        },

        "icon": "",
        "disabled": 0,


    },
    "173": {
        "id": 173,
        "hero": 34,
        "power": 20,
        "tier": 4,
        "behavior": {
            "behavior": "DeerOfIceSave",
            "duration": 2,
            "params": [
                {
                    "name": "damageHpPercentToTrigger",
                    "value": "14"
                }
            ],
            "prime": {
                "c": 34,
                "scale": 0.4,
                "type": "percent"
            }
        },

        "icon": "",
        "disabled": 0,


    },
    "174": {
        "id": 174,
        "hero": 35,
        "power": 0,
        "tier": 0,
        "behavior": {
            "animationDelay": 0.75,
            "area": 100,
            "behavior": "EnergyWarlockAutoAttack",
            "cooldown": 5.5,
            "params": [],
            "prime": {
                "base": "PA",
                "type": "physical"
            },
            "projectile": {
                "speed": 600,
                "x": 199,
                "y": -117
            },
            "range": 250
        },

        "icon": "",
        "disabled": 0,


    },
    "175": {
        "id": 175,
        "hero": 35,
        "power": 20,
        "tier": 1,
        "behavior": {
            "animationDelay": 0.86,
            "area": 90,
            "behavior": "EnergyWarlockUlt",
            "duration": 9,
            "hitrate": -1,
            "params": [],
            "prime": {
                "base": "MP",
                "K": 0.6,
                "scale": 100,
                "type": "magic"
            },
            "range": 590
        },

        "icon": "",
        "disabled": 0,


    },
    "176": {
        "id": 176,
        "hero": 35,
        "power": 20,
        "tier": 2,
        "behavior": {
            "animationDelay": 1.1,
            "area": 200,
            "behavior": "EnergyWarlockShield",
            "cooldown": 14,
            "duration": -1,
            "hitrate": -1,
            "params": [],
            "prime": {
                "base": "MP",
                "K": 0.7,
                "scale": 125,
                "type": "shield hp"
            },
            "secondary": {
                "c": 2,
                "type": "multiplier"
            }
        },

        "icon": "",
        "disabled": 0,


    },
    "177": {
        "id": 177,
        "hero": 35,
        "power": 20,
        "tier": 3,
        "behavior": {
            "animationDelay": 0.5,
            "area": 180,
            "behavior": "EnergyWarlockDamageRetarget",
            "cooldown": 20,
            "duration": 10,
            "hitrate": 1,
            "params": []
        },

        "icon": "",
        "disabled": 0,


    },
    "178": {
        "id": 178,
        "hero": 35,
        "power": 20,
        "tier": 4,
        "behavior": {
            "behavior": "ValueSkillModifier",
            "hitrate": -1,
            "params": [
                {
                    "name": "tier",
                    "value": "0"
                }
            ],
            "prime": {
                "c": -20,
                "scale": 1,
                "type": "energy decrease from aa"
            }
        },

        "icon": "",
        "disabled": 0,


    },
    "179": {
        "id": 179,
        "hero": 36,
        "power": 0,
        "tier": 0,
        "behavior": {
            "animationDelay": 0.68,
            "area": 100,
            "behavior": "Projectile",
            "cooldown": 5.5,
            "params": [],
            "prime": {
                "base": "PA",
                "type": "physical"
            },
            "projectile": {
                "speed": 600,
                "x": 108,
                "y": -108
            },
            "range": 175
        },

        "icon": "",
        "disabled": 0,


    },
    "180": {
        "id": 180,
        "hero": 36,
        "power": 20,
        "tier": 1,
        "behavior": {
            "animationDelay": 0.73,
            "behavior": "FloweyUlt",
            "params": [],
            "prime": {
                "base": "MP",
                "K": 0.03,
                "scale": 10,
                "type": "heal per tick"
            },
            "range": 175,
            "secondary": {
                "base": "MP",
                "K": 1,
                "scale": 200,
                "type": "hp"
            }
        },

        "icon": "",
        "disabled": 0,


    },
    "181": {
        "id": 181,
        "hero": 36,
        "power": 20,
        "tier": 2,
        "behavior": {
            "animationDelay": 0.61,
            "behavior": "FloweyPoison",
            "cooldown": 12,
            "duration": 6,
            "hitrate": -1,
            "params": [],
            "prime": {
                "base": "MP",
                "K": 0.25,
                "scale": 100,
                "type": "dot"
            }
        },

        "icon": "",
        "disabled": 0,


    },
    "182": {
        "id": 182,
        "hero": 36,
        "power": 20,
        "tier": 3,
        "behavior": {
            "animationDelay": 0.8,
            "area": 180,
            "behavior": "FloweyVines",
            "cooldown": 20,
            "duration": 6,
            "hitrate": -1,
            "params": [],
            "prime": {
                "base": "MP",
                "K": 0.25,
                "scale": 100,
                "type": "dot"
            }
        },

        "icon": "",
        "disabled": 0,


    },
    "183": {
        "id": 183,
        "hero": 36,
        "power": 20,
        "tier": 4,
        "behavior": {
            "area": 350,
            "behavior": "ValueSkillModifier",
            "duration": 8,
            "hitrate": -1,
            "params": [
                {
                    "name": "tier",
                    "value": "1"
                }
            ],
            "prime": {
                "base": "MP",
                "K": 1,
                "scale": 400,
                "type": "dot"
            }
        },

        "icon": "",
        "disabled": 0,


    },
    "184": {
        "id": 184,
        "hero": 37,
        "power": 0,
        "tier": 0,
        "behavior": {
            "animationDelay": 0.53,
            "behavior": "BoomerangAutoAttack",
            "cooldown": 4.7,
            "params": [],
            "prime": {
                "base": "PA",
                "type": "physical"
            },
            "projectile": {
                "speed": 600,
                "x": 208,
                "y": -132
            },
            "range": 225
        },

        "icon": "",
        "disabled": 0,


    },
    "185": {
        "id": 185,
        "hero": 37,
        "power": 20,
        "tier": 1,
        "behavior": {
            "animationDelay": 0.5,
            "behavior": "BoomerangUlt",
            "duration": 7,
            "hitrate": -1,
            "params": [],
            "prime": {
                "c": 60,
                "scale": 1,
                "type": "speed buff %"
            }
        },

        "icon": "",
        "disabled": 0,


    },
    "186": {
        "id": 186,
        "hero": 37,
        "power": 20,
        "tier": 2,
        "behavior": {
            "behavior": "ValueSkillModifier",
            "params": [
                {
                    "name": "tier",
                    "value": "0"
                }
            ],
            "prime": {
                "c": 2,
                "scale": 0.02,
                "type": "target % dmg"
            },
            "secondary": {
                "c": 2,
                "type": "self % dmg"
            }
        },

        "icon": "",
        "disabled": 0,


    },
    "187": {
        "id": 187,
        "hero": 37,
        "power": 20,
        "tier": 3,
        "behavior": {
            "animationDelay": 0.6,
            "behavior": "BoomerangBacklineMode",
            "cooldown": 18,
            "hitrate": -1,
            "params": [],
            "prime": {
                "base": "PA",
                "c": -500,
                "K": 0.25,
                "scale": 50,
                "type": "pa buff"
            },
            "secondary": {
                "c": 6,
                "scale": 0.025,
                "type": "duration"
            }
        },

        "icon": "",
        "disabled": 0,


    },
    "188": {
        "id": 188,
        "hero": 37,
        "power": 20,
        "tier": 4,
        "behavior": {
            "behavior": "ValueSkillModifier",
            "params": [
                {
                    "name": "tier",
                    "value": "1"
                }
            ],
            "prime": {
                "base": "PA",
                "c": -3000,
                "K": 0.65,
                "scale": 100,
                "type": "heal"
            }
        },

        "icon": "",
        "disabled": 0,


    },
    "189": {
        "id": 189,
        "hero": 38,
        "power": 0,
        "tier": 0,
        "behavior": {
            "animationDelay": 0.38,
            "area": 47,
            "behavior": "SandPhantomAutoAttack",
            "cooldown": 4.7,
            "params": [],
            "prime": {
                "base": "PA",
                "type": "physical"
            },
            "projectile": {
                "x": 52,
                "y": -149
            },
            "range": 100
        },

        "icon": "",
        "disabled": 0,


    },
    "190": {
        "id": 190,
        "hero": 38,
        "power": 20,
        "tier": 1,
        "behavior": {
            "animationDelay": 0.23,
            "behavior": "SandPhantomUlt",
            "duration": 10,
            "params": [],
            "prime": {
                "base": "PA",
                "K": 0.38,
                "scale": 75,
                "type": "physical"
            },
            "range": 590
        },

        "icon": "",
        "disabled": 0,


    },
    "191": {
        "id": 191,
        "hero": 38,
        "power": 20,
        "tier": 2,
        "behavior": {
            "animationDelay": 0.2,
            "behavior": "SandPhantomCloninig",
            "cooldown": 18,
            "cooldownInitial": 6,
            "duration": 12,
            "params": [],
            "prime": {
                "base": "HP",
                "K": 0.22,
                "scale": 0.004,
                "type": "tooltip only"
            },
            "secondary": {
                "c": 22,
                "scale": 0.4,
                "type": "hp percent"
            }
        },

        "icon": "",
        "disabled": 0,


    },
    "192": {
        "id": 192,
        "hero": 38,
        "power": 20,
        "tier": 3,
        "behavior": {
            "behavior": "ValueSkillModifier",
            "params": [
                {
                    "name": "tier",
                    "value": "2"
                }
            ],
            "prime": {
                "base": "PA",
                "c": -1000,
                "K": 0.15,
                "scale": 50,
                "type": "physical"
            }
        },

        "icon": "",
        "disabled": 0,


    },
    "193": {
        "id": 193,
        "hero": 38,
        "power": 20,
        "tier": 4,
        "behavior": {
            "behavior": "ValueSkillModifier",
            "params": [
                {
                    "name": "tier",
                    "value": "2"
                }
            ],
            "prime": {
                "c": 44,
                "scale": 0.3,
                "type": "chance x2"
            },
            "secondary": {
                "c": 16,
                "scale": 0.2,
                "type": "chance x4"
            }
        },

        "icon": "",
        "disabled": 0,


    },
    "194": {
        "id": 194,
        "hero": 39,
        "power": 0,
        "tier": 0,
        "behavior": {
            "animationDelay": 0.72,
            "area": 100,
            "behavior": "Melee",
            "cooldown": 5.5,
            "params": [],
            "prime": {
                "base": "PA",
                "type": "physical"
            },
            "range": 75
        },

        "icon": "",
        "disabled": 0,


    },
    "195": {
        "id": 195,
        "hero": 39,
        "power": 20,
        "tier": 1,
        "behavior": {
            "animationDelay": 0.93,
            "behavior": "ScorpioUlt",
            "duration": 8,
            "params": [],
            "prime": {
                "c": 30,
                "scale": 1,
                "type": "resist buff %"
            },
            "range": 590
        },

        "icon": "",
        "disabled": 0,


    },
    "196": {
        "id": 196,
        "hero": 39,
        "power": 20,
        "tier": 2,
        "behavior": {
            "animationDelay": 0.66,
            "behavior": "SelfEffectUpdate",
            "cooldown": 18,
            "cooldownInitial": 9,
            "duration": 8,
            "effect": "DamageReflectPercent",
            "hitrate": 1,
            "params": [],
            "prime": {
                "c": 100,
                "type": "reflect %"
            }
        },

        "icon": "",
        "disabled": 0,


    },
    "197": {
        "id": 197,
        "hero": 39,
        "power": 20,
        "tier": 3,
        "behavior": {
            "animationDelay": 0.75,
            "behavior": "ScorpioBorrowing",
            "cooldown": 15,
            "duration": 7,
            "params": [],
            "prime": {
                "base": "HP",
                "K": 0.1,
                "scale": 400,
                "type": "heal over time"
            },
            "secondary": {
                "c": 30,
                "type": "health limit %"
            }
        },

        "icon": "",
        "disabled": 0,


    },
    "198": {
        "id": 198,
        "hero": 39,
        "power": 20,
        "tier": 4,
        "behavior": {
            "area": 150,
            "behavior": "ValueSkillModifier",
            "duration": 3,
            "hitrate": 1,
            "params": [
                {
                    "name": "tier",
                    "value": "3"
                }
            ],
            "prime": {
                "type": "knockback"
            }
        },

        "icon": "",
        "disabled": 0,


    },
    "199": {
        "id": 199,
        "hero": 40,
        "power": 0,
        "tier": 0,
        "behavior": {
            "animationDelay": 0.66,
            "behavior": "FishAutoAttack",
            "cooldown": 5.2,
            "params": [],
            "prime": {
                "base": "PA",
                "type": "physical"
            },
            "projectile": {
                "speed": 600,
                "x": 153,
                "y": -179
            },
            "range": 225
        },

        "icon": "",
        "disabled": 0,


    },
    "200": {
        "id": 200,
        "hero": 40,
        "power": 20,
        "tier": 1,
        "behavior": {
            "animationDelay": 1.35,
            "area": 150,
            "behavior": "FishUlt",
            "params": [],
            "prime": {
                "base": "PA",
                "K": 1.2,
                "scale": 200,
                "type": "physical"
            },
            "projectile": {
                "speed": 90,
                "x": 196,
                "y": -135
            },
            "range": 590,
            "secondary": {
                "c": 40,
                "scale": 0.5,
                "type": "energy %"
            }
        },

        "icon": "",
        "disabled": 0,


    },
    "201": {
        "id": 201,
        "hero": 40,
        "power": 20,
        "tier": 2,
        "behavior": {
            "animationDelay": 0.75,
            "behavior": "FishHeal",
            "cooldown": 13,
            "hitrate": 1,
            "params": [],
            "prime": {
                "base": "PA",
                "K": 0.4,
                "scale": 75,
                "type": "heal"
            }
        },

        "icon": "",
        "disabled": 0,


    },
    "202": {
        "id": 202,
        "hero": 40,
        "power": 20,
        "tier": 3,
        "behavior": {
            "animationDelay": 1.08,
            "behavior": "FishTargetDamage",
            "cooldown": 18,
            "params": [],
            "prime": {
                "base": "PA",
                "c": -2500,
                "K": 1,
                "scale": 150,
                "type": "physical"
            },
            "projectile": {
                "speed": 600,
                "x": 32,
                "y": -144
            }
        },

        "icon": "",
        "disabled": 0,


    },
    "203": {
        "id": 203,
        "hero": 40,
        "power": 20,
        "tier": 4,
        "behavior": {
            "behavior": "ValueSkillModifier",
            "duration": 5,
            "params": [
                {
                    "name": "tier",
                    "value": "0"
                }
            ],
            "prime": {
                "base": "PA",
                "c": -5000,
                "K": 1,
                "scale": 150,
                "type": "pa buff"
            },
            "secondary": {
                "base": "PA",
                "K": 1.5,
                "scale": 225,
                "type": "mp buff"
            }
        },

        "icon": "",
        "disabled": 0,


    },
    "204": {
        "id": 204,
        "hero": 41,
        "power": 0,
        "tier": 0,
        "behavior": {
            "animationDelay": 0.46,
            "area": 47,
            "behavior": "MeleeWithFx",
            "cooldown": 5.2,
            "params": [
                {
                    "name": "fxOffset"
                }
            ],
            "prime": {
                "base": "PA",
                "type": "physical"
            },
            "range": 100
        },

        "icon": "",
        "disabled": 0,


    },
    "205": {
        "id": 205,
        "hero": 41,
        "power": 20,
        "tier": 1,
        "behavior": {
            "animationDelay": 0.5,
            "behavior": "OctoUlt",
            "duration": 2,
            "hitrate": 1,
            "params": [],
            "range": 590
        },

        "icon": "",
        "disabled": 0,


    },
    "206": {
        "id": 206,
        "hero": 41,
        "power": 20,
        "tier": 2,
        "behavior": {
            "animationDelay": 0.5,
            "behavior": "OctoShield",
            "cooldown": 18,
            "duration": 8,
            "hitrate": -1,
            "params": [],
            "prime": {
                "c": 26,
                "scale": 0.2,
                "type": "% for absorb"
            },
            "secondary": {
                "c": 9,
                "scale": 0.05,
                "type": "energy %"
            }
        },

        "icon": "",
        "disabled": 0,


    },
    "207": {
        "id": 207,
        "hero": 41,
        "power": 20,
        "tier": 3,
        "behavior": {
            "behavior": "OctoPassive",
            "hitrate": 1,
            "params": [],
            "prime": {
                "base": "PA",
                "K": 1,
                "type": "physical"
            }
        },

        "icon": "",
        "disabled": 0,


    },
    "208": {
        "id": 208,
        "hero": 41,
        "power": 20,
        "tier": 4,
        "behavior": {
            "behavior": "ValueSkillModifier",
            "params": [
                {
                    "name": "tier",
                    "value": "3"
                }
            ],
            "prime": {
                "c": -5,
                "scale": 0.25,
                "type": "vamp heal %"
            }
        },

        "icon": "",
        "disabled": 0,


    },
    "209": {
        "id": 209,
        "hero": 42,
        "power": 0,
        "tier": 0,
        "behavior": {
            "animationDelay": 0.78,
            "area": 100,
            "behavior": "Melee",
            "cooldown": 5.2,
            "params": [],
            "prime": {
                "base": "PA",
                "type": "physical"
            },
            "range": 75
        },

        "icon": "",
        "disabled": 0,


    },
    "210": {
        "id": 210,
        "hero": 42,
        "power": 20,
        "tier": 1,
        "behavior": {
            "animationDelay": 0.9,
            "behavior": "FattyUlt",
            "params": [],
            "prime": {
                "base": "MP",
                "K": 1.1,
                "scale": 2000,
                "type": "magic"
            },
            "range": 590
        },

        "icon": "",
        "disabled": 0,


    },
    "211": {
        "id": 211,
        "hero": 42,
        "power": 20,
        "tier": 2,
        "behavior": {
            "animationDelay": 0.56,
            "behavior": "FattyProjectileDot",
            "cooldown": 15,
            "duration": 4,
            "params": [],
            "prime": {
                "base": "MP",
                "K": 0.4,
                "scale": 150,
                "type": "dot"
            },
            "projectile": {
                "speed": 400,
                "x": 163,
                "y": -137
            }
        },

        "icon": "",
        "disabled": 0,


    },
    "212": {
        "id": 212,
        "hero": 42,
        "power": 20,
        "tier": 3,
        "behavior": {
            "behavior": "ValueSkillModifier",
            "params": [
                {
                    "name": "tier",
                    "value": "1"
                }
            ],
            "prime": {
                "c": 0,
                "scale": 0.5,
                "type": "heal %"
            }
        },

        "icon": "",
        "disabled": 0,


    },
    "213": {
        "id": 213,
        "hero": 42,
        "power": 20,
        "tier": 4,
        "behavior": {
            "behavior": "PassiveSelfEffect",
            "duration": 0.8,
            "effect": "FattyPassive",
            "params": [],
            "prime": {
                "base": "MP",
                "c": -55000,
                "K": 5,
                "scale": 1500,
                "type": "hp"
            }
        },

        "icon": "",
        "disabled": 0,


    },
    "214": {
        "id": 214,
        "hero": 43,
        "power": 0,
        "tier": 0,
        "behavior": {
            "animationDelay": 0.6,
            "behavior": "Hero43DayNightAttack",
            "cooldown": 5.2,
            "params": [],
            "prime": {
                "base": "PA",
                "type": "physical"
            },
            "projectile": {
                "speed": 600,
                "x": 120,
                "y": -140
            },
            "range": 200
        },

        "icon": "",
        "disabled": 0,


    },
    "215": {
        "id": 215,
        "hero": 43,
        "power": 20,
        "tier": 1,
        "behavior": {
            "animationDelay": 1.1,
            "behavior": "Hero43DayNightUlt",
            "duration": 5,
            "params": [],
            "prime": {
                "base": "MP",
                "K": 0.7,
                "scale": 350,
                "type": "heal prevent"
            },
            "range": 590,
            "secondary": {
                "base": "MP",
                "K": 0.7,
                "scale": 100,
                "type": "heal"
            }
        },

        "icon": "",
        "disabled": 0,


    },
    "216": {
        "id": 216,
        "hero": 43,
        "power": 20,
        "tier": 2,
        "behavior": {
            "animationDelay": 0.67,
            "behavior": "Hero43DayNightSkill",
            "cooldown": 18,
            "duration": 5,
            "params": [],
            "prime": {
                "base": "MP",
                "K": 0.7,
                "scale": 250,
                "type": "magic"
            },
            "secondary": {
                "base": "MP",
                "K": 0.7,
                "scale": 100,
                "type": "heal"
            }
        },

        "icon": "",
        "disabled": 0,


    },
    "217": {
        "id": 217,
        "hero": 43,
        "power": 20,
        "tier": 3,
        "behavior": {
            "behavior": "ValueSkillModifier",
            "hitrate": 1,
            "params": [
                {
                    "name": "tier",
                    "value": "2"
                }
            ],
            "prime": {
                "c": 16,
                "scale": 0.2,
                "type": "%dmg"
            }
        },

        "icon": "",
        "disabled": 0,


    },
    "218": {
        "id": 218,
        "hero": 43,
        "power": 20,
        "tier": 4,
        "behavior": {
            "behavior": "ValueSkillModifier",
            "params": [
                {
                    "name": "tier",
                    "value": "0"
                }
            ],
            "prime": {
                "base": "MP",
                "K": 0.7,
                "scale": 150,
                "type": "magic"
            },
            "secondary": {
                "base": "MP",
                "K": 0.4,
                "scale": 150,
                "type": "heal"
            }
        },

        "icon": "",
        "disabled": 0,


    },
    "219": {
        "id": 219,
        "hero": 44,
        "power": 0,
        "tier": 0,
        "behavior": {
            "animationDelay": 1.06,
            "behavior": "Hero44PetMasterAutoAttack",
            "cooldown": 5,
            "duration": 4,
            "params": [],
            "prime": {
                "base": "PA",
                "type": "physical"
            },
            "projectile": {
                "x": 7,
                "y": -115
            },
            "range": 350,
            "secondary": {
                "c": 17,
                "type": "energy per attack %"
            }
        },

        "icon": "",
        "disabled": 0,


    },
    "220": {
        "id": 220,
        "hero": 44,
        "power": 20,
        "tier": 1,
        "behavior": {
            "animationDelay": 0.3,
            "behavior": "Hero44PetMasterUlt",
            "duration": 3.5,
            "params": [],
            "prime": {
                "base": "PA",
                "K": 0.2,
                "scale": 135,
                "type": "physical"
            },
            "secondary": {
                "c": 7,
                "type": "energy per hit %"
            }
        },

        "icon": "",
        "disabled": 0,


    },
    "221": {
        "id": 221,
        "hero": 44,
        "power": 20,
        "tier": 2,
        "behavior": {
            "animationDelay": 0.75,
            "behavior": "Hero44PetMasterSpeedUp",
            "cooldown": 20,
            "cooldownInitial": 1,
            "duration": 9,
            "hitrate": -1,
            "params": [],
            "prime": {
                "c": 69,
                "scale": 0.7,
                "type": "%"
            }
        },

        "icon": "",
        "disabled": 0,


    },
    "222": {
        "id": 222,
        "hero": 44,
        "power": 20,
        "tier": 3,
        "behavior": {
            "behavior": "ValueSkillModifier",
            "params": [
                {
                    "name": "tier",
                    "value": "1"
                }
            ],
            "prime": {
                "c": 0.5,
                "scale": 0.05,
                "type": "% attack buff"
            }
        },

        "icon": "",
        "disabled": 0,


    },
    "223": {
        "id": 223,
        "hero": 44,
        "power": 20,
        "tier": 4,
        "behavior": {
            "behavior": "ValueSkillModifier",
            "duration": 0.3,
            "effect": "Stun",
            "hitrate": 1,
            "params": [
                {
                    "name": "tier",
                    "value": "0"
                }
            ]
        },

        "icon": "",
        "disabled": 0,


    },
    "224": {
        "id": 224,
        "hero": 45,
        "power": 0,
        "tier": 0,
        "behavior": {
            "animationDelay": 0.83,
            "behavior": "Hero45AutoAttack",
            "cooldown": 5,
            "params": [],
            "prime": {
                "base": "PA",
                "type": "magic"
            },
            "projectile": {
                "speed": 600,
                "x": 159,
                "y": -126
            },
            "range": 125
        },

        "icon": "",
        "disabled": 0,


    },
    "225": {
        "id": 225,
        "hero": 45,
        "power": 20,
        "tier": 1,
        "behavior": {
            "animationDelay": 1.35,
            "behavior": "Hero45Ult",
            "params": [],
            "prime": {
                "base": "MP",
                "K": 0.5,
                "scale": 150,
                "type": "magic"
            },
            "projectile": {
                "speed": 90,
                "x": 196,
                "y": -135
            },
            "range": 590
        },

        "icon": "",
        "disabled": 0,


    },
    "226": {
        "id": 226,
        "hero": 45,
        "power": 20,
        "tier": 2,
        "behavior": {
            "animationDelay": 0.5,
            "behavior": "Hero45Aoe",
            "cooldown": 20,
            "cooldownInitial": 5,
            "hitrate": 1,
            "params": [],
            "prime": {
                "base": "MP",
                "K": 0.4,
                "scale": 25,
                "type": "magic"
            },
            "projectile": {
                "x": 101,
                "y": -357
            },
            "secondary": {
                "c": 1,
                "type": "num stacks"
            }
        },

        "icon": "",
        "disabled": 0,


    },
    "227": {
        "id": 227,
        "hero": 45,
        "power": 20,
        "tier": 3,
        "behavior": {
            "behavior": "ValueSkillModifier",
            "hitrate": 1,
            "params": [
                {
                    "name": "tier",
                    "value": "0"
                }
            ],
            "prime": {
                "scale": 2,
                "type": "int steal"
            },
            "secondary": {
                "c": 200,
                "type": "life steal %"
            }
        },

        "icon": "",
        "disabled": 0,


    },
    "228": {
        "id": 228,
        "hero": 45,
        "power": 20,
        "tier": 4,
        "behavior": {
            "behavior": "Hero45Passive",
            "hitrate": 1,
            "params": [],
            "prime": {
                "c": 9,
                "type": "num stacks"
            }
        },

        "icon": "",
        "disabled": 0,


    },
    "229": {
        "id": 229,
        "hero": 46,
        "power": 0,
        "tier": 0,
        "behavior": {
            "animationDelay": 0.58,
            "behavior": "Hero46AutoAttack",
            "cooldown": 8,
            "params": [
                {
                    "name": "fxOffset",
                    "value": "50"
                }
            ],
            "prime": {
                "base": "PA",
                "type": "physical"
            },
            "projectile": {
                "speed": 450,
                "x": 96,
                "y": -254
            },
            "range": 400
        },

        "icon": "",
        "disabled": 0,


    },
    "230": {
        "id": 230,
        "hero": 46,
        "power": 20,
        "tier": 1,
        "behavior": {
            "animationDelay": 0.83,
            "behavior": "Hero46Ult",
            "duration": 6,
            "effect": "speed",
            "hitrate": -1,
            "params": [],
            "prime": {
                "c": 120,
                "scale": 1,
                "type": "speed %"
            }
        },

        "icon": "",
        "disabled": 0,


    },
    "231": {
        "id": 231,
        "hero": 46,
        "power": 20,
        "tier": 2,
        "behavior": {
            "behavior": "ValueSkillModifier",
            "duration": 1,
            "params": [
                {
                    "name": "tier",
                    "value": "0"
                }
            ],
            "prime": {
                "base": "HP",
                "K": 0.03,
                "scale": 50,
                "type": "heal"
            },
            "secondary": {
                "base": "HP",
                "K": 0.24,
                "scale": 400,
                "type": "max heal"
            }
        },

        "icon": "",
        "disabled": 0,


    },
    "232": {
        "id": 232,
        "hero": 46,
        "power": 20,
        "tier": 3,
        "behavior": {
            "animationDelay": 0.56,
            "behavior": "Hero46Totem",
            "cooldown": 15,
            "duration": 8,
            "hits": 8,
            "params": [],
            "prime": {
                "base": "MP",
                "c": 0,
                "K": 0.6,
                "scale": 250,
                "type": "heal"
            }
        },

        "icon": "",
        "disabled": 0,


    },
    "233": {
        "id": 233,
        "hero": 46,
        "power": 20,
        "tier": 4,
        "behavior": {
            "behavior": "ValueSkillModifier",
            "duration": 8,
            "params": [
                {
                    "name": "tier",
                    "value": "3"
                }
            ],
            "prime": {
                "base": "HP",
                "c": -10000,
                "K": 0.15,
                "scale": 400,
                "type": "heal"
            }
        },

        "icon": "",
        "disabled": 0,


    },
    "234": {
        "id": 234,
        "hero": 47,
        "power": 0,
        "tier": 0,
        "behavior": {
            "animationDelay": 0.32,
            "area": 47,
            "behavior": "Melee",
            "cooldown": 5.2,
            "params": [],
            "prime": {
                "base": "PA",
                "type": "physical"
            },
            "range": 100
        },

        "icon": "",
        "disabled": 0,


    },
    "235": {
        "id": 235,
        "hero": 47,
        "power": 20,
        "tier": 1,
        "behavior": {
            "animationDelay": 1.05,
            "area": 100,
            "behavior": "Hero47Ult",
            "duration": 3,
            "effect": "stun",
            "hitrate": 1,
            "params": [],
            "prime": {
                "base": "PA",
                "K": 1.1,
                "scale": 100,
                "type": "physical"
            },
            "range": 590
        },

        "icon": "",
        "disabled": 0,


    },
    "236": {
        "id": 236,
        "hero": 47,
        "power": 20,
        "tier": 2,
        "behavior": {
            "behavior": "Hero47MovementProtection",
            "hitrate": 1,
            "params": [],
            "prime": {
                "base": "PA",
                "type": "physical"
            }
        },

        "icon": "",
        "disabled": 0,


    },
    "237": {
        "id": 237,
        "hero": 47,
        "power": 20,
        "tier": 3,
        "behavior": {
            "animationDelay": 0.3,
            "behavior": "Hero47StoneCage",
            "cooldown": 10,
            "duration": 2,
            "hitrate": -1,
            "params": [],
            "prime": {
                "base": "PA",
                "c": 0,
                "K": 0.8,
                "scale": 80,
                "type": "physical"
            },
            "range": 400,
            "secondary": {
                "c": 100,
                "type": "minHp %"
            }
        },

        "icon": "",
        "disabled": 0,


    },
    "238": {
        "id": 238,
        "hero": 47,
        "power": 20,
        "tier": 4,
        "behavior": {
            "animationDelay": 0.17,
            "behavior": "Hero47StoneSkin",
            "cooldown": 16,
            "duration": -1,
            "hitrate": -1,
            "params": [],
            "prime": {
                "base": "HP",
                "c": 0,
                "K": 0.15,
                "scale": 150,
                "type": "physical"
            }
        },

        "icon": "",
        "disabled": 0,


    },
    "239": {
        "id": 239,
        "hero": 48,
        "power": 0,
        "tier": 0,
        "behavior": {
            "animationDelay": 0.38,
            "behavior": "Hero48AutoAttack",
            "cooldown": 5.2,
            "params": [],
            "prime": {
                "base": "PA",
                "type": "physical"
            },
            "projectile": {
                "speed": 400,
                "x": 21,
                "y": -69
            },
            "range": 225
        },

        "icon": "",
        "disabled": 0,


    },
    "240": {
        "id": 240,
        "hero": 48,
        "power": 20,
        "tier": 1,
        "behavior": {
            "animationDelay": 0.5,
            "behavior": "Hero48Ult",
            "hitrate": 1,
            "hits": 15,
            "params": [],
            "range": 590
        },

        "icon": "",
        "disabled": 0,


    },
    "241": {
        "id": 241,
        "hero": 48,
        "power": 20,
        "tier": 2,
        "behavior": {
            "animationDelay": 0.45,
            "behavior": "Hero48CritModifier",
            "cooldown": 7,
            "duration": 5,
            "hitrate": -1,
            "params": [],
            "prime": {
                "base": "PA",
                "c": 15,
                "K": 0.001,
                "scale": 0.2,
                "type": "physical"
            }
        },

        "icon": "",
        "disabled": 0,


    },
    "242": {
        "id": 242,
        "hero": 48,
        "power": 20,
        "tier": 3,
        "behavior": {
            "behavior": "ValueSkillModifier",
            "params": [
                {
                    "name": "tier",
                    "value": "2"
                }
            ],
            "prime": {
                "base": "PA",
                "c": 0,
                "K": 0.0012,
                "scale": 0.2,
                "type": "dot"
            }
        },

        "icon": "",
        "disabled": 0,


    },
    "243": {
        "id": 243,
        "hero": 48,
        "power": 20,
        "tier": 4,
        "behavior": {
            "behavior": "ValueSkillModifier",
            "params": [
                {
                    "name": "tier",
                    "value": "1"
                }
            ],
            "prime": {
                "base": "PA",
                "c": 0,
                "K": 0.000595,
                "scale": 0.2,
                "type": "physical"
            }
        },

        "icon": "",
        "disabled": 0,


    },
    "244": {
        "id": 244,
        "hero": 49,
        "power": 0,
        "tier": 0,
        "behavior": {
            "animationDelay": 0.4,
            "behavior": "Hero49AutoAttack",
            "cooldown": 2.6,
            "params": [],
            "prime": {
                "base": "PA",
                "K": 1,
                "type": "physical"
            },
            "projectile": {
                "speed": 650,
                "x": 226,
                "y": -140
            },
            "range": 100
        },

        "icon": "",
        "disabled": 0,


    },
    "245": {
        "id": 245,
        "hero": 49,
        "power": 20,
        "tier": 1,
        "behavior": {
            "animationDelay": 0.5,
            "behavior": "Hero49Ult",
            "duration": 3,
            "hits": 7,
            "params": [],
            "prime": {
                "base": "PA",
                "K": 0.4,
                "scale": 40,
                "type": "physical"
            }
        },

        "icon": "",
        "disabled": 0,


    },
    "246": {
        "id": 246,
        "hero": 49,
        "power": 20,
        "tier": 2,
        "behavior": {
            "behavior": "ValueSkillModifier",
            "duration": 10,
            "hitrate": -1,
            "params": [
                {
                    "name": "tier",
                    "value": "1"
                }
            ],
            "prime": {
                "base": "PA",
                "c": 500,
                "K": 0.4,
                "scale": 40,
                "type": "physicalCritChance +"
            },
            "secondary": {
                "type": "dodge +"
            }
        },

        "icon": "",
        "disabled": 0,


    },
    "247": {
        "id": 247,
        "hero": 49,
        "power": 20,
        "tier": 3,
        "behavior": {
            "behavior": "Hero49PoisonPassive",
            "duration": 5,
            "hits": 10,
            "params": [],
            "prime": {
                "base": "PA",
                "K": 0.33,
                "scale": 30,
                "type": "dot"
            }
        },

        "icon": "",
        "disabled": 0,


    },
    "248": {
        "id": 248,
        "hero": 49,
        "power": 20,
        "tier": 4,
        "behavior": {
            "behavior": "ValueSkillModifier",
            "params": [
                {
                    "name": "tier",
                    "value": "3"
                }
            ],
            "prime": {
                "base": "PA",
                "c": 500,
                "K": 0.2,
                "scale": 30,
                "type": "heal cap --"
            }
        },

        "icon": "",
        "disabled": 0,


    },
    "249": {
        "id": 249,
        "hero": 50,
        "power": 0,
        "tier": 0,
        "behavior": {
            "animationDelay": 0.6,
            "area": 47,
            "behavior": "Melee",
            "cooldown": 4.95,
            "params": [],
            "prime": {
                "base": "PA",
                "type": "physical"
            },
            "range": 50
        },

        "icon": "",
        "disabled": 0,


    },
    "250": {
        "id": 250,
        "hero": 50,
        "power": 20,
        "tier": 1,
        "behavior": {
            "animationDelay": 1.3,
            "area": 150,
            "behavior": "CorvusUlt",
            "duration": 5,
            "hitrate": -1,
            "params": [
                {
                    "name": "undeadPowerAdd",
                    "value": "0.1"
                }
            ],
            "prime": {
                "base": "PA",
                "K": 1,
                "scale": 100,
                "type": "physical"
            },
            "range": 50,
            "secondary": {
                "base": "PA",
                "K": 0.1,
                "scale": 25,
                "type": "armor debuff"
            }
        },

        "icon": "",
        "disabled": 0,


    },
    "251": {
        "id": 251,
        "hero": 50,
        "power": 20,
        "tier": 2,
        "behavior": {
            "animationDelay": 1.2,
            "behavior": "CorvusAttackBuff",
            "cooldown": 16,
            "duration": 10,
            "hitrate": -1,
            "params": [],
            "prime": {
                "base": "PA",
                "K": 0.25,
                "scale": 15,
                "type": "attack buff"
            }
        },

        "icon": "",
        "disabled": 0,


    },
    "252": {
        "id": 252,
        "hero": 50,
        "power": 20,
        "tier": 3,
        "behavior": {
            "animationDelay": 0.5,
            "behavior": "CorvusAltar",
            "cooldown": 30,
            "cooldownInitial": 10,
            "hitrate": -1,
            "params": [],
            "prime": {
                "base": "HP",
                "c": -190,
                "K": 0.012,
                "scale": 10,
                "type": "dot"
            },
            "secondary": {
                "base": "HP",
                "K": 0.9,
                "scale": 200,
                "type": "max health"
            }
        },

        "icon": "",
        "disabled": 0,


    },
    "253": {
        "id": 253,
        "hero": 50,
        "power": 20,
        "tier": 4,
        "behavior": {
            "animationDelay": 0.7333,
            "behavior": "CorvusTeleport",
            "cooldown": 8,
            "cooldownInitial": 1,
            "hitrate": 1,
            "params": [
                {
                    "name": "hpPercentThreshold",
                    "value": "0.2"
                }
            ],
            "prime": {
                "base": "PA",
                "K": 1,
                "type": "pa buff"
            }
        },

        "icon": "",
        "disabled": 0,


    },
    "254": {
        "id": 254,
        "hero": 4,
        "power": 0,
        "tier": 0,
        "behavior": {
            "animationDelay": 0.63,
            "area": 47,
            "behavior": "Melee",
            "cooldown": 6,
            "params": [],
            "prime": {
                "base": "PA",
                "type": "physical"
            },
            "range": 100
        },

        "icon": "",
        "disabled": 0,


    },
    "255": {
        "id": 255,
        "hero": 4,
        "power": 20,
        "tier": 1,
        "behavior": {
            "animationDelay": 0.63,
            "behavior": "UltAbaddon",
            "duration": -1,
            "hitrate": -1,
            "params": [],
            "prime": {
                "base": "MP",
                "c": 1000,
                "K": 1,
                "scale": 100,
                "type": "physical"
            }
        },

        "icon": "",
        "disabled": 0,


    },
    "256": {
        "id": 256,
        "hero": 4,
        "power": 20,
        "tier": 2,
        "behavior": {
            "animationDelay": 0.52,
            "behavior": "FurthestAoeBurnEnergy",
            "cooldown": 16,
            "hitrate": 1,
            "params": [],
            "prime": {
                "c": 25,
                "scale": 0.1,
                "type": "energy %"
            },
            "range": 150
        },

        "icon": "",
        "disabled": 0,


    },
    "257": {
        "id": 257,
        "hero": 4,
        "power": 20,
        "tier": 3,
        "behavior": {
            "animationDelay": 0.35,
            "behavior": "ChainedChalices",
            "duration": 11,
            "hitrate": -1,
            "params": [],
            "prime": {
                "c": 35,
                "scale": 0.1,
                "type": "retarget %"
            },
            "secondary": {
                "c": 15,
                "scale": 0.15,
                "type": "mitigation %"
            }
        },

        "icon": "",
        "disabled": 0,


    },
    "258": {
        "id": 258,
        "hero": 4,
        "power": 20,
        "tier": 4,
        "behavior": {
            "animationDelay": 0.92,
            "area": 400,
            "behavior": "ValueSkillModifier",
            "duration": 2.5,
            "params": [
                {
                    "name": "tier",
                    "value": "3"
                }
            ],
            "prime": {
                "c": 0,
                "type": "target hp %"
            },
            "secondary": {
                "base": "MP",
                "c": 5000,
                "K": 1,
                "scale": 250,
                "type": "+ hp"
            }
        },

        "icon": "",
        "disabled": 0,


    },
    "259": {
        "id": 259,
        "hero": 3,
        "power": 0,
        "tier": 0,
        "behavior": {
            "animationDelay": 0.46,
            "behavior": "Hero03AutoAttack",
            "cooldown": 4.65,
            "params": [],
            "prime": {
                "base": "PA",
                "type": "physical"
            },
            "projectile": {
                "speed": 1500,
                "x": -46,
                "y": -176
            },
            "range": 200
        },

        "icon": "",
        "disabled": 0,


    },
    "260": {
        "id": 260,
        "hero": 3,
        "power": 20,
        "tier": 1,
        "behavior": {
            "animationDelay": 1.95,
            "behavior": "Hero03Ult",
            "duration": 4,
            "effect": "silence",
            "hitrate": 1,
            "params": [],
            "prime": {
                "base": "PA",
                "K": 0.3,
                "scale": 50,
                "type": "physical"
            },
            "projectile": {
                "speed": 600,
                "x": 61,
                "y": -145
            },
            "secondary": {
                "c": 1,
                "type": "effectOnReturn"
            }
        },

        "icon": "",
        "disabled": 0,


    },
    "261": {
        "id": 261,
        "hero": 3,
        "power": 20,
        "tier": 2,
        "behavior": {
            "animationDelay": 0.87,
            "behavior": "SelfEffect",
            "cooldown": 25,
            "cooldownInitial": 11,
            "duration": 5,
            "effect": "speed",
            "hitrate": -1,
            "params": [],
            "prime": {
                "c": 170,
                "scale": 1
            }
        },

        "icon": "",
        "disabled": 0,


    },
    "262": {
        "id": 262,
        "hero": 3,
        "power": 20,
        "tier": 3,
        "behavior": {
            "behavior": "ValueSkillModifier",
            "hitrate": 1,
            "params": [
                {
                    "name": "tier",
                    "value": "0"
                }
            ],
            "prime": {
                "c": 25,
                "type": "ricochetDamage %"
            }
        },

        "icon": "",
        "disabled": 0,


    },
    "263": {
        "id": 263,
        "hero": 3,
        "power": 20,
        "tier": 4,
        "behavior": {
            "behavior": "Hero03ArmorPenetrationBonus",
            "hitrate": -1,
            "params": [],
            "prime": {
                "base": "PA",
                "K": 0.1,
                "scale": 50,
                "type": "bonusDamage"
            }
        },

        "icon": "",
        "disabled": 0,


    },
    "264": {
        "id": 264,
        "hero": 28,
        "power": 0,
        "tier": 0,
        "behavior": {
            "animationDelay": 0.5,
            "area": 47,
            "behavior": "DemonSpearAutoAttack",
            "cooldown": 5,
            "params": [],
            "prime": {
                "base": "PA",
                "type": "physical"
            },
            "range": 125
        },

        "icon": "",
        "disabled": 0,


    },
    "265": {
        "id": 265,
        "hero": 28,
        "power": 20,
        "tier": 1,
        "behavior": {
            "animationDelay": 0.05,
            "area": 150,
            "behavior": "DemonSpearUlt",
            "duration": 5,
            "hitrate": -1,
            "params": [],
            "prime": {
                "base": "PA",
                "K": 0.3,
                "scale": 75,
                "type": "physical"
            },
            "range": 125,
            "secondary": {
                "base": "PA",
                "K": 0.2,
                "scale": 30,
                "type": "dot"
            }
        },

        "icon": "",
        "disabled": 0,


    },
    "266": {
        "id": 266,
        "hero": 28,
        "power": 20,
        "tier": 2,
        "behavior": {
            "animationDelay": 0.58,
            "area": 440,
            "behavior": "DemonSpearBlind",
            "cooldown": 15,
            "duration": 3,
            "effect": "Blindness",
            "hitrate": 1,
            "params": [],
            "prime": {
                "base": "PA",
                "K": 0.2,
                "scale": 30,
                "type": "physical"
            }
        },

        "icon": "",
        "disabled": 0,


    },
    "267": {
        "id": 267,
        "hero": 28,
        "power": 20,
        "tier": 3,
        "behavior": {
            "animationDelay": 1.1,
            "area": 47,
            "behavior": "DemonSpearPercentage",
            "cooldown": 23,
            "cooldownInitial": 7,
            "params": [],
            "prime": {
                "c": 8,
                "scale": 0.1,
                "type": "dot % from current  hp"
            },
            "range": 125
        },

        "icon": "",
        "disabled": 0,


    },
    "268": {
        "id": 268,
        "hero": 28,
        "power": 20,
        "tier": 4,
        "behavior": {
            "behavior": "ValueSkillModifier",
            "params": [
                {
                    "name": "tier",
                    "value": "0"
                }
            ],
            "prime": {
                "c": -50,
                "scale": 4,
                "type": "armorDecrease"
            }
        },

        "icon": "",
        "disabled": 0,


    },
    "269": {
        "id": 269,
        "hero": 2,
        "power": 0,
        "tier": 0,
        "behavior": {
            "animationDelay": 0.37,
            "area": 47,
            "behavior": "Melee",
            "cooldown": 5.85,
            "params": [],
            "prime": {
                "base": "PA",
                "type": "physical"
            },
            "range": 100
        },

        "icon": "",
        "disabled": 0,


    },
    "270": {
        "id": 270,
        "hero": 2,
        "power": 20,
        "tier": 1,
        "behavior": {
            "animationDelay": 0.75,
            "area": 120,
            "behavior": "Hero02Ult",
            "params": [],
            "prime": {
                "base": "PA",
                "K": 0.3,
                "scale": 60,
                "type": "physical"
            },
            "range": 100
        },

        "icon": "",
        "disabled": 0,


    },
    "271": {
        "id": 271,
        "hero": 2,
        "power": 20,
        "tier": 2,
        "behavior": {
            "animationDelay": 0.2,
            "behavior": "Hero02Charge",
            "cooldown": 28,
            "cooldownInitial": 12,
            "effect": "knockback(45,0.15)",
            "hitrate": -1,
            "params": [],
            "prime": {
                "base": "PA",
                "K": 0.5,
                "scale": 50,
                "type": "physical"
            },
            "range": 100
        },

        "icon": "",
        "disabled": 0,


    },
    "272": {
        "id": 272,
        "hero": 2,
        "power": 20,
        "tier": 3,
        "behavior": {
            "animationDelay": 0.55,
            "behavior": "Hero02LowestHpTargetAttack",
            "cooldown": 20.5,
            "params": [],
            "prime": {
                "base": "PA",
                "c": -1000,
                "K": 0.8,
                "scale": 50,
                "type": "physical"
            }
        },

        "icon": "",
        "disabled": 0,


    },
    "273": {
        "id": 273,
        "hero": 2,
        "power": 20,
        "tier": 4,
        "behavior": {
            "behavior": "ValueSkillModifier",
            "hitrate": -1,
            "params": [
                {
                    "name": "tier",
                    "value": "1"
                }
            ],
            "prime": {
                "base": "PA",
                "K": 0.2,
                "scale": 25,
                "type": "dot"
            }
        },

        "icon": "",
        "disabled": 0,


    },
    "274": {
        "id": 274,
        "hero": 14,
        "power": 0,
        "tier": 0,
        "behavior": {
            "animationDelay": 0.41,
            "behavior": "Hero14AutoAttack",
            "cooldown": 5.4,
            "params": [],
            "prime": {
                "base": "PA",
                "type": "physical"
            },
            "projectile": {
                "speed": 800,
                "x": 63,
                "y": -164
            },
            "range": 350
        },

        "icon": "",
        "disabled": 0,


    },
    "275": {
        "id": 275,
        "hero": 14,
        "power": 20,
        "tier": 1,
        "behavior": {
            "animationDelay": 0.78,
            "behavior": "Hero14Ult",
            "effect": "knockback(200,0.2)",
            "hitrate": -1,
            "params": [],
            "prime": {
                "base": "PA",
                "K": 1.5,
                "scale": 100,
                "type": "physical"
            },
            "projectile": {
                "speed": 1050,
                "x": 63,
                "y": -169
            },
            "range": 350
        },

        "icon": "",
        "disabled": 0,


    },
    "276": {
        "id": 276,
        "hero": 14,
        "power": 20,
        "tier": 2,
        "behavior": {
            "animationDelay": 0.41,
            "area": 100,
            "behavior": "Hero14Blind",
            "cooldown": 15,
            "duration": 6,
            "effect": "Blindness",
            "hitrate": 1,
            "params": [],
            "projectile": {
                "speed": 700,
                "x": 63,
                "y": -169
            },
            "range": 350
        },

        "icon": "",
        "disabled": 0,


    },
    "277": {
        "id": 277,
        "hero": 14,
        "power": 20,
        "tier": 3,
        "behavior": {
            "animationDelay": 1.867,
            "behavior": "Hero14Turret",
            "cooldown": 23.5,
            "duration": 2,
            "hits": 6,
            "params": [],
            "prime": {
                "base": "PA",
                "K": 0.15,
                "scale": 35,
                "type": "physical"
            },
            "projectile": {
                "speed": 700,
                "x": 130,
                "y": -70
            },
            "range": 350
        },

        "icon": "",
        "disabled": 0,


    },
    "278": {
        "id": 278,
        "hero": 14,
        "power": 20,
        "tier": 4,
        "behavior": {
            "behavior": "ValueSkillModifier",
            "duration": 5,
            "effect": "stun",
            "hitrate": 1,
            "params": [
                {
                    "name": "tier",
                    "value": "1"
                }
            ],
            "range": 350
        },

        "icon": "",
        "disabled": 0,


    },
    "279": {
        "id": 279,
        "hero": 23,
        "power": 0,
        "tier": 0,
        "behavior": {
            "animationDelay": 0.45,
            "behavior": "Projectile",
            "cooldown": 4.65,
            "params": [],
            "prime": {
                "base": "PA",
                "type": "physical"
            },
            "projectile": {
                "speed": 500,
                "x": 108,
                "y": -119
            },
            "range": 350
        },

        "icon": "",
        "disabled": 0,


    },
    "280": {
        "id": 280,
        "hero": 23,
        "power": 20,
        "tier": 1,
        "behavior": {
            "animationDelay": 1.3,
            "behavior": "UltTailed",
            "duration": 7,
            "hitrate": 1,
            "params": []
        },

        "icon": "",
        "disabled": 0,


    },
    "281": {
        "id": 281,
        "hero": 23,
        "power": 20,
        "tier": 2,
        "behavior": {
            "animationDelay": 0.75,
            "area": 100,
            "behavior": "TailedSphere",
            "cooldown": 14.5,
            "hits": 5,
            "params": [],
            "prime": {
                "base": "MP",
                "K": 0.5,
                "scale": 50,
                "type": "dot"
            },
            "projectile": {
                "speed": 500,
                "x": 81,
                "y": -132
            }
        },

        "icon": "",
        "disabled": 0,


    },
    "282": {
        "id": 282,
        "hero": 23,
        "power": 20,
        "tier": 3,
        "behavior": {
            "animationDelay": 0.73,
            "behavior": "TailedBurst",
            "cooldown": 18,
            "hits": 5,
            "params": [],
            "prime": {
                "base": "MP",
                "K": 0.3,
                "scale": 30,
                "type": "magic"
            },
            "projectile": {
                "speed": 500,
                "x": 44,
                "y": -270
            }
        },

        "icon": "",
        "disabled": 0,


    },
    "283": {
        "id": 283,
        "hero": 23,
        "power": 20,
        "tier": 4,
        "behavior": {
            "animationDelay": 0.5,
            "behavior": "TailedPassive",
            "duration": 4,
            "hitrate": 1,
            "params": []
        },

        "icon": "",
        "disabled": 0,


    },
    "284": {
        "id": 284,
        "hero": 8,
        "power": 0,
        "tier": 0,
        "behavior": {
            "animationDelay": 0.56,
            "behavior": "DaredevilAutoAttack",
            "cooldown": 4.8,
            "params": [],
            "prime": {
                "base": "PA",
                "type": "physical"
            },
            "projectile": {
                "speed": 700,
                "x": 119,
                "y": -139
            },
            "range": 325
        },

        "icon": "",
        "disabled": 0,


    },
    "285": {
        "id": 285,
        "hero": 8,
        "power": 20,
        "tier": 1,
        "behavior": {
            "animationDelay": 1.18,
            "area": 270,
            "behavior": "Hero08Ult",
            "duration": 7,
            "hitrate": -1,
            "hits": 14,
            "params": [],
            "prime": {
                "base": "PA",
                "K": 0.5,
                "scale": 30,
                "type": "physical"
            },
            "projectile": {
                "speed": 600,
                "x": 58,
                "y": 0
            },
            "secondary": {
                "base": "PA",
                "K": 0.1,
                "scale": 9,
                "type": "dot"
            }
        },

        "icon": "",
        "disabled": 0,


    },
    "286": {
        "id": 286,
        "hero": 8,
        "power": 20,
        "tier": 2,
        "behavior": {
            "animationDelay": 0.48,
            "area": 200,
            "behavior": "Hero08Taser",
            "cooldown": 8,
            "duration": 3,
            "effect": "freeze(0.5)",
            "hitrate": -1,
            "params": [],
            "prime": {
                "base": "PA",
                "K": 0.25,
                "scale": 60,
                "type": "physical"
            },
            "projectile": {
                "speed": 700,
                "x": 194,
                "y": -120
            }
        },

        "icon": "",
        "disabled": 0,


    },
    "287": {
        "id": 287,
        "hero": 8,
        "power": 20,
        "tier": 3,
        "behavior": {
            "animationDelay": 0.45,
            "area": 100,
            "behavior": "Hero08Grenade",
            "cooldown": 18,
            "duration": 5,
            "hitrate": -1,
            "hits": 10,
            "params": [],
            "prime": {
                "base": "PA",
                "K": 0.13,
                "scale": 35,
                "type": "physical"
            },
            "projectile": {
                "speed": 350,
                "x": 180,
                "y": -110
            },
            "range": 325,
            "secondary": {
                "base": "PA",
                "K": 0.1,
                "scale": 9,
                "type": "dot"
            }
        },

        "icon": "",
        "disabled": 0,


    },
    "288": {
        "id": 288,
        "hero": 8,
        "power": 20,
        "tier": 4,
        "behavior": {
            "behavior": "Hero08Passive",
            "params": [],
            "prime": {
                "base": "PA",
                "K": 0.3,
                "scale": 80,
                "type": "physical"
            }
        },

        "icon": "",
        "disabled": 0,


    },
    "289": {
        "id": 289,
        "hero": 11,
        "power": 0,
        "tier": 0,
        "behavior": {
            "animationDelay": 0.47,
            "area": 47,
            "behavior": "Melee",
            "cooldown": 5.1,
            "params": [],
            "prime": {
                "base": "PA",
                "type": "physical"
            },
            "range": 50
        },

        "icon": "",
        "disabled": 0,


    },
    "290": {
        "id": 290,
        "hero": 11,
        "power": 20,
        "tier": 1,
        "behavior": {
            "animationDelay": 0.33,
            "behavior": "UltGlutton",
            "duration": 6,
            "hits": 6,
            "params": [],
            "prime": {
                "base": "PA",
                "K": 1.5,
                "scale": 80,
                "type": "dot"
            },
            "range": 80
        },

        "icon": "",
        "disabled": 0,


    },
    "291": {
        "id": 291,
        "hero": 11,
        "power": 20,
        "tier": 2,
        "behavior": {
            "animationDelay": 0.48,
            "area": 120,
            "behavior": "GluttonMagmaBlastByArea",
            "cooldown": 11.5,
            "duration": 4,
            "effect": "freeze(0.5)",
            "hitrate": -1,
            "params": [],
            "prime": {
                "base": "PA",
                "K": 0.35,
                "scale": 40,
                "type": "physical"
            },
            "projectile": {
                "speed": 700,
                "x": 130,
                "y": -126
            },
            "range": 100,
            "secondary": {
                "scale": 0
            }
        },

        "icon": "",
        "disabled": 0,


    },
    "292": {
        "id": 292,
        "hero": 11,
        "power": 20,
        "tier": 3,
        "behavior": {
            "animationDelay": 1.3,
            "behavior": "GluttonShield",
            "params": [],
            "prime": {
                "base": "PA",
                "K": 0.1,
                "scale": 10
            }
        },

        "icon": "",
        "disabled": 0,


    },
    "293": {
        "id": 293,
        "hero": 11,
        "power": 20,
        "tier": 4,
        "behavior": {
            "behavior": "ValueSkillModifier",
            "params": [
                {
                    "name": "tier",
                    "value": "1"
                }
            ],
            "prime": {
                "c": -20,
                "scale": 1
            }
        },

        "icon": "",
        "disabled": 0,


    },
    "294": {
        "id": 294,
        "hero": 21,
        "power": 0,
        "tier": 0,
        "behavior": {
            "animationDelay": 0.46,
            "area": 47,
            "behavior": "Melee",
            "cooldown": 5.4,
            "params": [],
            "prime": {
                "base": "PA",
                "type": "physical"
            },
            "range": 100
        },

        "icon": "",
        "disabled": 0,


    },
    "295": {
        "id": 295,
        "hero": 21,
        "power": 20,
        "tier": 1,
        "behavior": {
            "animationDelay": 0.85,
            "behavior": "UltPaladin",
            "duration": 5,
            "hitrate": -1,
            "params": [],
            "prime": {
                "base": "MP",
                "K": 1.3,
                "scale": 110,
                "type": "shield"
            },
            "range": 375
        },

        "icon": "",
        "disabled": 1,


    },
    "296": {
        "id": 296,
        "hero": 21,
        "power": 20,
        "tier": 2,
        "behavior": {
            "animationDelay": 1,
            "behavior": "PaladinDualWave",
            "cooldown": 13,
            "params": [],
            "prime": {
                "base": "MP",
                "K": 0.35,
                "scale": 40,
                "type": "magic"
            },
            "projectile": {
                "speed": 600,
                "x": 123,
                "y": -115
            },
            "range": 375,
            "secondary": {
                "base": "MP",
                "K": 0.35,
                "scale": 40,
                "type": "heal"
            }
        },

        "icon": "",
        "disabled": 0,


    },
    "297": {
        "id": 297,
        "hero": 21,
        "power": 20,
        "tier": 3,
        "behavior": {
            "animationDelay": 0.66,
            "behavior": "PaladinHeal",
            "cooldown": 18,
            "params": [],
            "prime": {
                "base": "MP",
                "c": -2500,
                "K": 0.65,
                "scale": 150,
                "type": "heal"
            }
        },

        "icon": "",
        "disabled": 0,


    },
    "298": {
        "id": 298,
        "hero": 21,
        "power": 20,
        "tier": 4,
        "behavior": {
            "animationDelay": 0.8,
            "behavior": "PaladinPassive",
            "params": [],
            "prime": {
                "c": -6,
                "scale": 0.4
            }
        },

        "icon": "",
        "disabled": 0,


    },
    "299": {
        "id": 299,
        "hero": 16,
        "power": 0,
        "tier": 0,
        "behavior": {
            "animationDelay": 0.6,
            "behavior": "Projectile",
            "cooldown": 4.9,
            "params": [],
            "prime": {
                "base": "PA",
                "type": "physical"
            },
            "projectile": {
                "speed": 750,
                "x": 138,
                "y": -144
            },
            "range": 175
        },

        "icon": "",
        "disabled": 0,


    },
    "300": {
        "id": 300,
        "hero": 16,
        "power": 20,
        "tier": 1,
        "behavior": {
            "animationDelay": 0.9,
            "behavior": "Hero16Ult",
            "effect": "knockback(110,0.15)",
            "hitrate": -1,
            "hits": 4,
            "params": [],
            "prime": {
                "base": "PA",
                "K": 2.2,
                "scale": 100,
                "type": "physical"
            }
        },

        "icon": "",
        "disabled": 1,


    },
    "301": {
        "id": 301,
        "hero": 16,
        "power": 20,
        "tier": 2,
        "behavior": {
            "animationDelay": 0.5,
            "behavior": "Hero16Buff",
            "cooldown": 18,
            "cooldownInitial": 5,
            "duration": 5,
            "hitrate": -1,
            "params": [],
            "prime": {
                "base": "PA",
                "K": 0.18,
                "scale": 3,
                "type": "dodge +"
            }
        },

        "icon": "",
        "disabled": 0,


    },
    "302": {
        "id": 302,
        "hero": 16,
        "power": 20,
        "tier": 3,
        "behavior": {
            "animationDelay": 0.71,
            "behavior": "Hero16Revenge",
            "cooldown": 1,
            "params": [
                {
                    "name": "counterattackCooldown",
                    "value": "7"
                }
            ],
            "prime": {
                "base": "PA",
                "K": 1.1,
                "scale": 100,
                "type": "physical"
            },
            "projectile": {
                "speed": 750,
                "x": 168,
                "y": -170
            },
            "secondary": {
                "c": 5
            }
        },

        "icon": "",
        "disabled": 0,


    },
    "303": {
        "id": 303,
        "hero": 16,
        "power": 20,
        "tier": 4,
        "behavior": {
            "behavior": "ValueSkillsModifier",
            "duration": 5,
            "hitrate": -1,
            "params": [
                {
                    "name": "tiers",
                    "value": "1,3"
                }
            ],
            "prime": {
                "base": "PA",
                "c": -292,
                "K": 0.07,
                "scale": 8,
                "type": "primeStatDecrease"
            }
        },

        "icon": "",
        "disabled": 0,


    },
    "304": {
        "id": 304,
        "hero": 51,
        "power": 0,
        "tier": 0,
        "behavior": {
            "animationDelay": 0.48,
            "behavior": "MorriganAutoAttack",
            "cooldown": 5.2,
            "params": [],
            "prime": {
                "base": "PA",
                "K": 1,
                "scale": 75,
                "type": "physical"
            },
            "projectile": {
                "speed": 600,
                "x": 73,
                "y": -194
            },
            "range": 200
        },

        "icon": "",
        "disabled": 0,


    },
    "305": {
        "id": 305,
        "hero": 51,
        "power": 20,
        "tier": 1,
        "behavior": {
            "animationDelay": 0.5,
            "behavior": "MorriganUlt",
            "hitrate": -1,
            "hits": 3,
            "params": [
                {
                    "name": "skeletonConfig",
                    "value": "{\"range\": {\"melee\": 15, \"archer\": 50}, \"resistPercent\": 0.1, \"limit\": 6}"
                }
            ],
            "prime": {
                "base": "MP",
                "K": 0.3,
                "scale": 25,
                "type": "physical"
            },
            "secondary": {
                "base": "MP",
                "K": 1.3,
                "scale": 190,
                "type": "health"
            }
        },

        "icon": "",
        "disabled": 0,


    },
    "306": {
        "id": 306,
        "hero": 51,
        "power": 20,
        "tier": 2,
        "behavior": {
            "animationDelay": 0.55,
            "behavior": "MorriganBoneArmor",
            "cooldown": 16,
            "duration": 10,
            "hitrate": -1,
            "hits": 10,
            "params": [],
            "prime": {
                "base": "MP",
                "K": 0.5,
                "scale": 100,
                "type": "heal"
            },
            "secondary": {
                "base": "MP",
                "K": 0.2,
                "scale": 15,
                "type": "armor"
            }
        },

        "icon": "",
        "disabled": 0,


    },
    "307": {
        "id": 307,
        "hero": 51,
        "power": 20,
        "tier": 3,
        "behavior": {
            "animationDelay": 0.55,
            "behavior": "MorriganUndeadHeal",
            "cooldown": 1,
            "duration": -1,
            "hitrate": -1,
            "params": [
                {
                    "name": "hpPercentThreshold",
                    "y": "0.2"
                },
                {
                    "name": "healCooldown",
                    "value": "8"
                }
            ],
            "prime": {
                "base": "MP",
                "K": 0.95,
                "scale": 200,
                "type": "heal"
            }
        },

        "icon": "",
        "disabled": 0,


    },
    "308": {
        "id": 308,
        "hero": 51,
        "power": 20,
        "tier": 4,
        "behavior": {
            "behavior": "ValueSkillModifier",
            "duration": -1,
            "params": [
                {
                    "name": "tier",
                    "value": "1"
                }
            ],
            "prime": {
                "base": "MP",
                "c": 250,
                "K": 0.15,
                "scale": 30,
                "type": "damage bonus"
            }
        },

        "icon": "",
        "disabled": 0,


    },
    "309": {
        "id": 309,
        "hero": 52,
        "power": 0,
        "tier": 0,
        "behavior": {
            "animationDelay": 0.2,
            "behavior": "Hero52AutoAttack",
            "cooldown": 3.9,
            "params": [],
            "prime": {
                "base": "PA",
                "type": "physical"
            },
            "projectile": {
                "speed": 600,
                "x": 153,
                "y": -179
            },
            "range": 225
        },

        "icon": "",
        "disabled": 0,


    },
    "310": {
        "id": 310,
        "hero": 52,
        "power": 20,
        "tier": 1,
        "behavior": {
            "animationDelay": 1,
            "behavior": "Hero52TierUlt",
            "duration": 4,
            "effect": "silence",
            "hitrate": 1,
            "params": [
                {
                    "name": "statName",
                    "value": "physicalAttack"
                },
                {
                    "name": "engineerMultiplier",
                    "value": "2"
                }
            ],
            "prime": {
                "type": "debuff"
            },
            "projectile": {
                "speed": 1875,
                "x": 0,
                "y": 0
            },
            "range": 590
        },

        "icon": "",
        "disabled": 0,


    },
    "311": {
        "id": 311,
        "hero": 52,
        "power": 20,
        "tier": 2,
        "behavior": {
            "behavior": "Hero52GainEnergyPassive",
            "params": [
                {
                    "name": "energyConvertMultiplier",
                    "value": "4"
                }
            ],
            "prime": {
                "base": "HP",
                "c": 10,
                "K": 0.00012,
                "scale": 0.05,
                "type": "MD calculate %"
            },
            "secondary": {
                "base": "HP",
                "c": 5,
                "K": 0.00003,
                "scale": 0.01,
                "type": "MD calculate %"
            }
        },

        "icon": "",
        "disabled": 0,


    },
    "312": {
        "id": 312,
        "hero": 52,
        "power": 20,
        "tier": 3,
        "behavior": {
            "behavior": "ValueSkillModifier",
            "duration": 8,
            "hitrate": -1,
            "params": [
                {
                    "name": "tier",
                    "value": "1"
                }
            ],
            "prime": {
                "base": "PA",
                "c": -90,
                "K": 0.12,
                "scale": 10,
                "type": "pa buff"
            }
        },

        "icon": "",
        "disabled": 0,


    },
    "313": {
        "id": 313,
        "hero": 52,
        "power": 20,
        "tier": 4,
        "behavior": {
            "behavior": "ValueSkillModifier",
            "params": [
                {
                    "name": "tier",
                    "value": "1"
                }
            ],
            "prime": {
                "base": "PA",
                "c": 10,
                "K": 1.1,
                "scale": 50,
                "type": "physical"
            }
        },

        "icon": "",
        "disabled": 0,


    },
    "314": {
        "id": 314,
        "hero": 53,
        "power": 0,
        "tier": 0,
        "behavior": {
            "animationDelay": 0.8333333333,
            "behavior": "Projectile",
            "cooldown": 4.7,
            "params": [],
            "prime": {
                "base": "PA",
                "K": 1,
                "type": "physical"
            },
            "projectile": {
                "speed": 650,
                "x": 107,
                "y": -126
            },
            "range": 150
        },

        "icon": "",
        "disabled": 0,


    },
    "315": {
        "id": 315,
        "hero": 53,
        "power": 20,
        "tier": 1,
        "behavior": {
            "animationDelay": 1,
            "behavior": "CentaurAttackProtectionUlt",
            "hitrate": 1,
            "params": [
                {
                    "name": "absorbPercent",
                    "value": "100"
                }
            ],
            "prime": {
                "base": "HP",
                "K": 1,
                "scale": 100,
                "type": "shieldCap"
            }
        },

        "icon": "",
        "disabled": 0,


    },
    "316": {
        "id": 316,
        "hero": 53,
        "power": 20,
        "tier": 2,
        "behavior": {
            "animationDelay": 1.35,
            "area": 100,
            "behavior": "CentaurAttackDebuff",
            "cooldown": 8,
            "duration": 5,
            "hitrate": 1,
            "params": [
                {
                    "name": "statName",
                    "value": "magicResist"
                }
            ],
            "prime": {
                "base": "MP",
                "K": 0.45,
                "scale": 65,
                "type": "magic"
            },
            "range": 400,
            "secondary": {
                "base": "MP",
                "c": 70,
                "K": 0.08,
                "scale": 5,
                "type": "debuff"
            }
        },

        "icon": "",
        "disabled": 0,


    },
    "317": {
        "id": 317,
        "hero": 53,
        "power": 20,
        "tier": 3,
        "behavior": {
            "animationDelay": 1,
            "behavior": "CentaurLifeRune",
            "cooldown": 12,
            "duration": 4,
            "hitrate": -1,
            "hits": 4,
            "params": [
                {
                    "name": "healDelay",
                    "value": "1"
                },
                {
                    "name": "elfHealMultiplier",
                    "value": "2"
                }
            ],
            "prime": {
                "base": "MP",
                "K": 0.45,
                "scale": 70,
                "type": "heal"
            }
        },

        "icon": "",
        "disabled": 0,


    },
    "318": {
        "id": 318,
        "hero": 53,
        "power": 20,
        "tier": 4,
        "behavior": {
            "behavior": "ValueSkillModifier",
            "hitrate": 1,
            "params": [
                {
                    "name": "tier",
                    "value": "1"
                }
            ],
            "prime": {
                "base": "HP",
                "K": 0.3,
                "scale": 20,
                "type": "shieldPart"
            }
        },

        "icon": "",
        "disabled": 0,


    },
    "329": {
        "id": 329,
        "hero": 6,
        "power": 0,
        "tier": 0,
        "behavior": {
            "animationDelay": 0.75,
            "behavior": "Projectile",
            "cooldown": 5.2,
            "params": [],
            "prime": {
                "base": "PA",
                "type": "physical"
            },
            "projectile": {
                "speed": 900,
                "x": 63,
                "y": -183
            },
            "range": 375
        },

        "icon": "",
        "disabled": 0,


    },
    "330": {
        "id": 330,
        "hero": 6,
        "power": 20,
        "tier": 1,
        "behavior": {
            "animationDelay": 1.23,
            "behavior": "UltDreamDevourerShort",
            "duration": 6.6,
            "hitrate": -1,
            "hits": 6,
            "params": [],
            "prime": {
                "base": "MP",
                "K": 0.25,
                "scale": 60,
                "type": "magic"
            }
        },

        "icon": "",
        "disabled": 0,


    },
    "331": {
        "id": 331,
        "hero": 6,
        "power": 20,
        "tier": 2,
        "behavior": {
            "animationDelay": 0.68,
            "behavior": "NearestDotDebuff",
            "cooldown": 10.5,
            "duration": 3,
            "hitrate": 1,
            "params": [
                {
                    "name": "statName",
                    "value": "physicalAttack"
                }
            ],
            "prime": {
                "base": "MP",
                "K": 0.55,
                "scale": 65,
                "type": "dot"
            },
            "range": 375,
            "secondary": {
                "base": "MP",
                "c": 25,
                "K": 0.2,
                "scale": 7.5,
                "type": "stat decrease"
            }
        },

        "icon": "",
        "disabled": 0,


    },
    "332": {
        "id": 332,
        "hero": 6,
        "power": 20,
        "tier": 3,
        "behavior": {
            "animationDelay": 1,
            "behavior": "StealHpToTeammate",
            "cooldown": 18,
            "params": [],
            "prime": {
                "base": "MP",
                "K": 0.4,
                "scale": 50,
                "type": "magic"
            }
        },

        "icon": "",
        "disabled": 0,


    },
    "333": {
        "id": 333,
        "hero": 6,
        "power": 20,
        "tier": 4,
        "behavior": {
            "behavior": "ValueSkillModifier",
            "params": [
                {
                    "name": "tier",
                    "value": "1"
                }
            ],
            "prime": {
                "c": -300,
                "scale": 15
            },
            "secondary": {
                "base": "MP",
                "K": 0.6,
                "scale": 60,
                "type": "magic"
            }
        },

        "icon": "",
        "disabled": 0,


    },
    "334": {
        "id": 334,
        "hero": 9,
        "power": 0,
        "tier": 0,
        "behavior": {
            "animationDelay": 0.3,
            "behavior": "Projectile",
            "cooldown": 4.05,
            "params": [],
            "prime": {
                "base": "PA",
                "type": "physical"
            },
            "projectile": {
                "speed": 800,
                "x": 59,
                "y": -62
            },
            "range": 250
        },

        "icon": "",
        "disabled": 0,


    },
    "335": {
        "id": 335,
        "hero": 9,
        "power": 20,
        "tier": 1,
        "behavior": {
            "animationDelay": 0.86,
            "area": 300,
            "behavior": "UltPoisoner",
            "duration": 3,
            "params": [],
            "prime": {
                "base": "MP",
                "K": 0.55,
                "scale": 70,
                "type": "dot"
            },
            "projectile": {
                "speed": 0,
                "x": 116,
                "y": -103
            }
        },

        "icon": "",
        "disabled": 0,


    },
    "336": {
        "id": 336,
        "hero": 9,
        "power": 20,
        "tier": 2,
        "behavior": {
            "animationDelay": 0.33,
            "behavior": "PoisonerPoison",
            "cooldown": 11.5,
            "duration": 5,
            "effect": "Blindness",
            "hitrate": 1,
            "params": [],
            "prime": {
                "base": "MP",
                "K": 0.6,
                "scale": 75,
                "type": "dot"
            },
            "projectile": {
                "speed": 700,
                "x": 70,
                "y": -58
            }
        },

        "icon": "",
        "disabled": 0,


    },
    "337": {
        "id": 337,
        "hero": 9,
        "power": 20,
        "tier": 3,
        "behavior": {
            "animationDelay": 0.51,
            "behavior": "PoisonerSnake",
            "cooldown": 19.5,
            "params": [],
            "prime": {
                "base": "MP",
                "K": 0.7,
                "scale": 100,
                "type": "dot"
            },
            "projectile": {
                "speed": 270,
                "x": 57,
                "y": 9
            }
        },

        "icon": "",
        "disabled": 0,


    },
    "338": {
        "id": 338,
        "hero": 9,
        "power": 20,
        "tier": 4,
        "behavior": {
            "behavior": "PoisonerEnergyPassive",
            "params": [
                {
                    "name": "minApplyTime",
                    "value": "2"
                },
                {
                    "name": "fullApplyTime",
                    "value": "7"
                }
            ],
            "prime": {
                "c": 20,
                "type": "minDodgePercent"
            },
            "secondary": {
                "c": 20,
                "scale": 0.5,
                "type": "fullDodgePercent"
            }
        },

        "icon": "",
        "disabled": 0,


    },
    "339": {
        "id": 339,
        "hero": 5,
        "power": 0,
        "tier": 0,
        "behavior": {
            "animationDelay": 0.26,
            "behavior": "Projectile",
            "cooldown": 4.7,
            "params": [],
            "prime": {
                "base": "PA",
                "type": "physical"
            },
            "projectile": {
                "speed": 650,
                "x": 113,
                "y": -109
            },
            "range": 225
        },

        "icon": "",
        "disabled": 0,


    },
    "340": {
        "id": 340,
        "hero": 5,
        "power": 20,
        "tier": 1,
        "behavior": {
            "animationDelay": 1.21,
            "behavior": "UltMage",
            "duration": 0.5,
            "effect": "Levitation(0.12)",
            "hitrate": 1,
            "params": [],
            "prime": {
                "base": "MP",
                "K": 0.5,
                "scale": 80,
                "type": "magic"
            },
            "projectile": {
                "speed": 300,
                "x": 179,
                "y": -128
            }
        },

        "icon": "",
        "disabled": 0,


    },
    "341": {
        "id": 341,
        "hero": 5,
        "power": 20,
        "tier": 2,
        "behavior": {
            "animationDelay": 0.75,
            "area": 100,
            "behavior": "MageBurst",
            "cooldown": 13.5,
            "params": [],
            "prime": {
                "base": "MP",
                "K": 0.35,
                "scale": 40,
                "type": "magic"
            },
            "range": 225
        },

        "icon": "",
        "disabled": 0,


    },
    "342": {
        "id": 342,
        "hero": 5,
        "power": 20,
        "tier": 3,
        "behavior": {
            "animationDelay": 0.41,
            "area": 100,
            "behavior": "MageBomb",
            "cooldown": 17.5,
            "duration": 3,
            "params": [],
            "prime": {
                "base": "MP",
                "K": 0.3,
                "scale": 50,
                "type": "dot"
            },
            "projectile": {
                "speed": 300,
                "x": 64,
                "y": -103
            },
            "range": 225,
            "secondary": {
                "base": "MP",
                "K": 0.3,
                "scale": 80,
                "type": "magic"
            }
        },

        "icon": "",
        "disabled": 0,


    },
    "343": {
        "id": 343,
        "hero": 5,
        "power": 20,
        "tier": 4,
        "behavior": {
            "behavior": "PassiveSelfBuff",
            "effect": "lifesteal",
            "params": [
                {
                    "name": "statName",
                    "value": "lifesteal"
                }
            ],
            "prime": {
                "c": -20,
                "scale": 1,
                "type": "stat"
            }
        },

        "icon": "",
        "disabled": 0,


    },
    "344": {
        "id": 344,
        "hero": 21,
        "power": 20,
        "tier": 1,
        "behavior": {
            "animationDelay": 0.85,
            "behavior": "UltPaladin",
            "duration": 5,
            "hitrate": -1,
            "params": [],
            "prime": {
                "base": "MP",
                "K": 1.3,
                "scale": 110,
                "type": "shield"
            }
        },

        "icon": "",
        "disabled": 0,


    },
    "345": {
        "id": 345,
        "hero": 12,
        "power": 0,
        "tier": 0,
        "behavior": {
            "animationDelay": 0.9,
            "behavior": "Projectile",
            "cooldown": 4.5,
            "params": [],
            "prime": {
                "base": "PA",
                "type": "physical"
            },
            "projectile": {
                "speed": 700,
                "x": 0,
                "y": -169
            },
            "range": 175
        },

        "icon": "",
        "disabled": 0,


    },
    "346": {
        "id": 346,
        "hero": 12,
        "power": 20,
        "tier": 1,
        "behavior": {
            "animationDelay": 1,
            "area": 150,
            "behavior": "Hero12Ult",
            "duration": 5,
            "effect": "stun",
            "hitrate": -1,
            "params": [],
            "prime": {
                "base": "MP",
                "K": 0.95,
                "scale": 60,
                "type": "magic"
            }
        },

        "icon": "",
        "disabled": 0,


    },
    "347": {
        "id": 347,
        "hero": 12,
        "power": 20,
        "tier": 2,
        "behavior": {
            "animationDelay": 0.8,
            "area": 150,
            "behavior": "Hero12Summon",
            "cooldown": 12,
            "duration": 2,
            "effect": "stun",
            "hitrate": -1,
            "params": [],
            "prime": {
                "base": "MP",
                "K": 0.3,
                "scale": 40,
                "type": "magic"
            },
            "projectile": {
                "speed": 800,
                "x": -300,
                "y": 0
            }
        },

        "icon": "",
        "disabled": 0,


    },
    "348": {
        "id": 348,
        "hero": 12,
        "power": 20,
        "tier": 3,
        "behavior": {
            "animationDelay": 0.5,
            "area": 75,
            "behavior": "Hero12NearestAoe",
            "cooldown": 21.5,
            "hitrate": -1,
            "params": [],
            "prime": {
                "base": "MP",
                "K": 0.25,
                "scale": 30,
                "type": "dot"
            }
        },

        "icon": "",
        "disabled": 0,


    },
    "349": {
        "id": 349,
        "hero": 12,
        "power": 20,
        "tier": 4,
        "behavior": {
            "behavior": "ValueSkillModifier",
            "hitrate": -1,
            "params": [
                {
                    "name": "tier",
                    "value": "1"
                }
            ],
            "prime": {
                "base": "MP",
                "K": 2,
                "scale": 200,
                "type": "dot"
            },
            "secondary": {
                "c": 20,
                "K": 0,
                "type": "dot"
            }
        },

        "icon": "",
        "disabled": 0,


    },
    "350": {
        "id": 350,
        "hero": 16,
        "power": 20,
        "tier": 1,
        "behavior": {
            "animationDelay": 0.9,
            "behavior": "Hero16Ult",
            "effect": "knockback(110,0.15)",
            "hitrate": -1,
            "hits": 4,
            "params": [],
            "prime": {
                "base": "PA",
                "K": 2.2,
                "scale": 100,
                "type": "physical"
            },
            "range": 350
        },

        "icon": "",
        "disabled": 0,


    },
    "1000": {
        "id": 1000,
        "hero": 1000,
        "power": 0,
        "tier": 0,
        "behavior": {
            "animationDelay": 0.7,
            "area": 100,
            "behavior": "MeleeWithFx",
            "cooldown": 4.95,
            "params": [
                {
                    "name": "fxOffset",
                    "value": "160"
                }
            ],
            "prime": {
                "base": "PA",
                "type": "physical"
            },
            "range": 53
        },

        "icon": "",
        "disabled": 0,


    },
    "1001": {
        "id": 1001,
        "hero": 1001,
        "power": 0,
        "tier": 0,
        "behavior": {
            "animationDelay": 0.68,
            "behavior": "Projectile",
            "cooldown": 5.2,
            "params": [],
            "prime": {
                "base": "PA",
                "type": "physical"
            },
            "projectile": {
                "speed": 800,
                "x": 113,
                "y": -127
            },
            "range": 200
        },

        "icon": "",
        "disabled": 0,


    },
    "1002": {
        "id": 1002,
        "hero": 1002,
        "power": 0,
        "tier": 0,
        "behavior": {
            "animationDelay": 0.42,
            "behavior": "Ray",
            "cooldown": 5.5,
            "params": [],
            "prime": {
                "base": "MP",
                "type": "magic"
            },
            "range": 375
        },

        "icon": "",
        "disabled": 0,


    },
    "1003": {
        "id": 1003,
        "hero": 1003,
        "power": 0,
        "tier": 0,
        "behavior": {
            "animationDelay": 0.41,
            "behavior": "Projectile",
            "cooldown": 7,
            "params": [],
            "prime": {
                "base": "PA",
                "type": "physical"
            },
            "projectile": {
                "speed": 800,
                "x": -97,
                "y": -224
            },
            "range": 350
        },

        "icon": "",
        "disabled": 0,


    },
    "1004": {
        "id": 1004,
        "hero": 1004,
        "power": 0,
        "tier": 0,
        "behavior": {
            "animationDelay": 1.05,
            "area": 100,
            "behavior": "Melee",
            "cooldown": 6,
            "params": [],
            "prime": {
                "base": "PA",
                "type": "physical"
            },
            "range": 53
        },

        "icon": "",
        "disabled": 0,


    },
    "1005": {
        "id": 1005,
        "hero": 1005,
        "power": 0,
        "tier": 0,
        "behavior": {
            "animationDelay": 0.56,
            "area": 47,
            "behavior": "Melee",
            "cooldown": 4.5,
            "params": [],
            "prime": {
                "base": "PA",
                "type": "physical"
            },
            "range": 53
        },

        "icon": "",
        "disabled": 0,


    },
    "1006": {
        "id": 1006,
        "hero": 1006,
        "power": 0,
        "tier": 0,
        "behavior": {
            "animationDelay": 0.5,
            "area": 150,
            "behavior": "Melee",
            "cooldown": 4,
            "params": [],
            "prime": {
                "base": "PA",
                "type": "physical"
            },
            "range": 200
        },

        "icon": "",
        "disabled": 0,


    },
    "1007": {
        "id": 1007,
        "hero": 1006,
        "power": 0,
        "tier": 1,
        "behavior": {
            "animationDelay": 0.5,
            "area": 500,
            "behavior": "BossDemonSkill",
            "cooldown": 8.5,
            "params": [],
            "prime": {
                "base": "MP",
                "K": 3,
                "type": "magic"
            }
        },

        "icon": "",
        "disabled": 0,


    },
    "1010": {
        "id": 1010,
        "hero": 1010,
        "power": 0,
        "tier": 0,
        "behavior": {
            "animationDelay": 1,
            "area": 47,
            "behavior": "Melee",
            "cooldown": 4.95,
            "params": [],
            "prime": {
                "base": "PA",
                "type": "physical"
            },
            "range": 100
        },

        "icon": "",
        "disabled": 0,


    },
    "1011": {
        "id": 1011,
        "hero": 1011,
        "power": 0,
        "tier": 0,
        "behavior": {
            "animationDelay": 0.51,
            "behavior": "Projectile",
            "cooldown": 5.7,
            "params": [],
            "prime": {
                "base": "PA",
                "type": "physical"
            },
            "projectile": {
                "speed": 800,
                "x": 160,
                "y": -136
            },
            "range": 225
        },

        "icon": "",
        "disabled": 0,


    },
    "1012": {
        "id": 1012,
        "hero": 1012,
        "power": 0,
        "tier": 0,
        "behavior": {
            "animationDelay": 0.43,
            "behavior": "Projectile",
            "cooldown": 6.45,
            "params": [],
            "prime": {
                "base": "MP",
                "type": "magic"
            },
            "projectile": {
                "speed": 800,
                "x": 120,
                "y": -107
            },
            "range": 375
        },

        "icon": "",
        "disabled": 0,


    },
    "1013": {
        "id": 1013,
        "hero": 1013,
        "power": 0,
        "tier": 0,
        "behavior": {
            "animationDelay": 0.45,
            "behavior": "Projectile",
            "cooldown": 6.45,
            "params": [],
            "prime": {
                "base": "PA",
                "type": "physical"
            },
            "projectile": {
                "speed": 800,
                "x": 94,
                "y": -144
            },
            "range": 325
        },

        "icon": "",
        "disabled": 0,


    },
    "1014": {
        "id": 1014,
        "hero": 1014,
        "power": 0,
        "tier": 0,
        "behavior": {
            "animationDelay": 0.8,
            "area": 47,
            "behavior": "MeleeWithFx",
            "cooldown": 4.95,
            "params": [
                {
                    "name": "fxOffset",
                    "value": "233"
                }
            ],
            "prime": {
                "base": "PA",
                "type": "physical"
            },
            "range": 75
        },

        "icon": "",
        "disabled": 0,


    },
    "1015": {
        "id": 1015,
        "hero": 1015,
        "power": 0,
        "tier": 0,
        "behavior": {
            "animationDelay": 0.68,
            "area": 47,
            "behavior": "Melee",
            "cooldown": 5.7,
            "params": [],
            "prime": {
                "base": "PA",
                "type": "physical"
            },
            "range": 50
        },

        "icon": "",
        "disabled": 0,


    },
    "1016": {
        "id": 1016,
        "hero": 1016,
        "power": 0,
        "tier": 0,
        "behavior": {
            "animationDelay": 0.46,
            "area": 500,
            "behavior": "Melee",
            "cooldown": 3.5,
            "params": [],
            "prime": {
                "base": "PA",
                "type": "physical"
            },
            "range": 200
        },

        "icon": "",
        "disabled": 0,


    },
    "1017": {
        "id": 1017,
        "hero": 1016,
        "power": 0,
        "tier": 1,
        "behavior": {
            "animationDelay": 0.58,
            "area": 500,
            "behavior": "BossForestSkill",
            "cooldown": 11,
            "params": [],
            "prime": {
                "base": "MP",
                "K": 1.7,
                "type": "magic"
            }
        },

        "icon": "",
        "disabled": 0,


    },
    "1020": {
        "id": 1020,
        "hero": 1020,
        "power": 0,
        "tier": 0,
        "behavior": {
            "animationDelay": 0.46,
            "area": 47,
            "behavior": "Melee",
            "cooldown": 4,
            "params": [],
            "prime": {
                "base": "PA",
                "type": "physical"
            },
            "range": 100
        },

        "icon": "",
        "disabled": 0,


    },
    "1021": {
        "id": 1021,
        "hero": 1021,
        "power": 0,
        "tier": 0,
        "behavior": {
            "animationDelay": 0.61,
            "behavior": "Projectile",
            "cooldown": 4.55,
            "params": [],
            "prime": {
                "base": "PA",
                "type": "physical"
            },
            "projectile": {
                "speed": 800,
                "x": 133,
                "y": -118
            },
            "range": 300
        },

        "icon": "",
        "disabled": 0,


    },
    "1022": {
        "id": 1022,
        "hero": 1022,
        "power": 0,
        "tier": 0,
        "behavior": {
            "animationDelay": 0.38,
            "behavior": "Projectile",
            "cooldown": 5.15,
            "params": [],
            "prime": {
                "base": "PA",
                "type": "physical"
            },
            "projectile": {
                "speed": 800,
                "x": 38,
                "y": -175
            },
            "range": 425
        },

        "icon": "",
        "disabled": 0,


    },
    "1023": {
        "id": 1023,
        "hero": 1023,
        "power": 0,
        "tier": 0,
        "behavior": {
            "animationDelay": 0.45,
            "behavior": "Ray",
            "cooldown": 5,
            "params": [],
            "prime": {
                "base": "MP",
                "type": "magic"
            },
            "range": 350
        },

        "icon": "",
        "disabled": 0,


    },
    "1024": {
        "id": 1024,
        "hero": 1024,
        "power": 0,
        "tier": 0,
        "behavior": {
            "animationDelay": 0.83,
            "area": 47,
            "behavior": "Melee",
            "cooldown": 4.5,
            "params": [],
            "prime": {
                "base": "PA",
                "type": "physical"
            },
            "range": 75
        },

        "icon": "",
        "disabled": 0,


    },
    "1025": {
        "id": 1025,
        "hero": 1025,
        "power": 0,
        "tier": 0,
        "behavior": {
            "animationDelay": 0.45,
            "area": 47,
            "behavior": "Melee",
            "cooldown": 3.5,
            "params": [],
            "prime": {
                "base": "PA",
                "type": "physical"
            },
            "range": 50
        },

        "icon": "",
        "disabled": 0,


    },
    "1026": {
        "id": 1026,
        "hero": 1026,
        "power": 0,
        "tier": 0,
        "behavior": {
            "animationDelay": 0.4,
            "area": 150,
            "behavior": "Melee",
            "cooldown": 4,
            "params": [],
            "prime": {
                "base": "PA",
                "type": "physical"
            },
            "range": 200
        },

        "icon": "",
        "disabled": 0,


    },
    "1027": {
        "id": 1027,
        "hero": 1026,
        "power": 0,
        "tier": 1,
        "behavior": {
            "animationDelay": 0.75,
            "area": 700,
            "behavior": "BossOrkSkill",
            "cooldown": 10,
            "params": [],
            "prime": {
                "base": "MP",
                "K": 2,
                "type": "magic"
            },
            "projectile": {
                "speed": 1000,
                "x": 0,
                "y": 0
            },
            "secondary": {
                "base": "1021"
            }
        },

        "icon": "",
        "disabled": 0,


    },
    "1030": {
        "id": 1030,
        "hero": 1030,
        "power": 0,
        "tier": 0,
        "behavior": {
            "animationDelay": 0.68,
            "area": 47,
            "behavior": "Melee",
            "cooldown": 3.5,
            "params": [],
            "prime": {
                "base": "PA",
                "type": "physical"
            },
            "range": 55
        },

        "icon": "",
        "disabled": 0,


    },
    "1031": {
        "id": 1031,
        "hero": 1031,
        "power": 0,
        "tier": 0,
        "behavior": {
            "animationDelay": 0.7,
            "behavior": "Projectile",
            "cooldown": 4.1,
            "params": [],
            "prime": {
                "base": "PA",
                "type": "physical"
            },
            "projectile": {
                "speed": 800,
                "x": 240,
                "y": -110
            },
            "range": 300
        },

        "icon": "",
        "disabled": 0,


    },
    "1032": {
        "id": 1032,
        "hero": 1032,
        "power": 0,
        "tier": 0,
        "behavior": {
            "animationDelay": 0.46,
            "behavior": "Projectile",
            "cooldown": 5.2,
            "params": [],
            "prime": {
                "base": "PA",
                "type": "physical"
            },
            "projectile": {
                "speed": 800,
                "x": 268,
                "y": -124
            },
            "range": 425
        },

        "icon": "",
        "disabled": 0,


    },
    "1033": {
        "id": 1033,
        "hero": 1033,
        "power": 0,
        "tier": 0,
        "behavior": {
            "animationDelay": 0.41,
            "behavior": "Projectile",
            "cooldown": 4.5,
            "params": [],
            "prime": {
                "base": "MP",
                "type": "magic"
            },
            "projectile": {
                "speed": 800,
                "x": 160,
                "y": -307
            },
            "range": 325
        },

        "icon": "",
        "disabled": 0,


    },
    "1034": {
        "id": 1034,
        "hero": 1034,
        "power": 0,
        "tier": 0,
        "behavior": {
            "animationDelay": 0.53,
            "area": 47,
            "behavior": "Melee",
            "cooldown": 3.7,
            "params": [],
            "prime": {
                "base": "PA",
                "type": "physical"
            },
            "range": 85
        },

        "icon": "",
        "disabled": 0,


    },
    "1035": {
        "id": 1035,
        "hero": 1035,
        "power": 0,
        "tier": 0,
        "behavior": {
            "animationDelay": 0.47,
            "area": 47,
            "behavior": "Melee",
            "cooldown": 5.5,
            "params": [],
            "prime": {
                "base": "PA",
                "type": "physical"
            },
            "range": 60
        },

        "icon": "",
        "disabled": 0,


    },
    "1036": {
        "id": 1036,
        "hero": 1036,
        "power": 0,
        "tier": 0,
        "behavior": {
            "animationDelay": 0.5,
            "area": 500,
            "behavior": "Melee",
            "cooldown": 4.5,
            "params": [],
            "prime": {
                "base": "PA",
                "type": "physical"
            },
            "range": 200
        },

        "icon": "",
        "disabled": 0,


    },
    "1037": {
        "id": 1037,
        "hero": 1036,
        "power": 0,
        "tier": 1,
        "behavior": {
            "area": 500,
            "behavior": "BossUndeadSkill",
            "cooldown": 10,
            "params": [],
            "prime": {
                "base": "MP",
                "K": 3,
                "type": "magic"
            },
            "projectile": {
                "speed": 280,
                "x": 0,
                "y": -100
            }
        },

        "icon": "",
        "disabled": 0,


    },
    "1040": {
        "id": 1040,
        "hero": 1040,
        "power": 0,
        "tier": 0,
        "behavior": {
            "animationDelay": 0.45,
            "area": 47,
            "behavior": "Melee",
            "cooldown": 3.5,
            "params": [],
            "prime": {
                "base": "PA",
                "type": "physical"
            },
            "range": 50
        },

        "icon": "",
        "disabled": 0,


    },
    "1041": {
        "id": 1041,
        "hero": 1041,
        "power": 0,
        "tier": 0,
        "behavior": {
            "animationDelay": 0.33,
            "behavior": "Projectile",
            "cooldown": 5.2,
            "params": [],
            "prime": {
                "base": "PA",
                "type": "physical"
            },
            "projectile": {
                "speed": 800,
                "x": 134,
                "y": -153
            },
            "range": 400
        },

        "icon": "",
        "disabled": 0,


    },
    "1042": {
        "id": 1042,
        "hero": 1042,
        "power": 0,
        "tier": 0,
        "behavior": {
            "animationDelay": 0.41,
            "behavior": "Projectile",
            "cooldown": 3.9,
            "params": [],
            "prime": {
                "base": "PA",
                "type": "physical"
            },
            "projectile": {
                "speed": 800,
                "x": 43,
                "y": -86
            },
            "range": 350
        },

        "icon": "",
        "disabled": 0,


    },
    "1043": {
        "id": 1043,
        "hero": 1043,
        "power": 0,
        "tier": 0,
        "behavior": {
            "animationDelay": 0.62,
            "area": 140,
            "behavior": "MeleeKnockback",
            "cooldown": 4.8,
            "effect": "knockback(50,0.15)",
            "hitrate": -1,
            "params": [],
            "prime": {
                "base": "PA",
                "type": "physical"
            },
            "range": 100
        },

        "icon": "",
        "disabled": 0,


    },
    "1044": {
        "id": 1044,
        "hero": 1044,
        "power": 0,
        "tier": 0,
        "behavior": {
            "animationDelay": 0.5,
            "area": 47,
            "behavior": "FuthestGhostPirateStrike",
            "cooldown": 6,
            "hits": 2,
            "params": [],
            "prime": {
                "base": "MP",
                "K": 0.5,
                "type": "magic"
            },
            "range": 350
        },

        "icon": "",
        "disabled": 0,


    },
    "1045": {
        "id": 1045,
        "hero": 1045,
        "power": 0,
        "tier": 0,
        "behavior": {
            "animationDelay": 0.05,
            "area": 47,
            "behavior": "Projectile",
            "cooldown": 5.5,
            "params": [],
            "prime": {
                "base": "MP",
                "type": "magic"
            },
            "projectile": {
                "speed": 800,
                "x": 159,
                "y": -199
            },
            "range": 300
        },

        "icon": "",
        "disabled": 0,


    },
    "1046": {
        "id": 1046,
        "hero": 1046,
        "power": 0,
        "tier": 0,
        "behavior": {
            "animationDelay": 0.3,
            "area": 500,
            "behavior": "BossSeaAttack",
            "cooldown": 5,
            "duration": 0.32,
            "effect": "Levitation(0.15)",
            "hitrate": 1,
            "params": [],
            "prime": {
                "base": "PA",
                "K": 1,
                "type": "physical"
            },
            "projectile": {
                "speed": 2000,
                "x": 0,
                "y": 0
            },
            "range": 500
        },

        "icon": "",
        "disabled": 0,


    },
    "1047": {
        "id": 1047,
        "hero": 1046,
        "power": 0,
        "tier": 1,
        "behavior": {
            "animationDelay": 0.67,
            "area": 700,
            "behavior": "BossSeaUlt",
            "cooldown": 15,
            "duration": 6,
            "effect": "stun",
            "hitrate": 1,
            "params": [],
            "prime": {
                "base": "MP",
                "K": 1.5,
                "type": "magic"
            },
            "projectile": {
                "speed": 1200,
                "x": 0,
                "y": -100
            },
            "range": 700
        },

        "icon": "",
        "disabled": 0,


    },
    "1050": {
        "id": 1050,
        "hero": 1050,
        "power": 0,
        "tier": 0,
        "behavior": {
            "animationDelay": 0.68,
            "area": 47,
            "behavior": "MeleeWithFx",
            "cooldown": 3.5,
            "params": [
                {
                    "name": "fxOffset",
                    "value": "0"
                }
            ],
            "prime": {
                "base": "PA",
                "type": "physical"
            },
            "range": 50
        },

        "icon": "",
        "disabled": 0,


    },
    "1051": {
        "id": 1051,
        "hero": 1051,
        "power": 0,
        "tier": 0,
        "behavior": {
            "animationDelay": 0.55,
            "area": 47,
            "behavior": "WinterValikirieMeleeWithFxIfNotClose",
            "cooldown": 4.1,
            "params": [],
            "prime": {
                "base": "PA",
                "type": "physical"
            },
            "range": 50
        },

        "icon": "",
        "disabled": 0,


    },
    "1052": {
        "id": 1052,
        "hero": 1051,
        "power": 0,
        "tier": 2,
        "behavior": {
            "animationDelay": 0.5,
            "behavior": "WinterValkyrieBlock",
            "cooldown": 13,
            "cooldownInitial": 4,
            "duration": 7,
            "hitrate": -1,
            "params": [],
            "prime": {
                "base": "PA",
                "K": 10,
                "type": "armor"
            },
            "range": 50,
            "secondary": {
                "base": "MP",
                "K": 0.5,
                "type": "magicResist"
            }
        },

        "icon": "",
        "disabled": 0,


    },
    "1053": {
        "id": 1053,
        "hero": 1052,
        "power": 0,
        "tier": 0,
        "behavior": {
            "animationDelay": 0.46,
            "behavior": "Ray",
            "cooldown": 5.2,
            "params": [],
            "prime": {
                "base": "MP",
                "K": 0.5,
                "type": "magic"
            },
            "range": 300
        },

        "icon": "",
        "disabled": 0,


    },
    "1054": {
        "id": 1054,
        "hero": 1053,
        "power": 0,
        "tier": 0,
        "behavior": {
            "animationDelay": 0.65,
            "behavior": "Projectile",
            "cooldown": 4.5,
            "params": [],
            "prime": {
                "base": "MP",
                "type": "magic"
            },
            "projectile": {
                "speed": 600,
                "x": 75,
                "y": -124
            },
            "range": 300
        },

        "icon": "",
        "disabled": 0,


    },
    "1055": {
        "id": 1055,
        "hero": 1053,
        "power": 0,
        "tier": 2,
        "behavior": {
            "animationDelay": 0.25,
            "area": 550,
            "behavior": "WinterHeadChanneling",
            "cooldown": 8,
            "cooldownInitial": 10,
            "duration": 25,
            "hitrate": -1,
            "params": [],
            "prime": {
                "base": "MP",
                "K": 0.25,
                "type": "magic"
            },
            "range": 300
        },

        "icon": "",
        "disabled": 0,


    },
    "1056": {
        "id": 1056,
        "hero": 1054,
        "power": 0,
        "tier": 0,
        "behavior": {
            "animationDelay": 0.43,
            "behavior": "Projectile",
            "cooldown": 3.7,
            "params": [],
            "prime": {
                "base": "MP",
                "type": "magic"
            },
            "projectile": {
                "speed": 600,
                "x": 80,
                "y": -98
            },
            "range": 350
        },

        "icon": "",
        "disabled": 0,


    },
    "1057": {
        "id": 1057,
        "hero": 1055,
        "power": 0,
        "tier": 0,
        "behavior": {
            "animationDelay": 1.08,
            "behavior": "Projectile",
            "cooldown": 5.5,
            "params": [],
            "prime": {
                "base": "MP",
                "type": "magic"
            },
            "projectile": {
                "speed": 600,
                "x": 78,
                "y": -156
            },
            "range": 375
        },

        "icon": "",
        "disabled": 0,


    },
    "1058": {
        "id": 1058,
        "hero": 1055,
        "power": 0,
        "tier": 2,
        "behavior": {
            "animationDelay": 0.91,
            "behavior": "WinterConvertProjectile",
            "cooldown": 10,
            "duration": 7,
            "effect": "convert",
            "hitrate": -1,
            "params": [],
            "prime": {
                "base": "MP",
                "type": "magic"
            },
            "projectile": {
                "speed": 600,
                "x": 99,
                "y": -200
            }
        },

        "icon": "",
        "disabled": 0,


    },
    "1059": {
        "id": 1059,
        "hero": 1056,
        "power": 0,
        "tier": 0,
        "behavior": {
            "animationDelay": 0.7,
            "area": 150,
            "behavior": "Melee",
            "cooldown": 3,
            "cooldownInitial": 6,
            "params": [],
            "prime": {
                "base": "PA",
                "K": 1.5,
                "type": "physical"
            },
            "range": 250
        },

        "icon": "",
        "disabled": 0,


    },
    "1060": {
        "id": 1060,
        "hero": 1056,
        "power": 0,
        "tier": 3,
        "behavior": {
            "animationDelay": 0.6,
            "area": 500,
            "behavior": "WinterBirdAttack",
            "cooldown": 4,
            "cooldownInitial": 7,
            "params": [],
            "prime": {
                "base": "PA",
                "K": 0.2,
                "type": "physical"
            },
            "projectile": {
                "speed": 600,
                "x": 100,
                "y": 0
            },
            "range": 600
        },

        "icon": "",
        "disabled": 0,


    },
    "1061": {
        "id": 1061,
        "hero": 1056,
        "power": 0,
        "tier": 2,
        "behavior": {
            "animationDelay": 0.5,
            "area": 500,
            "behavior": "WinterBirdBlizzard",
            "cooldown": 4,
            "cooldownInitial": 8,
            "duration": 5,
            "hitrate": -1,
            "params": [],
            "prime": {
                "base": "PA",
                "K": 0.2,
                "type": "physical"
            },
            "range": 600
        },

        "icon": "",
        "disabled": 0,


    },
    "1062": {
        "id": 1062,
        "hero": 1057,
        "power": 0,
        "tier": 0,
        "behavior": {
            "animationDelay": 0.36,
            "behavior": "WinterShamanBossAttack",
            "cooldown": 4,
            "cooldownInitial": 5,
            "params": [],
            "prime": {
                "base": "PA",
                "K": 2,
                "type": "physical"
            },
            "projectile": {
                "speed": 600,
                "x": 115,
                "y": -255
            },
            "range": 500
        },

        "icon": "",
        "disabled": 0,


    },
    "1063": {
        "id": 1063,
        "hero": 1057,
        "power": 0,
        "tier": 2,
        "behavior": {
            "animationDelay": 0.75,
            "area": 600,
            "behavior": "WinterShamanBossBlizzard",
            "cooldown": 11,
            "effect": "silence",
            "hitrate": -1,
            "params": [],
            "prime": {
                "base": "MP",
                "K": 0.2,
                "type": "magic"
            },
            "range": 500
        },

        "icon": "",
        "disabled": 0,


    },
    "1064": {
        "id": 1064,
        "hero": 1057,
        "power": 0,
        "tier": 1,
        "behavior": {
            "animationDelay": 0.76,
            "behavior": "WinterShamanBossFreeze",
            "cooldown": 8,
            "duration": 5,
            "hitrate": -1,
            "params": [],
            "projectile": {
                "speed": 600,
                "x": 234,
                "y": -370
            },
            "range": 500
        },

        "icon": "",
        "disabled": 0,


    },
    "1070": {
        "id": 1070,
        "hero": 1061,
        "power": 0,
        "tier": 0,
        "behavior": {
            "animationDelay": 0.4,
            "area": 310,
            "behavior": "DwarfDrillAutoAttack",
            "cooldown": 10,
            "duration": 3,
            "hitrate": -1,
            "params": [],
            "prime": {
                "base": "PA",
                "K": 0.3,
                "scale": 2,
                "type": "physical"
            },
            "range": 100,
            "secondary": {
                "c": 40,
                "scale": 0.5,
                "type": "energy %"
            }
        },

        "icon": "",
        "disabled": 0,


    },
    "1071": {
        "id": 1071,
        "hero": 1062,
        "power": 0,
        "tier": 0,
        "behavior": {
            "animationDelay": 0.75,
            "area": 50,
            "behavior": "MeleeDefaultFx",
            "cooldown": 10,
            "params": [],
            "prime": {
                "base": "PA",
                "K": 0.5,
                "scale": 5,
                "type": "physical"
            },
            "range": 50
        },

        "icon": "",
        "disabled": 0,


    },
    "1072": {
        "id": 1072,
        "hero": 1062,
        "power": 0,
        "tier": 2,
        "behavior": {
            "behavior": "PassiveSelfEffect",
            "duration": 11,
            "effect": "DwarfGolemPassive",
            "hits": 12,
            "params": [],
            "prime": {
                "base": "MP",
                "c": -55000,
                "K": 5,
                "scale": 1500,
                "type": "hp"
            }
        },

        "icon": "",
        "disabled": 0,


    },
    "1073": {
        "id": 1073,
        "hero": 1063,
        "power": 0,
        "tier": 0,
        "behavior": {
            "animationDelay": 0.46,
            "area": 47,
            "behavior": "Melee",
            "cooldown": 5.85,
            "params": [],
            "prime": {
                "base": "PA",
                "type": "physical"
            },
            "range": 50
        },

        "icon": "",
        "disabled": 0,


    },
    "1074": {
        "id": 1074,
        "hero": 1063,
        "power": 0,
        "tier": 1,
        "behavior": {
            "animationDelay": 0.83,
            "behavior": "DwarfClawbotStun",
            "cooldown": 10,
            "duration": 5,
            "hits": 20,
            "params": [],
            "prime": {
                "base": "PA",
                "type": "physical"
            },
            "range": 50
        },

        "icon": "",
        "disabled": 0,


    },
    "1075": {
        "id": 1075,
        "hero": 1064,
        "power": 0,
        "tier": 0,
        "behavior": {
            "animationDelay": 0.6,
            "area": 47,
            "behavior": "Melee",
            "cooldown": 4.95,
            "params": [],
            "prime": {
                "base": "PA",
                "type": "physical"
            },
            "range": 100
        },

        "icon": "",
        "disabled": 0,


    },
    "1076": {
        "id": 1076,
        "hero": 1065,
        "power": 0,
        "tier": 0,
        "behavior": {
            "animationDelay": 0.43,
            "behavior": "DwarvenTurretProjectile",
            "cooldown": 4.5,
            "params": [],
            "prime": {
                "base": "PA",
                "type": "physical"
            },
            "projectile": {
                "speed": 600,
                "x": 59,
                "y": -89
            },
            "range": 275
        },

        "icon": "",
        "disabled": 0,


    },
    "1077": {
        "id": 1077,
        "hero": 1065,
        "power": 0,
        "tier": 2,
        "behavior": {
            "animationDelay": 0.05,
            "behavior": "DwarvenTurretSpawn",
            "cooldown": 15,
            "hits": 1,
            "params": [],
            "prime": {
                "c": 40,
                "type": "% of boss hp"
            },
            "projectile": {
                "speed": 600,
                "x": 75,
                "y": -124
            },
            "secondary": {
                "c": 100,
                "type": "% of boss pa"
            }
        },

        "icon": "",
        "disabled": 0,


    },
    "1078": {
        "id": 1078,
        "hero": 1066,
        "power": 0,
        "tier": 0,
        "behavior": {
            "animationDelay": 0.31,
            "behavior": "Projectile",
            "cooldown": 2,
            "params": [],
            "prime": {
                "base": "PA",
                "type": "physical"
            },
            "projectile": {
                "speed": 800,
                "x": -29,
                "y": -170
            },
            "range": 225
        },

        "icon": "",
        "disabled": 0,


    },
    "1079": {
        "id": 1079,
        "hero": 1067,
        "power": 0,
        "tier": 0,
        "behavior": {
            "animationDelay": 1.1,
            "behavior": "Projectile",
            "cooldown": 4,
            "params": [],
            "prime": {
                "base": "PA",
                "type": "physical"
            },
            "projectile": {
                "speed": 800,
                "x": 174,
                "y": -172
            },
            "range": 325
        },

        "icon": "",
        "disabled": 0,


    },
    "1080": {
        "id": 1080,
        "hero": 1067,
        "power": 0,
        "tier": 1,
        "behavior": {
            "animationDelay": 0.6,
            "behavior": "DwarvenPriestHeal",
            "cooldown": 4,
            "duration": 6,
            "hits": 20,
            "params": [],
            "prime": {
                "base": "MP",
                "K": 0.5,
                "scale": 10,
                "type": "heal"
            },
            "range": 325
        },

        "icon": "",
        "disabled": 0,


    },
    "1081": {
        "id": 1081,
        "hero": 1068,
        "power": 0,
        "tier": 0,
        "behavior": {
            "animationDelay": 0.48,
            "behavior": "Ray",
            "cooldown": 4.8,
            "params": [],
            "prime": {
                "base": "MP",
                "type": "magic"
            },
            "range": 300
        },

        "icon": "",
        "disabled": 0,


    },
    "1082": {
        "id": 1082,
        "hero": 1069,
        "power": 0,
        "tier": 0,
        "behavior": {
            "animationDelay": 0.91,
            "behavior": "DwarvenBossKingAutoAttack",
            "cooldown": 5,
            "params": [],
            "prime": {
                "base": "PA",
                "type": "physical"
            },
            "projectile": {
                "speed": 600,
                "x": 241,
                "y": -214
            },
            "range": 500
        },

        "icon": "",
        "disabled": 0,


    },
    "1083": {
        "id": 1083,
        "hero": 1069,
        "power": 0,
        "tier": 2,
        "behavior": {
            "animationDelay": 1.33,
            "behavior": "DwarvenBossKingSkill",
            "cooldown": 14,
            "params": [],
            "prime": {
                "base": "PA",
                "K": 5,
                "type": "physical"
            },
            "secondary": {
                "base": "HP",
                "K": 0.3,
                "type": "hp"
            }
        },

        "icon": "",
        "disabled": 0,


    },
    "1084": {
        "id": 1084,
        "hero": 1069,
        "power": 0,
        "tier": 3,
        "behavior": {
            "animationDelay": 0.33,
            "behavior": "DwarvenBossKingPush",
            "cooldown": 5,
            "params": [],
            "prime": {
                "base": "PA",
                "type": "physical"
            },
            "range": 50
        },

        "icon": "",
        "disabled": 0,


    },
    "1085": {
        "id": 1085,
        "hero": 1070,
        "power": 0,
        "tier": 0,
        "behavior": {
            "animationDelay": 1,
            "behavior": "DwarvenBossLastAutoAttack",
            "cooldown": 5,
            "params": [],
            "prime": {
                "base": "PA",
                "K": 3,
                "type": "physical"
            },
            "range": 500
        },

        "icon": "",
        "disabled": 0,


    },
    "1086": {
        "id": 1086,
        "hero": 1070,
        "power": 0,
        "tier": 2,
        "behavior": {
            "animationDelay": 1.1,
            "behavior": "DwarvenBossLastMain",
            "cooldown": 10,
            "effect": "fire",
            "params": [],
            "prime": {
                "base": "PA",
                "K": 1.4,
                "type": "magic"
            },
            "range": 500,
            "secondary": {
                "base": "PA",
                "K": 0.7,
                "type": "magic"
            }
        },

        "icon": "",
        "disabled": 0,


    },
    "1087": {
        "id": 1087,
        "hero": 1070,
        "power": 0,
        "tier": 3,
        "behavior": {
            "behavior": "ValueSkillModifier",
            "duration": 10,
            "effect": "water",
            "hits": 5,
            "params": [
                {
                    "name": "tier",
                    "value": "2"
                }
            ],
            "prime": {
                "base": "PA",
                "K": 0.8,
                "type": "magic"
            },
            "secondary": {
                "base": "PA",
                "K": 0.4,
                "type": "magic"
            }
        },

        "icon": "",
        "disabled": 0,


    },
    "1088": {
        "id": 1088,
        "hero": 1070,
        "power": 0,
        "tier": 4,
        "behavior": {
            "behavior": "ValueSkillModifier",
            "duration": 3,
            "effect": "earth",
            "hits": 3,
            "params": [
                {
                    "name": "tier",
                    "value": "2"
                }
            ],
            "prime": {
                "base": "PA",
                "K": 1.4,
                "type": "physical"
            },
            "secondary": {
                "base": "PA",
                "K": 0.7,
                "type": "physical"
            }
        },

        "icon": "",
        "disabled": 0,


    },
    "1089": {
        "id": 1089,
        "hero": 1070,
        "power": 0,
        "tier": 5,
        "behavior": {
            "behavior": "ValueSkillModifier",
            "effect": "fire",
            "params": [
                {
                    "name": "tier",
                    "value": "2"
                }
            ],
            "prime": {
                "base": "PA",
                "K": 50,
                "type": "physical"
            },
            "secondary": {
                "c": 700000,
                "type": "crystal hp"
            }
        },

        "icon": "",
        "disabled": 0,


    },
    "1090": {
        "id": 1090,
        "hero": 1070,
        "power": 0,
        "tier": 6,
        "behavior": {
            "behavior": "ValueSkillModifier",
            "effect": "water",
            "params": [
                {
                    "name": "tier",
                    "value": "2"
                }
            ],
            "prime": {
                "c": 1000000,
                "type": "heal"
            },
            "secondary": {
                "c": 0.2,
                "type": "freeze multiplier"
            }
        },

        "icon": "",
        "disabled": 0,


    },
    "1091": {
        "id": 1091,
        "hero": 1070,
        "power": 0,
        "tier": 7,
        "behavior": {
            "behavior": "ValueSkillModifier",
            "effect": "earth",
            "params": [
                {
                    "name": "tier",
                    "value": "2"
                }
            ],
            "prime": {
                "c": 10,
                "type": "multiplier"
            },
            "secondary": {
                "c": 0.5,
                "type": "max damage %"
            }
        },

        "icon": "",
        "disabled": 0,


    },
    "2003": {
        "id": 2003,
        "hero": 0,
        "power": 0,
        "tier": 5,
        "behavior": {
            "behavior": "PveModifier",
            "params": [],
            "prime": {
                "c": -0.5,
                "type": "hp"
            },
            "secondary": {
                "c": -0.5,
                "type": "PAMP"
            }
        },

        "icon": "",
        "disabled": 0,


    },
    "2004": {
        "id": 2004,
        "hero": 0,
        "power": 0,
        "tier": 5,
        "behavior": {
            "behavior": "PveModifier",
            "params": [],
            "prime": {
                "c": -0.75,
                "type": "hp"
            },
            "secondary": {
                "type": "PAMP"
            }
        },

        "icon": "",
        "disabled": 0,


    },
    "2008": {
        "id": 2008,
        "hero": 0,
        "power": 0,
        "tier": 5,
        "behavior": {
            "behavior": "PveModifier",
            "params": [],
            "prime": {
                "c": -0.3,
                "type": "hp"
            },
            "secondary": {
                "c": -0.3,
                "type": "PAMP"
            }
        },

        "icon": "",
        "disabled": 0,


    },
    "2009": {
        "id": 2009,
        "hero": 0,
        "power": 0,
        "tier": 5,
        "behavior": {
            "behavior": "TutorialMissionHero",
            "params": []
        },

        "icon": "",
        "disabled": 0,


    },
    "2010": {
        "id": 2010,
        "hero": 0,
        "power": 0,
        "tier": 5,
        "behavior": {
            "behavior": "PveModifier",
            "effect": "elite",
            "params": [],
            "prime": {
                "c": 0,
                "type": "hp"
            },
            "secondary": {
                "c": 0,
                "type": "PAMP"
            }
        },

        "icon": "",
        "disabled": 0,


    },
    "2011": {
        "id": 2011,
        "hero": 0,
        "power": 0,
        "tier": 5,
        "behavior": {
            "behavior": "PveModifier",
            "params": [],
            "prime": {
                "c": 1.5,
                "type": "hp"
            },
            "secondary": {
                "c": 1.5,
                "type": "PAMP"
            }
        },

        "icon": "",
        "disabled": 0,


    },
    "2012": {
        "id": 2012,
        "hero": 0,
        "power": 0,
        "tier": 0,
        "behavior": {
            "behavior": "PveEffectWithParams",
            "effect": "possession",
            "params": [],
            "prime": {
                "scale": 100,
                "type": "possession  hp"
            }
        },

        "icon": "",
        "disabled": 0,


    },
    "2013": {
        "id": 2013,
        "hero": 0,
        "power": 0,
        "tier": 2,
        "behavior": {
            "animationDelay": 1.5,
            "behavior": "BossArchdemonEventStages",
            "cooldown": 1,
            "params": []
        },

        "icon": "",
        "disabled": 0,


    },
    "2014": {
        "id": 2014,
        "hero": 2010,
        "power": 0,
        "tier": 0,
        "behavior": {
            "animationDelay": 0.5,
            "area": 150,
            "behavior": "Melee",
            "cooldown": 4,
            "params": [],
            "prime": {
                "base": "PA",
                "K": 3,
                "type": "physical"
            },
            "range": 200
        },

        "icon": "",
        "disabled": 1,


    },
    "2015": {
        "id": 2015,
        "hero": 2010,
        "power": 0,
        "tier": 1,
        "behavior": {
            "animationDelay": 0.5,
            "area": 500,
            "behavior": "BossDemonSkill",
            "cooldown": 8.5,
            "params": [],
            "prime": {
                "base": "MP",
                "K": 12,
                "type": "magic"
            }
        },

        "icon": "",
        "disabled": 0,


    },
    "2016": {
        "id": 2016,
        "hero": 2010,
        "power": 0,
        "tier": 0,
        "behavior": {
            "animationDelay": 0.5,
            "area": 100,
            "behavior": "NearestAoe",
            "cooldown": 4,
            "duration": 0.5,
            "effect": "stun",
            "hitrate": -1,
            "params": [],
            "prime": {
                "base": "PA",
                "K": 3,
                "type": "physical"
            }
        },

        "icon": "",
        "disabled": 0,


    },
    "2017": {
        "id": 2017,
        "hero": 5035,
        "power": 0,
        "tier": 5,
        "behavior": {
            "behavior": "InvasionBossEffectsImmune",
            "params": []
        },

        "icon": "",
        "disabled": 0,


    },
    "2018": {
        "id": 2018,
        "hero": 2011,
        "power": 0,
        "tier": 0,
        "behavior": {
            "animationDelay": 0.58,
            "area": 500,
            "behavior": "InvasionLeviathanMelee",
            "cooldown": 5,
            "params": [],
            "prime": {
                "base": "PA",
                "K": 1,
                "type": "physical"
            },
            "range": 500
        },

        "icon": "",
        "disabled": 0,


    },
    "2019": {
        "id": 2019,
        "hero": 2011,
        "power": 0,
        "tier": 1,
        "behavior": {
            "animationDelay": 0.58,
            "area": 800,
            "behavior": "InvasionLeviathanUlt",
            "cooldown": 15,
            "params": [],
            "prime": {
                "base": "PA",
                "K": 0.4,
                "type": "physical"
            },
            "range": 700,
            "secondary": {
                "base": "PA",
                "K": 0.4,
                "type": "magic"
            }
        },

        "icon": "",
        "disabled": 0,


    },
    "2020": {
        "id": 2020,
        "hero": 2012,
        "power": 0,
        "tier": 0,
        "behavior": {
            "behavior": "BossStormSphereMain",
            "effect": "tee",
            "params": []
        },

        "icon": "",
        "disabled": 0,


    },
    "2021": {
        "id": 2021,
        "hero": 2013,
        "power": 0,
        "tier": 0,
        "behavior": {
            "animationDelay": 0.38,
            "behavior": "BossStormEyeAutoAttack",
            "cooldown": 10,
            "params": [],
            "prime": {
                "base": "MP",
                "type": "magic"
            },
            "projectile": {
                "x": -16,
                "y": -60
            },
            "range": 250,
            "secondary": {
                "c": 99
            }
        },

        "icon": "",
        "disabled": 0,


    },
    "2022": {
        "id": 2022,
        "hero": 2013,
        "power": 0,
        "tier": 2,
        "behavior": {
            "behavior": "Spawn",
            "effect": "e",
            "params": [],
            "prime": {
                "c": 2012,
                "type": "host heroId"
            },
            "secondary": {
                "c": 0
            }
        },

        "icon": "",
        "disabled": 0,


    },
    "2023": {
        "id": 2023,
        "hero": 2014,
        "power": 0,
        "tier": 0,
        "behavior": {
            "animationDelay": 0.41,
            "area": 100,
            "behavior": "BossStormTentacleAutoAttack",
            "cooldown": 5,
            "params": [],
            "prime": {
                "base": "PA",
                "type": "physical"
            },
            "range": -10
        },

        "icon": "",
        "disabled": 0,


    },
    "2024": {
        "id": 2024,
        "hero": 2014,
        "power": 0,
        "tier": 2,
        "behavior": {
            "behavior": "Spawn",
            "effect": "t",
            "params": [],
            "prime": {
                "c": 2012,
                "type": "host heroId"
            },
            "secondary": {
                "c": 0
            }
        },

        "icon": "",
        "disabled": 0,


    },
    "3000": {
        "id": 3000,
        "hero": 2000,
        "power": 0,
        "tier": 0,
        "behavior": {
            "animationDelay": 1,
            "area": 120,
            "behavior": "BossFiregolemMelee",
            "cooldown": 11,
            "params": [],
            "prime": {
                "base": "PA",
                "K": 1.5,
                "type": "physical"
            },
            "range": 300
        },

        "icon": "",
        "disabled": 0,


    },
    "3001": {
        "id": 3001,
        "hero": 2000,
        "power": 0,
        "tier": 1,
        "behavior": {
            "animationDelay": 0.47,
            "area": 120,
            "behavior": "BossFiregolemSkill",
            "cooldown": 20,
            "params": [],
            "prime": {
                "base": "MP",
                "K": 0.5,
                "type": "magic"
            },
            "range": 700
        },

        "icon": "",
        "disabled": 0,


    },
    "3002": {
        "id": 3002,
        "hero": 2000,
        "power": 0,
        "tier": 2,
        "behavior": {
            "animationDelay": 0.5,
            "behavior": "BossFiregolemStrike",
            "cooldown": 7,
            "duration": 3,
            "effect": "stun",
            "hitrate": -1,
            "params": [],
            "prime": {
                "base": "PA",
                "K": 1,
                "type": "physical"
            },
            "range": 500
        },

        "icon": "",
        "disabled": 0,


    },
    "3006": {
        "id": 3006,
        "hero": 2003,
        "power": 0,
        "tier": 0,
        "behavior": {
            "prime": {
                "type": "physical",
                "K": 1,
                "base": "PA"
            },
            "behavior": "BossFishAttack",
            "area": 120,
            "animationDelay": 0.7,
            "range": 1000,
            "projectile": {
                "speed": 600
            },
            "params": [],
            "cooldown": 3
        },

        "icon": "",
        "disabled": 0,


    },
    "3007": {
        "id": 3007,
        "hero": 2003,
        "power": 0,
        "tier": 1,
        "behavior": {
            "effect": "stun",
            "prime": {
                "type": "physical",
                "K": 2,
                "base": "PA"
            },
            "behavior": "BossFishUlt",
            "animationDelay": 0.75,
            "duration": 5,
            "params": [],
            "hitrate": -1,
            "cooldown": 8
        },

        "icon": "",
        "disabled": 0,


    },
    "3008": {
        "id": 3008,
        "hero": 2003,
        "power": 0,
        "tier": 2,
        "behavior": {
            "effect": "stun",
            "prime": {
                "type": "physical",
                "K": 2,
                "base": "PA"
            },
            "behavior": "BossFishPassive",
            "animationDelay": 0.75,
            "duration": 5,
            "range": 1000,
            "params": [
                {
                    "name": "doLayFishOnEarth",
                    "value": "0"
                }
            ],
            "hitrate": -1,
            "cooldown": 8
        },

        "icon": "",
        "disabled": 0,


    },
    "3009": {
        "id": 3009,
        "hero": 2004,
        "power": 0,
        "tier": 0,
        "behavior": {
            "prime": {
                "type": "physical",
                "K": 1,
                "base": "PA"
            },
            "behavior": "BossFishAttack",
            "area": 120,
            "animationDelay": 0.7,
            "range": 1000,
            "projectile": {
                "speed": 600
            },
            "params": [],
            "cooldown": 3
        },

        "icon": "",
        "disabled": 0,


    },
    "3010": {
        "id": 3010,
        "hero": 2001,
        "power": 0,
        "tier": 0,
        "behavior": {
            "animationDelay": 0.53,
            "area": 120,
            "behavior": "BossSpiderAttack",
            "cooldown": 6,
            "duration": 4,
            "effect": "freeze(0.5)",
            "hitrate": -1,
            "params": [],
            "prime": {
                "base": "MP",
                "K": 2,
                "type": "magic"
            },
            "range": 750
        },

        "icon": "",
        "disabled": 0,


    },
    "3011": {
        "id": 3011,
        "hero": 2001,
        "power": 0,
        "tier": 1,
        "behavior": {
            "animationDelay": 0.68,
            "area": 120,
            "behavior": "BossSpiderSkill",
            "cooldown": 11,
            "duration": 4,
            "effect": "stun",
            "hitrate": -1,
            "params": [],
            "prime": {
                "base": "MP",
                "K": 1,
                "type": "magic"
            },
            "projectile": {
                "x": 140,
                "y": -483
            },
            "range": 700
        },

        "icon": "",
        "disabled": 0,


    },
    "3012": {
        "id": 3012,
        "hero": 2001,
        "power": 0,
        "tier": 2,
        "behavior": {
            "animationDelay": 0.05,
            "behavior": "BossSpiderSpawn",
            "cooldown": 18,
            "hits": 8,
            "params": [],
            "prime": {
                "c": 3,
                "type": "% of boss hp"
            },
            "secondary": {
                "c": 20,
                "type": "% of boss pa"
            }
        },

        "icon": "",
        "disabled": 0,


    },
    "3020": {
        "id": 3020,
        "hero": 2002,
        "power": 0,
        "tier": 0,
        "behavior": {
            "animationDelay": 0.7,
            "area": 120,
            "behavior": "BossBoarAttack",
            "cooldown": 5,
            "params": [],
            "prime": {
                "base": "PA",
                "K": 1,
                "type": "physical"
            },
            "range": 1000
        },

        "icon": "",
        "disabled": 0,


    },
    "3021": {
        "id": 3021,
        "hero": 2002,
        "power": 0,
        "tier": 1,
        "behavior": {
            "animationDelay": 0.75,
            "behavior": "BossBoarRun",
            "cooldown": 30,
            "duration": 5,
            "effect": "stun",
            "hitrate": -1,
            "params": [],
            "prime": {
                "base": "PA",
                "K": 2,
                "type": "physical"
            },
            "range": 1000
        },

        "icon": "",
        "disabled": 0,


    },
    "3030": {
        "id": 3030,
        "hero": 2003,
        "power": 0,
        "tier": 0,
        "behavior": {
            "animationDelay": 0.7,
            "area": 120,
            "behavior": "BossFishAttack",
            "cooldown": 3,
            "params": [],
            "prime": {
                "base": "PA",
                "K": 1,
                "type": "physical"
            },
            "projectile": {
                "speed": 600
            },
            "range": 1000
        },

        "icon": "",
        "disabled": 0,


    },
    "3031": {
        "id": 3031,
        "hero": 2003,
        "power": 0,
        "tier": 1,
        "behavior": {
            "animationDelay": 0.75,
            "behavior": "BossFishUlt",
            "cooldown": 8,
            "params": [],
            "prime": {
                "base": "PA",
                "type": "physical"
            }
        },

        "icon": "",
        "disabled": 0,


    },
    "3032": {
        "id": 3032,
        "hero": 2003,
        "power": 0,
        "tier": 2,
        "behavior": {
            "animationDelay": 0.75,
            "behavior": "BossFishPassive",
            "cooldown": 8,
            "duration": 5,
            "effect": "stun",
            "hitrate": -1,
            "params": [
                {
                    "name": "doLayFishOnEarth",
                    "value": "0"
                }
            ],
            "prime": {
                "c": 900,
                "type": "stunDamageIncrease%"
            },
            "range": 1000,
            "secondary": {
                "c": 0,
                "type": "noStunDamageReduce%"
            }
        },

        "icon": "",
        "disabled": 0,


    },
    "3040": {
        "id": 3040,
        "hero": 2004,
        "power": 0,
        "tier": 0,
        "behavior": {
            "animationDelay": 0.7,
            "area": 120,
            "behavior": "BossFishAttack",
            "cooldown": 3,
            "params": [],
            "prime": {
                "base": "PA",
                "K": 1,
                "type": "physical"
            },
            "projectile": {
                "speed": 600
            },
            "range": 1000
        },

        "icon": "",
        "disabled": 0,


    },
    "3041": {
        "id": 3041,
        "hero": 2004,
        "power": 0,
        "tier": 1,
        "behavior": {
            "animationDelay": 0.75,
            "behavior": "BossFishUlt",
            "cooldown": 8,
            "params": [],
            "prime": {
                "base": "PA",
                "type": "physical"
            }
        },

        "icon": "",
        "disabled": 0,


    },
    "3042": {
        "id": 3042,
        "hero": 2004,
        "power": 0,
        "tier": 3,
        "behavior": {
            "animationDelay": 0.75,
            "behavior": "BossFishPassive",
            "cooldown": 8,
            "duration": 5,
            "effect": "stun",
            "hitrate": -1,
            "params": [
                {
                    "name": "doLayFishOnEarth",
                    "value": "0"
                }
            ],
            "prime": {
                "c": 900,
                "type": "stunDamageIncrease%"
            },
            "range": 1000,
            "secondary": {
                "c": 0,
                "type": "noStunDamageReduce%"
            }
        },

        "icon": "",
        "disabled": 0,


    },
    "3043": {
        "id": 3043,
        "hero": 2007,
        "power": 0,
        "tier": 0,
        "behavior": {
            "animationDelay": 1,
            "area": 120,
            "behavior": "BossFiregolemMelee",
            "cooldown": 11,
            "params": [],
            "prime": {
                "base": "PA",
                "K": 1.5,
                "type": "physical"
            },
            "range": 300
        },

        "icon": "",
        "disabled": 0,


    },
    "3044": {
        "id": 3044,
        "hero": 2007,
        "power": 0,
        "tier": 1,
        "behavior": {
            "animationDelay": 0.47,
            "area": 120,
            "behavior": "BossFiregolemSkill",
            "cooldown": 20,
            "params": [],
            "prime": {
                "base": "MP",
                "K": 0.5,
                "type": "magic"
            },
            "range": 700
        },

        "icon": "",
        "disabled": 0,


    },
    "3045": {
        "id": 3045,
        "hero": 2007,
        "power": 0,
        "tier": 2,
        "behavior": {
            "animationDelay": 0.5,
            "behavior": "BossFiregolemStrike",
            "cooldown": 7,
            "duration": 3,
            "effect": "stun",
            "hitrate": -1,
            "params": [],
            "prime": {
                "base": "PA",
                "K": 1,
                "type": "physical"
            },
            "range": 500
        },

        "icon": "",
        "disabled": 0,


    },
    "3046": {
        "id": 3046,
        "hero": 2008,
        "power": 0,
        "tier": 0,
        "behavior": {
            "animationDelay": 0.53,
            "area": 120,
            "behavior": "BossSpiderAttack",
            "cooldown": 6,
            "duration": 4,
            "effect": "freeze(0.5)",
            "hitrate": -1,
            "params": [],
            "prime": {
                "base": "MP",
                "K": 1,
                "type": "magic"
            },
            "range": 750
        },

        "icon": "",
        "disabled": 0,


    },
    "3047": {
        "id": 3047,
        "hero": 2008,
        "power": 0,
        "tier": 1,
        "behavior": {
            "animationDelay": 0.68,
            "area": 120,
            "behavior": "BossSpiderSkill",
            "cooldown": 11,
            "duration": 4,
            "effect": "stun",
            "hitrate": -1,
            "params": [],
            "prime": {
                "base": "MP",
                "K": 0.5,
                "type": "magic"
            },
            "projectile": {
                "x": 140,
                "y": -483
            },
            "range": 700
        },

        "icon": "",
        "disabled": 0,


    },
    "3048": {
        "id": 3048,
        "hero": 2008,
        "power": 0,
        "tier": 2,
        "behavior": {
            "animationDelay": 0.05,
            "behavior": "BossSpiderSpawn",
            "cooldown": 18,
            "hits": 8,
            "params": [],
            "prime": {
                "c": 3,
                "type": "% of boss hp"
            },
            "secondary": {
                "c": 20,
                "type": "% of boss pa"
            }
        },

        "icon": "",
        "disabled": 0,


    },
    "3049": {
        "id": 3049,
        "hero": 2009,
        "power": 0,
        "tier": 0,
        "behavior": {
            "animationDelay": 0.7,
            "area": 120,
            "behavior": "BossBoarAttack",
            "cooldown": 5,
            "params": [],
            "prime": {
                "base": "PA",
                "K": 1,
                "type": "physical"
            },
            "range": 1000
        },

        "icon": "",
        "disabled": 0,


    },
    "3050": {
        "id": 3050,
        "hero": 2009,
        "power": 0,
        "tier": 1,
        "behavior": {
            "animationDelay": 0.75,
            "behavior": "BossBoarRun",
            "cooldown": 30,
            "duration": 5,
            "effect": "stun",
            "hitrate": -1,
            "params": [],
            "prime": {
                "base": "PA",
                "K": 2,
                "type": "physical"
            },
            "range": 1000
        },

        "icon": "",
        "disabled": 0,


    },
    "4000": {
        "id": 4000,
        "hero": 4000,
        "power": 0,
        "tier": 0,
        "behavior": {
            "animationDelay": 1.8,
            "area": 75,
            "behavior": "TitanWaterAutoAttack",
            "cooldown": 4.2,
            "params": [],
            "prime": {
                "base": "PA",
                "K": 1,
                "type": "physical"
            },
            "range": 150
        },

        "icon": "",
        "disabled": 0,


    },
    "4001": {
        "id": 4001,
        "hero": 4000,
        "power": 0,
        "tier": 1,
        "behavior": {
            "animationDelay": 1.08,
            "behavior": "TitanWaterMeleeUlt",
            "duration": 5,
            "hitrate": -1,
            "params": [],
            "prime": {
                "base": "PA",
                "type": "self shield"
            }
        },

        "icon": "",
        "disabled": 0,


    },
    "4002": {
        "id": 4002,
        "hero": 4001,
        "power": 0,
        "tier": 0,
        "behavior": {
            "animationDelay": 1.3,
            "area": 100,
            "behavior": "TitanWaterRangeProjectile",
            "cooldown": 4,
            "params": [],
            "prime": {
                "base": "PA",
                "K": 1,
                "type": "physical"
            },
            "projectile": {
                "speed": 800,
                "x": 120,
                "y": -97
            },
            "range": 300
        },

        "icon": "",
        "disabled": 0,


    },
    "4003": {
        "id": 4003,
        "hero": 4001,
        "power": 0,
        "tier": 1,
        "behavior": {
            "animationDelay": 1.45,
            "area": 100,
            "behavior": "TitanWaterRangeUlt",
            "duration": 4,
            "effect": "stun",
            "hitrate": -1,
            "params": [],
            "prime": {
                "base": "PA",
                "K": 0.5,
                "type": "physical"
            },
            "projectile": {
                "speed": 800,
                "x": 83,
                "y": -160
            },
            "range": 1000,
            "secondary": {
                "base": "PA",
                "K": 0.05,
                "type": "physical"
            }
        },

        "icon": "",
        "disabled": 0,


    },
    "4004": {
        "id": 4004,
        "hero": 4002,
        "power": 0,
        "tier": 0,
        "behavior": {
            "animationDelay": 1.2,
            "area": 100,
            "behavior": "TitanProjectile",
            "cooldown": 4,
            "params": [],
            "prime": {
                "base": "PA",
                "K": 1,
                "type": "physical"
            },
            "projectile": {
                "speed": 800,
                "x": 155,
                "y": -141
            },
            "range": 350
        },

        "icon": "",
        "disabled": 0,


    },
    "4005": {
        "id": 4005,
        "hero": 4002,
        "power": 0,
        "tier": 1,
        "behavior": {
            "animationDelay": 1.13,
            "behavior": "TitanWaterSpecialUlt",
            "duration": 8,
            "hitrate": -1,
            "params": [],
            "prime": {
                "c": 40,
                "type": "pa debuf %"
            },
            "projectile": {
                "speed": 700,
                "x": 109,
                "y": 8
            },
            "range": 1000
        },

        "icon": "",
        "disabled": 0,


    },
    "4006": {
        "id": 4006,
        "hero": 4003,
        "power": 0,
        "tier": 0,
        "behavior": {
            "animationDelay": 1.35,
            "area": 100,
            "behavior": "TitanProjectile",
            "cooldown": 4.1,
            "params": [],
            "prime": {
                "base": "PA",
                "type": "physical"
            },
            "projectile": {
                "speed": 800,
                "x": 281,
                "y": -413
            },
            "range": 400
        },

        "icon": "",
        "disabled": 0,


    },
    "4007": {
        "id": 4007,
        "hero": 4003,
        "power": 0,
        "tier": 1,
        "behavior": {
            "animationDelay": 1.8,
            "behavior": "TitanWaterUltraUlt",
            "params": [],
            "prime": {
                "base": "PA",
                "K": 3,
                "type": "physical"
            },
            "range": 1000
        },

        "icon": "",
        "disabled": 0,


    },
    "4008": {
        "id": 4008,
        "hero": 4003,
        "power": 0,
        "tier": 2,
        "behavior": {
            "animationDelay": 1.3,
            "behavior": "TitanWaterUltraSkill",
            "cooldown": 20,
            "cooldownInitial": 4,
            "params": [],
            "prime": {
                "base": "PA",
                "K": 2,
                "type": "heal"
            }
        },

        "icon": "",
        "disabled": 0,


    },
    "4009": {
        "id": 4009,
        "hero": 4010,
        "power": 0,
        "tier": 0,
        "behavior": {
            "animationDelay": 1.33,
            "area": 75,
            "behavior": "TitanFireAutoAttack",
            "cooldown": 4,
            "params": [],
            "prime": {
                "base": "PA",
                "K": 1,
                "type": "physical"
            },
            "range": 175
        },

        "icon": "",
        "disabled": 0,


    },
    "4010": {
        "id": 4010,
        "hero": 4010,
        "power": 0,
        "tier": 1,
        "behavior": {
            "animationDelay": 1.43,
            "behavior": "TitanFireMeleeUlt",
            "duration": 5,
            "effect": "stun",
            "hitrate": -1,
            "params": [],
            "prime": {
                "base": "PA",
                "K": 2.5,
                "type": "physical"
            },
            "range": 175
        },

        "icon": "",
        "disabled": 0,


    },
    "4011": {
        "id": 4011,
        "hero": 4011,
        "power": 0,
        "tier": 0,
        "behavior": {
            "animationDelay": 1.33,
            "area": 100,
            "behavior": "TitanProjectile",
            "cooldown": 3.9,
            "params": [],
            "prime": {
                "base": "PA",
                "K": 1,
                "type": "physical"
            },
            "projectile": {
                "speed": 800,
                "x": 143,
                "y": -174
            },
            "range": 300
        },

        "icon": "",
        "disabled": 0,


    },
    "4012": {
        "id": 4012,
        "hero": 4011,
        "power": 0,
        "tier": 1,
        "behavior": {
            "animationDelay": 1.56,
            "area": 100,
            "behavior": "TitanFireRangeUlt",
            "params": [],
            "prime": {
                "base": "PA",
                "K": 3,
                "type": "physical"
            },
            "projectile": {
                "speed": 800,
                "x": 152,
                "y": -131
            },
            "range": 300
        },

        "icon": "",
        "disabled": 0,


    },
    "4013": {
        "id": 4013,
        "hero": 4012,
        "power": 0,
        "tier": 0,
        "behavior": {
            "animationDelay": 1.05,
            "area": 100,
            "behavior": "TitanProjectile",
            "cooldown": 3.8,
            "params": [],
            "prime": {
                "base": "PA",
                "K": 1,
                "type": "physical"
            },
            "projectile": {
                "speed": 800,
                "x": 220,
                "y": -119
            },
            "range": 400
        },

        "icon": "",
        "disabled": 0,


    },
    "4014": {
        "id": 4014,
        "hero": 4012,
        "power": 0,
        "tier": 1,
        "behavior": {
            "animationDelay": 1.16,
            "behavior": "TitanFireSpecialUlt",
            "duration": 6,
            "hitrate": -1,
            "params": [],
            "prime": {
                "base": "PA",
                "K": 0.5,
                "type": "pa buff"
            }
        },

        "icon": "",
        "disabled": 0,


    },
    "4015": {
        "id": 4015,
        "hero": 4013,
        "power": 0,
        "tier": 0,
        "behavior": {
            "animationDelay": 1.31,
            "area": 100,
            "behavior": "TitanProjectile",
            "cooldown": 4.1,
            "params": [],
            "prime": {
                "base": "PA",
                "K": 1,
                "type": "physical"
            },
            "projectile": {
                "speed": 800,
                "x": 214,
                "y": -323
            },
            "range": 350
        },

        "icon": "",
        "disabled": 0,


    },
    "4016": {
        "id": 4016,
        "hero": 4013,
        "power": 0,
        "tier": 1,
        "behavior": {
            "animationDelay": 1,
            "behavior": "TitanFireUltraUlt",
            "duration": 7,
            "params": [],
            "prime": {
                "base": "PA",
                "K": 1,
                "type": "physical"
            },
            "range": 1000
        },

        "icon": "",
        "disabled": 0,


    },
    "4017": {
        "id": 4017,
        "hero": 4013,
        "power": 0,
        "tier": 2,
        "behavior": {
            "animationDelay": 0.6,
            "behavior": "TitanFireUltraSkill",
            "cooldown": 18,
            "cooldownInitial": 2,
            "duration": 8,
            "hitrate": -1,
            "params": [],
            "prime": {
                "c": 30,
                "type": "speed %"
            }
        },

        "icon": "",
        "disabled": 0,


    },
    "4018": {
        "id": 4018,
        "hero": 4020,
        "power": 0,
        "tier": 0,
        "behavior": {
            "animationDelay": 1,
            "area": 75,
            "behavior": "TitanWaterAutoAttack",
            "cooldown": 4,
            "params": [],
            "prime": {
                "base": "PA",
                "K": 1,
                "type": "physical"
            },
            "range": 200
        },

        "icon": "",
        "disabled": 0,


    },
    "4019": {
        "id": 4019,
        "hero": 4020,
        "power": 0,
        "tier": 1,
        "behavior": {
            "animationDelay": 2.36,
            "behavior": "TitanEarthMeleeUlt",
            "duration": 8,
            "hitrate": -1,
            "hits": 8,
            "params": [],
            "prime": {
                "base": "PA",
                "K": 0.9,
                "type": "physical"
            },
            "projectile": {
                "speed": 2100,
                "x": 0,
                "y": 0
            },
            "range": 1000
        },

        "icon": "",
        "disabled": 0,


    },
    "4020": {
        "id": 4020,
        "hero": 4021,
        "power": 0,
        "tier": 0,
        "behavior": {
            "animationDelay": 1.93,
            "area": 100,
            "behavior": "TitanEarthRangeProjectile",
            "cooldown": 4,
            "params": [],
            "prime": {
                "base": "PA",
                "K": 1,
                "type": "physical"
            },
            "projectile": {
                "speed": 800,
                "x": -35,
                "y": -196
            },
            "range": 400
        },

        "icon": "",
        "disabled": 0,


    },
    "4021": {
        "id": 4021,
        "hero": 4021,
        "power": 0,
        "tier": 1,
        "behavior": {
            "animationDelay": 2.2,
            "behavior": "TitanEarthRangeUlt",
            "hitrate": -1,
            "hits": 6,
            "params": [],
            "prime": {
                "base": "PA",
                "K": 0.7,
                "type": "physical"
            },
            "projectile": {
                "speed": 800,
                "x": 133,
                "y": -118
            },
            "range": 1000
        },

        "icon": "",
        "disabled": 0,


    },
    "4022": {
        "id": 4022,
        "hero": 4022,
        "power": 0,
        "tier": 0,
        "behavior": {
            "animationDelay": 1,
            "behavior": "TitanEarthSpecialAttack",
            "cooldown": 3.8,
            "params": [],
            "prime": {
                "base": "PA",
                "K": 1,
                "type": "physical"
            },
            "range": 325
        },

        "icon": "",
        "disabled": 0,


    },
    "4023": {
        "id": 4023,
        "hero": 4022,
        "power": 0,
        "tier": 1,
        "behavior": {
            "animationDelay": 1.05,
            "behavior": "TitanEarthSpecialUlt",
            "hitrate": -1,
            "params": [],
            "prime": {
                "base": "PA",
                "K": 3,
                "type": "shield hp"
            }
        },

        "icon": "",
        "disabled": 0,


    },
    "4024": {
        "id": 4024,
        "hero": 4023,
        "power": 0,
        "tier": 0,
        "behavior": {
            "animationDelay": 1.73,
            "behavior": "TitanProjectile",
            "cooldown": 4.1,
            "params": [],
            "prime": {
                "base": "PA",
                "K": 1,
                "type": "physical"
            },
            "projectile": {
                "speed": 800,
                "x": 91,
                "y": -165
            },
            "range": 350
        },

        "icon": "",
        "disabled": 0,


    },
    "4025": {
        "id": 4025,
        "hero": 4023,
        "power": 0,
        "tier": 1,
        "behavior": {
            "animationDelay": 2.405,
            "area": 150,
            "behavior": "TitanEarthUltraUlt",
            "params": [],
            "prime": {
                "base": "PA",
                "K": 3.5,
                "type": "physical"
            },
            "projectile": {
                "x": -84,
                "y": -516
            },
            "range": 1000
        },

        "icon": "",
        "disabled": 0,


    },
    "4026": {
        "id": 4026,
        "hero": 4023,
        "power": 0,
        "tier": 2,
        "behavior": {
            "animationDelay": 1.95,
            "behavior": "TitanEarthUltraSkill",
            "cooldown": 19,
            "cooldownInitial": 8,
            "duration": 6,
            "hitrate": -1,
            "params": [],
            "range": 1000
        },

        "icon": "",
        "disabled": 0,


    },
    "5000": {
        "id": 5000,
        "hero": 5000,
        "power": 0,
        "tier": 0,
        "behavior": {
            "animationDelay": 0.4,
            "area": 150,
            "behavior": "Melee",
            "cooldown": 4,
            "params": [],
            "prime": {
                "base": "PA",
                "type": "physical"
            },
            "range": 600
        },

        "icon": "",
        "disabled": 0,


    },
    "5001": {
        "id": 5001,
        "hero": 5000,
        "power": 0,
        "tier": 1,
        "behavior": {
            "animationDelay": 0.75,
            "area": 700,
            "behavior": "BossOrkSkill",
            "cooldown": 10,
            "params": [],
            "prime": {
                "base": "MP",
                "K": 2,
                "type": "magic"
            },
            "projectile": {
                "speed": 1000,
                "x": 0,
                "y": 0
            }
        },

        "icon": "",
        "disabled": 0,


    },
    "5002": {
        "id": 5002,
        "hero": 5001,
        "power": 0,
        "tier": 0,
        "behavior": {
            "animationDelay": 0.46,
            "area": 500,
            "behavior": "Melee",
            "cooldown": 3.5,
            "params": [],
            "prime": {
                "base": "PA",
                "type": "physical"
            },
            "range": 600
        },

        "icon": "",
        "disabled": 0,


    },
    "5003": {
        "id": 5003,
        "hero": 5001,
        "power": 0,
        "tier": 1,
        "behavior": {
            "animationDelay": 0.58,
            "area": 500,
            "behavior": "BossForestSkill",
            "cooldown": 10,
            "params": [],
            "prime": {
                "base": "MP",
                "K": 1.5,
                "type": "magic"
            }
        },

        "icon": "",
        "disabled": 0,


    },
    "5004": {
        "id": 5004,
        "hero": 5002,
        "power": 0,
        "tier": 0,
        "behavior": {
            "animationDelay": 0.7,
            "area": 150,
            "behavior": "Melee",
            "cooldown": 3,
            "cooldownInitial": 6,
            "params": [],
            "prime": {
                "base": "PA",
                "K": 1.5,
                "type": "physical"
            },
            "range": 250
        },

        "icon": "",
        "disabled": 0,


    },
    "5005": {
        "id": 5005,
        "hero": 5002,
        "power": 0,
        "tier": 3,
        "behavior": {
            "animationDelay": 0.6,
            "area": 500,
            "behavior": "WinterBirdAttack",
            "cooldown": 4,
            "cooldownInitial": 7,
            "params": [],
            "prime": {
                "base": "PA",
                "K": 0.2,
                "type": "physical"
            },
            "projectile": {
                "speed": 600,
                "x": 100,
                "y": 0
            },
            "range": 600
        },

        "icon": "",
        "disabled": 0,


    },
    "5006": {
        "id": 5006,
        "hero": 5002,
        "power": 0,
        "tier": 2,
        "behavior": {
            "animationDelay": 0.5,
            "area": 500,
            "behavior": "WinterBirdBlizzard",
            "cooldown": 4,
            "cooldownInitial": 8,
            "duration": 5,
            "hitrate": -1,
            "params": [],
            "prime": {
                "base": "PA",
                "K": 0.2,
                "type": "physical"
            },
            "range": 600
        },

        "icon": "",
        "disabled": 0,


    },
    "5007": {
        "id": 5007,
        "hero": 5004,
        "power": 0,
        "tier": 0,
        "behavior": {
            "animationDelay": 1.08,
            "behavior": "Projectile",
            "cooldown": 5.5,
            "params": [],
            "prime": {
                "base": "MP",
                "K": 4,
                "type": "magic"
            },
            "projectile": {
                "speed": 600,
                "x": 78,
                "y": -156
            },
            "range": 375
        },

        "icon": "",
        "disabled": 0,


    },
    "5008": {
        "id": 5008,
        "hero": 5004,
        "power": 0,
        "tier": 2,
        "behavior": {
            "animationDelay": 0.91,
            "behavior": "WinterConvertProjectile",
            "cooldown": 10,
            "duration": 7,
            "effect": "convert",
            "hitrate": -1,
            "params": [],
            "prime": {
                "base": "MP",
                "K": 2,
                "type": "magic"
            },
            "projectile": {
                "speed": 600,
                "x": 99,
                "y": -200
            }
        },

        "icon": "",
        "disabled": 0,


    },
    "5009": {
        "id": 5009,
        "hero": 5003,
        "power": 0,
        "tier": 0,
        "behavior": {
            "animationDelay": 0.65,
            "behavior": "Projectile",
            "cooldown": 4.5,
            "params": [],
            "prime": {
                "base": "MP",
                "type": "magic"
            },
            "projectile": {
                "speed": 600,
                "x": 75,
                "y": -124
            },
            "range": 300
        },

        "icon": "",
        "disabled": 0,


    },
    "5010": {
        "id": 5010,
        "hero": 5003,
        "power": 0,
        "tier": 2,
        "behavior": {
            "animationDelay": 0.25,
            "area": 550,
            "behavior": "WinterHeadChanneling",
            "cooldown": 8,
            "cooldownInitial": 10,
            "duration": 25,
            "hitrate": -1,
            "params": [],
            "prime": {
                "base": "MP",
                "K": 0.25,
                "type": "magic"
            },
            "range": 300
        },

        "icon": "",
        "disabled": 0,


    },
    "5011": {
        "id": 5011,
        "hero": 5005,
        "power": 0,
        "tier": 0,
        "behavior": {
            "animationDelay": 0.36,
            "behavior": "WinterShamanBossAttack",
            "cooldown": 4,
            "cooldownInitial": 5,
            "params": [],
            "prime": {
                "base": "PA",
                "K": 0.15,
                "type": "physical"
            },
            "projectile": {
                "speed": 600,
                "x": 115,
                "y": -255
            },
            "range": 500
        },

        "icon": "",
        "disabled": 0,


    },
    "5012": {
        "id": 5012,
        "hero": 5005,
        "power": 0,
        "tier": 2,
        "behavior": {
            "animationDelay": 0.75,
            "area": 600,
            "behavior": "WinterShamanBossBlizzard",
            "cooldown": 11,
            "duration": 6,
            "effect": "silence",
            "hitrate": -1,
            "params": [],
            "prime": {
                "base": "MP",
                "K": 0.2,
                "type": "magic"
            },
            "range": 500
        },

        "icon": "",
        "disabled": 0,


    },
    "5013": {
        "id": 5013,
        "hero": 5005,
        "power": 0,
        "tier": 1,
        "behavior": {
            "animationDelay": 0.76,
            "behavior": "WinterShamanBossFreeze",
            "cooldown": 8,
            "duration": 5,
            "hitrate": -1,
            "params": [],
            "projectile": {
                "speed": 600,
                "x": 234,
                "y": -370
            },
            "range": 500
        },

        "icon": "",
        "disabled": 0,


    },
    "6000": {
        "id": 6000,
        "hero": 6000,
        "power": 20,
        "tier": 1,
        "behavior": {
            "animationDelay": 1.15,
            "behavior": "Pet01Ult",
            "cooldown": 15,
            "duration": 3,
            "hitrate": 1,
            "params": [],
            "prime": {
                "base": "STR",
                "c": 100,
                "K": 1.7,
                "type": "physical"
            },
            "range": 1000
        },

        "icon": "",
        "disabled": 0,


    },
    "6001": {
        "id": 6001,
        "hero": 6000,
        "power": 20,
        "tier": 2,
        "behavior": {
            "behavior": "Pet01Skill",
            "params": [],
            "prime": {
                "base": "STR",
                "c": 2.885,
                "K": 0.003812,
                "type": "%buff"
            }
        },

        "icon": "",
        "disabled": 0,


    },
    "6002": {
        "id": 6002,
        "hero": 6000,
        "power": 20,
        "tier": 4,
        "behavior": {
            "behavior": "Pet01Favor",
            "duration": 2,
            "effect": "Blindness",
            "hitrate": -1,
            "params": [],
            "prime": {
                "base": "FP",
                "c": 4.905,
                "K": 0.003172,
                "type": "%buff"
            }
        },

        "icon": "",
        "disabled": 0,


    },
    "6005": {
        "id": 6005,
        "hero": 6001,
        "power": 20,
        "tier": 1,
        "behavior": {
            "animationDelay": 0.6,
            "behavior": "Pet02Ult",
            "cooldown": 15,
            "params": [],
            "prime": {
                "base": "STR",
                "c": 2000,
                "K": 14,
                "type": "physical"
            }
        },

        "icon": "",
        "disabled": 0,


    },
    "6006": {
        "id": 6006,
        "hero": 6001,
        "power": 20,
        "tier": 2,
        "behavior": {
            "animationDelay": 0.45,
            "behavior": "Pet02Skill",
            "cooldown": 5.95,
            "params": [],
            "prime": {
                "base": "STR",
                "c": 100,
                "K": 1.8,
                "type": "heal"
            }
        },

        "icon": "",
        "disabled": 0,


    },
    "6007": {
        "id": 6007,
        "hero": 6001,
        "power": 20,
        "tier": 4,
        "behavior": {
            "behavior": "Pet02Favor",
            "params": [],
            "prime": {
                "base": "FP",
                "K": 1,
                "type": "heal"
            },
            "secondary": {
                "c": 50,
                "type": "activation %"
            }
        },

        "icon": "",
        "disabled": 0,


    },
    "6010": {
        "id": 6010,
        "hero": 6002,
        "power": 20,
        "tier": 1,
        "behavior": {
            "animationDelay": 1.13,
            "area": 100,
            "behavior": "Pet03Ult",
            "cooldown": 15,
            "duration": 5,
            "params": [],
            "prime": {
                "base": "STR",
                "c": 350,
                "K": 5,
                "type": "magic"
            },
            "range": 1000,
            "secondary": {
                "base": "STR",
                "c": 19.8,
                "K": 0.006489,
                "type": "x%"
            }
        },

        "icon": "",
        "disabled": 0,


    },
    "6011": {
        "id": 6011,
        "hero": 6002,
        "power": 20,
        "tier": 2,
        "behavior": {
            "animationDelay": 0.37,
            "behavior": "Pet03Skill",
            "cooldown": 7.85,
            "duration": 5,
            "effect": "magicResist",
            "hitrate": -1,
            "params": [],
            "prime": {
                "base": "STR",
                "c": 100,
                "K": 0.8,
                "type": "debuf"
            }
        },

        "icon": "",
        "disabled": 0,


    },
    "6012": {
        "id": 6012,
        "hero": 6002,
        "power": 20,
        "tier": 4,
        "behavior": {
            "behavior": "Pet03Favor",
            "params": [],
            "prime": {
                "base": "FP",
                "c": 4.874,
                "K": 0.004079,
                "type": "magic cd-%"
            }
        },

        "icon": "",
        "disabled": 0,


    },
    "6015": {
        "id": 6015,
        "hero": 6003,
        "power": 20,
        "tier": 1,
        "behavior": {
            "animationDelay": 1.17,
            "behavior": "Pet04Ult",
            "cooldown": 15,
            "params": [],
            "prime": {
                "base": "STR",
                "c": 150,
                "K": 1.3,
                "type": "magic"
            },
            "projectile": {
                "speed": 870,
                "x": 27,
                "y": -129
            },
            "range": 1000,
            "secondary": {
                "c": 3,
                "type": "ce dmg multiplier"
            }
        },

        "icon": "",
        "disabled": 0,


    },
    "6016": {
        "id": 6016,
        "hero": 6003,
        "power": 20,
        "tier": 2,
        "behavior": {
            "animationDelay": 0.5,
            "behavior": "Pet04Skill",
            "cooldown": 6.95,
            "duration": 3,
            "effect": "convert",
            "hitrate": 1,
            "params": [],
            "projectile": {
                "speed": 300,
                "x": 50,
                "y": -41
            }
        },

        "icon": "",
        "disabled": 0,


    },
    "6017": {
        "id": 6017,
        "hero": 6003,
        "power": 20,
        "tier": 4,
        "behavior": {
            "behavior": "Pet04Favor",
            "params": [],
            "prime": {
                "base": "FP",
                "c": 4.45,
                "K": 0.01767,
                "type": "ce duration %"
            }
        },

        "icon": "",
        "disabled": 0,


    },
    "6020": {
        "id": 6020,
        "hero": 6004,
        "power": 20,
        "tier": 1,
        "behavior": {
            "animationDelay": 0.75,
            "behavior": "Pet05Ult",
            "cooldown": 15,
            "hits": 20,
            "params": [],
            "prime": {
                "base": "STR",
                "c": 20,
                "K": 1.5,
                "type": "physical"
            },
            "range": 1000,
            "secondary": {
                "c": 3
            }
        },

        "icon": "",
        "disabled": 0,


    },
    "6021": {
        "id": 6021,
        "hero": 6004,
        "power": 20,
        "tier": 2,
        "behavior": {
            "animationDelay": 0.37,
            "behavior": "Pet05Skill",
            "params": [],
            "prime": {
                "base": "STR",
                "c": 200,
                "K": 0.25,
                "type": "physical"
            }
        },

        "icon": "",
        "disabled": 0,


    },
    "6022": {
        "id": 6022,
        "hero": 6004,
        "power": 20,
        "tier": 4,
        "behavior": {
            "behavior": "Pet05Favor",
            "params": [],
            "prime": {
                "base": "FP",
                "c": 1,
                "K": 0.00307,
                "type": "physical"
            },
            "range": 100
        },

        "icon": "",
        "disabled": 0,


    },
    "6025": {
        "id": 6025,
        "hero": 6005,
        "power": 20,
        "tier": 1,
        "behavior": {
            "animationDelay": 0.65,
            "behavior": "Pet06Ult",
            "cooldown": 15,
            "params": [],
            "prime": {
                "base": "STR",
                "c": 75,
                "K": 19.7,
                "type": "dot"
            },
            "projectile": {
                "x": 60,
                "y": -79
            },
            "range": 1000
        },

        "icon": "",
        "disabled": 0,


    },
    "6026": {
        "id": 6026,
        "hero": 6005,
        "power": 20,
        "tier": 2,
        "behavior": {
            "behavior": "ValueSkillModifier",
            "cooldown": 5.85,
            "duration": 3,
            "params": [
                {
                    "name": "tier",
                    "value": "1"
                }
            ],
            "prime": {
                "base": "STR",
                "c": 2.505,
                "K": 0.015979,
                "type": "%buff"
            }
        },

        "icon": "",
        "disabled": 0,


    },
    "6027": {
        "id": 6027,
        "hero": 6005,
        "power": 20,
        "tier": 4,
        "behavior": {
            "behavior": "Pet06Favor",
            "params": [],
            "prime": {
                "base": "FP",
                "c": 4.808,
                "K": 0.006344,
                "type": "dot"
            }
        },

        "icon": "",
        "disabled": 0,


    },
    "6030": {
        "id": 6030,
        "hero": 6006,
        "power": 20,
        "tier": 1,
        "behavior": {
            "animationDelay": 0.5,
            "behavior": "Pet07Ult",
            "cooldown": 15,
            "params": [],
            "prime": {
                "base": "STR",
                "c": 6000,
                "K": 55,
                "type": "shield"
            },
            "range": 1000
        },

        "icon": "",
        "disabled": 0,


    },
    "6031": {
        "id": 6031,
        "hero": 6006,
        "power": 20,
        "tier": 2,
        "behavior": {
            "animationDelay": 0.5,
            "behavior": "Pet07Skill",
            "cooldown": 5.85,
            "duration": 10,
            "params": [],
            "prime": {
                "base": "STR",
                "c": 9.8,
                "K": 0.00325,
                "type": "heal"
            }
        },

        "icon": "",
        "disabled": 0,


    },
    "6032": {
        "id": 6032,
        "hero": 6006,
        "power": 20,
        "tier": 4,
        "behavior": {
            "behavior": "Pet07Favor",
            "params": [],
            "prime": {
                "base": "FP",
                "c": 70,
                "K": -0.00226,
                "type": "damageAbsorb"
            }
        },

        "icon": "",
        "disabled": 0,


    },
    "7001": {
        "id": 7001,
        "hero": 7002,
        "power": 0,
        "tier": 0,
        "behavior": {
            "animationDelay": 0.37,
            "area": 47,
            "behavior": "Melee",
            "cooldown": 5.85,
            "params": [],
            "prime": {
                "base": "PA",
                "type": "physical"
            },
            "range": 100
        },

        "icon": "",
        "disabled": 0,


    },
    "7002": {
        "id": 7002,
        "hero": 7002,
        "power": 20,
        "tier": 1,
        "behavior": {
            "animationDelay": 0.75,
            "area": 500,
            "behavior": "corrupted.Hero7002Ult",
            "hits": 15,
            "params": [
                {
                    "name": "areaOffset",
                    "value": "110"
                }
            ],
            "prime": {
                "base": "PA",
                "K": 0.3,
                "scale": 60,
                "type": "physical"
            },
            "range": 100
        },

        "icon": "",
        "disabled": 0,


    },
    "7003": {
        "id": 7003,
        "hero": 7002,
        "power": 20,
        "tier": 2,
        "behavior": {
            "animationDelay": 1.45,
            "behavior": "UnchainedStrike",
            "cooldown": 12.5,
            "params": [],
            "prime": {
                "base": "PA",
                "K": 0.4,
                "scale": 25,
                "type": "physical"
            },
            "range": 100
        },

        "icon": "",
        "disabled": 0,


    },
    "7004": {
        "id": 7004,
        "hero": 7002,
        "power": 20,
        "tier": 3,
        "behavior": {
            "animationDelay": 0.55,
            "behavior": "Hero02LowestHpTargetAttack",
            "cooldown": 20.5,
            "params": [],
            "prime": {
                "base": "PA",
                "c": -1000,
                "K": 0.8,
                "scale": 50,
                "type": "physical"
            }
        },

        "icon": "",
        "disabled": 0,


    },
    "7005": {
        "id": 7005,
        "hero": 7002,
        "power": 20,
        "tier": 4,
        "behavior": {
            "behavior": "ValueSkillModifier",
            "hitrate": -1,
            "params": [
                {
                    "name": "tier",
                    "value": "1"
                }
            ],
            "prime": {
                "base": "PA",
                "K": 0.2,
                "scale": 25,
                "type": "dot"
            }
        },

        "icon": "",
        "disabled": 0,


    },
    "7006": {
        "id": 7006,
        "hero": 7013,
        "power": 0,
        "tier": 0,
        "behavior": {
            "animationDelay": 0.05,
            "behavior": "AutoAttackVoidElemental",
            "cooldown": 4.95,
            "params": [],
            "prime": {
                "base": "PA",
                "type": "physical"
            },
            "projectile": {
                "speed": 700,
                "x": 89,
                "y": -111
            },
            "range": 300
        },

        "icon": "",
        "disabled": 0,


    },
    "7007": {
        "id": 7007,
        "hero": 7013,
        "power": 20,
        "tier": 1,
        "behavior": {
            "animationDelay": 0.45,
            "behavior": "corrupted.Hero7013Ult",
            "hits": 2,
            "params": [
                {
                    "name": "maxPow",
                    "value": "5"
                }
            ],
            "prime": {
                "base": "MP",
                "c": 1000,
                "K": 0.5,
                "scale": 50,
                "type": "magic"
            }
        },

        "icon": "",
        "disabled": 0,


    },
    "7008": {
        "id": 7008,
        "hero": 7013,
        "power": 20,
        "tier": 2,
        "behavior": {
            "animationDelay": 0.67,
            "area": 80,
            "behavior": "OrionFurthestAoe",
            "cooldown": 14.5,
            "duration": 4,
            "effect": "freeze(0.5)",
            "hitrate": 1,
            "params": [],
            "prime": {
                "base": "MP",
                "c": 1000,
                "K": 0.3,
                "scale": 10,
                "type": "magic"
            }
        },

        "icon": "",
        "disabled": 0,


    },
    "7009": {
        "id": 7009,
        "hero": 7013,
        "power": 20,
        "tier": 3,
        "behavior": {
            "animationDelay": 0.73,
            "behavior": "ProjectileStun",
            "cooldown": 22,
            "duration": 4,
            "effect": "stun",
            "hitrate": 1,
            "params": [],
            "prime": {
                "base": "MP",
                "c": 1000,
                "K": 0.65,
                "scale": 45,
                "type": "magic"
            },
            "projectile": {
                "speed": 300,
                "x": 27,
                "y": -192
            },
            "range": 500
        },

        "icon": "",
        "disabled": 0,


    },
    "7010": {
        "id": 7010,
        "hero": 7013,
        "power": 20,
        "tier": 4,
        "behavior": {
            "behavior": "ValueSkillModifier",
            "params": [
                {
                    "name": "tier",
                    "value": "0"
                }
            ],
            "prime": {
                "c": -100,
                "scale": 2
            }
        },

        "icon": "",
        "disabled": 0,


    },
    "7011": {
        "id": 7011,
        "hero": 7015,
        "power": 0,
        "tier": 0,
        "behavior": {
            "animationDelay": 0.58,
            "behavior": "PirateAutoAttack",
            "cooldown": 5,
            "params": [],
            "prime": {
                "base": "PA",
                "type": "physical"
            },
            "projectile": {
                "speed": 650,
                "x": 137,
                "y": -76
            },
            "range": 300
        },

        "icon": "",
        "disabled": 0,


    },
    "7012": {
        "id": 7012,
        "hero": 7015,
        "power": 20,
        "tier": 1,
        "behavior": {
            "animationDelay": 0.9,
            "behavior": "corrupted.Hero7015Ult",
            "hits": 6,
            "params": [
                {
                    "name": "maxMultiplier",
                    "value": "4"
                },
                {
                    "name": "delay",
                    "value": "0.3"
                }
            ],
            "prime": {
                "base": "PA",
                "K": 0.3,
                "scale": 20,
                "type": "physical"
            },
            "projectile": {
                "speed": 2100,
                "x": 0,
                "y": 0
            },
            "range": 320
        },

        "icon": "",
        "disabled": 0,


    },
    "7013": {
        "id": 7013,
        "hero": 7015,
        "power": 20,
        "tier": 2,
        "behavior": {
            "animationDelay": 0.6,
            "behavior": "PiratePiercingShoot",
            "cooldown": 13.5,
            "params": [],
            "prime": {
                "base": "PA",
                "K": 0.6,
                "scale": 65,
                "type": "physical"
            },
            "projectile": {
                "speed": 300,
                "x": 138,
                "y": -74
            },
            "range": 320
        },

        "icon": "",
        "disabled": 0,


    },
    "7014": {
        "id": 7014,
        "hero": 7015,
        "power": 20,
        "tier": 3,
        "behavior": {
            "animationDelay": 1.4,
            "behavior": "PirateBuckshot",
            "cooldown": 19,
            "params": [
                {
                    "name": "delay",
                    "value": "0.1"
                }
            ],
            "prime": {
                "base": "PA",
                "K": 0.5,
                "scale": 45,
                "type": "physical"
            },
            "range": 320
        },

        "icon": "",
        "disabled": 0,


    },
    "7015": {
        "id": 7015,
        "hero": 7015,
        "power": 20,
        "tier": 4,
        "behavior": {
            "behavior": "PirateAutoAttackModifier",
            "params": [
                {
                    "name": "tier",
                    "value": "0"
                },
                {
                    "name": "maxStacks",
                    "value": "5"
                }
            ],
            "prime": {
                "base": "PA",
                "c": -4000,
                "K": 1.4,
                "scale": 100,
                "type": "physical"
            },
            "range": 320
        },

        "icon": "",
        "disabled": 0,


    },
    "7016": {
        "id": 7016,
        "hero": 7024,
        "power": 0,
        "tier": 0,
        "behavior": {
            "animationDelay": 0.38,
            "area": 47,
            "behavior": "Melee",
            "cooldown": 5.2,
            "params": [],
            "prime": {
                "base": "PA",
                "c": -2000,
                "type": "physical"
            },
            "range": 50
        },

        "icon": "",
        "disabled": 0,


    },
    "7017": {
        "id": 7017,
        "hero": 7024,
        "power": 20,
        "tier": 1,
        "behavior": {
            "animationDelay": 0.43,
            "area": 150,
            "behavior": "Hero24Ult",
            "hitrate": -1,
            "params": [],
            "prime": {
                "base": "PA",
                "K": 1,
                "scale": 120,
                "type": "physical"
            },
            "projectile": {
                "speed": 1000,
                "x": 80,
                "y": -75
            },
            "range": 590
        },

        "icon": "",
        "disabled": 0,


    },
    "7018": {
        "id": 7018,
        "hero": 7024,
        "power": 20,
        "tier": 2,
        "behavior": {
            "animationDelay": 0.75,
            "area": 650,
            "behavior": "corrupted.Hero7024ToxicCloud",
            "cooldown": 15,
            "duration": 5,
            "params": [],
            "prime": {
                "base": "PA",
                "K": 0.25,
                "scale": 40,
                "type": "dot"
            }
        },

        "icon": "",
        "disabled": 0,


    },
    "7019": {
        "id": 7019,
        "hero": 7024,
        "power": 20,
        "tier": 3,
        "behavior": {
            "animationDelay": 0.45,
            "area": 47,
            "behavior": "Hero24Strike",
            "cooldown": 19,
            "duration": 2,
            "effect": "stun",
            "hitrate": 1,
            "params": [],
            "prime": {
                "base": "PA",
                "c": -2000,
                "K": 0.2,
                "scale": 30,
                "type": "physical"
            },
            "range": 50
        },

        "icon": "",
        "disabled": 0,


    },
    "7020": {
        "id": 7020,
        "hero": 7024,
        "power": 20,
        "tier": 4,
        "behavior": {
            "animationDelay": 0.5,
            "behavior": "PassiveSelfBuff",
            "effect": "strength",
            "params": [
                {
                    "name": "statName",
                    "value": "strength"
                }
            ],
            "prime": {
                "c": -380,
                "scale": 10,
                "type": "stat"
            }
        },

        "icon": "",
        "disabled": 0,


    }
}
