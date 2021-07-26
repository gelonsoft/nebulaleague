import * as bcrypt from "bcrypt";
//import {IUserEntity,UserEntitySchema} from "./server/entities/UserEntity";
import {connect, connection} from "mongoose";
import UserEntity, {IUserEntity} from "./server/entities/UserEntity";
import HeroItemEntity, {IHeroItemEntity} from "./server/entities/HeroItemEntity";
import HeroEntity, {IHeroEntity} from "./server/entities/HeroEntity";


function encryptPassword(password: string): Promise<string> {
    return bcrypt.hash(password, 10);
}

export const clearDatabase = async () => {
    const collections = connection.collections;
    for (const key in collections) {
        const collection = collections[key];
        await collection.deleteMany({});
    }
}

connect(process.env.DEMO_DATABASE||"",{useNewUrlParser: true, useUnifiedTopology: true}).then( async() => {

    await clearDatabase()
    const user: IUserEntity = await UserEntity.create({
        playerId: 1,
        login: '1',
        password: await encryptPassword('1'),
        playerLevel: 1,
        token: "b353bac2c336c3f7118425c8abfcb16016ebbc26b54cc62e7d798d3a1fffa7bbe99d955d7af718b4bbc962f92f5800be22afe900a6881cdca52087b56652b8c4",
        playerName: 'xxx2',
        gold: 100,
        stamina: 1,
        lastStaminaUpdate: ((new Date()).valueOf())
    })
    await user.save()
    await createHero(1,1,1,1,1,0,0,0,1,1,1,1,0,0,0,10,1);
    await createHero(1,2,2,1,1,0,0,0,1,1,1,1,0,0,0,10,1);

    await createHeroItem(1,1,1,1);
    const users = await UserEntity.find().lean().exec();
    for (const u of users) {
            console.log(u);
            const heroes = await HeroEntity.find({playerId: u.playerId}).lean().exec();
            for (const he of heroes) {
                console.log(he)
            }
            const items = await HeroItemEntity.find({playerId: u.playerId}).lean().exec();
            for (const hi of items) {
                console.log(hi)
            }
        }

    /*console.log("x2")
    await UserEntity.find((v:IUserEntity[]) => {
        console.log(v)
    })*/
}).finally( (): void => {
    console.log("Done")
    process.exit()
    }
)

async function  createHero(playerId: number,     heroId: number,
                        xp: number,
level: number,
    color: number,
    slot1: number,
    slot2: number,
    slot3: number,
    slot4: number,
    slot5: number,
    slot6: number,
    skill1: number,
    skill2: number,
    skill3: number,
    skill4: number,
    power: number,
    star: number) {
    return (await HeroEntity.create({
        playerId: playerId,     heroId: heroId,
        xp: xp,
        level: level,
        color: color,
        slot1: slot1,
        slot2: slot2,
        slot3: slot3,
        slot4: slot4,
        slot5: slot5,
        slot6: slot6,
        skill1: skill1,
        skill2: skill2,
        skill3: skill3,
        skill4: skill4,
        power: power,
        star: star
    })).save()
}

async function createHeroItem(playerId: number, itemId: number, itemType: number, count: number) {
    return (await HeroItemEntity.create({
        playerId: playerId, itemId: itemId, itemType: itemType, count: count
    })).save()
}