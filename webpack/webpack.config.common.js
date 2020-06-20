const path = require('path');
const webpack = require('webpack');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

const isDevelop = process.env.NODE_ENV === 'development';

const getProductionPlugins = () => {
    if (!isDevelop) {
        return [
            // new UglifyJsPlugin(),
            // new OptimizeCSSAssetsPlugin(),
            // new webpack.HashedModuleIdsPlugin(),
        ];
    }
    return [];
};

const getDevelopmentPlugins = () => {
    return [
        new webpack.NamedModulesPlugin(),
    ];
};

module.exports = {
    mode: process.env.NODE_ENV,

    output: {
        filename: 'js/[name].js',
        chunkFilename: 'js/[name].js',
        path: path.resolve('./public')
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.(sa|sc|c)ss$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            hmr: process.env.NODE_ENV === 'development',
                        },
                    },
                    'css-loader',
                    'sass-loader',
                ],
            },
        ]
    },
    optimization: {
        splitChunks: {
            cacheGroups: {
                styles: {
                    name: 'styles',
                    test: /\.css$/,
                    chunks: 'all',
                    enforce: true,
                },
            },
        }
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: '[name].css',
        }),
        ...getProductionPlugins(),
        ...getDevelopmentPlugins()
    ]
};
