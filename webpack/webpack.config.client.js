const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.config.common');

const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const isDevelop = process.env.NODE_ENV === 'development';

const getDevelopmentPlugins = () => {
    if (isDevelop) {
        return [
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
    ],
    plugins: [
        ...getDevelopmentPlugins(),
        ...getCommonPlugins()
    ],
});
