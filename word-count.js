function words(string) {
  var occuence = Object.create(null);
  var strToArr = string.trim().split(/[\s]+/);

  for (var i = 0; i < strToArr.length; i++) {
    if (strToArr[i] in occuence) {
      occuence[strToArr[i]] ++;
    } else {
      occuence[strToArr[i]] = 1;
    }
  }
  return occuence;
}

module.exports = words;