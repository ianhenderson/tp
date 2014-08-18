  // var insertionsort = function(array){

  //   // helper function to insert value into sorted array
  //   var insert = function(value, sortedarray){
  //     sortedarray = sortedarray || [];
  //     if (sortedarray.length === 0) return [value];

  //     for (var i = sortedarray.length - 1; i >= 0; i--) {
  //       var element = sortedarray[i];
  //       if (element < value) {
  //         sortedarray.splice(i+1,0,value);
  //         return  sortedarray;
  //       }
  //     }
  //     sortedarray.splice(0,0,value);
  //     return sortedarray;
  //   };
  
  //   var sortedarray = [];
  //   for (var i = 0; i < array.length; i++) {
  //     var currentElement = array[i];
  //     sortedarray = insert(currentElement, sortedarray);
  //   }

  //   return sortedarray;
  // };

  var insertionsort = function(array){
    var results = [];
    for (var i = 0; i < array.length; i++) {
      results = insertIntoSortedArray(results, array[i]);
    }
    return results;
  };

  var insertIntoSortedArray = function(arr, val){
    if (arr.length === 0) {
      return [val];
    }
    for (var i = 0; i < arr.length; i++){
      if (arr[i] < val) {
        arr.splice(i+1, val);
        return arr;
      }
    }
  };
