const HtmlWebPackPlugin = require("html-webpack-plugin");
// const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    devtool: 'source-map',
    entry: './src/index.jsx',
    output: {
        path: __dirname + '/dist',
        publicPath: '/',
        filename: 'bundle.js'
    },
    devServer: {
        contentBase: './dist',
        port: 8080,
        open: true,
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            // {
            //     test: /\.scss$/,
            //     use: [{
            //         loader: 'style-loader'
            //     }, {
            //         loader: 'css-loader',
            //     }, {
            //         loader: 'sass-loader',
            //     }]
            // },
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: "./index.html",
            filename: "./index.html"
        }),
        // new CopyWebpackPlugin([
        //     {from: './public/assets', to: 'assets'},
        // ],
    //     {copyUnmodified: false}
    // )
    ],
    resolve: {
        extensions: ['.js', '.jsx']
    }
};