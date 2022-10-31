function maxSubarraySum(arr, num) {
  let maxSum = 0;
  let tempSum = 0;
  if (arr.length < num) return null;
  for (let i = 0; i < num; i++) {
    // get the first window total
    maxSum += arr[i];
  }
  tempSum = maxSum;
  for (let i = 0; i < arr.length; i++) {
    /*
         This upcoming line is tricky. We are taking our temporary subarray window sum and subtracting the number from the start (of the subarray),
         and adding the one AFTER it (the subarray). Thus creating the next iteration of our subarray window.
    */
    tempSum = tempSum - arr[i - num] + arr[i];
    maxSum = Math.max(maxSum, tempSum); // Compare and find the larger of the prev and current window (subarray)
  }
  return maxSum;
}
