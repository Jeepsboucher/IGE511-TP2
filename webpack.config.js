const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: {
        main: path.resolve(__dirname, 'src/main.js'),
        a: path.resolve(__dirname, 'src/a.js'),
        b: path.resolve(__dirname, 'src/b.js')
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].bundle.js',
        clean: true
    },
    devtool: 'inline-source-map',
    devServer: {
        static: path.resolve(__dirname, 'dist'),
        port: 5000,
        open: true,
        hot: true,
        
    },
    //loaders
    module: {
        rules: [
            {test: /\.css$/, use: ['style-loader', 'css-loader']}
        ]
    },
    //plugins
    plugins: [
        new HtmlWebpackPlugin({
            title: 'TP2',
            filename: 'index.html',
            template: path.resolve(__dirname, 'src/index.html'),
            chunks: ['main']
        }),
        new HtmlWebpackPlugin({
            title: 'TP2',
            filename: 'a.html',
            template: path.resolve(__dirname, 'src/a.html'),
            chunks: ['a']
        }),
        new HtmlWebpackPlugin({
            title: 'TP2',
            filename: 'b.html',
            template: path.resolve(__dirname, 'src/b.html'),
            chunks: ['b']
        })
    ]
}