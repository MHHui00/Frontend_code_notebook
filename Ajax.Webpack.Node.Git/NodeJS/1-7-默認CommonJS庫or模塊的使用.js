//review 這句話就相當於import xx庫
//當引入內置的模塊，‘’裡面就寫模塊名，引入自定義的話‘’裡面就寫路徑
const myModal = require('./1-6-默認CommonJS庫or模塊的導出.js');

console.log(myModal.pi);
console.log(myModal.getArraySum([1, 2, 3, 4, 5]));
