// Implement an alogorithm to determine if a string has all unique characters.
// What if you cannot use additional data structures?
function uniq(str){
  if (typeof str !== 'string') throw 'Type must be string.';
  var frequencyMap = {};
  var isUnique = true;
  for (var i = 0, len = str.length; i < len; i++){
    var c = str[i];
    if (frequencyMap[c]) {
      isUnique = false;
      break;
    }
    frequencyMap[c] = true;
  }
  return isUnique;
}
