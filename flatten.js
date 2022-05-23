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

module.exports = flatten;
