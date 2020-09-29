const webpack = require('webpack')
const path = require("path")
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const pathToPhaser = path.join(__dirname, "/node_modules/phaser/")
const phaser = path.join(pathToPhaser, "dist/phaser.js")
require('dotenv-flow').config()


module.exports = {
    mode: 'development',
    devServer: {
        contentBase: path.join(__dirname, 'public'),
        host: `localhost`,
        hot:true,
    },
    entry: {
        app: [
            path.resolve(__dirname, 'src/client/index.ts'),
        ],
        vendor: ['phaser'],
    },
    devtool: 'inline-source-map',
    output: {
        path: path.resolve(__dirname, "public"),
        publicPath: '/',
        filename: '[name].js',
        chunkFilename: '[name].js'
    },
    resolve: {
        extensions: [".ts", ".js"],
        alias: {
            phaser: phaser,
            "~": path.resolve(__dirname, 'src/client'),
            "@shared": path.resolve(__dirname, 'src/shared'),
        }
    },
    module: {
        rules: [{
            test: /\.ts$/,
            use: {
                loader: 'ts-loader',
                options: {
                    configFile: "tsconfig.json"
                },  
            },
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
    optimization: {
        runtimeChunk: "single", // enable "runtime" chunk
        splitChunks: {
            cacheGroups: {
                vendor: {
                    test: /[\\/]node_modules[\\/]/,
                    name: "vendor",
                    chunks: "all"
                }
            }
        }
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Nebulaleague',
            template: 'src/index.ejs',
            filename: 'index.html',
            scriptLoading: 'defer',
            googleAnalycticsId: 'UA-62380614-3',
        }),
        new webpack.EnvironmentPlugin({
            DEBUG: process.env.DEBUG || true
        }),
        new MiniCssExtractPlugin({filename: 'css/mystyles.css'}),
    ]
}
