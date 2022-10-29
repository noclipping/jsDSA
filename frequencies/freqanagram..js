let isAnagram = function (word_one, word_two) {
  // create a freq map for each word using a for loop and an obj
  if (word_one.length !== word_two.length) return false;
  let dict_one = {};
  for (letter of word_one) {
    dict_one[letter] = (dict_one[letter] || 0) + 1;
  }
  let dict_two = {};
  for (letter of word_two) {
    dict_two[letter] = (dict_two[letter] || 0) + 1;
  }
  console.log(dict_one, dict_two);
  // loop thru one of them and check to see if the freq map matches the 2nd freq map
  for (const [key, val] in dict_one) {
    if (!dict_two[key] === val) {
      return false;
    }
  }
  return true;
};
console.log(isAnagram("ormp", "morp"));
