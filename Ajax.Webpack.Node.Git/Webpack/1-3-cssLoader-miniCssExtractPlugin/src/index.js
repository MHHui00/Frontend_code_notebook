const {checkLength8, checkLength6}= require('./util/checkLength.js')
// console.log(checkLength8('12345678'));
// console.log(checkLength6('123456'));


document.querySelector(".btn").addEventListener('click', ()=>{
    // console.log('111');
    const phone = document.querySelector(".login-form [name=mobile]").value;
    const code = document.querySelector(".login-form [name=code]").value;
    if(!checkLength8(phone)){
        console.log('phone num should be 8 digits');
        return;
    }
    if(!checkLength6(code)){
        console.log('code num should be 6 digits');
        return;
    }

    console.log('ok,login ing');
})

// const cssLoder = require('../public/index.css')
// const bootstrap = require('bootstrap/dist/css/bootstrap.mini.css')
import 'bootstrap/dist/css/bootstrap.min.css'
import '../public/index.css'