function bubbleSort(arr){
  let len = arr.length;
  for(let i = 0; i < len; i++){
    for(let j = 0; j < len; j++){
      if(arr[i] < arr[j]){
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
  }
  return arr;
}

let test = [2,8,4,6,7,9];
console.log(bubbleSort(test));