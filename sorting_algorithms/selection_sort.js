function swap(arr,idx1,idx2){
    let temp = arr[idx1];
    arr[idx1] = arr[idx2]
    arr[idx2] = temp;
}
function selectionSort(arr){
    for(let i = 0; i < arr.length; i++){
        for(let j = i+1; j <arr.length; j++){
            if(arr[i] > arr[j]){
                swap(arr, i, j)
            }
        }
    }
}
let arr = [1,9,4,2,5]
selectionSort(arr)
console.log(arr)
