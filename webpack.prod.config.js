const webpack = require('webpack')
const path = require('path')
const TerserPlugin = require('terser-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const dotenv = require('dotenv')
const env = dotenv.config().parsed;
const currentPath = path.join(__dirname)
const envPath = currentPath + '/.env'
const fileEnv = dotenv.config({ path: envPath }).parsed;

// reduce it to a nice object, the same as before
const envKeys = Object.keys(env).reduce((prev, next) => {
    prev[`process.env.${next}`] = JSON.stringify(fileEnv[next]);
    return prev;
}, {})


module.exports = {
    mode: 'production',
    entry: {
        app: [
            path.resolve(__dirname, 'src/client/index.ts')
        ]
    },
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'app.js'
    },
    resolve: {
        extensions: ['.ts', '.js']
    },
    module: {
        rules: [{
            test: /\.ts?$/,
            use: {
                loader: 'ts-loader',
                options: {
                    configFile: "tsconfig-client.json"
                },  
            },
            exclude: [
                path.resolve(__dirname, "typings"),
                path.resolve(__dirname, "node_modules"),
            ],
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
                        sourceMap: false,
                    }
                }
            ]
        }]
    },
    optimization: {
        minimize: true,
        minimizer: [new TerserPlugin()],
    },
    plugins: [
        new webpack.DefinePlugin(envKeys),
        new MiniCssExtractPlugin({filename: 'css/mystyles.css'}),
    ]
}
