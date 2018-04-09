var webpack = require('webpack');

module.exports = {
    entry: './control-panel.js',
    output: {
        path: __dirname,
        filename: 'main.js'
    },
    module: {
        rules: [
            {
                test: /\.js?/,
                 loader: 'babel-loader'
            }
        ]
    }

};
