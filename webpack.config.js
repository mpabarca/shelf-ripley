var path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.join(__dirname + '/public/js'),
        filename: 'bundle.js',
        publicPath: '/public/js'
    },
    devServer: {
        inline: true,
        port: 3000
    },
    module: {
        rules: [
            {
                test: /\.js$/ ,
                loaders: 'babel-loader',
                exclude: /node_modules/,
                include: path.join(__dirname, 'src')
            },
            {
                test: /\.css$/ ,
                loaders: ['style-loader','css-loader']
            }
        ]        
    }
}