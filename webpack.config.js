const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const paths = {
    DIST: path.resolve(__dirname,'dist'),
    SRC: path.resolve(__dirname,'src'),
    JS: path.resolve(__dirname, 'src/js')
};

const extractSass = new ExtractTextPlugin({
    filename: "[name].[contenthash].css",
    disable: process.env.NODE_ENV === "development"
});

module.exports = {
    entry: path.join(paths.JS + '/app.js'),
    output: {
        path: paths.DIST,
        filename: 'app.bundle.js',
        publicPath: '/'
    },
    module:{
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: [
                    'babel-loader',
                ],
            },
            {
                test: /\.sass$/,
                use: extractSass.extract({
                        use: [{
                            loader: "css-loader"
                        }, {
                            loader: "sass-loader"
                        }],
                        fallback: "style-loader"
                    },
                    {
                        test: /\.png$/,
                        loader: "url-loader?name=images/[name].[ext]"
                    })
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx'],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(paths.SRC, 'index.html'),
        }),
        new ExtractTextPlugin('style.css')
    ],
    devServer: {
        contentBase: paths.SRC
    }
};