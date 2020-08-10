const webpack = require('webpack')
const path = require("path")
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const pathToPhaser = path.join(__dirname, "/node_modules/phaser/")
const phaser = path.join(pathToPhaser, "dist/phaser.js")

const dotenv = require('dotenv')
const env = dotenv.config().parsed;
const currentPath = path.join(__dirname)
const envPath = currentPath + '/.env.dev'
const fileEnv = dotenv.config({ path: envPath }).parsed;

// reduce it to a nice object, the same as before
const envKeys = Object.keys(env).reduce((prev, next) => {
    prev[`process.env.${next}`] = JSON.stringify(fileEnv[next]);
    return prev;
}, {})


module.exports = {
    mode: 'development',
    devServer: {
        contentBase: path.join(__dirname, 'public'),
        port: 3000,
        host: `localhost`,
        disableHostCheck: true,
        overlay: true,
    },
    entry: {
        app: [
            // 'webpack-dev-server/client?http://localhost:3000/',
            // 'webpack/hot/only-dev-server',
            path.resolve(__dirname, 'src/client/index.ts'),
        ],
        vendor: ['phaser'],
    },
    devtool: 'inline-source-map',
    output: {
        path: path.resolve(__dirname, "public"),
        publicPath: '/',
        filename: '[name].js',
    },
    resolve: {
        extensions: [".ts", ".js"],
        alias: {
            phaser: phaser
        }
    },
    module: {
        rules: [{
            test: /\.ts$/,
            use: 'ts-loader',
            exclude: [
                path.resolve(__dirname, "typings"),
                path.resolve(__dirname, "node_modules")
            ],
        }, {
            test: /phaser\.js$/, loader: "expose-loader?Phaser"
        }, {
            test: /\.scss$/,
            use: [
                MiniCssExtractPlugin.loader,
                {
                    loader: 'css-loader'
                },
                {
                    loader: 'sass-loader',
                    options: {
                        sourceMap: true,
                    }
                }
            ]
        }]
    },
    plugins: [
        new webpack.DefinePlugin(envKeys),
        new MiniCssExtractPlugin({filename: 'css/mystyles.css'}),
    ]
}
