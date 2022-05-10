const findKeyByValue = function (items, value) {
  for (const key in items) {
    if (items[key] === value) {
      return key;
    }
  }
};

module.exports = findKeyByValue;
