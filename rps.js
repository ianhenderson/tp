var rps = function(rounds, base){
  base = base || '';
  var moves = ['r', 'p', 's'];
  var combos = [];
  if (rounds === 1){
    for (var i = 0; i < moves.length; i++) {
      combos.push( base + moves[i] );
    }
  } else {
    for (var j = 0; j < moves.length; j++){
      combos = combos.concat( rps( rounds-1 , moves[j]) );
    }
  }
  return combos;
};