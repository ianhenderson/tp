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

// Given two strings, write a method to decide if one is a permutation of the other.
function isPermutation(str1, str2){

  if (typeof str1 !== 'string' || typeof str2 !== 'string'){
    throw 'Arguments must be strings';
  }

  function sort(str){
    return str.split('').sort().join('');
  }

  return sort(str1) === sort(str2);

}

function isPermutation2(str1, str2){

  if (typeof str1 !== 'string' || typeof str2 !== 'string'){
    throw 'Arguments must be strings';
  }

  if (str1.length !== str2.length) return false;

  function freqMap(str){
    var map = {};
    for (var i = 0, l = str.length; i < l; i++){
      var c = str[i];
      var count = map[c];
      map[c] = count ? count++ : 1 ;
    }
    return map;
  }

  function compareMaps(map1, map2){
    for (var k in map1){
      if (map1[k] !== map2[k]) return false;
    }
    return true;
  }

  return compareMaps( freqMap(str1) , freqMap(str2) );

}
