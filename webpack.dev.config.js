const webpack = require('webpack')
const path = require("path")
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const pathToPhaser = path.join(__dirname, "node_modules/phaser/")
const phaser = path.join(__dirname, "/node_modules/phaser/dist/phaser.js")
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
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
            "~": path.resolve(__dirname, 'src'),
        }
    },
    module: {
        rules: [{
            test: /\.ts$/,
            use: 'ts-loader',/*{
                loader: 'ts-loader',
                options: {
                    configFile: "tsconfig.json"
                },
            }, */
            exclude: [
                path.resolve(__dirname, "typings"),
                path.resolve(__dirname, "node_modules")
            ],
        }, /*{
            test: /phaser\.js$/, use: "expose-loader?Phaser"
        },*/ {
            test: /\.scss$/,
            use: [
                "style-loader",
                "css-loader",
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
                 //   name: "vendor",
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
            googleAnalyticsId: 'UA-62380614-3',
        }),
        new webpack.EnvironmentPlugin({
            DEBUG: process.env.DEBUG || true
        }),
        new MiniCssExtractPlugin({filename: 'css/mystyles.css'}),
        new BundleAnalyzerPlugin({
            analyzerMode: 'server',
            port: 8888,
            openAnalyzer: false,
        }),
    ]
}
