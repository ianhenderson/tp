var mergesort = function(array){
  // helper function to merge two sorted arrays
  var merge = function(arrayA,arrayB){
    var arrayC = [];
    while (arrayA.length || arrayB.length){
      if (arrayA.length === 0) return arrayC.concat(arrayB);
      if (arrayB.length === 0) return arrayC.concat(arrayA);
      if (arrayA[0] < arrayB[0]) arrayC.push(arrayA.shift());
      else arrayC.push(arrayB.shift());
    }
  };
  var split = function(arr){
    if (arr.length === 1) return arr;
    var index = Math.floor(arr.length / 2);
    return [arr.slice(0,index),arr.slice(index)];
  };

  var subroutine = function(arr){
    // if (arr.length === 2){
    //   var a = arr[0];
    //   var b = arr[1];
    //   return merge([a],[b]);
    // } else {
      var tuple = split(arr);
      return merge(subroutine(tuple[0]), subroutine(tuple[1]));
    // }
  };
  return subroutine(array);
  // // initialize array
  // var mergedArray = [];
  // var temp = [];
  // for (var i = 0; i < array.length; i++) {
  //   var miniArray = [].push(array[i]);
  //   mergedArray.push(miniArray);
  // };
  // // do the merging
  // while (mergedArray.length > 1){
  //   for (var i = 0; i < mergedArray.length; i+=2) {

  //   };
  // }

};