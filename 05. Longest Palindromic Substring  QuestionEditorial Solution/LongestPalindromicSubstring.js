//RunTime: 275ms
var longestPalindrome = function(s) {
  let Max = 0, startIndex = 0, size = s.size(), left, right;
  for(let i = 0; i < size; i++){
    let oddLen = 1;
    left = i - 1;
    right = i + 1;
    while(left >= 0 && right < size && s[left] == s[right]){
      left--;
      right++;
      oddLen += 2;
    }
    if(oddLen > Max){
      Max = oddLen;
      startIndex = left + 1;
    }
    left = i;
    right = i + 1;
    let evenLen = 0;
    while(left >= 0 && right < size && s[left] == s[right]){
      left--;
      right++;
      evenLen += 2;
    };
    if(evenLen > Max){
      Max = evenLen;
      startIndex = left+1;
    };
  }
  return s.substr(startIndex, Max);
};