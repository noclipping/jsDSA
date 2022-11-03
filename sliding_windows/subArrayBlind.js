function maxSubarraySum(arr, len) {
  if (arr.length < len) {
    return null;
  }
  let currSum = 0;
  // initial loop to get the sum of our first subarray
  for (let i = 0; i < len; i++) {
    currSum += arr[i];
  }
  console.log(currSum, "currsum");
  let highestSum = 0;
  // 2nd loop to subtract the first index and add the next index incoming
  for (let i = 0; i < arr.length; i++) {
    if (arr[i + len] === undefined) {
      break;
    }
    currSum = currSum - arr[i] + arr[i + len];
    console.log(
      `Subtracting index: ${arr[i]}  |  Adding index: ${arr[i + len]}`
    );
    // console.log("new sum " + newSum);
    highestSum = Math.max(currSum, highestSum);
    console.log(currSum + " currsum");
  }
  return highestSum;
}
console.log(maxSubarraySum([-3, 4, 0, -2, 6, -1], 2));
