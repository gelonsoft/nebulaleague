import {ItemGear} from "~/shared/datamodels";

const itemGearConfig: Record<string, ItemGear> =  {
    "1": {
        "id": 1,
        "battleStatData": {
            "physicalAttack": 12
        },
        "craftRecipe": null,
        "enchantMultiplier": 0,
        "color": 1,
        "fragmentMergeCost": null,
        "fragmentBuyCost": null,
        "fragmentSellCost": null,
        "buyCost": {
            "gold": 1000
        },
        "buySpecialCost": null,
        "fragmentSpecialCost": null,
        "sellCost": {
            "gold": 200
        },
        "enchantValue": 2,
        "fragmentEnchantValue": 0,
        "teamLevel": 1,
        "heroLevel": 1,
        "assetAtlas": 3,
        "assetTexture": "gear_6",
        "obtainType": null
    },
    "2": {
        "id": 2,
        "battleStatData": {
            "hp": 200
        },
        "craftRecipe": null,
        "enchantMultiplier": 0,
        "color": 1,
        "fragmentMergeCost": null,
        "fragmentBuyCost": null,
        "fragmentSellCost": null,
        "buyCost": {
            "gold": 1000
        },
        "buySpecialCost": null,
        "fragmentSpecialCost": null,
        "sellCost": {
            "gold": 200
        },
        "enchantValue": 2,
        "fragmentEnchantValue": 0,
        "teamLevel": 1,
        "heroLevel": 1,
        "assetAtlas": 3,
        "assetTexture": "gear_8",
        "obtainType": null
    },
    "3": {
        "id": 3,
        "battleStatData": {
            "agility": 5
        },
        "craftRecipe": null,
        "enchantMultiplier": 0,
        "color": 1,
        "fragmentMergeCost": null,
        "fragmentBuyCost": null,
        "fragmentSellCost": null,
        "buyCost": {
            "gold": 1000
        },
        "buySpecialCost": null,
        "fragmentSpecialCost": null,
        "sellCost": {
            "gold": 200
        },
        "enchantValue": 2,
        "fragmentEnchantValue": 0,
        "teamLevel": 2,
        "heroLevel": 2,
        "assetAtlas": 3,
        "assetTexture": "gear_5",
        "obtainType": null
    },
    "4": {
        "id": 4,
        "battleStatData": {
            "intelligence": 5
        },
        "craftRecipe": null,
        "enchantMultiplier": 0,
        "color": 1,
        "fragmentMergeCost": null,
        "fragmentBuyCost": null,
        "fragmentSellCost": null,
        "buyCost": {
            "gold": 1000
        },
        "buySpecialCost": null,
        "fragmentSpecialCost": null,
        "sellCost": {
            "gold": 200
        },
        "enchantValue": 2,
        "fragmentEnchantValue": 0,
        "teamLevel": 2,
        "heroLevel": 2,
        "assetAtlas": 3,
        "assetTexture": "gear_2",
        "obtainType": null
    },
    "5": {
        "id": 5,
        "battleStatData": {
            "strength": 5
        },
        "craftRecipe": null,
        "enchantMultiplier": 0,
        "color": 1,
        "fragmentMergeCost": null,
        "fragmentBuyCost": null,
        "fragmentSellCost": null,
        "buyCost": {
            "gold": 1000
        },
        "buySpecialCost": null,
        "fragmentSpecialCost": null,
        "sellCost": {
            "gold": 200
        },
        "enchantValue": 2,
        "fragmentEnchantValue": 0,
        "teamLevel": 2,
        "heroLevel": 2,
        "assetAtlas": 3,
        "assetTexture": "gear_10",
        "obtainType": null
    },
    "6": {
        "id": 6,
        "battleStatData": {
            "agility": 5,
            "intelligence": 5,
            "strength": 5
        },
        "craftRecipe": {
            "gear": {
                "3": 1,
                "4": 1,
                "5": 1
            },
            "gold": 3750
        },
        "enchantMultiplier": 0,
        "color": 1,
        "fragmentMergeCost": null,
        "fragmentBuyCost": null,
        "fragmentSellCost": null,
        "buyCost": {
            "gold": 3125
        },
        "buySpecialCost": null,
        "fragmentSpecialCost": null,
        "sellCost": {
            "gold": 625
        },
        "enchantValue": 6,
        "fragmentEnchantValue": 0,
        "teamLevel": 3,
        "heroLevel": 3,
        "assetAtlas": 3,
        "assetTexture": "gear_11",
        "obtainType": null
    },
    "7": {
        "id": 7,
        "battleStatData": {
            "magicPower": 25
        },
        "craftRecipe": null,
        "enchantMultiplier": 0,
        "color": 1,
        "fragmentMergeCost": null,
        "fragmentBuyCost": null,
        "fragmentSellCost": null,
        "buyCost": {
            "gold": 1000
        },
        "buySpecialCost": null,
        "fragmentSpecialCost": null,
        "sellCost": {
            "gold": 200
        },
        "enchantValue": 2,
        "fragmentEnchantValue": 0,
        "teamLevel": 1,
        "heroLevel": 1,
        "assetAtlas": 3,
        "assetTexture": "gear_12",
        "obtainType": null
    },
    "8": {
        "id": 8,
        "battleStatData": {
            "armor": 25
        },
        "craftRecipe": null,
        "enchantMultiplier": 0,
        "color": 1,
        "fragmentMergeCost": null,
        "fragmentBuyCost": null,
        "fragmentSellCost": null,
        "buyCost": {
            "gold": 1000
        },
        "buySpecialCost": null,
        "fragmentSpecialCost": null,
        "sellCost": {
            "gold": 200
        },
        "enchantValue": 2,
        "fragmentEnchantValue": 0,
        "teamLevel": 1,
        "heroLevel": 1,
        "assetAtlas": 3,
        "assetTexture": "gear_3",
        "obtainType": null
    },
    "9": {
        "id": 9,
        "battleStatData": {
            "magicResist": 25
        },
        "craftRecipe": null,
        "enchantMultiplier": 0,
        "color": 1,
        "fragmentMergeCost": null,
        "fragmentBuyCost": null,
        "fragmentSellCost": null,
        "buyCost": {
            "gold": 1000
        },
        "buySpecialCost": null,
        "fragmentSpecialCost": null,
        "sellCost": {
            "gold": 200
        },
        "enchantValue": 2,
        "fragmentEnchantValue": 0,
        "teamLevel": 1,
        "heroLevel": 1,
        "assetAtlas": 3,
        "assetTexture": "gear_9",
        "obtainType": null
    },
    "10": {
        "id": 10,
        "battleStatData": {
            "agility": 1,
            "intelligence": 1,
            "strength": 5
        },
        "craftRecipe": null,
        "enchantMultiplier": 0,
        "color": 1,
        "fragmentMergeCost": null,
        "fragmentBuyCost": null,
        "fragmentSellCost": null,
        "buyCost": {
            "gold": 1250
        },
        "buySpecialCost": null,
        "fragmentSpecialCost": null,
        "sellCost": {
            "gold": 250
        },
        "enchantValue": 2,
        "fragmentEnchantValue": 0,
        "teamLevel": 5,
        "heroLevel": 5,
        "assetAtlas": 3,
        "assetTexture": "gear_13",
        "obtainType": null
    },
    "11": {
        "id": 11,
        "battleStatData": {
            "agility": 1,
            "intelligence": 5,
            "strength": 1
        },
        "craftRecipe": null,
        "enchantMultiplier": 0,
        "color": 1,
        "fragmentMergeCost": null,
        "fragmentBuyCost": null,
        "fragmentSellCost": null,
        "buyCost": {
            "gold": 1250
        },
        "buySpecialCost": null,
        "fragmentSpecialCost": null,
        "sellCost": {
            "gold": 250
        },
        "enchantValue": 2,
        "fragmentEnchantValue": 0,
        "teamLevel": 5,
        "heroLevel": 5,
        "assetAtlas": 3,
        "assetTexture": "gear_7",
        "obtainType": null
    },
    "12": {
        "id": 12,
        "battleStatData": {
            "agility": 5,
            "intelligence": 1,
            "strength": 1
        },
        "craftRecipe": null,
        "enchantMultiplier": 0,
        "color": 1,
        "fragmentMergeCost": null,
        "fragmentBuyCost": null,
        "fragmentSellCost": null,
        "buyCost": {
            "gold": 1250
        },
        "buySpecialCost": null,
        "fragmentSpecialCost": null,
        "sellCost": {
            "gold": 250
        },
        "enchantValue": 2,
        "fragmentEnchantValue": 0,
        "teamLevel": 5,
        "heroLevel": 5,
        "assetAtlas": 3,
        "assetTexture": "gear_4",
        "obtainType": null
    },
    "13": {
        "id": 13,
        "battleStatData": {
            "hp": 385
        },
        "craftRecipe": null,
        "enchantMultiplier": 0,
        "color": 1,
        "fragmentMergeCost": null,
        "fragmentBuyCost": null,
        "fragmentSellCost": null,
        "buyCost": {
            "gold": 1250
        },
        "buySpecialCost": null,
        "fragmentSpecialCost": null,
        "sellCost": {
            "gold": 250
        },
        "enchantValue": 2,
        "fragmentEnchantValue": 0,
        "teamLevel": 3,
        "heroLevel": 3,
        "assetAtlas": 3,
        "assetTexture": "gear_16",
        "obtainType": null
    },
    "14": {
        "id": 14,
        "battleStatData": {
            "physicalAttack": 25
        },
        "craftRecipe": null,
        "enchantMultiplier": 0,
        "color": 1,
        "fragmentMergeCost": null,
        "fragmentBuyCost": null,
        "fragmentSellCost": null,
        "buyCost": {
            "gold": 1250
        },
        "buySpecialCost": null,
        "fragmentSpecialCost": null,
        "sellCost": {
            "gold": 250
        },
        "enchantValue": 2,
        "fragmentEnchantValue": 0,
        "teamLevel": 3,
        "heroLevel": 3,
        "assetAtlas": 3,
        "assetTexture": "gear_1",
        "obtainType": null
    },
    "15": {
        "id": 15,
        "battleStatData": {
            "strength": 7
        },
        "craftRecipe": null,
        "enchantMultiplier": 0,
        "color": 1,
        "fragmentMergeCost": null,
        "fragmentBuyCost": null,
        "fragmentSellCost": null,
        "buyCost": {
            "gold": 1250
        },
        "buySpecialCost": null,
        "fragmentSpecialCost": null,
        "sellCost": {
            "gold": 250
        },
        "enchantValue": 2,
        "fragmentEnchantValue": 0,
        "teamLevel": 3,
        "heroLevel": 3,
        "assetAtlas": 3,
        "assetTexture": "gear_14",
        "obtainType": null
    },
    "16": {
        "id": 16,
        "battleStatData": {
            "intelligence": 7
        },
        "craftRecipe": null,
        "enchantMultiplier": 0,
        "color": 1,
        "fragmentMergeCost": null,
        "fragmentBuyCost": null,
        "fragmentSellCost": null,
        "buyCost": {
            "gold": 1250
        },
        "buySpecialCost": null,
        "fragmentSpecialCost": null,
        "sellCost": {
            "gold": 250
        },
        "enchantValue": 2,
        "fragmentEnchantValue": 0,
        "teamLevel": 3,
        "heroLevel": 3,
        "assetAtlas": 3,
        "assetTexture": "gear_18",
        "obtainType": null
    },
    "17": {
        "id": 17,
        "battleStatData": {
            "agility": 7
        },
        "craftRecipe": null,
        "enchantMultiplier": 0,
        "color": 1,
        "fragmentMergeCost": null,
        "fragmentBuyCost": null,
        "fragmentSellCost": null,
        "buyCost": {
            "gold": 1250
        },
        "buySpecialCost": null,
        "fragmentSpecialCost": null,
        "sellCost": {
            "gold": 250
        },
        "enchantValue": 2,
        "fragmentEnchantValue": 0,
        "teamLevel": 3,
        "heroLevel": 3,
        "assetAtlas": 3,
        "assetTexture": "gear_19",
        "obtainType": null
    },
    "18": {
        "id": 18,
        "battleStatData": {
            "hp": 385,
            "strength": 7
        },
        "craftRecipe": {
            "gear": {
                "13": 1,
                "15": 1
            },
            "gold": 4500
        },
        "enchantMultiplier": 0,
        "color": 1,
        "fragmentMergeCost": null,
        "fragmentBuyCost": null,
        "fragmentSellCost": null,
        "buyCost": {
            "gold": 2650
        },
        "buySpecialCost": null,
        "fragmentSpecialCost": null,
        "sellCost": {
            "gold": 530
        },
        "enchantValue": 4,
        "fragmentEnchantValue": 0,
        "teamLevel": 4,
        "heroLevel": 4,
        "assetAtlas": 3,
        "assetTexture": "gear_20",
        "obtainType": null
    },
    "19": {
        "id": 19,
        "battleStatData": {
            "intelligence": 7,
            "magicPower": 50
        },
        "craftRecipe": {
            "gear": {
                "7": 2,
                "16": 1
            },
            "gold": 4500
        },
        "enchantMultiplier": 0,
        "color": 1,
        "fragmentMergeCost": null,
        "fragmentBuyCost": null,
        "fragmentSellCost": null,
        "buyCost": {
            "gold": 3400
        },
        "buySpecialCost": null,
        "fragmentSpecialCost": null,
        "sellCost": {
            "gold": 680
        },
        "enchantValue": 6,
        "fragmentEnchantValue": 0,
        "teamLevel": 4,
        "heroLevel": 4,
        "assetAtlas": 3,
        "assetTexture": "gear_15",
        "obtainType": null
    },
    "20": {
        "id": 20,
        "battleStatData": {
            "agility": 7,
            "physicalAttack": 25
        },
        "craftRecipe": {
            "gear": {
                "14": 1,
                "17": 1
            },
            "gold": 4500
        },
        "enchantMultiplier": 0,
        "color": 1,
        "fragmentMergeCost": null,
        "fragmentBuyCost": null,
        "fragmentSellCost": null,
        "buyCost": {
            "gold": 2650
        },
        "buySpecialCost": null,
        "fragmentSpecialCost": null,
        "sellCost": {
            "gold": 530
        },
        "enchantValue": 4,
        "fragmentEnchantValue": 0,
        "teamLevel": 4,
        "heroLevel": 4,
        "assetAtlas": 3,
        "assetTexture": "gear_17",
        "obtainType": null
    },
    "21": {
        "id": 21,
        "battleStatData": {
            "strength": 10
        },
        "craftRecipe": null,
        "enchantMultiplier": 2,
        "color": 2,
        "fragmentMergeCost": null,
        "fragmentBuyCost": null,
        "fragmentSellCost": null,
        "buyCost": {
            "gold": 1500
        },
        "buySpecialCost": null,
        "fragmentSpecialCost": null,
        "sellCost": {
            "gold": 300
        },
        "enchantValue": 3,
        "fragmentEnchantValue": 0,
        "teamLevel": 12,
        "heroLevel": 12,
        "assetAtlas": 3,
        "assetTexture": "gear_34",
        "obtainType": null
    },
    "22": {
        "id": 22,
        "battleStatData": {
            "intelligence": 10
        },
        "craftRecipe": null,
        "enchantMultiplier": 2,
        "color": 2,
        "fragmentMergeCost": null,
        "fragmentBuyCost": null,
        "fragmentSellCost": null,
        "buyCost": {
            "gold": 1500
        },
        "buySpecialCost": null,
        "fragmentSpecialCost": null,
        "sellCost": {
            "gold": 300
        },
        "enchantValue": 3,
        "fragmentEnchantValue": 0,
        "teamLevel": 12,
        "heroLevel": 12,
        "assetAtlas": 3,
        "assetTexture": "gear_44",
        "obtainType": null
    },
    "23": {
        "id": 23,
        "battleStatData": {
            "agility": 10
        },
        "craftRecipe": null,
        "enchantMultiplier": 2,
        "color": 2,
        "fragmentMergeCost": null,
        "fragmentBuyCost": null,
        "fragmentSellCost": null,
        "buyCost": {
            "gold": 1500
        },
        "buySpecialCost": null,
        "fragmentSpecialCost": null,
        "sellCost": {
            "gold": 300
        },
        "enchantValue": 3,
        "fragmentEnchantValue": 0,
        "teamLevel": 12,
        "heroLevel": 12,
        "assetAtlas": 3,
        "assetTexture": "gear_38",
        "obtainType": null
    },
    "24": {
        "id": 24,
        "battleStatData": {
            "hp": 500
        },
        "craftRecipe": null,
        "enchantMultiplier": 2,
        "color": 2,
        "fragmentMergeCost": null,
        "fragmentBuyCost": null,
        "fragmentSellCost": null,
        "buyCost": {
            "gold": 1500
        },
        "buySpecialCost": null,
        "fragmentSpecialCost": null,
        "sellCost": {
            "gold": 300
        },
        "enchantValue": 3,
        "fragmentEnchantValue": 0,
        "teamLevel": 10,
        "heroLevel": 10,
        "assetAtlas": 3,
        "assetTexture": "gear_36",
        "obtainType": null
    },
    "25": {
        "id": 25,
        "battleStatData": {
            "physicalAttack": 33
        },
        "craftRecipe": null,
        "enchantMultiplier": 2,
        "color": 2,
        "fragmentMergeCost": null,
        "fragmentBuyCost": null,
        "fragmentSellCost": null,
        "buyCost": {
            "gold": 1500
        },
        "buySpecialCost": null,
        "fragmentSpecialCost": null,
        "sellCost": {
            "gold": 300
        },
        "enchantValue": 3,
        "fragmentEnchantValue": 0,
        "teamLevel": 10,
        "heroLevel": 10,
        "assetAtlas": 3,
        "assetTexture": "gear_22",
        "obtainType": null
    },
    "26": {
        "id": 26,
        "battleStatData": {
            "magicPower": 50
        },
        "craftRecipe": null,
        "enchantMultiplier": 2,
        "color": 2,
        "fragmentMergeCost": null,
        "fragmentBuyCost": null,
        "fragmentSellCost": null,
        "buyCost": {
            "gold": 1500
        },
        "buySpecialCost": null,
        "fragmentSpecialCost": null,
        "sellCost": {
            "gold": 300
        },
        "enchantValue": 3,
        "fragmentEnchantValue": 0,
        "teamLevel": 10,
        "heroLevel": 10,
        "assetAtlas": 3,
        "assetTexture": "gear_30",
        "obtainType": null
    },
    "27": {
        "id": 27,
        "battleStatData": {
            "armor": 50
        },
        "craftRecipe": null,
        "enchantMultiplier": 2,
        "color": 2,
        "fragmentMergeCost": null,
        "fragmentBuyCost": null,
        "fragmentSellCost": null,
        "buyCost": {
            "gold": 1500
        },
        "buySpecialCost": null,
        "fragmentSpecialCost": null,
        "sellCost": {
            "gold": 300
        },
        "enchantValue": 3,
        "fragmentEnchantValue": 0,
        "teamLevel": 10,
        "heroLevel": 10,
        "assetAtlas": 3,
        "assetTexture": "gear_28",
        "obtainType": null
    },
    "28": {
        "id": 28,
        "battleStatData": {
            "magicResist": 50
        },
        "craftRecipe": null,
        "enchantMultiplier": 2,
        "color": 2,
        "fragmentMergeCost": null,
        "fragmentBuyCost": null,
        "fragmentSellCost": null,
        "buyCost": {
            "gold": 1500
        },
        "buySpecialCost": null,
        "fragmentSpecialCost": null,
        "sellCost": {
            "gold": 300
        },
        "enchantValue": 3,
        "fragmentEnchantValue": 0,
        "teamLevel": 10,
        "heroLevel": 10,
        "assetAtlas": 3,
        "assetTexture": "gear_32",
        "obtainType": null
    },
    "29": {
        "id": 29,
        "battleStatData": {
            "physicalCritChance": 15
        },
        "craftRecipe": null,
        "enchantMultiplier": 2,
        "color": 2,
        "fragmentMergeCost": null,
        "fragmentBuyCost": null,
        "fragmentSellCost": null,
        "buyCost": {
            "gold": 1500
        },
        "buySpecialCost": null,
        "fragmentSpecialCost": null,
        "sellCost": {
            "gold": 300
        },
        "enchantValue": 3,
        "fragmentEnchantValue": 0,
        "teamLevel": 12,
        "heroLevel": 12,
        "assetAtlas": 3,
        "assetTexture": "gear_54",
        "obtainType": null
    },
    "30": {
        "id": 30,
        "battleStatData": {
            "dodge": 15
        },
        "craftRecipe": null,
        "enchantMultiplier": 2,
        "color": 2,
        "fragmentMergeCost": null,
        "fragmentBuyCost": null,
        "fragmentSellCost": null,
        "buyCost": {
            "gold": 1500
        },
        "buySpecialCost": null,
        "fragmentSpecialCost": null,
        "sellCost": {
            "gold": 300
        },
        "enchantValue": 3,
        "fragmentEnchantValue": 0,
        "teamLevel": 12,
        "heroLevel": 12,
        "assetAtlas": 3,
        "assetTexture": "gear_43",
        "obtainType": null
    },
    "31": {
        "id": 31,
        "battleStatData": {
            "armorPenetration": 50
        },
        "craftRecipe": null,
        "enchantMultiplier": 2,
        "color": 2,
        "fragmentMergeCost": null,
        "fragmentBuyCost": null,
        "fragmentSellCost": null,
        "buyCost": {
            "gold": 1500
        },
        "buySpecialCost": null,
        "fragmentSpecialCost": null,
        "sellCost": {
            "gold": 300
        },
        "enchantValue": 3,
        "fragmentEnchantValue": 0,
        "teamLevel": 10,
        "heroLevel": 10,
        "assetAtlas": 3,
        "assetTexture": "gear_26",
        "obtainType": null
    },
    "32": {
        "id": 32,
        "battleStatData": {
            "magicPenetration": 50
        },
        "craftRecipe": null,
        "enchantMultiplier": 2,
        "color": 2,
        "fragmentMergeCost": null,
        "fragmentBuyCost": null,
        "fragmentSellCost": null,
        "buyCost": {
            "gold": 1500
        },
        "buySpecialCost": null,
        "fragmentSpecialCost": null,
        "sellCost": {
            "gold": 300
        },
        "enchantValue": 3,
        "fragmentEnchantValue": 0,
        "teamLevel": 10,
        "heroLevel": 10,
        "assetAtlas": 3,
        "assetTexture": "gear_35",
        "obtainType": null
    },
    "33": {
        "id": 33,
        "battleStatData": {
            "agility": 5,
            "intelligence": 5,
            "strength": 12
        },
        "craftRecipe": {
            "gear": {
                "6": 1,
                "15": 1
            },
            "gold": 13500
        },
        "enchantMultiplier": 2,
        "color": 2,
        "fragmentMergeCost": null,
        "fragmentBuyCost": null,
        "fragmentSellCost": null,
        "buyCost": {
            "gold": 4825
        },
        "buySpecialCost": null,
        "fragmentSpecialCost": null,
        "sellCost": {
            "gold": 965
        },
        "enchantValue": 8,
        "fragmentEnchantValue": 0,
        "teamLevel": 20,
        "heroLevel": 20,
        "assetAtlas": 3,
        "assetTexture": "gear_25",
        "obtainType": null
    },
    "34": {
        "id": 34,
        "battleStatData": {
            "agility": 5,
            "intelligence": 12,
            "strength": 5
        },
        "craftRecipe": {
            "gear": {
                "6": 1,
                "16": 1
            },
            "gold": 13500
        },
        "enchantMultiplier": 2,
        "color": 2,
        "fragmentMergeCost": null,
        "fragmentBuyCost": null,
        "fragmentSellCost": null,
        "buyCost": {
            "gold": 4825
        },
        "buySpecialCost": null,
        "fragmentSpecialCost": null,
        "sellCost": {
            "gold": 965
        },
        "enchantValue": 8,
        "fragmentEnchantValue": 0,
        "teamLevel": 20,
        "heroLevel": 20,
        "assetAtlas": 3,
        "assetTexture": "gear_45",
        "obtainType": null
    },
    "35": {
        "id": 35,
        "battleStatData": {
            "agility": 12,
            "intelligence": 5,
            "strength": 5
        },
        "craftRecipe": {
            "gear": {
                "6": 1,
                "17": 1
            },
            "gold": 13500
        },
        "enchantMultiplier": 1,
        "color": 2,
        "fragmentMergeCost": null,
        "fragmentBuyCost": null,
        "fragmentSellCost": null,
        "buyCost": {
            "gold": 4825
        },
        "buySpecialCost": null,
        "fragmentSpecialCost": null,
        "sellCost": {
            "gold": 965
        },
        "enchantValue": 8,
        "fragmentEnchantValue": 0,
        "teamLevel": 18,
        "heroLevel": 18,
        "assetAtlas": 3,
        "assetTexture": "gear_27",
        "obtainType": null
    },
    "36": {
        "id": 36,
        "battleStatData": {
            "hp": 500,
            "strength": 10
        },
        "craftRecipe": {
            "gear": {
                "21": 1,
                "24": 1
            },
            "gold": 13500
        },
        "enchantMultiplier": 1,
        "color": 2,
        "fragmentMergeCost": null,
        "fragmentBuyCost": null,
        "fragmentSellCost": null,
        "buyCost": {
            "gold": 3450
        },
        "buySpecialCost": null,
        "fragmentSpecialCost": null,
        "sellCost": {
            "gold": 690
        },
        "enchantValue": 6,
        "fragmentEnchantValue": 0,
        "teamLevel": 16,
        "heroLevel": 16,
        "assetAtlas": 3,
        "assetTexture": "gear_52",
        "obtainType": null
    },
    "37": {
        "id": 37,
        "battleStatData": {
            "armor": 50,
            "strength": 10
        },
        "craftRecipe": {
            "gear": {
                "21": 1,
                "27": 1
            },
            "gold": 13500
        },
        "enchantMultiplier": 1,
        "color": 2,
        "fragmentMergeCost": null,
        "fragmentBuyCost": null,
        "fragmentSellCost": null,
        "buyCost": {
            "gold": 3450
        },
        "buySpecialCost": null,
        "fragmentSpecialCost": null,
        "sellCost": {
            "gold": 690
        },
        "enchantValue": 6,
        "fragmentEnchantValue": 0,
        "teamLevel": 16,
        "heroLevel": 16,
        "assetAtlas": 3,
        "assetTexture": "gear_42",
        "obtainType": null
    },
    "38": {
        "id": 38,
        "battleStatData": {
            "agility": 10,
            "physicalAttack": 33
        },
        "craftRecipe": {
            "gear": {
                "23": 1,
                "25": 1
            },
            "gold": 13500
        },
        "enchantMultiplier": 1,
        "color": 2,
        "fragmentMergeCost": null,
        "fragmentBuyCost": null,
        "fragmentSellCost": null,
        "buyCost": {
            "gold": 3450
        },
        "buySpecialCost": null,
        "fragmentSpecialCost": null,
        "sellCost": {
            "gold": 690
        },
        "enchantValue": 6,
        "fragmentEnchantValue": 0,
        "teamLevel": 20,
        "heroLevel": 20,
        "assetAtlas": 3,
        "assetTexture": "gear_41",
        "obtainType": null
    },
    "39": {
        "id": 39,
        "battleStatData": {
            "agility": 10,
            "magicResist": 50
        },
        "craftRecipe": {
            "gear": {
                "23": 1,
                "28": 1
            },
            "gold": 13500
        },
        "enchantMultiplier": 1,
        "color": 2,
        "fragmentMergeCost": null,
        "fragmentBuyCost": null,
        "fragmentSellCost": null,
        "buyCost": {
            "gold": 3450
        },
        "buySpecialCost": null,
        "fragmentSpecialCost": null,
        "sellCost": {
            "gold": 690
        },
        "enchantValue": 6,
        "fragmentEnchantValue": 0,
        "teamLevel": 20,
        "heroLevel": 20,
        "assetAtlas": 3,
        "assetTexture": "gear_39",
        "obtainType": null
    },
    "40": {
        "id": 40,
        "battleStatData": {
            "intelligence": 10,
            "magicPower": 50
        },
        "craftRecipe": {
            "gear": {
                "22": 1,
                "26": 1
            },
            "gold": 13500
        },
        "enchantMultiplier": 1,
        "color": 2,
        "fragmentMergeCost": null,
        "fragmentBuyCost": null,
        "fragmentSellCost": null,
        "buyCost": {
            "gold": 3450
        },
        "buySpecialCost": null,
        "fragmentSpecialCost": null,
        "sellCost": {
            "gold": 690
        },
        "enchantValue": 6,
        "fragmentEnchantValue": 0,
        "teamLevel": 20,
        "heroLevel": 20,
        "assetAtlas": 3,
        "assetTexture": "gear_31",
        "obtainType": null
    },
    "41": {
        "id": 41,
        "battleStatData": {
            "armor": 50,
            "intelligence": 10
        },
        "craftRecipe": {
            "gear": {
                "22": 1,
                "27": 1
            },
            "gold": 13500
        },
        "enchantMultiplier": 1,
        "color": 2,
        "fragmentMergeCost": null,
        "fragmentBuyCost": null,
        "fragmentSellCost": null,
        "buyCost": {
            "gold": 3450
        },
        "buySpecialCost": null,
        "fragmentSpecialCost": null,
        "sellCost": {
            "gold": 690
        },
        "enchantValue": 6,
        "fragmentEnchantValue": 0,
        "teamLevel": 18,
        "heroLevel": 18,
        "assetAtlas": 3,
        "assetTexture": "gear_23",
        "obtainType": null
    },
    "42": {
        "id": 42,
        "battleStatData": {
            "hp": 500,
            "physicalAttack": 33
        },
        "craftRecipe": {
            "gear": {
                "24": 1,
                "25": 1
            },
            "gold": 13500,
            "scroll": {
                "141": 1
            }
        },
        "enchantMultiplier": 1,
        "color": 2,
        "fragmentMergeCost": null,
        "fragmentBuyCost": null,
        "fragmentSellCost": null,
        "buyCost": {
            "gold": 4450
        },
        "buySpecialCost": null,
        "fragmentSpecialCost": null,
        "sellCost": {
            "gold": 890
        },
        "enchantValue": 8,
        "fragmentEnchantValue": 0,
        "teamLevel": 20,
        "heroLevel": 20,
        "assetAtlas": 3,
        "assetTexture": "gear_48",
        "obtainType": null
    },
    "43": {
        "id": 43,
        "battleStatData": {
            "armor": 50,
            "physicalAttack": 33
        },
        "craftRecipe": {
            "gear": {
                "25": 1,
                "27": 1
            },
            "gold": 13500,
            "scroll": {
                "142": 1
            }
        },
        "enchantMultiplier": 1,
        "color": 2,
        "fragmentMergeCost": null,
        "fragmentBuyCost": null,
        "fragmentSellCost": null,
        "buyCost": {
            "gold": 4450
        },
        "buySpecialCost": null,
        "fragmentSpecialCost": null,
        "sellCost": {
            "gold": 890
        },
        "enchantValue": 8,
        "fragmentEnchantValue": 0,
        "teamLevel": 20,
        "heroLevel": 20,
        "assetAtlas": 3,
        "assetTexture": "gear_21",
        "obtainType": null
    },
    "44": {
        "id": 44,
        "battleStatData": {
            "armor": 50,
            "magicResist": 50
        },
        "craftRecipe": {
            "gear": {
                "27": 1,
                "28": 1
            },
            "gold": 13500,
            "scroll": {
                "143": 1
            }
        },
        "enchantMultiplier": 1,
        "color": 2,
        "fragmentMergeCost": null,
        "fragmentBuyCost": null,
        "fragmentSellCost": null,
        "buyCost": {
            "gold": 4450
        },
        "buySpecialCost": null,
        "fragmentSpecialCost": null,
        "sellCost": {
            "gold": 890
        },
        "enchantValue": 8,
        "fragmentEnchantValue": 0,
        "teamLevel": 20,
        "heroLevel": 20,
        "assetAtlas": 3,
        "assetTexture": "gear_50",
        "obtainType": null
    },
    "45": {
        "id": 45,
        "battleStatData": {
            "magicPower": 50,
            "magicResist": 50
        },
        "craftRecipe": {
            "gear": {
                "26": 1,
                "28": 1
            },
            "gold": 13500,
            "scroll": {
                "144": 1
            }
        },
        "enchantMultiplier": 1,
        "color": 2,
        "fragmentMergeCost": null,
        "fragmentBuyCost": null,
        "fragmentSellCost": null,
        "buyCost": {
            "gold": 4450
        },
        "buySpecialCost": null,
        "fragmentSpecialCost": null,
        "sellCost": {
            "gold": 890
        },
        "enchantValue": 8,
        "fragmentEnchantValue": 0,
        "teamLevel": 20,
        "heroLevel": 20,
        "assetAtlas": 3,
        "assetTexture": "gear_24",
        "obtainType": null
    },
    "46": {
        "id": 46,
        "battleStatData": {
            "hp": 500,
            "magicPower": 50
        },
        "craftRecipe": {
            "gear": {
                "24": 1,
                "26": 1
            },
            "gold": 13500,
            "scroll": {
                "145": 1
            }
        },
        "enchantMultiplier": 1,
        "color": 2,
        "fragmentMergeCost": null,
        "fragmentBuyCost": null,
        "fragmentSellCost": null,
        "buyCost": {
            "gold": 4450
        },
        "buySpecialCost": null,
        "fragmentSpecialCost": null,
        "sellCost": {
            "gold": 890
        },
        "enchantValue": 8,
        "fragmentEnchantValue": 0,
        "teamLevel": 20,
        "heroLevel": 20,
        "assetAtlas": 3,
        "assetTexture": "gear_46",
        "obtainType": null
    },
    "47": {
        "id": 47,
        "battleStatData": {
            "armor": 42,
            "hp": 420,
            "physicalAttack": 28,
            "strength": 15
        },
        "craftRecipe": null,
        "enchantMultiplier": 1,
        "color": 2,
        "fragmentMergeCost": {
            "fragmentCount": 5,
            "gold": 22500
        },
        "fragmentBuyCost": {
            "gold": 750
        },
        "fragmentSellCost": {
            "gold": 150
        },
        "buyCost": {
            "gold": 4500
        },
        "buySpecialCost": null,
        "fragmentSpecialCost": null,
        "sellCost": {
            "gold": 900
        },
        "enchantValue": 10,
        "fragmentEnchantValue": 2,
        "teamLevel": 24,
        "heroLevel": 24,
        "assetAtlas": 3,
        "assetTexture": "gear_47",
        "obtainType": null
    },
    "48": {
        "id": 48,
        "battleStatData": {
            "intelligence": 15,
            "magicPower": 84,
            "magicResist": 42
        },
        "craftRecipe": null,
        "enchantMultiplier": 1,
        "color": 2,
        "fragmentMergeCost": {
            "fragmentCount": 5,
            "gold": 22500
        },
        "fragmentBuyCost": {
            "gold": 750
        },
        "fragmentSellCost": {
            "gold": 150
        },
        "buyCost": {
            "gold": 4500
        },
        "buySpecialCost": null,
        "fragmentSpecialCost": null,
        "sellCost": {
            "gold": 900
        },
        "enchantValue": 10,
        "fragmentEnchantValue": 2,
        "teamLevel": 20,
        "heroLevel": 20,
        "assetAtlas": 3,
        "assetTexture": "gear_40",
        "obtainType": null
    },
    "49": {
        "id": 49,
        "battleStatData": {
            "armor": 42,
            "intelligence": 22,
            "physicalAttack": 28
        },
        "craftRecipe": null,
        "enchantMultiplier": 1,
        "color": 2,
        "fragmentMergeCost": {
            "fragmentCount": 5,
            "gold": 22500
        },
        "fragmentBuyCost": {
            "gold": 750
        },
        "fragmentSellCost": {
            "gold": 150
        },
        "buyCost": {
            "gold": 4500
        },
        "buySpecialCost": null,
        "fragmentSpecialCost": null,
        "sellCost": {
            "gold": 900
        },
        "enchantValue": 10,
        "fragmentEnchantValue": 2,
        "teamLevel": 24,
        "heroLevel": 24,
        "assetAtlas": 3,
        "assetTexture": "gear_49",
        "obtainType": null
    },
    "50": {
        "id": 50,
        "battleStatData": {
            "agility": 15,
            "magicResist": 42,
            "physicalAttack": 56
        },
        "craftRecipe": null,
        "enchantMultiplier": 1,
        "color": 2,
        "fragmentMergeCost": {
            "fragmentCount": 5,
            "gold": 22500
        },
        "fragmentBuyCost": {
            "gold": 750
        },
        "fragmentSellCost": {
            "gold": 150
        },
        "buyCost": {
            "gold": 4500
        },
        "buySpecialCost": null,
        "fragmentSpecialCost": null,
        "sellCost": {
            "gold": 900
        },
        "enchantValue": 10,
        "fragmentEnchantValue": 2,
        "teamLevel": 24,
        "heroLevel": 24,
        "assetAtlas": 3,
        "assetTexture": "gear_55",
        "obtainType": null
    },
    "51": {
        "id": 51,
        "battleStatData": {
            "agility": 10,
            "intelligence": 10,
            "strength": 10
        },
        "craftRecipe": {
            "gear": {
                "21": 1,
                "22": 1,
                "23": 1
            },
            "gold": 27000
        },
        "enchantMultiplier": 1,
        "color": 2,
        "fragmentMergeCost": null,
        "fragmentBuyCost": null,
        "fragmentSellCost": null,
        "buyCost": {
            "gold": 5400
        },
        "buySpecialCost": null,
        "fragmentSpecialCost": null,
        "sellCost": {
            "gold": 1080
        },
        "enchantValue": 9,
        "fragmentEnchantValue": 0,
        "teamLevel": 20,
        "heroLevel": 20,
        "assetAtlas": 3,
        "assetTexture": "gear_29",
        "obtainType": null
    },
    "52": {
        "id": 52,
        "battleStatData": {
            "intelligence": 10,
            "magicPenetration": 50
        },
        "craftRecipe": {
            "gear": {
                "22": 1,
                "32": 1
            },
            "gold": 18000
        },
        "enchantMultiplier": 1,
        "color": 2,
        "fragmentMergeCost": null,
        "fragmentBuyCost": null,
        "fragmentSellCost": null,
        "buyCost": {
            "gold": 3600
        },
        "buySpecialCost": null,
        "fragmentSpecialCost": null,
        "sellCost": {
            "gold": 720
        },
        "enchantValue": 6,
        "fragmentEnchantValue": 0,
        "teamLevel": 24,
        "heroLevel": 24,
        "assetAtlas": 3,
        "assetTexture": "gear_53",
        "obtainType": null
    },
    "53": {
        "id": 53,
        "battleStatData": {
            "armorPenetration": 50,
            "physicalAttack": 33
        },
        "craftRecipe": {
            "gear": {
                "25": 1,
                "31": 1
            },
            "gold": 18000
        },
        "enchantMultiplier": 1,
        "color": 2,
        "fragmentMergeCost": null,
        "fragmentBuyCost": null,
        "fragmentSellCost": null,
        "buyCost": {
            "gold": 3600
        },
        "buySpecialCost": null,
        "fragmentSpecialCost": null,
        "sellCost": {
            "gold": 720
        },
        "enchantValue": 6,
        "fragmentEnchantValue": 0,
        "teamLevel": 24,
        "heroLevel": 24,
        "assetAtlas": 3,
        "assetTexture": "gear_37",
        "obtainType": null
    },
    "54": {
        "id": 54,
        "battleStatData": {
            "dodge": 15,
            "hp": 500
        },
        "craftRecipe": {
            "gear": {
                "24": 1,
                "30": 1
            },
            "gold": 18000
        },
        "enchantMultiplier": 1,
        "color": 2,
        "fragmentMergeCost": null,
        "fragmentBuyCost": null,
        "fragmentSellCost": null,
        "buyCost": {
            "gold": 3600
        },
        "buySpecialCost": null,
        "fragmentSpecialCost": null,
        "sellCost": {
            "gold": 720
        },
        "enchantValue": 6,
        "fragmentEnchantValue": 0,
        "teamLevel": 24,
        "heroLevel": 24,
        "assetAtlas": 3,
        "assetTexture": "gear_33",
        "obtainType": null
    },
    "55": {
        "id": 55,
        "battleStatData": {
            "physicalAttack": 33,
            "physicalCritChance": 15
        },
        "craftRecipe": {
            "gear": {
                "25": 1,
                "29": 1
            },
            "gold": 18000
        },
        "enchantMultiplier": 1,
        "color": 2,
        "fragmentMergeCost": null,
        "fragmentBuyCost": null,
        "fragmentSellCost": null,
        "buyCost": {
            "gold": 3600
        },
        "buySpecialCost": null,
        "fragmentSpecialCost": null,
        "sellCost": {
            "gold": 720
        },
        "enchantValue": 6,
        "fragmentEnchantValue": 0,
        "teamLevel": 24,
        "heroLevel": 24,
        "assetAtlas": 3,
        "assetTexture": "gear_51",
        "obtainType": null
    },
    "56": {
        "id": 56,
        "battleStatData": {
            "hp": 1000
        },
        "craftRecipe": null,
        "enchantMultiplier": 1,
        "color": 3,
        "fragmentMergeCost": {
            "fragmentCount": 5,
            "gold": 22500
        },
        "fragmentBuyCost": {
            "gold": 750
        },
        "fragmentSellCost": {
            "gold": 150
        },
        "buyCost": {
            "gold": 4500
        },
        "buySpecialCost": 149,
        "fragmentSpecialCost": null,
        "sellCost": {
            "gold": 900
        },
        "enchantValue": 15,
        "fragmentEnchantValue": 3,
        "teamLevel": 28,
        "heroLevel": 28,
        "assetAtlas": 3,
        "assetTexture": "gear_61",
        "obtainType": null
    },
    "57": {
        "id": 57,
        "battleStatData": {
            "physicalAttack": 70
        },
        "craftRecipe": null,
        "enchantMultiplier": 1,
        "color": 3,
        "fragmentMergeCost": {
            "fragmentCount": 5,
            "gold": 22500
        },
        "fragmentBuyCost": {
            "gold": 750
        },
        "fragmentSellCost": {
            "gold": 150
        },
        "buyCost": {
            "gold": 4500
        },
        "buySpecialCost": 149,
        "fragmentSpecialCost": null,
        "sellCost": {
            "gold": 900
        },
        "enchantValue": 15,
        "fragmentEnchantValue": 3,
        "teamLevel": 28,
        "heroLevel": 28,
        "assetAtlas": 3,
        "assetTexture": "gear_65",
        "obtainType": null
    },
    "58": {
        "id": 58,
        "battleStatData": {
            "magicPower": 100
        },
        "craftRecipe": null,
        "enchantMultiplier": 1,
        "color": 3,
        "fragmentMergeCost": {
            "fragmentCount": 5,
            "gold": 22500
        },
        "fragmentBuyCost": {
            "gold": 750
        },
        "fragmentSellCost": {
            "gold": 150
        },
        "buyCost": {
            "gold": 4500
        },
        "buySpecialCost": 149,
        "fragmentSpecialCost": null,
        "sellCost": {
            "gold": 900
        },
        "enchantValue": 15,
        "fragmentEnchantValue": 3,
        "teamLevel": 28,
        "heroLevel": 28,
        "assetAtlas": 3,
        "assetTexture": "gear_60",
        "obtainType": null
    },
    "59": {
        "id": 59,
        "battleStatData": {
            "armor": 100
        },
        "craftRecipe": null,
        "enchantMultiplier": 1,
        "color": 3,
        "fragmentMergeCost": {
            "fragmentCount": 5,
            "gold": 22500
        },
        "fragmentBuyCost": {
            "gold": 750
        },
        "fragmentSellCost": {
            "gold": 150
        },
        "buyCost": {
            "gold": 4500
        },
        "buySpecialCost": 149,
        "fragmentSpecialCost": null,
        "sellCost": {
            "gold": 900
        },
        "enchantValue": 15,
        "fragmentEnchantValue": 3,
        "teamLevel": 30,
        "heroLevel": 30,
        "assetAtlas": 3,
        "assetTexture": "gear_79",
        "obtainType": null
    },
    "60": {
        "id": 60,
        "battleStatData": {
            "magicResist": 100
        },
        "craftRecipe": null,
        "enchantMultiplier": 1,
        "color": 3,
        "fragmentMergeCost": {
            "fragmentCount": 5,
            "gold": 22500
        },
        "fragmentBuyCost": {
            "gold": 750
        },
        "fragmentSellCost": {
            "gold": 150
        },
        "buyCost": {
            "gold": 4500
        },
        "buySpecialCost": 149,
        "fragmentSpecialCost": null,
        "sellCost": {
            "gold": 900
        },
        "enchantValue": 15,
        "fragmentEnchantValue": 3,
        "teamLevel": 30,
        "heroLevel": 30,
        "assetAtlas": 3,
        "assetTexture": "gear_59",
        "obtainType": null
    },
    "61": {
        "id": 61,
        "battleStatData": {
            "physicalCritChance": 30
        },
        "craftRecipe": null,
        "enchantMultiplier": 1,
        "color": 3,
        "fragmentMergeCost": {
            "fragmentCount": 5,
            "gold": 22500
        },
        "fragmentBuyCost": {
            "gold": 750
        },
        "fragmentSellCost": {
            "gold": 150
        },
        "buyCost": {
            "gold": 4500
        },
        "buySpecialCost": 149,
        "fragmentSpecialCost": null,
        "sellCost": {
            "gold": 900
        },
        "enchantValue": 15,
        "fragmentEnchantValue": 3,
        "teamLevel": 30,
        "heroLevel": 30,
        "assetAtlas": 3,
        "assetTexture": "gear_67",
        "obtainType": null
    },
    "62": {
        "id": 62,
        "battleStatData": {
            "dodge": 30
        },
        "craftRecipe": null,
        "enchantMultiplier": 1,
        "color": 3,
        "fragmentMergeCost": {
            "fragmentCount": 5,
            "gold": 22500
        },
        "fragmentBuyCost": {
            "gold": 750
        },
        "fragmentSellCost": {
            "gold": 150
        },
        "buyCost": {
            "gold": 4500
        },
        "buySpecialCost": 149,
        "fragmentSpecialCost": null,
        "sellCost": {
            "gold": 900
        },
        "enchantValue": 15,
        "fragmentEnchantValue": 3,
        "teamLevel": 30,
        "heroLevel": 30,
        "assetAtlas": 3,
        "assetTexture": "gear_75",
        "obtainType": null
    },
    "63": {
        "id": 63,
        "battleStatData": {
            "hp": 800,
            "magicPower": 80
        },
        "craftRecipe": {
            "gear": {
                "56": 1,
                "58": 1
            },
            "gold": 22500
        },
        "enchantMultiplier": 1,
        "color": 3,
        "fragmentMergeCost": null,
        "fragmentBuyCost": null,
        "fragmentSellCost": null,
        "buyCost": {
            "gold": 9750
        },
        "buySpecialCost": 322,
        "fragmentSpecialCost": null,
        "sellCost": {
            "gold": 1950
        },
        "enchantValue": 30,
        "fragmentEnchantValue": 0,
        "teamLevel": 30,
        "heroLevel": 30,
        "assetAtlas": 3,
        "assetTexture": "gear_69",
        "obtainType": null
    },
    "64": {
        "id": 64,
        "battleStatData": {
            "hp": 800,
            "magicResist": 80
        },
        "craftRecipe": {
            "gear": {
                "56": 1,
                "60": 1
            },
            "gold": 22500
        },
        "enchantMultiplier": 1,
        "color": 3,
        "fragmentMergeCost": null,
        "fragmentBuyCost": null,
        "fragmentSellCost": null,
        "buyCost": {
            "gold": 9750
        },
        "buySpecialCost": 322,
        "fragmentSpecialCost": null,
        "sellCost": {
            "gold": 1950
        },
        "enchantValue": 30,
        "fragmentEnchantValue": 0,
        "teamLevel": 34,
        "heroLevel": 34,
        "assetAtlas": 3,
        "assetTexture": "gear_71",
        "obtainType": null
    },
    "65": {
        "id": 65,
        "battleStatData": {
            "magicResist": 80,
            "physicalAttack": 56
        },
        "craftRecipe": {
            "gear": {
                "57": 1,
                "60": 1
            },
            "gold": 22500
        },
        "enchantMultiplier": 1,
        "color": 3,
        "fragmentMergeCost": null,
        "fragmentBuyCost": null,
        "fragmentSellCost": null,
        "buyCost": {
            "gold": 9750
        },
        "buySpecialCost": 322,
        "fragmentSpecialCost": null,
        "sellCost": {
            "gold": 1950
        },
        "enchantValue": 30,
        "fragmentEnchantValue": 0,
        "teamLevel": 33,
        "heroLevel": 33,
        "assetAtlas": 3,
        "assetTexture": "gear_57",
        "obtainType": null
    },
    "66": {
        "id": 66,
        "battleStatData": {
            "agility": 16,
            "physicalAttack": 56
        },
        "craftRecipe": {
            "gear": {
                "23": 2,
                "57": 1
            },
            "gold": 22500
        },
        "enchantMultiplier": 1,
        "color": 3,
        "fragmentMergeCost": null,
        "fragmentBuyCost": null,
        "fragmentSellCost": null,
        "buyCost": {
            "gold": 8250
        },
        "buySpecialCost": 273,
        "fragmentSpecialCost": null,
        "sellCost": {
            "gold": 1650
        },
        "enchantValue": 21,
        "fragmentEnchantValue": 0,
        "teamLevel": 30,
        "heroLevel": 30,
        "assetAtlas": 3,
        "assetTexture": "gear_66",
        "obtainType": null
    },
    "67": {
        "id": 67,
        "battleStatData": {
            "magicPower": 80,
            "magicResist": 80
        },
        "craftRecipe": {
            "gear": {
                "58": 1,
                "60": 1
            },
            "gold": 22500
        },
        "enchantMultiplier": 1,
        "color": 3,
        "fragmentMergeCost": null,
        "fragmentBuyCost": null,
        "fragmentSellCost": null,
        "buyCost": {
            "gold": 9750
        },
        "buySpecialCost": 322,
        "fragmentSpecialCost": null,
        "sellCost": {
            "gold": 1950
        },
        "enchantValue": 30,
        "fragmentEnchantValue": 0,
        "teamLevel": 35,
        "heroLevel": 35,
        "assetAtlas": 3,
        "assetTexture": "gear_64",
        "obtainType": null
    },
    "68": {
        "id": 68,
        "battleStatData": {
            "armor": 80,
            "magicPower": 80
        },
        "craftRecipe": {
            "gear": {
                "58": 1,
                "59": 1
            },
            "gold": 22500
        },
        "enchantMultiplier": 1,
        "color": 3,
        "fragmentMergeCost": null,
        "fragmentBuyCost": null,
        "fragmentSellCost": null,
        "buyCost": {
            "gold": 9750
        },
        "buySpecialCost": 322,
        "fragmentSpecialCost": null,
        "sellCost": {
            "gold": 1950
        },
        "enchantValue": 30,
        "fragmentEnchantValue": 0,
        "teamLevel": 34,
        "heroLevel": 34,
        "assetAtlas": 3,
        "assetTexture": "gear_58",
        "obtainType": null
    },
    "69": {
        "id": 69,
        "battleStatData": {
            "armor": 80,
            "strength": 16
        },
        "craftRecipe": {
            "gear": {
                "21": 2,
                "59": 1
            },
            "gold": 22500
        },
        "enchantMultiplier": 1,
        "color": 3,
        "fragmentMergeCost": null,
        "fragmentBuyCost": null,
        "fragmentSellCost": null,
        "buyCost": {
            "gold": 8250
        },
        "buySpecialCost": 273,
        "fragmentSpecialCost": null,
        "sellCost": {
            "gold": 1650
        },
        "enchantValue": 21,
        "fragmentEnchantValue": 0,
        "teamLevel": 34,
        "heroLevel": 34,
        "assetAtlas": 3,
        "assetTexture": "gear_86",
        "obtainType": null
    },
    "70": {
        "id": 70,
        "battleStatData": {
            "armorPenetration": 80,
            "physicalAttack": 56
        },
        "craftRecipe": {
            "gear": {
                "31": 2,
                "57": 1
            },
            "gold": 22500
        },
        "enchantMultiplier": 1,
        "color": 3,
        "fragmentMergeCost": null,
        "fragmentBuyCost": null,
        "fragmentSellCost": null,
        "buyCost": {
            "gold": 8250
        },
        "buySpecialCost": 273,
        "fragmentSpecialCost": null,
        "sellCost": {
            "gold": 1650
        },
        "enchantValue": 21,
        "fragmentEnchantValue": 0,
        "teamLevel": 30,
        "heroLevel": 30,
        "assetAtlas": 3,
        "assetTexture": "gear_62",
        "obtainType": null
    },
    "71": {
        "id": 71,
        "battleStatData": {
            "magicPenetration": 80,
            "magicPower": 80
        },
        "craftRecipe": {
            "gear": {
                "32": 2,
                "58": 1
            },
            "gold": 22500
        },
        "enchantMultiplier": 1,
        "color": 3,
        "fragmentMergeCost": null,
        "fragmentBuyCost": null,
        "fragmentSellCost": null,
        "buyCost": {
            "gold": 8250
        },
        "buySpecialCost": 273,
        "fragmentSpecialCost": null,
        "sellCost": {
            "gold": 1650
        },
        "enchantValue": 21,
        "fragmentEnchantValue": 0,
        "teamLevel": 36,
        "heroLevel": 36,
        "assetAtlas": 3,
        "assetTexture": "gear_68",
        "obtainType": null
    },
    "72": {
        "id": 72,
        "battleStatData": {
            "physicalAttack": 56,
            "physicalCritChance": 24
        },
        "craftRecipe": {
            "gear": {
                "57": 1,
                "61": 1
            },
            "gold": 22500
        },
        "enchantMultiplier": 1,
        "color": 3,
        "fragmentMergeCost": null,
        "fragmentBuyCost": null,
        "fragmentSellCost": null,
        "buyCost": {
            "gold": 9750
        },
        "buySpecialCost": 322,
        "fragmentSpecialCost": null,
        "sellCost": {
            "gold": 1950
        },
        "enchantValue": 30,
        "fragmentEnchantValue": 0,
        "teamLevel": 35,
        "heroLevel": 35,
        "assetAtlas": 3,
        "assetTexture": "gear_56",
        "obtainType": null
    },
    "73": {
        "id": 73,
        "battleStatData": {
            "dodge": 24,
            "hp": 800
        },
        "craftRecipe": {
            "gear": {
                "56": 1,
                "62": 1
            },
            "gold": 22500
        },
        "enchantMultiplier": 1,
        "color": 3,
        "fragmentMergeCost": null,
        "fragmentBuyCost": null,
        "fragmentSellCost": null,
        "buyCost": {
            "gold": 9750
        },
        "buySpecialCost": 322,
        "fragmentSpecialCost": null,
        "sellCost": {
            "gold": 1950
        },
        "enchantValue": 30,
        "fragmentEnchantValue": 0,
        "teamLevel": 32,
        "heroLevel": 32,
        "assetAtlas": 3,
        "assetTexture": "gear_72",
        "obtainType": null
    },
    "74": {
        "id": 74,
        "battleStatData": {
            "agility": 5,
            "intelligence": 5,
            "strength": 15
        },
        "craftRecipe": null,
        "enchantMultiplier": 1,
        "color": 3,
        "fragmentMergeCost": {
            "fragmentCount": 10,
            "gold": 30000
        },
        "fragmentBuyCost": {
            "gold": 1000
        },
        "fragmentSellCost": {
            "gold": 200
        },
        "buyCost": {
            "gold": 12000
        },
        "buySpecialCost": 396,
        "fragmentSpecialCost": null,
        "sellCost": {
            "gold": 2400
        },
        "enchantValue": 30,
        "fragmentEnchantValue": 3,
        "teamLevel": 40,
        "heroLevel": 40,
        "assetAtlas": 3,
        "assetTexture": "gear_76",
        "obtainType": null
    },
    "75": {
        "id": 75,
        "battleStatData": {
            "agility": 5,
            "intelligence": 15,
            "strength": 5
        },
        "craftRecipe": null,
        "enchantMultiplier": 1,
        "color": 3,
        "fragmentMergeCost": {
            "fragmentCount": 10,
            "gold": 30000
        },
        "fragmentBuyCost": {
            "gold": 1000
        },
        "fragmentSellCost": {
            "gold": 200
        },
        "buyCost": {
            "gold": 12000
        },
        "buySpecialCost": 396,
        "fragmentSpecialCost": null,
        "sellCost": {
            "gold": 2400
        },
        "enchantValue": 30,
        "fragmentEnchantValue": 3,
        "teamLevel": 36,
        "heroLevel": 36,
        "assetAtlas": 3,
        "assetTexture": "gear_82",
        "obtainType": null
    },
    "76": {
        "id": 76,
        "battleStatData": {
            "agility": 15,
            "intelligence": 5,
            "strength": 5
        },
        "craftRecipe": null,
        "enchantMultiplier": 1,
        "color": 3,
        "fragmentMergeCost": {
            "fragmentCount": 10,
            "gold": 30000
        },
        "fragmentBuyCost": {
            "gold": 1000
        },
        "fragmentSellCost": {
            "gold": 200
        },
        "buyCost": {
            "gold": 12000
        },
        "buySpecialCost": 396,
        "fragmentSpecialCost": null,
        "sellCost": {
            "gold": 2400
        },
        "enchantValue": 30,
        "fragmentEnchantValue": 3,
        "teamLevel": 36,
        "heroLevel": 36,
        "assetAtlas": 3,
        "assetTexture": "gear_87",
        "obtainType": null
    },
    "77": {
        "id": 77,
        "battleStatData": {
            "lifesteal": 5
        },
        "craftRecipe": null,
        "enchantMultiplier": 1,
        "color": 3,
        "fragmentMergeCost": {
            "fragmentCount": 10,
            "gold": 30000
        },
        "fragmentBuyCost": {
            "gold": 1000
        },
        "fragmentSellCost": {
            "gold": 200
        },
        "buyCost": {
            "gold": 12000
        },
        "buySpecialCost": 396,
        "fragmentSpecialCost": null,
        "sellCost": {
            "gold": 2400
        },
        "enchantValue": 30,
        "fragmentEnchantValue": 3,
        "teamLevel": 36,
        "heroLevel": 36,
        "assetAtlas": 3,
        "assetTexture": "gear_78",
        "obtainType": null
    },
    "78": {
        "id": 78,
        "battleStatData": {
            "agility": 7,
            "physicalAttack": 17
        },
        "craftRecipe": null,
        "enchantMultiplier": 1,
        "color": 3,
        "fragmentMergeCost": null,
        "fragmentBuyCost": null,
        "fragmentSellCost": null,
        "buyCost": {
            "gold": 50
        },
        "buySpecialCost": null,
        "fragmentSpecialCost": null,
        "sellCost": {
            "gold": 50
        },
        "enchantValue": 30,
        "fragmentEnchantValue": 15,
        "teamLevel": 35,
        "heroLevel": 35,
        "assetAtlas": 3,
        "assetTexture": "gear_78",
        "obtainType": null
    },
    "79": {
        "id": 79,
        "battleStatData": {
            "armor": 20,
            "hp": 307,
            "agility": 3,
            "strength": 3,
            "magicResist": 44,
            "magicPower": 5,
            "intelligence": 9
        },
        "craftRecipe": null,
        "enchantMultiplier": 1,
        "color": 3,
        "fragmentMergeCost": null,
        "fragmentBuyCost": null,
        "fragmentSellCost": null,
        "buyCost": {
            "gold": 50
        },
        "buySpecialCost": null,
        "fragmentSpecialCost": null,
        "sellCost": {
            "gold": 50
        },
        "enchantValue": 30,
        "fragmentEnchantValue": 15,
        "teamLevel": 35,
        "heroLevel": 35,
        "assetAtlas": 3,
        "assetTexture": "gear_79",
        "obtainType": null
    },
    "80": {
        "id": 80,
        "battleStatData": {
            "hp": 288,
            "agility": 2,
            "strength": 2,
            "magicResist": 28,
            "magicPower": 72,
            "intelligence": 10,
            "physicalAttack": 19
        },
        "craftRecipe": null,
        "enchantMultiplier": 1,
        "color": 3,
        "fragmentMergeCost": null,
        "fragmentBuyCost": null,
        "fragmentSellCost": null,
        "buyCost": {
            "gold": 50
        },
        "buySpecialCost": null,
        "fragmentSpecialCost": null,
        "sellCost": {
            "gold": 50
        },
        "enchantValue": 30,
        "fragmentEnchantValue": 15,
        "teamLevel": 35,
        "heroLevel": 35,
        "assetAtlas": 3,
        "assetTexture": "gear_80",
        "obtainType": null
    },
    "81": {
        "id": 81,
        "battleStatData": {
            "agility": 4,
            "strength": 4,
            "intelligence": 4
        },
        "craftRecipe": null,
        "enchantMultiplier": 1,
        "color": 3,
        "fragmentMergeCost": null,
        "fragmentBuyCost": null,
        "fragmentSellCost": null,
        "buyCost": {
            "gold": 50
        },
        "buySpecialCost": null,
        "fragmentSpecialCost": null,
        "sellCost": {
            "gold": 50
        },
        "enchantValue": 30,
        "fragmentEnchantValue": 15,
        "teamLevel": 35,
        "heroLevel": 35,
        "assetAtlas": 3,
        "assetTexture": "gear_81",
        "obtainType": null
    },
    "82": {
        "id": 82,
        "battleStatData": {
            "armor": 9,
            "magicPower": 9,
            "intelligence": 5
        },
        "craftRecipe": null,
        "enchantMultiplier": 1,
        "color": 3,
        "fragmentMergeCost": {
            "gold": 1500,
            "fragmentCount": 5
        },
        "fragmentBuyCost": null,
        "fragmentSellCost": null,
        "buyCost": {
            "gold": 50
        },
        "buySpecialCost": null,
        "fragmentSpecialCost": null,
        "sellCost": {
            "gold": 50
        },
        "enchantValue": 30,
        "fragmentEnchantValue": 15,
        "teamLevel": 35,
        "heroLevel": 35,
        "assetAtlas": 3,
        "assetTexture": "gear_82",
        "obtainType": null
    },
    "83": {
        "id": 83,
        "battleStatData": {
            "hp": 89,
            "strength": 7,
            "magicResist": 33,
            "intelligence": 3,
            "physicalAttack": 19
        },
        "craftRecipe": null,
        "enchantMultiplier": 1,
        "color": 3,
        "fragmentMergeCost": null,
        "fragmentBuyCost": null,
        "fragmentSellCost": null,
        "buyCost": {
            "gold": 50
        },
        "buySpecialCost": null,
        "fragmentSpecialCost": null,
        "sellCost": {
            "gold": 50
        },
        "enchantValue": 30,
        "fragmentEnchantValue": 15,
        "teamLevel": 35,
        "heroLevel": 35,
        "assetAtlas": 3,
        "assetTexture": "gear_83",
        "obtainType": null
    },
    "84": {
        "id": 84,
        "battleStatData": {
            "agility": 20,
            "intelligence": 20,
            "strength": 20
        },
        "craftRecipe": {
            "gear": {
                "74": 1,
                "75": 1,
                "76": 1
            },
            "gold": 90000
        },
        "enchantMultiplier": 1,
        "color": 3,
        "fragmentMergeCost": null,
        "fragmentBuyCost": null,
        "fragmentSellCost": null,
        "buyCost": {
            "gold": 39000
        },
        "buySpecialCost": 1287,
        "fragmentSpecialCost": null,
        "sellCost": {
            "gold": 7800
        },
        "enchantValue": 90,
        "fragmentEnchantValue": 0,
        "teamLevel": 41,
        "heroLevel": 41,
        "assetAtlas": 3,
        "assetTexture": "gear_84",
        "obtainType": null
    },
    "85": {
        "id": 85,
        "battleStatData": {
            "agility": 5,
            "hp": 1000,
            "intelligence": 5,
            "strength": 15
        },
        "craftRecipe": {
            "gear": {
                "56": 1,
                "74": 1
            },
            "gold": 90000,
            "scroll": {
                "146": 1
            }
        },
        "enchantMultiplier": 1,
        "color": 3,
        "fragmentMergeCost": null,
        "fragmentBuyCost": null,
        "fragmentSellCost": null,
        "buyCost": {
            "gold": 30500
        },
        "buySpecialCost": 1007,
        "fragmentSpecialCost": null,
        "sellCost": {
            "gold": 6100
        },
        "enchantValue": 75,
        "fragmentEnchantValue": 0,
        "teamLevel": 43,
        "heroLevel": 43,
        "assetAtlas": 3,
        "assetTexture": "gear_83",
        "obtainType": null
    },
    "86": {
        "id": 86,
        "battleStatData": {
            "agility": 5,
            "intelligence": 15,
            "magicResist": 100,
            "strength": 5
        },
        "craftRecipe": {
            "gear": {
                "60": 1,
                "75": 1
            },
            "gold": 90000,
            "scroll": {
                "147": 1
            }
        },
        "enchantMultiplier": 1,
        "color": 3,
        "fragmentMergeCost": null,
        "fragmentBuyCost": null,
        "fragmentSellCost": null,
        "buyCost": {
            "gold": 30500
        },
        "buySpecialCost": 1007,
        "fragmentSpecialCost": null,
        "sellCost": {
            "gold": 6100
        },
        "enchantValue": 75,
        "fragmentEnchantValue": 0,
        "teamLevel": 44,
        "heroLevel": 44,
        "assetAtlas": 3,
        "assetTexture": "gear_63",
        "obtainType": null
    },
    "87": {
        "id": 87,
        "battleStatData": {
            "agility": 15,
            "intelligence": 5,
            "physicalAttack": 70,
            "strength": 5
        },
        "craftRecipe": {
            "gear": {
                "57": 1,
                "76": 1
            },
            "gold": 90000,
            "scroll": {
                "148": 1
            }
        },
        "enchantMultiplier": 1,
        "color": 3,
        "fragmentMergeCost": null,
        "fragmentBuyCost": null,
        "fragmentSellCost": null,
        "buyCost": {
            "gold": 30500
        },
        "buySpecialCost": 1007,
        "fragmentSpecialCost": null,
        "sellCost": {
            "gold": 6100
        },
        "enchantValue": 75,
        "fragmentEnchantValue": 0,
        "teamLevel": 41,
        "heroLevel": 41,
        "assetAtlas": 3,
        "assetTexture": "gear_74",
        "obtainType": null
    },
    "88": {
        "id": 88,
        "battleStatData": {
            "armor": 100,
            "hp": 800,
            "magicPower": 80
        },
        "craftRecipe": {
            "gear": {
                "59": 1,
                "63": 1
            },
            "gold": 90000,
            "scroll": {
                "149": 1
            }
        },
        "enchantMultiplier": 1,
        "color": 3,
        "fragmentMergeCost": null,
        "fragmentBuyCost": null,
        "fragmentSellCost": null,
        "buyCost": {
            "gold": 28250
        },
        "buySpecialCost": 933,
        "fragmentSpecialCost": null,
        "sellCost": {
            "gold": 5650
        },
        "enchantValue": 75,
        "fragmentEnchantValue": 0,
        "teamLevel": 44,
        "heroLevel": 44,
        "assetAtlas": 3,
        "assetTexture": "gear_73",
        "obtainType": null
    },
    "89": {
        "id": 89,
        "battleStatData": {
            "agility": 16,
            "physicalAttack": 56,
            "physicalCritChance": 30
        },
        "craftRecipe": {
            "gear": {
                "61": 1,
                "66": 1
            },
            "gold": 90000,
            "scroll": {
                "150": 1
            }
        },
        "enchantMultiplier": 1,
        "color": 3,
        "fragmentMergeCost": null,
        "fragmentBuyCost": null,
        "fragmentSellCost": null,
        "buyCost": {
            "gold": 26750
        },
        "buySpecialCost": 883,
        "fragmentSpecialCost": null,
        "sellCost": {
            "gold": 5350
        },
        "enchantValue": 66,
        "fragmentEnchantValue": 0,
        "teamLevel": 42,
        "heroLevel": 42,
        "assetAtlas": 3,
        "assetTexture": "gear_88",
        "obtainType": null
    },
    "90": {
        "id": 90,
        "battleStatData": {
            "armor": 80,
            "physicalAttack": 70,
            "strength": 16
        },
        "craftRecipe": {
            "gear": {
                "57": 1,
                "69": 1
            },
            "gold": 90000,
            "scroll": {
                "151": 1
            }
        },
        "enchantMultiplier": 1,
        "color": 3,
        "fragmentMergeCost": null,
        "fragmentBuyCost": null,
        "fragmentSellCost": null,
        "buyCost": {
            "gold": 26750
        },
        "buySpecialCost": 883,
        "fragmentSpecialCost": null,
        "sellCost": {
            "gold": 5350
        },
        "enchantValue": 66,
        "fragmentEnchantValue": 0,
        "teamLevel": 44,
        "heroLevel": 44,
        "assetAtlas": 3,
        "assetTexture": "gear_85",
        "obtainType": null
    },
    "91": {
        "id": 91,
        "battleStatData": {
            "hp": 2000
        },
        "craftRecipe": null,
        "enchantMultiplier": 1,
        "color": 4,
        "fragmentMergeCost": {
            "fragmentCount": 20,
            "gold": 45000
        },
        "fragmentBuyCost": {
            "gold": 750
        },
        "fragmentSellCost": {
            "gold": 150
        },
        "buyCost": {
            "gold": 16500
        },
        "buySpecialCost": 1650,
        "fragmentSpecialCost": 82,
        "sellCost": {
            "gold": 3300
        },
        "enchantValue": 80,
        "fragmentEnchantValue": 4,
        "teamLevel": 55,
        "heroLevel": 55,
        "assetAtlas": 3,
        "assetTexture": "gear_140",
        "obtainType": null
    },
    "92": {
        "id": 92,
        "battleStatData": {
            "physicalAttack": 135
        },
        "craftRecipe": null,
        "enchantMultiplier": 1,
        "color": 4,
        "fragmentMergeCost": {
            "fragmentCount": 20,
            "gold": 45000
        },
        "fragmentBuyCost": {
            "gold": 750
        },
        "fragmentSellCost": {
            "gold": 150
        },
        "buyCost": {
            "gold": 16500
        },
        "buySpecialCost": 1650,
        "fragmentSpecialCost": 82,
        "sellCost": {
            "gold": 3300
        },
        "enchantValue": 80,
        "fragmentEnchantValue": 4,
        "teamLevel": 55,
        "heroLevel": 55,
        "assetAtlas": 3,
        "assetTexture": "gear_133",
        "obtainType": null
    },
    "93": {
        "id": 93,
        "battleStatData": {
            "magicPower": 200
        },
        "craftRecipe": null,
        "enchantMultiplier": 1,
        "color": 4,
        "fragmentMergeCost": {
            "fragmentCount": 20,
            "gold": 45000
        },
        "fragmentBuyCost": {
            "gold": 750
        },
        "fragmentSellCost": {
            "gold": 150
        },
        "buyCost": {
            "gold": 16500
        },
        "buySpecialCost": 1650,
        "fragmentSpecialCost": 82,
        "sellCost": {
            "gold": 3300
        },
        "enchantValue": 80,
        "fragmentEnchantValue": 4,
        "teamLevel": 55,
        "heroLevel": 55,
        "assetAtlas": 3,
        "assetTexture": "gear_112",
        "obtainType": null
    },
    "94": {
        "id": 94,
        "battleStatData": {
            "strength": 38
        },
        "craftRecipe": null,
        "enchantMultiplier": 1,
        "color": 4,
        "fragmentMergeCost": {
            "fragmentCount": 20,
            "gold": 45000
        },
        "fragmentBuyCost": {
            "gold": 750
        },
        "fragmentSellCost": {
            "gold": 150
        },
        "buyCost": {
            "gold": 16500
        },
        "buySpecialCost": 1650,
        "fragmentSpecialCost": 82,
        "sellCost": {
            "gold": 3300
        },
        "enchantValue": 80,
        "fragmentEnchantValue": 4,
        "teamLevel": 56,
        "heroLevel": 56,
        "assetAtlas": 3,
        "assetTexture": "gear_138",
        "obtainType": null
    },
    "95": {
        "id": 95,
        "battleStatData": {
            "intelligence": 38
        },
        "craftRecipe": null,
        "enchantMultiplier": 1,
        "color": 4,
        "fragmentMergeCost": {
            "fragmentCount": 20,
            "gold": 45000
        },
        "fragmentBuyCost": {
            "gold": 750
        },
        "fragmentSellCost": {
            "gold": 150
        },
        "buyCost": {
            "gold": 16500
        },
        "buySpecialCost": 1650,
        "fragmentSpecialCost": 82,
        "sellCost": {
            "gold": 3300
        },
        "enchantValue": 80,
        "fragmentEnchantValue": 4,
        "teamLevel": 56,
        "heroLevel": 56,
        "assetAtlas": 3,
        "assetTexture": "gear_111",
        "obtainType": null
    },
    "96": {
        "id": 96,
        "battleStatData": {
            "agility": 38
        },
        "craftRecipe": null,
        "enchantMultiplier": 1,
        "color": 4,
        "fragmentMergeCost": {
            "fragmentCount": 20,
            "gold": 45000
        },
        "fragmentBuyCost": {
            "gold": 750
        },
        "fragmentSellCost": {
            "gold": 150
        },
        "buyCost": {
            "gold": 16500
        },
        "buySpecialCost": 1650,
        "fragmentSpecialCost": 82,
        "sellCost": {
            "gold": 3300
        },
        "enchantValue": 80,
        "fragmentEnchantValue": 4,
        "teamLevel": 56,
        "heroLevel": 56,
        "assetAtlas": 3,
        "assetTexture": "gear_93",
        "obtainType": null
    },
    "97": {
        "id": 97,
        "battleStatData": {
            "armorPenetration": 200
        },
        "craftRecipe": null,
        "enchantMultiplier": 1,
        "color": 4,
        "fragmentMergeCost": {
            "fragmentCount": 20,
            "gold": 45000
        },
        "fragmentBuyCost": {
            "gold": 750
        },
        "fragmentSellCost": {
            "gold": 150
        },
        "buyCost": {
            "gold": 16500
        },
        "buySpecialCost": 1650,
        "fragmentSpecialCost": 82,
        "sellCost": {
            "gold": 3300
        },
        "enchantValue": 80,
        "fragmentEnchantValue": 4,
        "teamLevel": 58,
        "heroLevel": 58,
        "assetAtlas": 3,
        "assetTexture": "gear_136",
        "obtainType": null
    },
    "98": {
        "id": 98,
        "battleStatData": {
            "magicPenetration": 200
        },
        "craftRecipe": null,
        "enchantMultiplier": 1,
        "color": 4,
        "fragmentMergeCost": {
            "fragmentCount": 20,
            "gold": 45000
        },
        "fragmentBuyCost": {
            "gold": 750
        },
        "fragmentSellCost": {
            "gold": 150
        },
        "buyCost": {
            "gold": 16500
        },
        "buySpecialCost": 1650,
        "fragmentSpecialCost": 82,
        "sellCost": {
            "gold": 3300
        },
        "enchantValue": 80,
        "fragmentEnchantValue": 4,
        "teamLevel": 58,
        "heroLevel": 58,
        "assetAtlas": 3,
        "assetTexture": "gear_116",
        "obtainType": null
    },
    "99": {
        "id": 99,
        "battleStatData": {
            "armor": 200
        },
        "craftRecipe": {
            "gear": {
                "59": 1
            },
            "gold": 45000,
            "scroll": {
                "162": 1
            }
        },
        "enchantMultiplier": 1,
        "color": 4,
        "fragmentMergeCost": null,
        "fragmentBuyCost": null,
        "fragmentSellCost": null,
        "buyCost": {
            "gold": 27000
        },
        "buySpecialCost": 2700,
        "fragmentSpecialCost": null,
        "sellCost": {
            "gold": 5400
        },
        "enchantValue": 110,
        "fragmentEnchantValue": 0,
        "teamLevel": 61,
        "heroLevel": 61,
        "assetAtlas": 3,
        "assetTexture": "gear_92",
        "obtainType": null
    },
    "100": {
        "id": 100,
        "battleStatData": {
            "magicResist": 200
        },
        "craftRecipe": {
            "gear": {
                "60": 1
            },
            "gold": 45000,
            "scroll": {
                "163": 1
            }
        },
        "enchantMultiplier": 1,
        "color": 4,
        "fragmentMergeCost": null,
        "fragmentBuyCost": null,
        "fragmentSellCost": null,
        "buyCost": {
            "gold": 27000
        },
        "buySpecialCost": 2700,
        "fragmentSpecialCost": null,
        "sellCost": {
            "gold": 5400
        },
        "enchantValue": 110,
        "fragmentEnchantValue": 0,
        "teamLevel": 61,
        "heroLevel": 61,
        "assetAtlas": 3,
        "assetTexture": "gear_110",
        "obtainType": null
    },
    "101": {
        "id": 101,
        "battleStatData": {
            "physicalCritChance": 60
        },
        "craftRecipe": {
            "gear": {
                "61": 1
            },
            "gold": 45000,
            "scroll": {
                "164": 1
            }
        },
        "enchantMultiplier": 1,
        "color": 4,
        "fragmentMergeCost": null,
        "fragmentBuyCost": null,
        "fragmentSellCost": null,
        "buyCost": {
            "gold": 27000
        },
        "buySpecialCost": 2700,
        "fragmentSpecialCost": null,
        "sellCost": {
            "gold": 5400
        },
        "enchantValue": 110,
        "fragmentEnchantValue": 0,
        "teamLevel": 61,
        "heroLevel": 61,
        "assetAtlas": 3,
        "assetTexture": "gear_107",
        "obtainType": null
    },
    "102": {
        "id": 102,
        "battleStatData": {
            "dodge": 60
        },
        "craftRecipe": {
            "gear": {
                "62": 1
            },
            "gold": 45000,
            "scroll": {
                "165": 1
            }
        },
        "enchantMultiplier": 1,
        "color": 4,
        "fragmentMergeCost": null,
        "fragmentBuyCost": null,
        "fragmentSellCost": null,
        "buyCost": {
            "gold": 27000
        },
        "buySpecialCost": 2700,
        "fragmentSpecialCost": null,
        "sellCost": {
            "gold": 5400
        },
        "enchantValue": 110,
        "fragmentEnchantValue": 0,
        "teamLevel": 61,
        "heroLevel": 61,
        "assetAtlas": 3,
        "assetTexture": "gear_109",
        "obtainType": null
    },
    "103": {
        "id": 103,
        "battleStatData": {
            "agility": 4,
            "physicalCritChance": 13,
            "physicalAttack": 121
        },
        "craftRecipe": null,
        "enchantMultiplier": 1,
        "color": 4,
        "fragmentMergeCost": null,
        "fragmentBuyCost": null,
        "fragmentSellCost": null,
        "buyCost": {
            "gold": 50
        },
        "buySpecialCost": null,
        "fragmentSpecialCost": null,
        "sellCost": {
            "gold": 50
        },
        "enchantValue": 40,
        "fragmentEnchantValue": 20,
        "teamLevel": 18,
        "heroLevel": 18,
        "assetAtlas": 3,
        "assetTexture": "gear_103",
        "obtainType": null
    },
    "104": {
        "id": 104,
        "battleStatData": {
            "strength": 1,
            "agility": 1,
            "armor": 5,
            "magicPower": 228,
            "magicResist": 44,
            "hp": 230,
            "physicalCritChance": 6,
            "physicalAttack": 15,
            "intelligence": 15
        },
        "craftRecipe": null,
        "enchantMultiplier": 1,
        "color": 4,
        "fragmentMergeCost": null,
        "fragmentBuyCost": null,
        "fragmentSellCost": null,
        "buyCost": {
            "gold": 50
        },
        "buySpecialCost": null,
        "fragmentSpecialCost": null,
        "sellCost": {
            "gold": 50
        },
        "enchantValue": 40,
        "fragmentEnchantValue": 20,
        "teamLevel": 44,
        "heroLevel": 44,
        "assetAtlas": 3,
        "assetTexture": "gear_104",
        "obtainType": null
    },
    "105": {
        "id": 105,
        "battleStatData": {
            "strength": 1,
            "agility": 1,
            "armor": 8,
            "magicPower": 364,
            "magicResist": 70,
            "hp": 368,
            "physicalCritChance": 9,
            "physicalAttack": 24,
            "intelligence": 24
        },
        "craftRecipe": null,
        "enchantMultiplier": 1,
        "color": 4,
        "fragmentMergeCost": null,
        "fragmentBuyCost": null,
        "fragmentSellCost": null,
        "buyCost": {
            "gold": 50
        },
        "buySpecialCost": null,
        "fragmentSpecialCost": null,
        "sellCost": {
            "gold": 50
        },
        "enchantValue": 40,
        "fragmentEnchantValue": 20,
        "teamLevel": 53,
        "heroLevel": 53,
        "assetAtlas": 3,
        "assetTexture": "gear_105",
        "obtainType": null
    },
    "106": {
        "id": 106,
        "battleStatData": {
            "magicPower": 192
        },
        "craftRecipe": null,
        "enchantMultiplier": 1,
        "color": 4,
        "fragmentMergeCost": {
            "gold": 15000,
            "fragmentCount": 50
        },
        "fragmentBuyCost": null,
        "fragmentSellCost": null,
        "buyCost": {
            "gold": 50
        },
        "buySpecialCost": null,
        "fragmentSpecialCost": null,
        "sellCost": {
            "gold": 50
        },
        "enchantValue": 40,
        "fragmentEnchantValue": 20,
        "teamLevel": 35,
        "heroLevel": 35,
        "assetAtlas": 3,
        "assetTexture": "gear_106",
        "obtainType": null
    },
    "107": {
        "id": 107,
        "battleStatData": {
            "armor": 48,
            "hp": 1920
        },
        "craftRecipe": null,
        "enchantMultiplier": 1,
        "color": 4,
        "fragmentMergeCost": {
            "gold": 15000,
            "fragmentCount": 50
        },
        "fragmentBuyCost": null,
        "fragmentSellCost": null,
        "buyCost": {
            "gold": 50
        },
        "buySpecialCost": null,
        "fragmentSpecialCost": null,
        "sellCost": {
            "gold": 50
        },
        "enchantValue": 40,
        "fragmentEnchantValue": 20,
        "teamLevel": 15,
        "heroLevel": 15,
        "assetAtlas": 3,
        "assetTexture": "gear_107",
        "obtainType": null
    },
    "108": {
        "id": 108,
        "battleStatData": {
            "strength": 4,
            "agility": 5,
            "armor": 118,
            "magicPower": 12,
            "magicResist": 60,
            "hp": 1484,
            "physicalCritChance": 8,
            "intelligence": 1
        },
        "craftRecipe": null,
        "enchantMultiplier": 1,
        "color": 4,
        "fragmentMergeCost": null,
        "fragmentBuyCost": null,
        "fragmentSellCost": null,
        "buyCost": {
            "gold": 50
        },
        "buySpecialCost": null,
        "fragmentSpecialCost": null,
        "sellCost": {
            "gold": 50
        },
        "enchantValue": 40,
        "fragmentEnchantValue": 20,
        "teamLevel": 50,
        "heroLevel": 50,
        "assetAtlas": 3,
        "assetTexture": "gear_108",
        "obtainType": null
    },
    "109": {
        "id": 109,
        "battleStatData": {
            "intelligence": 21
        },
        "craftRecipe": null,
        "enchantMultiplier": 1,
        "color": 4,
        "fragmentMergeCost": {
            "gold": 6000,
            "fragmentCount": 20
        },
        "fragmentBuyCost": null,
        "fragmentSellCost": null,
        "buyCost": {
            "gold": 50
        },
        "buySpecialCost": null,
        "fragmentSpecialCost": null,
        "sellCost": {
            "gold": 50
        },
        "enchantValue": 40,
        "fragmentEnchantValue": 20,
        "teamLevel": 19,
        "heroLevel": 19,
        "assetAtlas": 3,
        "assetTexture": "gear_109",
        "obtainType": null
    },
    "110": {
        "id": 110,
        "battleStatData": {
            "strength": 2,
            "magicPower": 15,
            "intelligence": 24
        },
        "craftRecipe": null,
        "enchantMultiplier": 1,
        "color": 4,
        "fragmentMergeCost": null,
        "fragmentBuyCost": null,
        "fragmentSellCost": null,
        "buyCost": {
            "gold": 50
        },
        "buySpecialCost": null,
        "fragmentSpecialCost": null,
        "sellCost": {
            "gold": 50
        },
        "enchantValue": 40,
        "fragmentEnchantValue": 20,
        "teamLevel": 66,
        "heroLevel": 66,
        "assetAtlas": 3,
        "assetTexture": "gear_110",
        "obtainType": null
    },
    "111": {
        "id": 111,
        "battleStatData": {
            "strength": 5,
            "magicPower": 38,
            "magicResist": 64,
            "hp": 1223,
            "physicalAttack": 15,
            "intelligence": 2
        },
        "craftRecipe": null,
        "enchantMultiplier": 1,
        "color": 4,
        "fragmentMergeCost": null,
        "fragmentBuyCost": null,
        "fragmentSellCost": null,
        "buyCost": {
            "gold": 50
        },
        "buySpecialCost": null,
        "fragmentSpecialCost": null,
        "sellCost": {
            "gold": 50
        },
        "enchantValue": 40,
        "fragmentEnchantValue": 20,
        "teamLevel": 73,
        "heroLevel": 73,
        "assetAtlas": 3,
        "assetTexture": "gear_111",
        "obtainType": null
    },
    "112": {
        "id": 112,
        "battleStatData": {
            "magicPower": 48,
            "magicResist": 48,
            "hp": 1440
        },
        "craftRecipe": null,
        "enchantMultiplier": 1,
        "color": 4,
        "fragmentMergeCost": {
            "gold": 15000,
            "fragmentCount": 50
        },
        "fragmentBuyCost": null,
        "fragmentSellCost": null,
        "buyCost": {
            "gold": 50
        },
        "buySpecialCost": null,
        "fragmentSpecialCost": null,
        "sellCost": {
            "gold": 50
        },
        "enchantValue": 40,
        "fragmentEnchantValue": 20,
        "teamLevel": 15,
        "heroLevel": 15,
        "assetAtlas": 3,
        "assetTexture": "gear_112",
        "obtainType": null
    },
    "113": {
        "id": 113,
        "battleStatData": {
            "strength": 14,
            "agility": 14,
            "intelligence": 14
        },
        "craftRecipe": null,
        "enchantMultiplier": 1,
        "color": 4,
        "fragmentMergeCost": {
            "gold": 15000,
            "fragmentCount": 50
        },
        "fragmentBuyCost": null,
        "fragmentSellCost": null,
        "buyCost": {
            "gold": 50
        },
        "buySpecialCost": null,
        "fragmentSpecialCost": null,
        "sellCost": {
            "gold": 50
        },
        "enchantValue": 40,
        "fragmentEnchantValue": 20,
        "teamLevel": 65,
        "heroLevel": 65,
        "assetAtlas": 3,
        "assetTexture": "gear_113",
        "obtainType": null
    },
    "114": {
        "id": 114,
        "battleStatData": {
            "hp": 1600,
            "physicalAttack": 216
        },
        "craftRecipe": {
            "gear": {
                "91": 1,
                "92": 2
            },
            "gold": 135000
        },
        "enchantMultiplier": 1,
        "color": 4,
        "fragmentMergeCost": null,
        "fragmentBuyCost": null,
        "fragmentSellCost": null,
        "buyCost": {
            "gold": 54000
        },
        "buySpecialCost": 5400,
        "fragmentSpecialCost": null,
        "sellCost": {
            "gold": 10800
        },
        "enchantValue": 240,
        "fragmentEnchantValue": 0,
        "teamLevel": 68,
        "heroLevel": 68,
        "assetAtlas": 3,
        "assetTexture": "gear_139",
        "obtainType": null
    },
    "115": {
        "id": 115,
        "battleStatData": {
            "magicPower": 160,
            "magicResist": 160
        },
        "craftRecipe": {
            "gear": {
                "93": 1,
                "100": 1
            },
            "gold": 112500
        },
        "enchantMultiplier": 1,
        "color": 4,
        "fragmentMergeCost": null,
        "fragmentBuyCost": null,
        "fragmentSellCost": null,
        "buyCost": {
            "gold": 47250
        },
        "buySpecialCost": 4725,
        "fragmentSpecialCost": null,
        "sellCost": {
            "gold": 9450
        },
        "enchantValue": 190,
        "fragmentEnchantValue": 0,
        "teamLevel": 65,
        "heroLevel": 65,
        "assetAtlas": 3,
        "assetTexture": "gear_125",
        "obtainType": null
    },
    "116": {
        "id": 116,
        "battleStatData": {
            "intelligence": 30,
            "magicPower": 160,
            "magicResist": 160
        },
        "craftRecipe": {
            "gear": {
                "93": 1,
                "95": 1,
                "100": 1
            },
            "gold": 157500
        },
        "enchantMultiplier": 1,
        "color": 4,
        "fragmentMergeCost": null,
        "fragmentBuyCost": null,
        "fragmentSellCost": null,
        "buyCost": {
            "gold": 65250
        },
        "buySpecialCost": 6525,
        "fragmentSpecialCost": null,
        "sellCost": {
            "gold": 13050
        },
        "enchantValue": 270,
        "fragmentEnchantValue": 0,
        "teamLevel": 68,
        "heroLevel": 68,
        "assetAtlas": 3,
        "assetTexture": "gear_122",
        "obtainType": null
    },
    "117": {
        "id": 117,
        "battleStatData": {
            "intelligence": 30,
            "magicPenetration": 160,
            "magicPower": 160
        },
        "craftRecipe": {
            "gear": {
                "93": 1,
                "95": 1,
                "98": 1
            },
            "gold": 135000
        },
        "enchantMultiplier": 1,
        "color": 4,
        "fragmentMergeCost": null,
        "fragmentBuyCost": null,
        "fragmentSellCost": null,
        "buyCost": {
            "gold": 54000
        },
        "buySpecialCost": 5400,
        "fragmentSpecialCost": null,
        "sellCost": {
            "gold": 10800
        },
        "enchantValue": 240,
        "fragmentEnchantValue": 0,
        "teamLevel": 68,
        "heroLevel": 68,
        "assetAtlas": 3,
        "assetTexture": "gear_124",
        "obtainType": null
    },
    "118": {
        "id": 118,
        "battleStatData": {
            "agility": 30,
            "armorPenetration": 160,
            "physicalAttack": 108
        },
        "craftRecipe": {
            "gear": {
                "92": 1,
                "96": 1,
                "97": 1
            },
            "gold": 135000
        },
        "enchantMultiplier": 1,
        "color": 4,
        "fragmentMergeCost": null,
        "fragmentBuyCost": null,
        "fragmentSellCost": null,
        "buyCost": {
            "gold": 54000
        },
        "buySpecialCost": 5400,
        "fragmentSpecialCost": null,
        "sellCost": {
            "gold": 10800
        },
        "enchantValue": 240,
        "fragmentEnchantValue": 0,
        "teamLevel": 68,
        "heroLevel": 68,
        "assetAtlas": 3,
        "assetTexture": "gear_102",
        "obtainType": null
    },
    "119": {
        "id": 119,
        "battleStatData": {
            "intelligence": 30,
            "magicPower": 160
        },
        "craftRecipe": {
            "gear": {
                "93": 1,
                "95": 1
            },
            "gold": 90000
        },
        "enchantMultiplier": 1,
        "color": 4,
        "fragmentMergeCost": null,
        "fragmentBuyCost": null,
        "fragmentSellCost": null,
        "buyCost": {
            "gold": 36000
        },
        "buySpecialCost": 3600,
        "fragmentSpecialCost": null,
        "sellCost": {
            "gold": 7200
        },
        "enchantValue": 160,
        "fragmentEnchantValue": 0,
        "teamLevel": 65,
        "heroLevel": 65,
        "assetAtlas": 3,
        "assetTexture": "gear_121",
        "obtainType": null
    },
    "120": {
        "id": 120,
        "battleStatData": {
            "agility": 30,
            "physicalAttack": 108
        },
        "craftRecipe": {
            "gear": {
                "92": 1,
                "96": 1
            },
            "gold": 90000
        },
        "enchantMultiplier": 1,
        "color": 4,
        "fragmentMergeCost": null,
        "fragmentBuyCost": null,
        "fragmentSellCost": null,
        "buyCost": {
            "gold": 36000
        },
        "buySpecialCost": 3600,
        "fragmentSpecialCost": null,
        "sellCost": {
            "gold": 7200
        },
        "enchantValue": 160,
        "fragmentEnchantValue": 0,
        "teamLevel": 65,
        "heroLevel": 65,
        "assetAtlas": 3,
        "assetTexture": "gear_134",
        "obtainType": null
    },
    "121": {
        "id": 121,
        "battleStatData": {
            "agility": 30,
            "magicResist": 160
        },
        "craftRecipe": {
            "gear": {
                "96": 1,
                "100": 1
            },
            "gold": 112500
        },
        "enchantMultiplier": 1,
        "color": 4,
        "fragmentMergeCost": null,
        "fragmentBuyCost": null,
        "fragmentSellCost": null,
        "buyCost": {
            "gold": 47250
        },
        "buySpecialCost": 4725,
        "fragmentSpecialCost": null,
        "sellCost": {
            "gold": 9450
        },
        "enchantValue": 190,
        "fragmentEnchantValue": 0,
        "teamLevel": 65,
        "heroLevel": 65,
        "assetAtlas": 3,
        "assetTexture": "gear_132",
        "obtainType": null
    },
    "122": {
        "id": 122,
        "battleStatData": {
            "armor": 160,
            "physicalAttack": 108
        },
        "craftRecipe": {
            "gear": {
                "92": 1,
                "99": 1
            },
            "gold": 112500
        },
        "enchantMultiplier": 1,
        "color": 4,
        "fragmentMergeCost": null,
        "fragmentBuyCost": null,
        "fragmentSellCost": null,
        "buyCost": {
            "gold": 47250
        },
        "buySpecialCost": 4725,
        "fragmentSpecialCost": null,
        "sellCost": {
            "gold": 9450
        },
        "enchantValue": 190,
        "fragmentEnchantValue": 0,
        "teamLevel": 65,
        "heroLevel": 65,
        "assetAtlas": 3,
        "assetTexture": "gear_96",
        "obtainType": null
    },
    "123": {
        "id": 123,
        "battleStatData": {
            "hp": 1600,
            "strength": 30
        },
        "craftRecipe": {
            "gear": {
                "91": 1,
                "94": 1
            },
            "gold": 90000
        },
        "enchantMultiplier": 1,
        "color": 4,
        "fragmentMergeCost": null,
        "fragmentBuyCost": null,
        "fragmentSellCost": null,
        "buyCost": {
            "gold": 36000
        },
        "buySpecialCost": 3600,
        "fragmentSpecialCost": null,
        "sellCost": {
            "gold": 7200
        },
        "enchantValue": 160,
        "fragmentEnchantValue": 0,
        "teamLevel": 65,
        "heroLevel": 65,
        "assetAtlas": 3,
        "assetTexture": "gear_118",
        "obtainType": null
    },
    "124": {
        "id": 124,
        "battleStatData": {
            "lifesteal": 10
        },
        "craftRecipe": {
            "gear": {
                "77": 2
            },
            "gold": 105000,
            "scroll": {
                "166": 1
            }
        },
        "enchantMultiplier": 1,
        "color": 4,
        "fragmentMergeCost": null,
        "fragmentBuyCost": null,
        "fragmentSellCost": null,
        "buyCost": {
            "gold": 44000
        },
        "buySpecialCost": 4400,
        "fragmentSpecialCost": null,
        "sellCost": {
            "gold": 8800
        },
        "enchantValue": 140,
        "fragmentEnchantValue": 0,
        "teamLevel": 65,
        "heroLevel": 65,
        "assetAtlas": 3,
        "assetTexture": "gear_114",
        "obtainType": null
    },
    "125": {
        "id": 125,
        "battleStatData": {
            "magicResist": 160,
            "physicalAttack": 216
        },
        "craftRecipe": {
            "gear": {
                "92": 2,
                "100": 1
            },
            "gold": 157500
        },
        "enchantMultiplier": 1,
        "color": 4,
        "fragmentMergeCost": null,
        "fragmentBuyCost": null,
        "fragmentSellCost": null,
        "buyCost": {
            "gold": 65250
        },
        "buySpecialCost": 6525,
        "fragmentSpecialCost": null,
        "sellCost": {
            "gold": 13050
        },
        "enchantValue": 270,
        "fragmentEnchantValue": 0,
        "teamLevel": 69,
        "heroLevel": 69,
        "assetAtlas": 3,
        "assetTexture": "gear_97",
        "obtainType": null
    },
    "126": {
        "id": 126,
        "battleStatData": {
            "hp": 1600,
            "magicPower": 320
        },
        "craftRecipe": {
            "gear": {
                "91": 1,
                "93": 2
            },
            "gold": 135000
        },
        "enchantMultiplier": 1,
        "color": 4,
        "fragmentMergeCost": null,
        "fragmentBuyCost": null,
        "fragmentSellCost": null,
        "buyCost": {
            "gold": 54000
        },
        "buySpecialCost": 5400,
        "fragmentSpecialCost": null,
        "sellCost": {
            "gold": 10800
        },
        "enchantValue": 240,
        "fragmentEnchantValue": 0,
        "teamLevel": 69,
        "heroLevel": 69,
        "assetAtlas": 3,
        "assetTexture": "gear_129",
        "obtainType": null
    },
    "127": {
        "id": 127,
        "battleStatData": {
            "agility": 30,
            "intelligence": 30,
            "strength": 30
        },
        "craftRecipe": {
            "gear": {
                "94": 1,
                "95": 1,
                "96": 1
            },
            "gold": 135000
        },
        "enchantMultiplier": 1,
        "color": 4,
        "fragmentMergeCost": null,
        "fragmentBuyCost": null,
        "fragmentSellCost": null,
        "buyCost": {
            "gold": 54000
        },
        "buySpecialCost": 5400,
        "fragmentSpecialCost": null,
        "sellCost": {
            "gold": 10800
        },
        "enchantValue": 240,
        "fragmentEnchantValue": 0,
        "teamLevel": 69,
        "heroLevel": 69,
        "assetAtlas": 3,
        "assetTexture": "gear_126",
        "obtainType": null
    },
    "128": {
        "id": 128,
        "battleStatData": {
            "strength": 12,
            "agility": 12,
            "armor": 19,
            "magicPower": 4,
            "magicResist": 44,
            "hp": 313,
            "intelligence": 46
        },
        "craftRecipe": null,
        "enchantMultiplier": 1,
        "color": 4,
        "fragmentMergeCost": null,
        "fragmentBuyCost": null,
        "fragmentSellCost": null,
        "buyCost": {
            "gold": 50
        },
        "buySpecialCost": null,
        "fragmentSpecialCost": null,
        "sellCost": {
            "gold": 50
        },
        "enchantValue": 40,
        "fragmentEnchantValue": 20,
        "teamLevel": 51,
        "heroLevel": 51,
        "assetAtlas": 3,
        "assetTexture": "gear_128",
        "obtainType": null
    },
    "129": {
        "id": 129,
        "battleStatData": {
            "strength": 14,
            "agility": 14,
            "armor": 12,
            "magicPower": 3,
            "magicResist": 28,
            "hp": 196,
            "intelligence": 18
        },
        "craftRecipe": null,
        "enchantMultiplier": 1,
        "color": 4,
        "fragmentMergeCost": null,
        "fragmentBuyCost": null,
        "fragmentSellCost": null,
        "buyCost": {
            "gold": 50
        },
        "buySpecialCost": null,
        "fragmentSpecialCost": null,
        "sellCost": {
            "gold": 50
        },
        "enchantValue": 40,
        "fragmentEnchantValue": 20,
        "teamLevel": 78,
        "heroLevel": 78,
        "assetAtlas": 3,
        "assetTexture": "gear_129",
        "obtainType": null
    },
    "130": {
        "id": 130,
        "battleStatData": {
            "strength": 22,
            "agility": 22,
            "armor": 19,
            "magicPower": 4,
            "magicResist": 44,
            "hp": 313,
            "intelligence": 28
        },
        "craftRecipe": null,
        "enchantMultiplier": 1,
        "color": 4,
        "fragmentMergeCost": null,
        "fragmentBuyCost": null,
        "fragmentSellCost": null,
        "buyCost": {
            "gold": 50
        },
        "buySpecialCost": null,
        "fragmentSpecialCost": null,
        "sellCost": {
            "gold": 50
        },
        "enchantValue": 40,
        "fragmentEnchantValue": 20,
        "teamLevel": 85,
        "heroLevel": 85,
        "assetAtlas": 3,
        "assetTexture": "gear_130",
        "obtainType": null
    },
    "131": {
        "id": 131,
        "battleStatData": {
            "agility": 24,
            "intelligence": 24,
            "strength": 54
        },
        "craftRecipe": {
            "gear": {
                "94": 1,
                "127": 1
            },
            "gold": 217500,
            "scroll": {
                "161": 1
            }
        },
        "enchantMultiplier": 1,
        "color": 4,
        "fragmentMergeCost": null,
        "fragmentBuyCost": null,
        "fragmentSellCost": null,
        "buyCost": {
            "gold": 91500
        },
        "buySpecialCost": 9150,
        "fragmentSpecialCost": null,
        "sellCost": {
            "gold": 18300
        },
        "enchantValue": 400,
        "fragmentEnchantValue": 0,
        "teamLevel": 72,
        "heroLevel": 72,
        "assetAtlas": 3,
        "assetTexture": "gear_94",
        "obtainType": null
    },
    "132": {
        "id": 132,
        "battleStatData": {
            "agility": 24,
            "intelligence": 54,
            "strength": 24
        },
        "craftRecipe": {
            "gear": {
                "95": 1,
                "127": 1
            },
            "gold": 217500,
            "scroll": {
                "160": 1
            }
        },
        "enchantMultiplier": 1,
        "color": 4,
        "fragmentMergeCost": null,
        "fragmentBuyCost": null,
        "fragmentSellCost": null,
        "buyCost": {
            "gold": 91500
        },
        "buySpecialCost": 9150,
        "fragmentSpecialCost": null,
        "sellCost": {
            "gold": 18300
        },
        "enchantValue": 400,
        "fragmentEnchantValue": 0,
        "teamLevel": 73,
        "heroLevel": 73,
        "assetAtlas": 3,
        "assetTexture": "gear_127",
        "obtainType": null
    },
    "133": {
        "id": 133,
        "battleStatData": {
            "agility": 54,
            "intelligence": 24,
            "strength": 24
        },
        "craftRecipe": {
            "gear": {
                "96": 1,
                "127": 1
            },
            "gold": 217500,
            "scroll": {
                "159": 1
            }
        },
        "enchantMultiplier": 1,
        "color": 4,
        "fragmentMergeCost": null,
        "fragmentBuyCost": null,
        "fragmentSellCost": null,
        "buyCost": {
            "gold": 91500
        },
        "buySpecialCost": 9150,
        "fragmentSpecialCost": null,
        "sellCost": {
            "gold": 18300
        },
        "enchantValue": 400,
        "fragmentEnchantValue": 0,
        "teamLevel": 74,
        "heroLevel": 74,
        "assetAtlas": 3,
        "assetTexture": "gear_104",
        "obtainType": null
    },
    "134": {
        "id": 134,
        "battleStatData": {
            "magicResist": 256,
            "physicalAttack": 345
        },
        "craftRecipe": {
            "gear": {
                "125": 2
            },
            "gold": 217500,
            "scroll": {
                "158": 1
            }
        },
        "enchantMultiplier": 1,
        "color": 4,
        "fragmentMergeCost": null,
        "fragmentBuyCost": null,
        "fragmentSellCost": null,
        "buyCost": {
            "gold": 151500
        },
        "buySpecialCost": 15150,
        "fragmentSpecialCost": null,
        "sellCost": {
            "gold": 30300
        },
        "enchantValue": 620,
        "fragmentEnchantValue": 0,
        "teamLevel": 75,
        "heroLevel": 75,
        "assetAtlas": 3,
        "assetTexture": "gear_98",
        "obtainType": null
    },
    "135": {
        "id": 135,
        "battleStatData": {
            "hp": 2560,
            "magicPower": 512
        },
        "craftRecipe": {
            "gear": {
                "126": 2
            },
            "gold": 217500,
            "scroll": {
                "157": 1
            }
        },
        "enchantMultiplier": 1,
        "color": 4,
        "fragmentMergeCost": null,
        "fragmentBuyCost": null,
        "fragmentSellCost": null,
        "buyCost": {
            "gold": 129000
        },
        "buySpecialCost": 12900,
        "fragmentSpecialCost": null,
        "sellCost": {
            "gold": 25800
        },
        "enchantValue": 560,
        "fragmentEnchantValue": 0,
        "teamLevel": 75,
        "heroLevel": 75,
        "assetAtlas": 3,
        "assetTexture": "gear_130",
        "obtainType": null
    },
    "136": {
        "id": 136,
        "battleStatData": {
            "agility": 38,
            "intelligence": 38,
            "strength": 86
        },
        "craftRecipe": {
            "gear": {
                "131": 2
            },
            "gold": 382500,
            "scroll": {
                "156": 1
            }
        },
        "enchantMultiplier": 1,
        "color": 4,
        "fragmentMergeCost": null,
        "fragmentBuyCost": null,
        "fragmentSellCost": null,
        "buyCost": {
            "gold": 223250
        },
        "buySpecialCost": 22325,
        "fragmentSpecialCost": null,
        "sellCost": {
            "gold": 44650
        },
        "enchantValue": 1000,
        "fragmentEnchantValue": 0,
        "teamLevel": 80,
        "heroLevel": 80,
        "assetAtlas": 3,
        "assetTexture": "gear_95",
        "obtainType": null
    },
    "137": {
        "id": 137,
        "battleStatData": {
            "agility": 38,
            "intelligence": 86,
            "strength": 38
        },
        "craftRecipe": {
            "gear": {
                "132": 2
            },
            "gold": 382500,
            "scroll": {
                "155": 1
            }
        },
        "enchantMultiplier": 1,
        "color": 4,
        "fragmentMergeCost": null,
        "fragmentBuyCost": null,
        "fragmentSellCost": null,
        "buyCost": {
            "gold": 223250
        },
        "buySpecialCost": 22325,
        "fragmentSpecialCost": null,
        "sellCost": {
            "gold": 44650
        },
        "enchantValue": 1000,
        "fragmentEnchantValue": 0,
        "teamLevel": 80,
        "heroLevel": 80,
        "assetAtlas": 3,
        "assetTexture": "gear_128",
        "obtainType": null
    },
    "138": {
        "id": 138,
        "battleStatData": {
            "agility": 86,
            "intelligence": 38,
            "strength": 38
        },
        "craftRecipe": {
            "gear": {
                "133": 2
            },
            "gold": 382500,
            "scroll": {
                "154": 1
            }
        },
        "enchantMultiplier": 1,
        "color": 4,
        "fragmentMergeCost": null,
        "fragmentBuyCost": null,
        "fragmentSellCost": null,
        "buyCost": {
            "gold": 223250
        },
        "buySpecialCost": 22325,
        "fragmentSpecialCost": null,
        "sellCost": {
            "gold": 44650
        },
        "enchantValue": 1000,
        "fragmentEnchantValue": 0,
        "teamLevel": 80,
        "heroLevel": 80,
        "assetAtlas": 3,
        "assetTexture": "gear_105",
        "obtainType": null
    },
    "139": {
        "id": 139,
        "battleStatData": {
            "magicResist": 409,
            "physicalAttack": 552
        },
        "craftRecipe": {
            "gear": {
                "134": 2
            },
            "gold": 382500,
            "scroll": {
                "153": 1
            }
        },
        "enchantMultiplier": 1,
        "color": 4,
        "fragmentMergeCost": null,
        "fragmentBuyCost": null,
        "fragmentSellCost": null,
        "buyCost": {
            "gold": 343250
        },
        "buySpecialCost": 34325,
        "fragmentSpecialCost": null,
        "sellCost": {
            "gold": 68650
        },
        "enchantValue": 1440,
        "fragmentEnchantValue": 0,
        "teamLevel": 80,
        "heroLevel": 80,
        "assetAtlas": 3,
        "assetTexture": "gear_99",
        "obtainType": null
    },
    "140": {
        "id": 140,
        "battleStatData": {
            "hp": 4096,
            "magicPower": 819
        },
        "craftRecipe": {
            "gear": {
                "135": 2
            },
            "gold": 382500,
            "scroll": {
                "152": 1
            }
        },
        "enchantMultiplier": 1,
        "color": 4,
        "fragmentMergeCost": null,
        "fragmentBuyCost": null,
        "fragmentSellCost": null,
        "buyCost": {
            "gold": 298250
        },
        "buySpecialCost": 29825,
        "fragmentSpecialCost": null,
        "sellCost": {
            "gold": 59650
        },
        "enchantValue": 1320,
        "fragmentEnchantValue": 0,
        "teamLevel": 80,
        "heroLevel": 80,
        "assetAtlas": 3,
        "assetTexture": "gear_131",
        "obtainType": null
    },
    "141": {
        "id": 141,
        "battleStatData": {
            "strength": 1
        },
        "craftRecipe": null,
        "enchantMultiplier": 1,
        "color": 5,
        "fragmentMergeCost": null,
        "fragmentBuyCost": null,
        "fragmentSellCost": null,
        "buyCost": {
            "gold": 50
        },
        "buySpecialCost": null,
        "fragmentSpecialCost": null,
        "sellCost": {
            "gold": 50
        },
        "enchantValue": 50,
        "fragmentEnchantValue": 25,
        "teamLevel": 90,
        "heroLevel": 90,
        "assetAtlas": 3,
        "assetTexture": "gear_141",
        "obtainType": null
    },
    "142": {
        "id": 142,
        "battleStatData": {
            "strength": 1
        },
        "craftRecipe": null,
        "enchantMultiplier": 1,
        "color": 5,
        "fragmentMergeCost": null,
        "fragmentBuyCost": null,
        "fragmentSellCost": null,
        "buyCost": {
            "gold": 50
        },
        "buySpecialCost": null,
        "fragmentSpecialCost": null,
        "sellCost": {
            "gold": 50
        },
        "enchantValue": 50,
        "fragmentEnchantValue": 25,
        "teamLevel": 32,
        "heroLevel": 32,
        "assetAtlas": 3,
        "assetTexture": "gear_142",
        "obtainType": null
    },
    "143": {
        "id": 143,
        "battleStatData": {
            "strength": 1
        },
        "craftRecipe": null,
        "enchantMultiplier": 1,
        "color": 5,
        "fragmentMergeCost": null,
        "fragmentBuyCost": null,
        "fragmentSellCost": null,
        "buyCost": {
            "gold": 50
        },
        "buySpecialCost": null,
        "fragmentSpecialCost": null,
        "sellCost": {
            "gold": 50
        },
        "enchantValue": 50,
        "fragmentEnchantValue": 25,
        "teamLevel": 18,
        "heroLevel": 18,
        "assetAtlas": 3,
        "assetTexture": "gear_143",
        "obtainType": null
    },
    "144": {
        "id": 144,
        "battleStatData": {
            "strength": 1
        },
        "craftRecipe": null,
        "enchantMultiplier": 1,
        "color": 5,
        "fragmentMergeCost": null,
        "fragmentBuyCost": null,
        "fragmentSellCost": null,
        "buyCost": {
            "gold": 50
        },
        "buySpecialCost": null,
        "fragmentSpecialCost": null,
        "sellCost": {
            "gold": 50
        },
        "enchantValue": 50,
        "fragmentEnchantValue": 25,
        "teamLevel": 80,
        "heroLevel": 80,
        "assetAtlas": 3,
        "assetTexture": "gear_144",
        "obtainType": null
    },
    "145": {
        "id": 145,
        "battleStatData": {
            "strength": 1
        },
        "craftRecipe": null,
        "enchantMultiplier": 1,
        "color": 5,
        "fragmentMergeCost": null,
        "fragmentBuyCost": null,
        "fragmentSellCost": null,
        "buyCost": {
            "gold": 50
        },
        "buySpecialCost": null,
        "fragmentSpecialCost": null,
        "sellCost": {
            "gold": 50
        },
        "enchantValue": 50,
        "fragmentEnchantValue": 25,
        "teamLevel": 41,
        "heroLevel": 41,
        "assetAtlas": 3,
        "assetTexture": "gear_145",
        "obtainType": null
    },
    "146": {
        "id": 146,
        "battleStatData": {
            "strength": 1
        },
        "craftRecipe": null,
        "enchantMultiplier": 1,
        "color": 5,
        "fragmentMergeCost": null,
        "fragmentBuyCost": null,
        "fragmentSellCost": null,
        "buyCost": {
            "gold": 50
        },
        "buySpecialCost": null,
        "fragmentSpecialCost": null,
        "sellCost": {
            "gold": 50
        },
        "enchantValue": 50,
        "fragmentEnchantValue": 25,
        "teamLevel": 42,
        "heroLevel": 42,
        "assetAtlas": 3,
        "assetTexture": "gear_146",
        "obtainType": null
    },
    "147": {
        "id": 147,
        "battleStatData": {
            "strength": 1
        },
        "craftRecipe": null,
        "enchantMultiplier": 1,
        "color": 5,
        "fragmentMergeCost": null,
        "fragmentBuyCost": null,
        "fragmentSellCost": null,
        "buyCost": {
            "gold": 50
        },
        "buySpecialCost": null,
        "fragmentSpecialCost": null,
        "sellCost": {
            "gold": 50
        },
        "enchantValue": 50,
        "fragmentEnchantValue": 25,
        "teamLevel": 81,
        "heroLevel": 81,
        "assetAtlas": 3,
        "assetTexture": "gear_147",
        "obtainType": null
    },
    "148": {
        "id": 148,
        "battleStatData": {
            "strength": 1
        },
        "craftRecipe": null,
        "enchantMultiplier": 1,
        "color": 5,
        "fragmentMergeCost": null,
        "fragmentBuyCost": null,
        "fragmentSellCost": null,
        "buyCost": {
            "gold": 50
        },
        "buySpecialCost": null,
        "fragmentSpecialCost": null,
        "sellCost": {
            "gold": 50
        },
        "enchantValue": 50,
        "fragmentEnchantValue": 25,
        "teamLevel": 83,
        "heroLevel": 83,
        "assetAtlas": 3,
        "assetTexture": "gear_148",
        "obtainType": null
    },
    "149": {
        "id": 149,
        "battleStatData": {
            "strength": 1
        },
        "craftRecipe": null,
        "enchantMultiplier": 1,
        "color": 5,
        "fragmentMergeCost": null,
        "fragmentBuyCost": null,
        "fragmentSellCost": null,
        "buyCost": {
            "gold": 50
        },
        "buySpecialCost": null,
        "fragmentSpecialCost": null,
        "sellCost": {
            "gold": 50
        },
        "enchantValue": 50,
        "fragmentEnchantValue": 25,
        "teamLevel": 81,
        "heroLevel": 81,
        "assetAtlas": 3,
        "assetTexture": "gear_149",
        "obtainType": null
    },
    "150": {
        "id": 150,
        "battleStatData": {
            "strength": 1
        },
        "craftRecipe": null,
        "enchantMultiplier": 1,
        "color": 5,
        "fragmentMergeCost": null,
        "fragmentBuyCost": null,
        "fragmentSellCost": null,
        "buyCost": {
            "gold": 50
        },
        "buySpecialCost": null,
        "fragmentSpecialCost": null,
        "sellCost": {
            "gold": 50
        },
        "enchantValue": 50,
        "fragmentEnchantValue": 25,
        "teamLevel": 80,
        "heroLevel": 80,
        "assetAtlas": 3,
        "assetTexture": "gear_150",
        "obtainType": null
    },
    "151": {
        "id": 151,
        "battleStatData": {
            "strength": 1
        },
        "craftRecipe": null,
        "enchantMultiplier": 1,
        "color": 5,
        "fragmentMergeCost": null,
        "fragmentBuyCost": null,
        "fragmentSellCost": null,
        "buyCost": {
            "gold": 50
        },
        "buySpecialCost": null,
        "fragmentSpecialCost": null,
        "sellCost": {
            "gold": 50
        },
        "enchantValue": 50,
        "fragmentEnchantValue": 25,
        "teamLevel": 80,
        "heroLevel": 80,
        "assetAtlas": 3,
        "assetTexture": "gear_151",
        "obtainType": null
    },
    "152": {
        "id": 152,
        "battleStatData": {
            "strength": 1
        },
        "craftRecipe": null,
        "enchantMultiplier": 1,
        "color": 5,
        "fragmentMergeCost": null,
        "fragmentBuyCost": null,
        "fragmentSellCost": null,
        "buyCost": {
            "gold": 50
        },
        "buySpecialCost": null,
        "fragmentSpecialCost": null,
        "sellCost": {
            "gold": 50
        },
        "enchantValue": 50,
        "fragmentEnchantValue": 25,
        "teamLevel": 83,
        "heroLevel": 83,
        "assetAtlas": 3,
        "assetTexture": "gear_152",
        "obtainType": null
    },
    "167": {
        "id": 167,
        "battleStatData": {
            "hp": 6000
        },
        "craftRecipe": null,
        "enchantMultiplier": 0,
        "color": 5,
        "fragmentMergeCost": {
            "fragmentCount": 80,
            "gold": 180000
        },
        "fragmentBuyCost": null,
        "fragmentSellCost": {
            "gold": 150
        },
        "buyCost": {
            "gold": 66000
        },
        "buySpecialCost": 6600,
        "fragmentSpecialCost": 82,
        "sellCost": {
            "gold": 13200
        },
        "enchantValue": 320,
        "fragmentEnchantValue": 4,
        "teamLevel": 90,
        "heroLevel": 90,
        "assetAtlas": 3,
        "assetTexture": "gear_167",
        "obtainType": null
    },
    "168": {
        "id": 168,
        "battleStatData": {
            "physicalAttack": 400
        },
        "craftRecipe": null,
        "enchantMultiplier": 0,
        "color": 5,
        "fragmentMergeCost": {
            "fragmentCount": 80,
            "gold": 180000
        },
        "fragmentBuyCost": null,
        "fragmentSellCost": {
            "gold": 150
        },
        "buyCost": {
            "gold": 66000
        },
        "buySpecialCost": 6600,
        "fragmentSpecialCost": 82,
        "sellCost": {
            "gold": 13200
        },
        "enchantValue": 320,
        "fragmentEnchantValue": 4,
        "teamLevel": 90,
        "heroLevel": 90,
        "assetAtlas": 3,
        "assetTexture": "gear_168",
        "obtainType": null
    },
    "169": {
        "id": 169,
        "battleStatData": {
            "magicPower": 600
        },
        "craftRecipe": null,
        "enchantMultiplier": 0,
        "color": 5,
        "fragmentMergeCost": {
            "fragmentCount": 80,
            "gold": 180000
        },
        "fragmentBuyCost": null,
        "fragmentSellCost": {
            "gold": 150
        },
        "buyCost": {
            "gold": 66000
        },
        "buySpecialCost": 6600,
        "fragmentSpecialCost": 82,
        "sellCost": {
            "gold": 13200
        },
        "enchantValue": 320,
        "fragmentEnchantValue": 4,
        "teamLevel": 90,
        "heroLevel": 90,
        "assetAtlas": 3,
        "assetTexture": "gear_169",
        "obtainType": null
    },
    "170": {
        "id": 170,
        "battleStatData": {
            "strength": 109
        },
        "craftRecipe": null,
        "enchantMultiplier": 0,
        "color": 5,
        "fragmentMergeCost": {
            "fragmentCount": 80,
            "gold": 180000
        },
        "fragmentBuyCost": null,
        "fragmentSellCost": {
            "gold": 150
        },
        "buyCost": {
            "gold": 66000
        },
        "buySpecialCost": 6600,
        "fragmentSpecialCost": 82,
        "sellCost": {
            "gold": 13200
        },
        "enchantValue": 320,
        "fragmentEnchantValue": 4,
        "teamLevel": 90,
        "heroLevel": 90,
        "assetAtlas": 3,
        "assetTexture": "gear_170",
        "obtainType": "shop:boss"
    },
    "171": {
        "id": 171,
        "battleStatData": {
            "intelligence": 109
        },
        "craftRecipe": null,
        "enchantMultiplier": 0,
        "color": 5,
        "fragmentMergeCost": {
            "fragmentCount": 80,
            "gold": 180000
        },
        "fragmentBuyCost": null,
        "fragmentSellCost": {
            "gold": 150
        },
        "buyCost": {
            "gold": 66000
        },
        "buySpecialCost": 6600,
        "fragmentSpecialCost": 82,
        "sellCost": {
            "gold": 13200
        },
        "enchantValue": 320,
        "fragmentEnchantValue": 4,
        "teamLevel": 90,
        "heroLevel": 90,
        "assetAtlas": 3,
        "assetTexture": "gear_171",
        "obtainType": "shop:boss"
    },
    "172": {
        "id": 172,
        "battleStatData": {
            "agility": 109
        },
        "craftRecipe": null,
        "enchantMultiplier": 0,
        "color": 5,
        "fragmentMergeCost": {
            "fragmentCount": 80,
            "gold": 180000
        },
        "fragmentBuyCost": null,
        "fragmentSellCost": {
            "gold": 150
        },
        "buyCost": {
            "gold": 66000
        },
        "buySpecialCost": 6600,
        "fragmentSpecialCost": 82,
        "sellCost": {
            "gold": 13200
        },
        "enchantValue": 320,
        "fragmentEnchantValue": 4,
        "teamLevel": 90,
        "heroLevel": 90,
        "assetAtlas": 3,
        "assetTexture": "gear_172",
        "obtainType": "shop:boss"
    },
    "173": {
        "id": 173,
        "battleStatData": {
            "armorPenetration": 600
        },
        "craftRecipe": null,
        "enchantMultiplier": 0,
        "color": 5,
        "fragmentMergeCost": {
            "fragmentCount": 80,
            "gold": 180000
        },
        "fragmentBuyCost": null,
        "fragmentSellCost": {
            "gold": 150
        },
        "buyCost": {
            "gold": 66000
        },
        "buySpecialCost": 6600,
        "fragmentSpecialCost": 82,
        "sellCost": {
            "gold": 13200
        },
        "enchantValue": 320,
        "fragmentEnchantValue": 4,
        "teamLevel": 90,
        "heroLevel": 90,
        "assetAtlas": 3,
        "assetTexture": "gear_173",
        "obtainType": null
    },
    "174": {
        "id": 174,
        "battleStatData": {
            "magicPenetration": 600
        },
        "craftRecipe": null,
        "enchantMultiplier": 0,
        "color": 5,
        "fragmentMergeCost": {
            "fragmentCount": 80,
            "gold": 180000
        },
        "fragmentBuyCost": null,
        "fragmentSellCost": {
            "gold": 150
        },
        "buyCost": {
            "gold": 66000
        },
        "buySpecialCost": 6600,
        "fragmentSpecialCost": 82,
        "sellCost": {
            "gold": 13200
        },
        "enchantValue": 320,
        "fragmentEnchantValue": 4,
        "teamLevel": 90,
        "heroLevel": 90,
        "assetAtlas": 3,
        "assetTexture": "gear_174",
        "obtainType": null
    },
    "175": {
        "id": 175,
        "battleStatData": {
            "armor": 600
        },
        "craftRecipe": null,
        "enchantMultiplier": 0,
        "color": 5,
        "fragmentMergeCost": {
            "fragmentCount": 80,
            "gold": 180000
        },
        "fragmentBuyCost": null,
        "fragmentSellCost": {
            "gold": 150
        },
        "buyCost": {
            "gold": 66000
        },
        "buySpecialCost": 6600,
        "fragmentSpecialCost": 82,
        "sellCost": {
            "gold": 13200
        },
        "enchantValue": 320,
        "fragmentEnchantValue": 4,
        "teamLevel": 90,
        "heroLevel": 90,
        "assetAtlas": 3,
        "assetTexture": "gear_175",
        "obtainType": null
    },
    "176": {
        "id": 176,
        "battleStatData": {
            "magicResist": 600
        },
        "craftRecipe": null,
        "enchantMultiplier": 0,
        "color": 5,
        "fragmentMergeCost": {
            "fragmentCount": 80,
            "gold": 180000
        },
        "fragmentBuyCost": null,
        "fragmentSellCost": {
            "gold": 150
        },
        "buyCost": {
            "gold": 66000
        },
        "buySpecialCost": 6600,
        "fragmentSpecialCost": 82,
        "sellCost": {
            "gold": 13200
        },
        "enchantValue": 320,
        "fragmentEnchantValue": 4,
        "teamLevel": 90,
        "heroLevel": 90,
        "assetAtlas": 3,
        "assetTexture": "gear_176",
        "obtainType": null
    },
    "177": {
        "id": 177,
        "battleStatData": {
            "physicalCritChance": 166
        },
        "craftRecipe": null,
        "enchantMultiplier": 0,
        "color": 5,
        "fragmentMergeCost": {
            "fragmentCount": 80,
            "gold": 180000
        },
        "fragmentBuyCost": null,
        "fragmentSellCost": {
            "gold": 150
        },
        "buyCost": {
            "gold": 66000
        },
        "buySpecialCost": 6600,
        "fragmentSpecialCost": 82,
        "sellCost": {
            "gold": 13200
        },
        "enchantValue": 320,
        "fragmentEnchantValue": 4,
        "teamLevel": 90,
        "heroLevel": 90,
        "assetAtlas": 3,
        "assetTexture": "gear_177",
        "obtainType": null
    },
    "178": {
        "id": 178,
        "battleStatData": {
            "dodge": 166
        },
        "craftRecipe": null,
        "enchantMultiplier": 0,
        "color": 5,
        "fragmentMergeCost": {
            "fragmentCount": 80,
            "gold": 180000
        },
        "fragmentBuyCost": null,
        "fragmentSellCost": {
            "gold": 150
        },
        "buyCost": {
            "gold": 66000
        },
        "buySpecialCost": 6600,
        "fragmentSpecialCost": 82,
        "sellCost": {
            "gold": 13200
        },
        "enchantValue": 320,
        "fragmentEnchantValue": 4,
        "teamLevel": 90,
        "heroLevel": 90,
        "assetAtlas": 3,
        "assetTexture": "gear_178",
        "obtainType": null
    },
    "179": {
        "id": 179,
        "battleStatData": {
            "hp": 3200,
            "physicalAttack": 640
        },
        "craftRecipe": {
            "gear": {
                "91": 2,
                "168": 2
            },
            "gold": 472500,
            "scroll": {
                "190": 1
            }
        },
        "enchantMultiplier": 0,
        "color": 5,
        "fragmentMergeCost": null,
        "fragmentBuyCost": null,
        "fragmentSellCost": null,
        "buyCost": {
            "gold": 246750
        },
        "buySpecialCost": 24675,
        "fragmentSpecialCost": null,
        "sellCost": {
            "gold": 49350
        },
        "enchantValue": 1120,
        "fragmentEnchantValue": 0,
        "teamLevel": 100,
        "heroLevel": 100,
        "assetAtlas": 3,
        "assetTexture": "gear_179",
        "obtainType": null
    },
    "180": {
        "id": 180,
        "battleStatData": {
            "hp": 3200,
            "magicPower": 960
        },
        "craftRecipe": {
            "gear": {
                "91": 2,
                "169": 2
            },
            "gold": 472500,
            "scroll": {
                "191": 1
            }
        },
        "enchantMultiplier": 0,
        "color": 5,
        "fragmentMergeCost": null,
        "fragmentBuyCost": null,
        "fragmentSellCost": null,
        "buyCost": {
            "gold": 246750
        },
        "buySpecialCost": 24675,
        "fragmentSpecialCost": null,
        "sellCost": {
            "gold": 49350
        },
        "enchantValue": 1120,
        "fragmentEnchantValue": 0,
        "teamLevel": 100,
        "heroLevel": 100,
        "assetAtlas": 3,
        "assetTexture": "gear_180",
        "obtainType": null
    },
    "181": {
        "id": 181,
        "battleStatData": {
            "magicPenetration": 320,
            "magicPower": 480
        },
        "craftRecipe": {
            "gear": {
                "98": 2,
                "169": 1
            },
            "gold": 337500,
            "scroll": {
                "192": 1
            }
        },
        "enchantMultiplier": 0,
        "color": 5,
        "fragmentMergeCost": null,
        "fragmentBuyCost": null,
        "fragmentSellCost": null,
        "buyCost": {
            "gold": 176250
        },
        "buySpecialCost": 17625,
        "fragmentSpecialCost": null,
        "sellCost": {
            "gold": 35250
        },
        "enchantValue": 800,
        "fragmentEnchantValue": 0,
        "teamLevel": 100,
        "heroLevel": 100,
        "assetAtlas": 3,
        "assetTexture": "gear_181",
        "obtainType": null
    },
    "182": {
        "id": 182,
        "battleStatData": {
            "armorPenetration": 320,
            "physicalAttack": 320
        },
        "craftRecipe": {
            "gear": {
                "97": 2,
                "168": 1
            },
            "gold": 337500,
            "scroll": {
                "193": 1
            }
        },
        "enchantMultiplier": 0,
        "color": 5,
        "fragmentMergeCost": null,
        "fragmentBuyCost": null,
        "fragmentSellCost": null,
        "buyCost": {
            "gold": 176250
        },
        "buySpecialCost": 17625,
        "fragmentSpecialCost": null,
        "sellCost": {
            "gold": 35250
        },
        "enchantValue": 800,
        "fragmentEnchantValue": 0,
        "teamLevel": 100,
        "heroLevel": 100,
        "assetAtlas": 3,
        "assetTexture": "gear_182",
        "obtainType": null
    },
    "183": {
        "id": 183,
        "battleStatData": {
            "armor": 320,
            "hp": 4800
        },
        "craftRecipe": {
            "gear": {
                "99": 2,
                "167": 1
            },
            "gold": 371250,
            "scroll": {
                "194": 1
            }
        },
        "enchantMultiplier": 0,
        "color": 5,
        "fragmentMergeCost": null,
        "fragmentBuyCost": null,
        "fragmentSellCost": null,
        "buyCost": {
            "gold": 198375
        },
        "buySpecialCost": 19838,
        "fragmentSpecialCost": null,
        "sellCost": {
            "gold": 39675
        },
        "enchantValue": 860,
        "fragmentEnchantValue": 0,
        "teamLevel": 100,
        "heroLevel": 100,
        "assetAtlas": 3,
        "assetTexture": "gear_183",
        "obtainType": null
    },
    "184": {
        "id": 184,
        "battleStatData": {
            "hp": 4800,
            "magicResist": 320
        },
        "craftRecipe": {
            "gear": {
                "100": 2,
                "167": 1
            },
            "gold": 371250,
            "scroll": {
                "195": 1
            }
        },
        "enchantMultiplier": 0,
        "color": 5,
        "fragmentMergeCost": null,
        "fragmentBuyCost": null,
        "fragmentSellCost": null,
        "buyCost": {
            "gold": 198375
        },
        "buySpecialCost": 19838,
        "fragmentSpecialCost": null,
        "sellCost": {
            "gold": 39675
        },
        "enchantValue": 860,
        "fragmentEnchantValue": 0,
        "teamLevel": 100,
        "heroLevel": 100,
        "assetAtlas": 3,
        "assetTexture": "gear_184",
        "obtainType": null
    },
    "185": {
        "id": 185,
        "battleStatData": {
            "agility": 48,
            "intelligence": 48,
            "strength": 222
        },
        "craftRecipe": {
            "gear": {
                "127": 2,
                "170": 2
            },
            "gold": 506250,
            "scroll": {
                "196": 1
            }
        },
        "enchantMultiplier": 0,
        "color": 5,
        "fragmentMergeCost": null,
        "fragmentBuyCost": null,
        "fragmentSellCost": null,
        "buyCost": {
            "gold": 268875
        },
        "buySpecialCost": 26888,
        "fragmentSpecialCost": null,
        "sellCost": {
            "gold": 53775
        },
        "enchantValue": 1200,
        "fragmentEnchantValue": 0,
        "teamLevel": 100,
        "heroLevel": 100,
        "assetAtlas": 3,
        "assetTexture": "gear_185",
        "obtainType": "shop:boss"
    },
    "186": {
        "id": 186,
        "battleStatData": {
            "agility": 48,
            "intelligence": 222,
            "strength": 48
        },
        "craftRecipe": {
            "gear": {
                "127": 2,
                "171": 2
            },
            "gold": 506250,
            "scroll": {
                "197": 1
            }
        },
        "enchantMultiplier": 0,
        "color": 5,
        "fragmentMergeCost": null,
        "fragmentBuyCost": null,
        "fragmentSellCost": null,
        "buyCost": {
            "gold": 268875
        },
        "buySpecialCost": 26888,
        "fragmentSpecialCost": null,
        "sellCost": {
            "gold": 53775
        },
        "enchantValue": 1200,
        "fragmentEnchantValue": 0,
        "teamLevel": 100,
        "heroLevel": 100,
        "assetAtlas": 3,
        "assetTexture": "gear_186",
        "obtainType": "shop:boss"
    },
    "187": {
        "id": 187,
        "battleStatData": {
            "agility": 222,
            "intelligence": 48,
            "strength": 48
        },
        "craftRecipe": {
            "gear": {
                "127": 2,
                "172": 2
            },
            "gold": 506250,
            "scroll": {
                "198": 1
            }
        },
        "enchantMultiplier": 0,
        "color": 5,
        "fragmentMergeCost": null,
        "fragmentBuyCost": null,
        "fragmentSellCost": null,
        "buyCost": {
            "gold": 268875
        },
        "buySpecialCost": 26888,
        "fragmentSpecialCost": null,
        "sellCost": {
            "gold": 53775
        },
        "enchantValue": 1200,
        "fragmentEnchantValue": 0,
        "teamLevel": 100,
        "heroLevel": 100,
        "assetAtlas": 3,
        "assetTexture": "gear_187",
        "obtainType": "shop:boss"
    },
    "188": {
        "id": 188,
        "battleStatData": {
            "physicalAttack": 320,
            "physicalCritChance": 228
        },
        "craftRecipe": {
            "gear": {
                "101": 2,
                "168": 1,
                "177": 1
            },
            "gold": 506250,
            "scroll": {
                "199": 1
            }
        },
        "enchantMultiplier": 0,
        "color": 5,
        "fragmentMergeCost": null,
        "fragmentBuyCost": null,
        "fragmentSellCost": null,
        "buyCost": {
            "gold": 268875
        },
        "buySpecialCost": 26888,
        "fragmentSpecialCost": null,
        "sellCost": {
            "gold": 53775
        },
        "enchantValue": 1180,
        "fragmentEnchantValue": 0,
        "teamLevel": 100,
        "heroLevel": 100,
        "assetAtlas": 3,
        "assetTexture": "gear_188",
        "obtainType": null
    },
    "189": {
        "id": 189,
        "battleStatData": {
            "dodge": 228,
            "hp": 4800
        },
        "craftRecipe": {
            "gear": {
                "102": 2,
                "167": 1,
                "178": 1
            },
            "gold": 506250,
            "scroll": {
                "200": 1
            }
        },
        "enchantMultiplier": 0,
        "color": 5,
        "fragmentMergeCost": null,
        "fragmentBuyCost": null,
        "fragmentSellCost": null,
        "buyCost": {
            "gold": 268875
        },
        "buySpecialCost": 26888,
        "fragmentSpecialCost": null,
        "sellCost": {
            "gold": 53775
        },
        "enchantValue": 1180,
        "fragmentEnchantValue": 0,
        "teamLevel": 100,
        "heroLevel": 100,
        "assetAtlas": 3,
        "assetTexture": "gear_189",
        "obtainType": null
    },
    "201": {
        "id": 201,
        "battleStatData": {
            "hp": 5120,
            "physicalAttack": 1024
        },
        "craftRecipe": {
            "gear": {
                "179": 2
            },
            "gold": 1008000,
            "scroll": {
                "204": 1
            }
        },
        "enchantMultiplier": 0,
        "color": 5,
        "fragmentMergeCost": null,
        "fragmentBuyCost": null,
        "fragmentSellCost": null,
        "buyCost": {
            "gold": 528000
        },
        "buySpecialCost": 55950,
        "fragmentSpecialCost": null,
        "sellCost": {
            "gold": 105600
        },
        "enchantValue": 2400,
        "fragmentEnchantValue": 0,
        "teamLevel": 108,
        "heroLevel": 108,
        "assetAtlas": 3,
        "assetTexture": "gear_201",
        "obtainType": null
    },
    "202": {
        "id": 202,
        "battleStatData": {
            "physicalAttack": 648,
            "physicalCritChance": 265
        },
        "craftRecipe": {
            "gear": {
                "92": 6,
                "177": 2
            },
            "gold": 567000,
            "scroll": {
                "205": 1
            }
        },
        "enchantMultiplier": 0,
        "color": 5,
        "fragmentMergeCost": null,
        "fragmentBuyCost": null,
        "fragmentSellCost": null,
        "buyCost": {
            "gold": 297000
        },
        "buySpecialCost": 29700,
        "fragmentSpecialCost": null,
        "sellCost": {
            "gold": 59400
        },
        "enchantValue": 1280,
        "fragmentEnchantValue": 0,
        "teamLevel": 108,
        "heroLevel": 108,
        "assetAtlas": 3,
        "assetTexture": "gear_202",
        "obtainType": null
    },
    "203": {
        "id": 203,
        "battleStatData": {
            "intelligence": 152,
            "magicPower": 960
        },
        "craftRecipe": {
            "gear": {
                "95": 5,
                "169": 2
            },
            "gold": 535500,
            "scroll": {
                "206": 1
            }
        },
        "enchantMultiplier": 0,
        "color": 5,
        "fragmentMergeCost": null,
        "fragmentBuyCost": null,
        "fragmentSellCost": null,
        "buyCost": {
            "gold": 280500
        },
        "buySpecialCost": 28050,
        "fragmentSpecialCost": null,
        "sellCost": {
            "gold": 56100
        },
        "enchantValue": 1200,
        "fragmentEnchantValue": 0,
        "teamLevel": 108,
        "heroLevel": 108,
        "assetAtlas": 3,
        "assetTexture": "gear_203",
        "obtainType": null
    },
    "207": {
        "id": 207,
        "battleStatData": {
            "physicalAttack": 774,
            "physicalCritChance": 394
        },
        "craftRecipe": {
            "gear": {
                "188": 1,
                "202": 1
            },
            "gold": 1275750,
            "scroll": {
                "214": 1
            }
        },
        "enchantMultiplier": 0,
        "color": 5,
        "fragmentMergeCost": null,
        "fragmentBuyCost": null,
        "fragmentSellCost": null,
        "buyCost": {
            "gold": 610500
        },
        "buySpecialCost": 63188,
        "fragmentSpecialCost": null,
        "sellCost": {
            "gold": 122100
        },
        "enchantValue": 2620,
        "fragmentEnchantValue": 0,
        "teamLevel": 115,
        "heroLevel": 115,
        "assetAtlas": 3,
        "assetTexture": "gear_207",
        "obtainType": null
    },
    "208": {
        "id": 208,
        "battleStatData": {
            "hp": 6656,
            "physicalAttack": 1331
        },
        "craftRecipe": {
            "gear": {
                "179": 1,
                "201": 1
            },
            "gold": 1685250,
            "scroll": {
                "215": 1
            }
        },
        "enchantMultiplier": 0,
        "color": 5,
        "fragmentMergeCost": null,
        "fragmentBuyCost": null,
        "fragmentSellCost": null,
        "buyCost": {
            "gold": 825000
        },
        "buySpecialCost": 87225,
        "fragmentSpecialCost": null,
        "sellCost": {
            "gold": 165000
        },
        "enchantValue": 3680,
        "fragmentEnchantValue": 0,
        "teamLevel": 115,
        "heroLevel": 115,
        "assetAtlas": 3,
        "assetTexture": "gear_208",
        "obtainType": null
    },
    "209": {
        "id": 209,
        "battleStatData": {
            "hp": 2560,
            "intelligence": 121,
            "magicPower": 1536
        },
        "craftRecipe": {
            "gear": {
                "180": 1,
                "203": 1
            },
            "gold": 1212750,
            "scroll": {
                "216": 1
            }
        },
        "enchantMultiplier": 0,
        "color": 5,
        "fragmentMergeCost": null,
        "fragmentBuyCost": null,
        "fragmentSellCost": null,
        "buyCost": {
            "gold": 577500
        },
        "buySpecialCost": 59325,
        "fragmentSpecialCost": null,
        "sellCost": {
            "gold": 115500
        },
        "enchantValue": 2480,
        "fragmentEnchantValue": 0,
        "teamLevel": 115,
        "heroLevel": 115,
        "assetAtlas": 3,
        "assetTexture": "gear_209",
        "obtainType": null
    },
    "210": {
        "id": 210,
        "battleStatData": {
            "hp": 2560,
            "magicPower": 1248,
            "strength": 174
        },
        "craftRecipe": {
            "gear": {
                "169": 1,
                "170": 2,
                "180": 1
            },
            "gold": 1055250,
            "scroll": {
                "217": 1
            }
        },
        "enchantMultiplier": 0,
        "color": 5,
        "fragmentMergeCost": null,
        "fragmentBuyCost": null,
        "fragmentSellCost": null,
        "buyCost": {
            "gold": 495000
        },
        "buySpecialCost": 51075,
        "fragmentSpecialCost": null,
        "sellCost": {
            "gold": 99000
        },
        "enchantValue": 2240,
        "fragmentEnchantValue": 0,
        "teamLevel": 115,
        "heroLevel": 115,
        "assetAtlas": 3,
        "assetTexture": "gear_210",
        "obtainType": null
    },
    "211": {
        "id": 211,
        "battleStatData": {
            "agility": 76,
            "intelligence": 76,
            "strength": 355
        },
        "craftRecipe": {
            "gear": {
                "185": 2
            },
            "gold": 1181250,
            "scroll": {
                "218": 1
            }
        },
        "enchantMultiplier": 0,
        "color": 5,
        "fragmentMergeCost": null,
        "fragmentBuyCost": null,
        "fragmentSellCost": null,
        "buyCost": {
            "gold": 561000
        },
        "buySpecialCost": 60376,
        "fragmentSpecialCost": null,
        "sellCost": {
            "gold": 112200
        },
        "enchantValue": 2560,
        "fragmentEnchantValue": 0,
        "teamLevel": 120,
        "heroLevel": 120,
        "assetAtlas": 3,
        "assetTexture": "gear_211",
        "obtainType": null
    },
    "212": {
        "id": 212,
        "battleStatData": {
            "agility": 76,
            "intelligence": 355,
            "strength": 76
        },
        "craftRecipe": {
            "gear": {
                "186": 2
            },
            "gold": 1181250,
            "scroll": {
                "219": 1
            }
        },
        "enchantMultiplier": 0,
        "color": 5,
        "fragmentMergeCost": null,
        "fragmentBuyCost": null,
        "fragmentSellCost": null,
        "buyCost": {
            "gold": 561000
        },
        "buySpecialCost": 60376,
        "fragmentSpecialCost": null,
        "sellCost": {
            "gold": 112200
        },
        "enchantValue": 2560,
        "fragmentEnchantValue": 0,
        "teamLevel": 120,
        "heroLevel": 120,
        "assetAtlas": 3,
        "assetTexture": "gear_212",
        "obtainType": null
    },
    "213": {
        "id": 213,
        "battleStatData": {
            "agility": 355,
            "intelligence": 76,
            "strength": 76
        },
        "craftRecipe": {
            "gear": {
                "187": 2
            },
            "gold": 1181250,
            "scroll": {
                "220": 1
            }
        },
        "enchantMultiplier": 0,
        "color": 5,
        "fragmentMergeCost": null,
        "fragmentBuyCost": null,
        "fragmentSellCost": null,
        "buyCost": {
            "gold": 561000
        },
        "buySpecialCost": 60376,
        "fragmentSpecialCost": null,
        "sellCost": {
            "gold": 112200
        },
        "enchantValue": 2560,
        "fragmentEnchantValue": 0,
        "teamLevel": 120,
        "heroLevel": 120,
        "assetAtlas": 3,
        "assetTexture": "gear_213",
        "obtainType": null
    },
    "221": {
        "id": 221,
        "battleStatData": {
            "strength": 218
        },
        "craftRecipe": null,
        "enchantMultiplier": 0,
        "color": 6,
        "fragmentMergeCost": {
            "fragmentCount": 200,
            "gold": 180000
        },
        "fragmentBuyCost": null,
        "fragmentSellCost": {
            "gold": 150
        },
        "buyCost": {
            "gold": 66000
        },
        "buySpecialCost": 33000,
        "fragmentSpecialCost": 164,
        "sellCost": {
            "gold": 13200
        },
        "enchantValue": 800,
        "fragmentEnchantValue": 4,
        "teamLevel": 124,
        "heroLevel": 124,
        "assetAtlas": 12,
        "assetTexture": "gear_221",
        "obtainType": null
    },
    "222": {
        "id": 222,
        "battleStatData": {
            "intelligence": 218
        },
        "craftRecipe": null,
        "enchantMultiplier": 0,
        "color": 6,
        "fragmentMergeCost": {
            "fragmentCount": 200,
            "gold": 180000
        },
        "fragmentBuyCost": null,
        "fragmentSellCost": {
            "gold": 150
        },
        "buyCost": {
            "gold": 66000
        },
        "buySpecialCost": 33000,
        "fragmentSpecialCost": 164,
        "sellCost": {
            "gold": 13200
        },
        "enchantValue": 800,
        "fragmentEnchantValue": 4,
        "teamLevel": 124,
        "heroLevel": 124,
        "assetAtlas": 12,
        "assetTexture": "gear_222",
        "obtainType": null
    },
    "223": {
        "id": 223,
        "battleStatData": {
            "agility": 218
        },
        "craftRecipe": null,
        "enchantMultiplier": 0,
        "color": 6,
        "fragmentMergeCost": {
            "fragmentCount": 200,
            "gold": 180000
        },
        "fragmentBuyCost": null,
        "fragmentSellCost": {
            "gold": 150
        },
        "buyCost": {
            "gold": 66000
        },
        "buySpecialCost": 33000,
        "fragmentSpecialCost": 164,
        "sellCost": {
            "gold": 13200
        },
        "enchantValue": 800,
        "fragmentEnchantValue": 4,
        "teamLevel": 122,
        "heroLevel": 122,
        "assetAtlas": 12,
        "assetTexture": "gear_223",
        "obtainType": null
    },
    "224": {
        "id": 224,
        "battleStatData": {
            "hp": 12000
        },
        "craftRecipe": null,
        "enchantMultiplier": 0,
        "color": 6,
        "fragmentMergeCost": {
            "fragmentCount": 200,
            "gold": 180000
        },
        "fragmentBuyCost": null,
        "fragmentSellCost": {
            "gold": 150
        },
        "buyCost": {
            "gold": 66000
        },
        "buySpecialCost": 33000,
        "fragmentSpecialCost": 164,
        "sellCost": {
            "gold": 13200
        },
        "enchantValue": 800,
        "fragmentEnchantValue": 4,
        "teamLevel": 121,
        "heroLevel": 121,
        "assetAtlas": 12,
        "assetTexture": "gear_224",
        "obtainType": null
    },
    "225": {
        "id": 225,
        "battleStatData": {
            "physicalAttack": 800
        },
        "craftRecipe": null,
        "enchantMultiplier": 0,
        "color": 6,
        "fragmentMergeCost": {
            "fragmentCount": 200,
            "gold": 180000
        },
        "fragmentBuyCost": null,
        "fragmentSellCost": {
            "gold": 150
        },
        "buyCost": {
            "gold": 66000
        },
        "buySpecialCost": 33000,
        "fragmentSpecialCost": 164,
        "sellCost": {
            "gold": 13200
        },
        "enchantValue": 800,
        "fragmentEnchantValue": 4,
        "teamLevel": 122,
        "heroLevel": 122,
        "assetAtlas": 12,
        "assetTexture": "gear_225",
        "obtainType": null
    },
    "226": {
        "id": 226,
        "battleStatData": {
            "magicPower": 1200
        },
        "craftRecipe": null,
        "enchantMultiplier": 0,
        "color": 6,
        "fragmentMergeCost": {
            "fragmentCount": 200,
            "gold": 180000
        },
        "fragmentBuyCost": null,
        "fragmentSellCost": {
            "gold": 150
        },
        "buyCost": {
            "gold": 66000
        },
        "buySpecialCost": 33000,
        "fragmentSpecialCost": 164,
        "sellCost": {
            "gold": 13200
        },
        "enchantValue": 800,
        "fragmentEnchantValue": 4,
        "teamLevel": 123,
        "heroLevel": 123,
        "assetAtlas": 12,
        "assetTexture": "gear_226",
        "obtainType": null
    },
    "227": {
        "id": 227,
        "battleStatData": {
            "armor": 1200
        },
        "craftRecipe": null,
        "enchantMultiplier": 0,
        "color": 6,
        "fragmentMergeCost": {
            "fragmentCount": 200,
            "gold": 180000
        },
        "fragmentBuyCost": null,
        "fragmentSellCost": {
            "gold": 150
        },
        "buyCost": {
            "gold": 66000
        },
        "buySpecialCost": 33000,
        "fragmentSpecialCost": 164,
        "sellCost": {
            "gold": 13200
        },
        "enchantValue": 800,
        "fragmentEnchantValue": 4,
        "teamLevel": 121,
        "heroLevel": 121,
        "assetAtlas": 12,
        "assetTexture": "gear_227",
        "obtainType": null
    },
    "228": {
        "id": 228,
        "battleStatData": {
            "magicResist": 1200
        },
        "craftRecipe": null,
        "enchantMultiplier": 0,
        "color": 6,
        "fragmentMergeCost": {
            "fragmentCount": 200,
            "gold": 180000
        },
        "fragmentBuyCost": null,
        "fragmentSellCost": {
            "gold": 150
        },
        "buyCost": {
            "gold": 66000
        },
        "buySpecialCost": 33000,
        "fragmentSpecialCost": 164,
        "sellCost": {
            "gold": 13200
        },
        "enchantValue": 800,
        "fragmentEnchantValue": 4,
        "teamLevel": 121,
        "heroLevel": 121,
        "assetAtlas": 12,
        "assetTexture": "gear_228",
        "obtainType": null
    },
    "229": {
        "id": 229,
        "battleStatData": {
            "physicalCritChance": 333
        },
        "craftRecipe": null,
        "enchantMultiplier": 0,
        "color": 6,
        "fragmentMergeCost": {
            "fragmentCount": 200,
            "gold": 180000
        },
        "fragmentBuyCost": null,
        "fragmentSellCost": {
            "gold": 150
        },
        "buyCost": {
            "gold": 66000
        },
        "buySpecialCost": 33000,
        "fragmentSpecialCost": 164,
        "sellCost": {
            "gold": 13200
        },
        "enchantValue": 800,
        "fragmentEnchantValue": 4,
        "teamLevel": 125,
        "heroLevel": 125,
        "assetAtlas": 12,
        "assetTexture": "gear_229",
        "obtainType": null
    },
    "230": {
        "id": 230,
        "battleStatData": {
            "dodge": 333
        },
        "craftRecipe": null,
        "enchantMultiplier": 0,
        "color": 6,
        "fragmentMergeCost": {
            "fragmentCount": 200,
            "gold": 180000
        },
        "fragmentBuyCost": null,
        "fragmentSellCost": {
            "gold": 150
        },
        "buyCost": {
            "gold": 66000
        },
        "buySpecialCost": 33000,
        "fragmentSpecialCost": 164,
        "sellCost": {
            "gold": 13200
        },
        "enchantValue": 800,
        "fragmentEnchantValue": 4,
        "teamLevel": 123,
        "heroLevel": 123,
        "assetAtlas": 12,
        "assetTexture": "gear_230",
        "obtainType": null
    },
    "231": {
        "id": 231,
        "battleStatData": {
            "armorPenetration": 1200
        },
        "craftRecipe": null,
        "enchantMultiplier": 0,
        "color": 6,
        "fragmentMergeCost": {
            "fragmentCount": 200,
            "gold": 180000
        },
        "fragmentBuyCost": null,
        "fragmentSellCost": {
            "gold": 150
        },
        "buyCost": {
            "gold": 66000
        },
        "buySpecialCost": 33000,
        "fragmentSpecialCost": 164,
        "sellCost": {
            "gold": 13200
        },
        "enchantValue": 800,
        "fragmentEnchantValue": 4,
        "teamLevel": 122,
        "heroLevel": 122,
        "assetAtlas": 12,
        "assetTexture": "gear_231",
        "obtainType": null
    },
    "232": {
        "id": 232,
        "battleStatData": {
            "magicPenetration": 1200
        },
        "craftRecipe": null,
        "enchantMultiplier": 0,
        "color": 6,
        "fragmentMergeCost": {
            "fragmentCount": 200,
            "gold": 180000
        },
        "fragmentBuyCost": null,
        "fragmentSellCost": {
            "gold": 150
        },
        "buyCost": {
            "gold": 66000
        },
        "buySpecialCost": 33000,
        "fragmentSpecialCost": 164,
        "sellCost": {
            "gold": 13200
        },
        "enchantValue": 800,
        "fragmentEnchantValue": 4,
        "teamLevel": 124,
        "heroLevel": 124,
        "assetAtlas": 12,
        "assetTexture": "gear_232",
        "obtainType": null
    },
    "233": {
        "id": 233,
        "battleStatData": {
            "magicPenetration": 768,
            "magicPower": 3072
        },
        "craftRecipe": {
            "gear": {
                "181": 3,
                "226": 2
            },
            "gold": 1219500,
            "scroll": {
                "244": 1
            }
        },
        "enchantMultiplier": 0,
        "color": 6,
        "fragmentMergeCost": null,
        "fragmentBuyCost": null,
        "fragmentSellCost": null,
        "buyCost": {
            "gold": 767400
        },
        "buySpecialCost": 151875,
        "fragmentSpecialCost": null,
        "sellCost": {
            "gold": 153480
        },
        "enchantValue": 4000,
        "fragmentEnchantValue": 0,
        "teamLevel": 125,
        "heroLevel": 125,
        "assetAtlas": 12,
        "assetTexture": "gear_233",
        "obtainType": null
    },
    "234": {
        "id": 234,
        "battleStatData": {
            "hp": 5120,
            "magicPower": 3456
        },
        "craftRecipe": {
            "gear": {
                "180": 2,
                "226": 2
            },
            "gold": 1219500,
            "scroll": {
                "245": 1
            }
        },
        "enchantMultiplier": 0,
        "color": 6,
        "fragmentMergeCost": null,
        "fragmentBuyCost": null,
        "fragmentSellCost": null,
        "buyCost": {
            "gold": 732150
        },
        "buySpecialCost": 148350,
        "fragmentSpecialCost": null,
        "sellCost": {
            "gold": 146430
        },
        "enchantValue": 3200,
        "fragmentEnchantValue": 0,
        "teamLevel": 126,
        "heroLevel": 126,
        "assetAtlas": 12,
        "assetTexture": "gear_234",
        "obtainType": null
    },
    "235": {
        "id": 235,
        "battleStatData": {
            "dodge": 364,
            "hp": 7680,
            "physicalAttack": 1280
        },
        "craftRecipe": {
            "gear": {
                "189": 2,
                "225": 2
            },
            "gold": 1219500,
            "scroll": {
                "246": 1
            }
        },
        "enchantMultiplier": 0,
        "color": 6,
        "fragmentMergeCost": null,
        "fragmentBuyCost": null,
        "fragmentSellCost": null,
        "buyCost": {
            "gold": 776400
        },
        "buySpecialCost": 152776,
        "fragmentSpecialCost": null,
        "sellCost": {
            "gold": 155280
        },
        "enchantValue": 3260,
        "fragmentEnchantValue": 0,
        "teamLevel": 127,
        "heroLevel": 127,
        "assetAtlas": 12,
        "assetTexture": "gear_235",
        "obtainType": null
    },
    "236": {
        "id": 236,
        "battleStatData": {
            "hp": 5120,
            "physicalAttack": 1024,
            "physicalCritChance": 532
        },
        "craftRecipe": {
            "gear": {
                "179": 2,
                "229": 2
            },
            "gold": 1219500,
            "scroll": {
                "247": 1
            }
        },
        "enchantMultiplier": 0,
        "color": 6,
        "fragmentMergeCost": null,
        "fragmentBuyCost": null,
        "fragmentSellCost": null,
        "buyCost": {
            "gold": 732150
        },
        "buySpecialCost": 148350,
        "fragmentSpecialCost": null,
        "sellCost": {
            "gold": 146430
        },
        "enchantValue": 3200,
        "fragmentEnchantValue": 0,
        "teamLevel": 127,
        "heroLevel": 127,
        "assetAtlas": 12,
        "assetTexture": "gear_236",
        "obtainType": null
    },
    "237": {
        "id": 237,
        "battleStatData": {
            "armor": 1920,
            "hp": 5120,
            "physicalAttack": 1024
        },
        "craftRecipe": {
            "gear": {
                "179": 2,
                "227": 2
            },
            "gold": 1269000,
            "scroll": {
                "248": 1
            }
        },
        "enchantMultiplier": 0,
        "color": 6,
        "fragmentMergeCost": null,
        "fragmentBuyCost": null,
        "fragmentSellCost": null,
        "buyCost": {
            "gold": 733800
        },
        "buySpecialCost": 148350,
        "fragmentSpecialCost": null,
        "sellCost": {
            "gold": 146760
        },
        "enchantValue": 3200,
        "fragmentEnchantValue": 0,
        "teamLevel": 128,
        "heroLevel": 128,
        "assetAtlas": 12,
        "assetTexture": "gear_237",
        "obtainType": null
    },
    "238": {
        "id": 238,
        "battleStatData": {
            "magicPower": 1920,
            "magicResist": 1920
        },
        "craftRecipe": {
            "gear": {
                "176": 4,
                "226": 2
            },
            "gold": 1269000,
            "scroll": {
                "249": 1
            }
        },
        "enchantMultiplier": 0,
        "color": 6,
        "fragmentMergeCost": null,
        "fragmentBuyCost": null,
        "fragmentSellCost": null,
        "buyCost": {
            "gold": 504300
        },
        "buySpecialCost": 125400,
        "fragmentSpecialCost": null,
        "sellCost": {
            "gold": 100860
        },
        "enchantValue": 3360,
        "fragmentEnchantValue": 0,
        "teamLevel": 128,
        "heroLevel": 128,
        "assetAtlas": 12,
        "assetTexture": "gear_238",
        "obtainType": null
    },
    "239": {
        "id": 239,
        "battleStatData": {
            "armorPenetration": 960,
            "hp": 5120,
            "physicalAttack": 1664
        },
        "craftRecipe": {
            "gear": {
                "179": 2,
                "225": 1,
                "231": 1
            },
            "gold": 1269000,
            "scroll": {
                "250": 1
            }
        },
        "enchantMultiplier": 0,
        "color": 6,
        "fragmentMergeCost": null,
        "fragmentBuyCost": null,
        "fragmentSellCost": null,
        "buyCost": {
            "gold": 733800
        },
        "buySpecialCost": 148350,
        "fragmentSpecialCost": null,
        "sellCost": {
            "gold": 146760
        },
        "enchantValue": 3200,
        "fragmentEnchantValue": 0,
        "teamLevel": 129,
        "heroLevel": 129,
        "assetAtlas": 12,
        "assetTexture": "gear_239",
        "obtainType": null
    },
    "240": {
        "id": 240,
        "battleStatData": {
            "hp": 5120,
            "physicalAttack": 2304
        },
        "craftRecipe": {
            "gear": {
                "179": 2,
                "225": 2
            },
            "gold": 1269000,
            "scroll": {
                "251": 1
            }
        },
        "enchantMultiplier": 0,
        "color": 6,
        "fragmentMergeCost": null,
        "fragmentBuyCost": null,
        "fragmentSellCost": null,
        "buyCost": {
            "gold": 733800
        },
        "buySpecialCost": 148350,
        "fragmentSpecialCost": null,
        "sellCost": {
            "gold": 146760
        },
        "enchantValue": 3200,
        "fragmentEnchantValue": 0,
        "teamLevel": 129,
        "heroLevel": 129,
        "assetAtlas": 12,
        "assetTexture": "gear_240",
        "obtainType": null
    },
    "241": {
        "id": 241,
        "battleStatData": {
            "agility": 216,
            "intelligence": 216,
            "strength": 425
        },
        "craftRecipe": {
            "gear": {
                "186": 1,
                "187": 1,
                "221": 2
            },
            "gold": 1269000,
            "scroll": {
                "252": 1
            }
        },
        "enchantMultiplier": 0,
        "color": 6,
        "fragmentMergeCost": null,
        "fragmentBuyCost": null,
        "fragmentSellCost": null,
        "buyCost": {
            "gold": 778050
        },
        "buySpecialCost": 152776,
        "fragmentSpecialCost": null,
        "sellCost": {
            "gold": 155610
        },
        "enchantValue": 3600,
        "fragmentEnchantValue": 0,
        "teamLevel": 130,
        "heroLevel": 130,
        "assetAtlas": 12,
        "assetTexture": "gear_241",
        "obtainType": null
    },
    "242": {
        "id": 242,
        "battleStatData": {
            "agility": 216,
            "intelligence": 425,
            "strength": 216
        },
        "craftRecipe": {
            "gear": {
                "185": 1,
                "187": 1,
                "222": 2
            },
            "gold": 1269000,
            "scroll": {
                "253": 1
            }
        },
        "enchantMultiplier": 0,
        "color": 6,
        "fragmentMergeCost": null,
        "fragmentBuyCost": null,
        "fragmentSellCost": null,
        "buyCost": {
            "gold": 778050
        },
        "buySpecialCost": 152776,
        "fragmentSpecialCost": null,
        "sellCost": {
            "gold": 155610
        },
        "enchantValue": 3840,
        "fragmentEnchantValue": 0,
        "teamLevel": 130,
        "heroLevel": 130,
        "assetAtlas": 12,
        "assetTexture": "gear_242",
        "obtainType": null
    },
    "243": {
        "id": 243,
        "battleStatData": {
            "agility": 425,
            "intelligence": 216,
            "strength": 216
        },
        "craftRecipe": {
            "gear": {
                "185": 1,
                "186": 1,
                "223": 2
            },
            "gold": 1269000,
            "scroll": {
                "254": 1
            }
        },
        "enchantMultiplier": 0,
        "color": 6,
        "fragmentMergeCost": null,
        "fragmentBuyCost": null,
        "fragmentSellCost": null,
        "buyCost": {
            "gold": 778050
        },
        "buySpecialCost": 152776,
        "fragmentSpecialCost": null,
        "sellCost": {
            "gold": 155610
        },
        "enchantValue": 3840,
        "fragmentEnchantValue": 0,
        "teamLevel": 130,
        "heroLevel": 130,
        "assetAtlas": 12,
        "assetTexture": "gear_243",
        "obtainType": null
    }
}