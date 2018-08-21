var HTMLWebpackPlugin = require('html-webpack-plugin');

var HTMLWebpackPluginConfig = new HTMLWebpackPlugin({
    template: __dirname + '/app/index.html',
    filename: 'index.html',
    inject: 'body'
});

module.exports = {
    entry: __dirname + '/app/index.js',
    module: {
        rules:[{
            test: /\.js$/,
            exclude: /node_modules/,
            use: [{
                loader: 'babel-loader',
                options: {
                    presets: ['es2015', 'react']
                }
            }]
        },
        {
            test: /\.css$/,
            exclude: /node-modules/,
            use: ['style-loader', 'css-loader']
        },
        {
            test: /\.(png|svg|jpg|gif)$/,
            exclude: /node-modules/,
            use: [
                'file-loader'
            ]
        }]
    },
    output: {
        filename: 'transformed.js',
        path: __dirname + '/build'
    },
    plugins: [HTMLWebpackPluginConfig],
    mode: 'development'
};