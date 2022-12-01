function power(num, pow) {
  if (pow === 0) return 1;
  let baseNum = num;
  function powerO(num, pow) {
    pow--;
    if (pow === 0) {
      return num;
    }
    return powerO(num * baseNum, pow);
  }
  return powerO(num, pow);
}
console.log(power(2, 0));
