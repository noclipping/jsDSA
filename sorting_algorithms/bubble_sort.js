function swap(arr,idx1,idx2){
  let temp = arr[idx2];
    arr[idx2]=arr[idx1]
    arr[idx1] = temp;
}
function bubbleSort(arr){
  for(let i = arr.length; i>0; i--){
    for(let j = 0; j <i-1; j++){
      if(arr[j]>arr[j+1]){
        swap(arr, j, j+1)
      }
    }
  }
  return arr
}
console.log(bubbleSort([5,2,1,4,9,3,9,2,1]))