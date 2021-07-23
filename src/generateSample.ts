import * as bcrypt from "bcrypt";
//import {IUserEntity,UserEntitySchema} from "./server/entities/UserEntity";
import {connect, connection} from "mongoose";
import UserEntity, {IUserEntity} from "./server/entities/UserEntity";
import {HeroItemId} from "./shared/models";
import HeroItemEntity, {IHeroItemEntity} from "~/server/entities/HeroItemEntity";


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
//const UserEntity = mongoose.model<IUserEntity>('User', UserEntitySchema)

    await clearDatabase()
    const user: IUserEntity = await UserEntity.create({
        playerId: 1,
        login: '1',
        password: await encryptPassword('1'),
        playerLevel: 1,
        token: "2665333eb51af05dd5b6a1f1a3a088236bfba5ca18dd0bc9c23a0566e5ec28bba090ed172bec88178e71abe281eb241d2e1aae83dd991efd1a6ed99b3be50606",
        playerName: 'xxx2',
        coins: 100
    })
    void user.save()
    /*createHeroItem(1,HeroItemId.Amror, 1)
    await UserEntity.find((err: any, value: IUserEntity[]) => {
        value.forEach((v) => {
            console.log(v)
            void HeroItemEntity.find((items: IHeroItemEntity) => {
                    console.log(items)
                }
            )
        })
        console.log(value)
    })*/
}).finally( (): void => {
    console.log("Done")
    process.exit()
    }
)

function createHeroItem(playerId: number, itemId: HeroItemId, count: number) {
    void HeroItemEntity.create({
        playerId: playerId, itemId: itemId, count: count
    }).then((v) => {
        void v.save()
        }
    )
}