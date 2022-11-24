function isSubsequence(substr, sequence) {
  let pointerOne = 0;
  let pointerTwo = 0;
  while (substr[pointerOne] != undefined && pointerTwo < sequence.length) {
    if (substr[pointerOne] == sequence[pointerTwo]) {
      pointerOne++;
      if (pointerOne == substr.length) {
        return true;
      }
      pointerTwo++;
      continue;
    }
    pointerTwo++;
  }
  return false;
}

console.log(isSubsequence("hello", "hello world")); // true ✅
console.log(isSubsequence("sing", "sting")); // true ✅
console.log(isSubsequence("abc", "abracadabra")); // true ✅
console.log(isSubsequence("abc", "acb")); // false (order matters) ❌
