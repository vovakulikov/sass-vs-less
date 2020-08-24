const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        app: path.resolve(__dirname, './src/index.js'),
    },
    output: {
        path: path.resolve(__dirname, 'dist'), // Note: Physical files are only output by the production build task `npm run build`.
        publicPath: '/',
        filename: '[name].bundle.js'
    },
    target: 'web', // necessary per https://webpack.github.io/docs/testing.html#compile-and-test
    mode: "production",
    devtool: 'source-map',
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".jsx",],
    },
    optimization: {
        minimize: false
    },
    module: {
        rules: [
            {
                test: /\.less$/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 2,
                            modules: {
                                localIdentName: '[local]--[hash:base64:5]',
                            },
                            //localsConvention: 'camelCase',
                        },
                    },
                    'less-loader'
                ], // compiles Less to CSS
            },
            {
                test: /\.(scss)$/i,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 2,
                            modules: {
                                localIdentName: '[local]--[hash:base64:5]',
                            },
                            //localsConvention: 'camelCase',
                        },
                    },
                    'sass-loader'
                ],
            },
        ]
    },
    plugins: [
        // new HtmlWebpackPlugin({
        //     template: './index.html'
        // }),
    ]
};
