const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");


module.exports = {
    mode: 'development',
    //...
    entry: path.join(__dirname, 'src/index.js'),
    output: {
        path: path.join(__dirname, 'output/src'),
        filename: 'main.js',
        clean: true,    //先清空输出目录，再打包
    },
    plugins: [
        //打包完js後，將原來的html文件添加引用打包完成的js，並且放到某個位置
        new HtmlWebpackPlugin({
            template: path.join(__dirname, 'public/login.html'),    //源html
            filename: path.join(__dirname, 'output/login.html')                //目標位置
            // filename: 'login.html', // 更改此處
        }),
        new MiniCssExtractPlugin(),
    ],
    module: {
        rules: [
            {
                test: /.s?css$/,
                use: [MiniCssExtractPlugin.loader, "css-loader"],
            },
        ],
    },
    optimization: {
        minimizer: [
            // 在 webpack@5 中，你可以使用 `...` 语法来扩展现有的 minimizer（即 `terser-webpack-plugin`），将下一行取消注释
            `...`,
            new CssMinimizerPlugin(),
        ],
    },
};