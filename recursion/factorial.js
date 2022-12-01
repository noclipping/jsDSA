//factorial(1) // 1
// factorial(2) // 2
// factorial(4) // 24
// factorial(7) // 5040
function factorial(num) {
  if (num === 0) return 1;
  let placeHolderNum = num - 1;
  function factorialInner() {
    if (placeHolderNum === 0) return num;
    num *= placeHolderNum;
    placeHolderNum--;
    return factorialInner();
  }
  return factorialInner();
}
console.log(factorial(0));
