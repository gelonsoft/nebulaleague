import {HeroAbilityModel, HeroAbilityName} from "~/shared/models";

const heroesAbilitiesConfig: Record<HeroAbilityName, HeroAbilityModel> = {
    attack1: {
        name: "attack1",
        description: "attack1 desc",
        basicPower: 1.0,
        time: 1.0
    },
    heal1: {
        name: "heal1",
        description: "heal1 desc",
        basicPower: 1.0,
        time: 1.0
    },
    power1: {
        name: "power1",
        description: "power1 desc",
        basicPower: 1.0,
        time: 1.0
    },
    magicProtection: {
        name: "magicProtection",
        description: "magicProtection desc",
        basicPower: 1.0,
        time: 1.0
    }
}