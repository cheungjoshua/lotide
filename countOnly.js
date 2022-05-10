const countOnly = function (allItems, itemsToCount) {
  let result = {};
  for (const item in itemsToCount) {
    for (let i = 0; i < allItems.length; i++) {
      if (item === allItems[i] && itemsToCount[item] === true) {
        if (!result[item]) {
          result[item] = 0;
        }
        result[item] += 1;
      }
    }
  }
  return result;
};

module.exports = countOnly;
