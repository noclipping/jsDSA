function maxSubarraySum(arr, num) {
  if (arr.length < num) return null;
  let maxSum = 0;
  let curr = 0;
  for (let i = 0; i < num; i++) {
    maxSum += arr[i];
  }
  curr = maxSum;
  for (let i = 0; i < arr.length; i++) {
    curr = curr - arr[i] + arr[i + num];
    if (!curr) return maxSum;
    maxSum = Math.max(curr, maxSum);
  }
  return maxSum;
}

console.log(
  maxSubarraySum([100, 200, 300, 400], 2), // 700
  maxSubarraySum([1, 4, 2, 10, 23, 3, 1, 0, 20], 4), // 39
  maxSubarraySum([-3, 4, 0, -2, 6, -1], 2), // 5
  maxSubarraySum([3, -2, 7, -4, 1, -1, 4, -2, 1], 2), // 5
  maxSubarraySum([2, 3], 3)
); // null
