var permutations = function(string, base){
  base = base || '';
  var results = [];
  if (string.length === 0){
    results.push(base);
  } else {
    for (var i = 0; i < string.length; i++) {
      var newbase = base + string[i];
      var substring = string.slice(0,i) + string.slice(i+1);
      results = results.concat( permutations(substring, newbase) );
    }
  }
  return results;
};
