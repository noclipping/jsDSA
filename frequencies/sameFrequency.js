// Write a function called sameFrequency. Given two positive integers, find out if the two numbers have the same frequency of digits.

function sameFrequency(numOne, numTwo) {
  if (numOne.length !== numTwo.length) return false;
  numOne = numOne.toString();
  numTwo = numTwo.toString();
  const freqOne = {};
  const freqTwo = {};
  for (let num of numOne) {
    freqOne[num] = (freqOne[num] || 0) + 1;
  }
  for (let num of numTwo) {
    freqTwo[num] = (freqTwo[num] || 0) + 1;
  }
  for (const [key, val] of Object.entries(freqOne)) {
    if (freqTwo[key] !== val) {
      return false;
    }
  }
  return true;
  //   console.log(numOne, numTwo);
  //   console.log(freqOne, freqTwo);
}
console.log(sameFrequency(32121, 12324));
