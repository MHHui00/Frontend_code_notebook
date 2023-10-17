//review 使用http模塊，啟動本地web服務

//使用http模塊，創建服務對象
const http = require('http');
const server = http.createServer();

//監聽服務的請求
server.on('request', (resquest,response)=>{

    //可以設置相應的頭，實現響應中文消息

    //結束請求，同時響應內容welcome
    response.end('welcome')
})

//為該服務配置端口號並啟動。回調函數
server.listen('2345',()=>{
    console.log('開啟成功');
})