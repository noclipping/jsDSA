function averagePair(arr, num) {
  let start = 0;
  let end = arr.length - 1;
  while (start < end) {
    // once the pointers collide, stop loop
    let avg = (arr[start] + arr[end]) / 2; // simply getting the average of current pointer locations
    if (avg === num)
      return true; // if that average happends to equal what we expect, return true
    else if (avg < num)
      start++; // if our average happens to be smaller than num, move our starting pointer forward
    else end--; // otherwise, it's LARGER, and therefore we must move the number making our avg big (the end pointer) decrease an index.
  }
  return false; // if our avg === num never got triggered, that means it doesn't exist as the pointers collided. gg no re.
}
