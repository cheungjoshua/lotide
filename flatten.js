function flatten(arr) {
  let result = [];
  for (const ii in arr) {
    if (Array.isArray(arr[ii])) {
      let sub = flatten(arr[ii]);
      result = result.concat(sub);
    } else {
      result.push(arr[ii]);
    }
  }

  return result;
}
console.log(flatten([1, 2, [3, 4], 5, [6]]));

module.exports = { flatten };
