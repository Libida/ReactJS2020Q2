const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = (env, argv) => {
    const isDevMod = argv.mode === 'production';

    return {
        entry: ['./src/client/index.jsx'],
        output: {
            path: path.join(__dirname, 'public'),
            filename: "[name].js"
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
                    test: /\.css$/,
                    use: ["style-loader", "css-loader"]
                }
            ]
        },
        devServer: {
            port: 3000,
            open: true,
            proxy: {
                "/api": "http://localhost:8080" // For potential future use with SSR
            }
        },
        plugins: [
            new CleanWebpackPlugin(),
            new HtmlWebpackPlugin({
                template: "./src/client/index.html"
            })
        ],
        optimization: {
            minimizer: [new UglifyJsPlugin({
                uglifyOptions: {
                    keep_fnames: true,
                    mangle: false
                }})],
        },
        devtool: isDevMod ? 'source-map' : 'none'
    }
};
