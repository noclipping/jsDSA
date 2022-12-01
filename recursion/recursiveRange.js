function recursiveRange(num) {
  let holder = 0;
  function a(num) {
    if (num === 0) return holder;
    holder += num;
    return a(num - 1);
  }
  return a(num);
}
console.log(recursiveRange(10));
