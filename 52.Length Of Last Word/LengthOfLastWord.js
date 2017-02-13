/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
  if(s.length === 0){ return 0 };    
  let arr = s.split(' ').reverse();
  if(arr[0] === ''){return arr[1].length}
  else return arr[0].length;
};
