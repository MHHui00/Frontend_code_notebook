
//review 配置本地web服務
const fs = require('fs');
const path = require('path');

const http = require('http');
const server = http.createServer();

server.on('request', (req,res)=>{
    if(req.url === '/example.html'){
        fs.readFile(path.join(__dirname, 'testFile/example.html'), (error, data)=>{
            if(error)   console.log(error);
            else{
                res.setHeader('Content-Type', 'text/html;charset=utf-8');
                res.end(data.toString());
            }
        })
    }else{
        res.setHeader('Content-Type', 'text/html;charset=utf-8');
        res.end('Not exist');
    }
})

server.listen('2345', ()=>{
    console.log('服務開啟ed');
})