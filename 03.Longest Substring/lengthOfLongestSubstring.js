//Runtime : 162ms
var lengthOfLongestSubstring = function(s) {
    let length = s.length;
    if(length <= 1){
        return length;
    }
    let temp = '';
    let result = 0;
    for(let i = 0; i < length; i++){
      let word = s.charAt(i);
      let index = temp.indexOf(word);
      if(index === -1){
        temp += word;
        result = Math.max(result, temp.length);
      }else{
        temp = temp.slice(index + 1);
        temp += word;
      }
    }
    return result;
};