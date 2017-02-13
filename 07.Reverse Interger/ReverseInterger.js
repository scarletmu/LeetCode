/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let strArr = x.toString().split('').reverse();
    if(strArr[strArr.length - 1] === '-'){
      strArr.unshift(strArr.pop());
    }
    let result = Number(strArr.join(''));
    if(result > 2147483647) return 0;
    if(result < -2147483648) return 0;
    return result;
};