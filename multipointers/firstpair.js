console.log("====================");
function sumZero(arr) {
  // create a for loop that traverses the array in both directions
  let right = arr.length - 1;
  for (let left = 0; left < arr.length; left++) {
    let sum = arr[right] + arr[left];
    if (right < left) {
      break;
    } // we have crossed over the threshold of available pairs as our right pointer has exceeded our left pointer's position on the "negative x axis" i.e. it has gone beyond the left pointer.
    if (sum === 0) {
      return [arr[right], arr[left]];
    }
    if (sum > 0) {
      right--;
      left--; // we decrement left because on each loop iteration it will increment left, so as to prevent it from moving forward.
    }
  }
}
console.log(sumZero([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 2, -7]));
