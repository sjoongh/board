const express = require('express');
const webpack = require('webpack');
const webpackConfig = require('./webpack.config.js');
const webpackDevMidddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const getApi = require('./src/server/getApi.js');

const app = express();
const compiler = webpack(webpackConfig);

const path = require('path');
const port = 3000;

// build된 dist파일에서 가져옴
app.get('/', (req, res, next) => {
    res.sendFile(path.resolve(__dirname, "../../dist/index.html"));
});

// express(server)가 webpack(compiler)을 사용하게 설정
app.use(webpackDevMidddleware(compiler, {
    publicPath: webpackConfig.output.publicPath,
}));

app.use(webpackHotMiddleware(compiler));

// check log
app.listen(port, () => {
    console.log(`http://localhost:${port}`);
});

// api 호출 설정
getApi(app);

