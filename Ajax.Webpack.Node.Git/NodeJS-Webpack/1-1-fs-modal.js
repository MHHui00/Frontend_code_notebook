//review 
const fsMoadal = require('fs');

// fsMoadal.writeFile('./write.txt', 'hello node', (error)=>{
//     if(error)   console.log(error);
//     else    console.log('寫入成功');
// })


fsMoadal.readFile('./write.txt', (error, bufferData)=>{
    if(error)   console.log(error);
    else{
        console.log(bufferData);
        console.log(bufferData.toString());
    }   
})