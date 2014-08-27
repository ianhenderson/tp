var combinations = function(string, base){
  // base = base || '';
  base || (base = '');
  var results = [''];

  for (var i = string.length - 1; i >= 0; i--) {

    var l = string[i];

    for (var j = 0, len = results.length; j < len; j++){
      var combo = l + results[j];
      results.push(combo);
    }
  }

  return results;
};
