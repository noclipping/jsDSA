function isSubsequence(strOne, strTwo) {
  let pointerOne = 0;
  let pointerTwo = 0;
  let ph = "";
  while (pointerOne < strOne.length) {
    if (strOne[pointerOne] == strTwo[pointerTwo]) {
      ph += strOne[pointerOne];
      pointerOne++;

      if (ph == strOne) {
        return true;
      }
    }
    pointerTwo++;
    if (pointerTwo >= strTwo.length) {
      return false;
    }
  }
}
console.log(isSubsequence("abc", "rrrralllboool;ksl;dfkl;sdccccf"));
