var randomSort = function(array){
  var sorted; 
  do {
    sorted = true;
    for (var i = 1; i < array.length; i++){
      if (array[i-1] >= array[i]) {
	sorted = false;
	break;
      }
    }
    if (sorted) return array;
    else {}
  } while (!sorted);
 
};

var selfPowers = function(n) {
  var total = 0;
  for (var i = 1; i < n; i++){
   total += Math.pow(i,i); 
  }
  total = total.toString();
  return total;
  // return total.slice(-10);
};

selfPowers(10);
selfPowers(100);
selfPowers(1000);

var permutations = function(string){
  var results = [];
  string = string.split('');
  for (var i = 0, len = string.length; i < len; i++) {
    var uppercaseLetter = string[i].toUpperCase();
    string.push(uppercaseLetter);
  }
  var subroutine = function(array, chunk){
    chunk = chunk || '';
    if (array.length === 0) {
      results.push(chunk);
      return;
    }
    for (var i = 0; i < array.length; i++) {
      var l = array[i];
      var newchunk = chunk + l;
      var subarr = array.slice(0,i).concat(array.slice(i+1));
      subroutine(subarr, newchunk);
    }
  };
  subroutine(string);
  return results;
};

var combinations = function(string){
  var results = [''];
  for (var i = string.length - 1; i >= 0; i--) {
    var l = string[i];
    for (var j = 0, len = results.length; j < len; j++) {
      var c = l + results[j];
      results.push(c);
    }
  }
  return results;
};

// 'aabbcdcdcdee' => 6 ('cdcdcd')

var longestTwoCharacterSubstring = function(string){
  var longest = '';
  var subroutine = function(s, index){
    index = index || 0;
    var letter1 = s[0];
    var letter2;
    for (var i = 1; i < s.length; i++) {
      if (s[i] !== letter1) {
        letter2 = s[i];
      }
    }
  };
  subroutine(string);
  return longest;
};
