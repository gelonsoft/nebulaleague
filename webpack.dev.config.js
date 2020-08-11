const webpack = require('webpack')
const path = require("path")
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const pathToPhaser = path.join(__dirname, "/node_modules/phaser/")
const phaser = path.join(pathToPhaser, "dist/phaser.js")


module.exports = {
    mode: 'development',
    devServer: {
        contentBase: path.join(__dirname, 'public'),
        host: `localhost`,
        // port: 3000,
        // disableHostCheck: true,
        // overlay: true,
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
        chunkFilename: '[name].js'
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
            use: {
                loader: 'ts-loader',
                options: {
                    configFile: "tsconfig-client.json"
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
            filename: 'index.html',
        }),
        new webpack.EnvironmentPlugin({
            DEBUG: true,
        }),
        new MiniCssExtractPlugin({filename: 'css/mystyles.css'}),
    ]
}
