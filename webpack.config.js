var webpack = require('webpack');

module.exports = {
    entry: './control-panel.js',
    output: {
        path: __dirname,
        filename: 'main.js'
    },
    mode:'development',
    module: {
        rules: [
            {
                test: /\.js?/,
                 loader: 'babel-loader'
            },
            {
                test:/\.html$/,
                loader: 'html?minimize=false'
            }
        ]
    }

};
