// Runtime: 195 ms
var findMedianSortedArrays = function(nums1, nums2) {
  let arr = nums1.concat(nums2).sort(function (a, b) {
    if (a > b) {
      return 1;
    }
    if (a < b) {
      return -1;
    }
    return 0;
  });
  let length = arr.length;
  let mid = Math.floor(length / 2);
  if(length % 2 > 0){
    return arr[mid];
  }else{
    return (arr[mid - 1] + arr[mid])/2;
  }
};