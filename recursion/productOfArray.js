function productOfArray(arr) {
  let product = 1;
  function helper(product) {
    let nextEl = arr.pop();
    if (nextEl === undefined) return product;
    product *= nextEl;
    return helper(product);
  }
  return helper(1);
}
console.log(productOfArray([1, 2, 3]));
