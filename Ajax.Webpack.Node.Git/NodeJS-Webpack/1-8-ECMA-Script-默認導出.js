const pi = 3.1415926;
const getArraySum = arr => arr.reduce((pre, curr)=>pre+=curr,0);

export default {
    pi: pi,
    getArraySum: getArraySum,
}
//review ECMA-Script標準的導出庫