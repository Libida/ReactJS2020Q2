const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.config.common');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');

const isDevelop = process.env.NODE_ENV === 'development';

const getDevelopmentPlugins = () => {
    if (isDevelop) {
        return [
            new CleanWebpackPlugin(),
            new webpack.HotModuleReplacementPlugin()
        ];
    }
    return [];
};

const getCommonPlugins = () => {
    return [
        new webpack.DefinePlugin({
            'process.env.BROWSER': true,
        })
    ];
};

module.exports = merge(common, {
    name: 'client',
    target: 'web',
    entry: [
        isDevelop && 'webpack-hot-middleware/client',
        './src/client/client.jsx',
    ].filter(Boolean),
    plugins: [
        ...getDevelopmentPlugins(),
        ...getCommonPlugins()
    ].filter(Boolean),
});
