import { Client } from './client'
import { OfflineClient } from './offline'
import { ColyseusClient } from './colyseus'
import { MyGame } from '~/client/index'
import { Config } from '~/shared/config'

function getDefaultClient(game: MyGame): Client {
    if (Config.debug.defaultClient === 'offline') {
        return new OfflineClient(game)
    } else {
        return new ColyseusClient(game)
    }
}

export { Client, OfflineClient, ColyseusClient, getDefaultClient }
