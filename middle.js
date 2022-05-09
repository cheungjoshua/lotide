const middle = function (array) {
  if (array.length < 3) {
    return [];
  }
  let mid = parseInt(array.length / 2);
  if (array.length % 2 !== 0) {
    return [array[mid]];
  } else {
    return [array[mid - 1], array[mid]];
  }
};

module.exports = middle;
