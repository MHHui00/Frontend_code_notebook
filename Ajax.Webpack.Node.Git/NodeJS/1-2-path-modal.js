const path = require('path')
const fs = require('fs')

// console.log(__dirname);

const test = path.join(__dirname, '../')
// console.log(test);

//review 路徑連結path.join（），每個元素！之間！都自動加上'\'或'/'（根據系統環境決定）
fs.readFile(path.join(__dirname, '..', 'test.js'), (e, data)=>{
    if(e) console.log(e);
    else console.log(data.toString());
})