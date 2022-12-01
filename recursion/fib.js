function fibonnaci(num) {
  let counter = num - 2;
  let prevVal = 1;
  function helper(newNum, prevVal) {
    let newSum = newNum + prevVal;
    prevVal = newNum;
    console.log(newSum);
    counter--;

    if (counter === 0) return newSum;
    return helper(newSum, prevVal);
  }
  return helper(1, 1);
}
console.log(fibonnaci(28));
