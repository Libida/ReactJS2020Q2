const merge = require('webpack-merge');
const common = require('./webpack.config.common');
const nodeExternals = require('webpack-node-externals');

module.exports = merge(common, {
    name: 'server',
    target: 'node',
    entry: ['./src/server/serverRenderer.js'],
    externals: [nodeExternals()],
    output: {
        filename: 'js/serverRenderer.js',
        libraryTarget: 'commonjs2'
    },
    module: {
        rules: [{
            test: /\.css$/,
            include: /src/,
            use: [{
                loader: 'css-loader/locals',
            }]
        }]
    }
});
