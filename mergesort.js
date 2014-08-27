var merge = function(leftArray, rightArray){
  var results = [];
  var lengthLeft = leftArray.length;
  var lengthRight = rightArray.length;
  var pointerLeft = 0;
  var pointerRight = 0;

  while (pointerLeft < lengthLeft && pointerRight < lengthRight){
    if (leftArray[pointerLeft] < rightArray[pointerRight]){
      results.push(leftArray[pointerLeft]);
      pointerLeft++;
    } else {
      results.push(rightArray[pointerRight]);
      pointerRight++;
    }
  }

  results = results.concat(leftArray.slice(pointerLeft));
  results = results.concat(rightArray.slice(pointerRight));

  return results;
};

var mergeSort = function(arr){
  if (arr.length < 2){
    return arr;
  }

  var midPoint = Math.floor(arr.length / 2);
  var leftSlice = arr.slice(0, midPoint);
  var rightSlice = arr.slice(midPoint);

  return merge(mergeSort(leftSlice), mergeSort(rightSlice));

};
