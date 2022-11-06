function maxSequence(nums) {
  if (nums.length < 1) return 0;

  let maxValue = nums[0];
  let accNum = nums[0];
  if (nums[0] < 0) {
    accNum = 0;
    maxValue = 0;
  }

  for (let i = 1; i < nums.length; i++) {
    // our accNumber only needs to be in existence if it happens to be larger
    let calc = Math.max(nums[i], accNum + nums[i]);
    if (calc > maxValue) maxValue = calc;

    accNum = calc;
  }
  return maxValue;
}
console.log(
  maxSequence([
    7, 4, 11, -11, 39, 36, 10, -6, 37, -10, -32, 44, -26, -34, 43, 43,
  ])
);
