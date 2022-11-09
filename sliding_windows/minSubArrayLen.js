function minSubArrayLen(arr, n) {
  let max = arr[0];
  let curr = arr[0];
  let longest = 0;
  let maxLongest = 0;
  for (let i = 1; i < arr.length; i++) {
    // check to see if our current window is greater than or equal to N,
    //curr+arr[i] = current window
    console.log(`arr[i]: ${arr[i]}  | curr:  ${curr}`);
    longest += 1;
    // if our current window is greater than the expected number, reset our length after applying our max length.
    console.log(longest, "longest");

    if (curr + arr[i] > n) {
      console.log("trig?");
      maxLongest = longest;
      longest = 0;
    }
    curr = curr + arr[i];
  }
  return longest;
}
console.log(minSubArrayLen([1, 2, 3, 4, 0, 90]), 89);
