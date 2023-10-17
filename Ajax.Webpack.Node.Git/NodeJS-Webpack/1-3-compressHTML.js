const fs = require('fs');
const path = require('path');

fs.readFile(path.join(__dirname, 'testFile/example.html'), (error, data) => {
    if (error) {
        console.log(error);
    } else {
        // console.log(data.toString());
        const content = data.toString();
        const compressedContent = content.replace(/[\t\n]/g, '');
        // console.log(compressedContent);

        fs.writeFile(path.join(__dirname, 'testFile/example_compressed.html'), compressedContent, (error)=>{
            if(error)   console.log(error);
            else    console.log('finished');
        })
    }
});
