function findKey(object, callBack) {
  for (const key in object) {
    if (callBack(object[key])) {
      return key;
    }
  }
}

module.exports = findKey;
