const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: [
        path.resolve(__dirname, "src", "index.js"),
    ],
    module: {
        rules: [
            {
                test: /\.(eot|svg|ttf|woff2?|otf|png|jpg)$/,
                use: [{
                    loader: 'file-loader',
                }]
            }
            , {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            },
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: [
                    "babel-loader"
                ],
            },
        ],
    },
    output: {
        path: path.resolve(__dirname, "./public"),
        filename: 'bundle.js',
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: "Weather App",
            template: path.resolve(__dirname, ".", "./index.html")
        })
    ],
};