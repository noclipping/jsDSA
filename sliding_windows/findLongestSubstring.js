function findLongestSubstring(str) {
  let curr = "";
  let start = 0;
  let end = 0;
  let maxLen = -Infinity;
  while (start < str.length) {
    if (end < str.length && !curr.includes(str[end])) {
      curr += str[end];
      end++;

      maxLen = Math.max(maxLen, end - start);
    } else if (start < str.length) {
      start++;
      curr = curr.slice(1);
    } else {
      break;
    }
  }
  return maxLen === -Infinity ? 0 : maxLen;
}
console.log(
  findLongestSubstring(""), // 0,
  findLongestSubstring("rithmschool"), // 7,
  findLongestSubstring("thisisawesome"), // 6
  findLongestSubstring("thecatinthehat"), // 7
  findLongestSubstring("bbbbbb"), // 1
  findLongestSubstring("longestsubstring"), // 8
  findLongestSubstring("thisishowwedoit") // 6
);
