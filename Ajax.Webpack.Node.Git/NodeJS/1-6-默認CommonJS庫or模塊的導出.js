const pi = 3.1415926;
const getArraySum = arr => arr.reduce((pre, curr)=>pre+=curr,0);

module.exports = {
    pi: pi,
    getArraySum: getArraySum,
}