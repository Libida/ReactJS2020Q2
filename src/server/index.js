const express = require('express');
const app = express();
const port = 3000;
const ghpages = require('gh-pages');

function developmentMode() {
    const webpack = require('webpack');
    const webpackConfig = require('../../webpack');

    const webpackDevMiddleware = require('webpack-dev-middleware');
    const webpackHotMiddleware = require('webpack-hot-middleware');
    const webpackHotServerMiddleware = require('webpack-hot-server-middleware');

    const compiler = webpack(webpackConfig);

    app.use(webpackDevMiddleware(compiler));
    app.use(webpackHotMiddleware(compiler.compilers.find(c => c.name === 'client')));
    app.use(webpackHotServerMiddleware(compiler));
}

function productionMode() {
    const serverRenderer = require('../../public/js/serverRenderer').default;
    app.use(express.static('public'));
    app.use(serverRenderer());
}

process.env.NODE_ENV === 'development' ? developmentMode() : productionMode();

app.listen(port, () => console.log(`React app listening at http://localhost:${port}`));
