function binary_search(arr,num){
    let pOne = 0;
    let pTwo = arr.length-1;
    while(pOne < pTwo){
        let halfPoint = Math.round((pOne + pTwo)/2);
        if(arr[halfPoint] < num){
            pOne = halfPoint
        }
        else if(arr[halfPoint] > num){
            pTwo = halfPoint
        }
        else if(arr[halfPoint] === num){
            return halfPoint
        }
    }

        return -1
}
console.log(binary_search([1,2,3,4,5,6],3))