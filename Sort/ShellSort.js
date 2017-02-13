function shellSort(arr){
  let len = arr.length;
  for(let gap = len/2;gap > 0; gap /= 2){
    for(let j = gap; j < len; j++){
      if(arr[j] < arr[j - gap]){
        let temp = arr[j];
        let k = j - gap;
        while(k > 0 && arr[k] > temp){
          arr[k + gap] = arr[k];
          k -= gap;
        }
        arr[k + gap] = temp;
      }
    }
  }
  return arr;
}

//Test
let test = [2,8,4,6,7,9];
console.log(shellSort(test));