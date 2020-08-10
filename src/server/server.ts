const app = require('express')(); // new express instance
const express = require('express');
const http = require('http').Server(app);
require('socket.io')(http);

const port = 3000


const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const config = require('../webpack.dev.config.js');



const devServerEnabled = true;

if (devServerEnabled) {
    //reload=true:Enable auto reloading when changing JS files or content
    //timeout=1000:Time from disconnecting from server to reconnecting
    config.entry.app.unshift('webpack-hot-middleware/client?reload=true&timeout=1000');

    //Add HMR plugin
    config.plugins.push(new webpack.HotModuleReplacementPlugin());

    const compiler = webpack(config);

    //Enable "webpack-dev-middleware"
    app.use(webpackDevMiddleware(compiler, {
        publicPath: config.output.publicPath
    }));

    //Enable "webpack-hot-middleware"
    app.use(webpackHotMiddleware(compiler))
}



app.use(express.static('public'))

app.get('/', (req, res) => {
    res.sendfile(`./index.html`)
});

http.listen(port, () => {
    console.info('listening on localhost:3000')
});
