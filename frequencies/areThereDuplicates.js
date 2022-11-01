function areThereDuplicates() {
  const argMap = {};
  for (let i = 0; i < arguments.length; i++) {
    argMap[arguments[i]] = (argMap[arguments[i]] || 0) + 1;
  }
  for (let [key, val] of Object.entries(argMap)) {
    if (val > 1) {
      return true;
    }
  }
  return false;
}
console.log(areThereDuplicates(1, 2, 3, 4));
console.log(areThereDuplicates(1, 1, 1, 3, 4));
