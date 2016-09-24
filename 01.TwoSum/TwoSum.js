//The Code Write At First Time : 582ms
var twoSum = function(nums, target) {
  let result = [];
  let length = nums.length;
  for(let i = 0; i < length; i++){
    if(i != length-1){
      for(let j = i + 1;j < length; j++){
        if(nums[i] + nums[j] == target){
          result = [i, j];
        }
      }
    }
  }
  return result;
};

//Use Hash: 85ms
var twoSum = function(nums, target) {
    let hash = {}
    for (var i = 0; i < nums.length; i++) {
        let num = nums[i];
        let delta = target - num;
        if(hash[delta] !== undefined && hash[delta] !== i){
            return [hash[delta],i]
        }else{
            hash[num] = i;
        }
    }
    return []
};