var quicksort = function(array){
  if (array.length > 1) {
    var less = [];
    var equal = [];
    var greater = [];
    var pivot = array[Math.floor(array.length / 2)];
    for (var i = 0; i < array.length; i++){
      var item = array[i];
      if (item < pivot) less.push(item);
      if (item === pivot) equal.push(item);
      if (item > pivot) greater.push(item);
    }
    less = quicksort(less);
    greater = quicksort(greater);
    return less.concat(equal).concat(greater);
  } else {
    return array;
  }
};
