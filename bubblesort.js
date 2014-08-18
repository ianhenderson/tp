var bubblesort = function(array){
  var sorted = false;
  while (!sorted){
    sorted = true;
    for (var i = 0; i < array.length - 1; i++) {
      var currentElement = array[i];
      var nextElement = array[i+1];
      if (currentElement > nextElement) {
        var temp = nextElement;
        nextElement = currentElement;
        currentElement = temp;
        sorted = false;
      }
    };
    console.log(array);
  }
  return array;
};