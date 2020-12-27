import * as path from 'path'
import { Express } from 'express'

const webpack = require('webpack')
const webpackDevMiddleware = require('webpack-dev-middleware')
const hotMiddleware = require('webpack-hot-middleware')

export default function settingWebpackFormServer(app: Express): void {
    const config = require(path.resolve('./webpack.dev.config.js'))
    // config.entry.app.unshift('webpack-hot-middleware/client?reload=true&timeout=1000')
    // config.plugins.push(new webpack.HotModuleReplacementPlugin())
    const compiler = webpack(config)
    app.use(
        webpackDevMiddleware(compiler, {
            publicPath: config.output.publicPath,
            serverSideRender: true,
        })
    )
    // app.use(hotMiddleware(compiler))
}
