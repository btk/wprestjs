var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        contactone: "./app/index.js"
    },
    node: {
        fs: "empty"
    },
    output: {
        path: "output",
        filename: "bundle.js",
    },
    devtool: 'source-map',
    module: {
        loaders: [{
            test: /\.js?$/,
            exclude: ['node_modules'],
            loader: 'babel-loader',
            query: {
                presets: ['es2015']
            }
        }]
    },
    devServer: {
        progress: true,
        contentBase: "./output",
        outputPath: "./output"
    },
    plugins: [new HtmlWebpackPlugin({
        title: 'WP Rest Api Example',
        filename: 'index.html',
        template: 'app/index-template.html'
    })]
};
