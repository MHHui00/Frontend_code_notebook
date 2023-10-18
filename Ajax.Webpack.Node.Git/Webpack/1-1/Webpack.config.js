const path = require('path');

module.exports = {
    //...
    entry: path.join(__dirname, 'src/index.js'),
    output: {
        path: path.join(__dirname, 'output/src'),
        filename: 'main.js',
        clean: true,    //先清空输出目录，再打包
    },
};