function insertSort(a){
  let len = a.length;
  for(let i = 1; i < len; i++){
    if(a[i] < a[i -1]){
      let temp = a[i];
      let j = i - 1;
      for(j;j >= 0 && a[j] > temp; j--){
        a[j + 1] = a[j];
      }
      a[j + 1] = temp;
    }
  }
  return a;
}

//Test
let test = [2,8,4,6,7,9];
console.log(insertSort(test));