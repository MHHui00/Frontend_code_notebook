(()=>{var e={492:e=>{e.exports={checkLength8:e=>8===e.length,checkLength6:e=>6===e.length}}},o={};function n(t){var c=o[t];if(void 0!==c)return c.exports;var l=o[t]={exports:{}};return e[t](l,l.exports,n),l.exports}(()=>{const{checkLength8:e,checkLength6:o}=n(492);console.log(e("12345678")),console.log(o("123456")),document.querySelector(".btn").addEventListener("click",(()=>{const n=document.querySelector(".login-form [name=mobile]").value,t=document.querySelector(".login-form [name=code]").value;e(n)?o(t)?console.log("ok,login ing"):console.log("code num should be 6 digits"):console.log("phone num should be 8 digits")}))})()})();