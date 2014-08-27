// Radix sort has a time complexity of O(kn), where k is the number of digits in the longest integer 
var radixSort = function(array){

//======================Helper Functions=====================================


  // Get nth digit of num
  var getDigit = function(num, n){
    return Math.floor((num % Math.pow(10,n)) / (Math.pow(10,n-1)));
  };

  // Use properties of logarithms to find the length of an integer:
  // http://en.wikipedia.org/wiki/List_of_logarithmic_identities#Changing_the_base
  // http://mathworld.wolfram.com/NumberLength.html
  var nLength = function(n){
    return Math.ceil(Math.log(n) / Math.log(10));
  };

  // Get maximum integer length in an array
  var getMaxLength = function(array){
    var max = 0;

    for (var i = 0; i < array.length; i++) {
      var l = nLength(array[i]);
      max = (l > max) ? l : max;
    }

    return max;
  };


//======================Radix Sorting Algorithm==============================


  var maxDigits = getMaxLength(array);

  var buckets = [
  [], // 0's bucket
  [], // 1's bucket
  [], // 2's bucket
  [], // 3's bucket
  [], // 4's bucket
  [], // 5's bucket
  [], // 6's bucket
  [], // 7's bucket
  [], // 8's bucket
  []  // 9's bucket
  ];

  for (var place = 1; place <= maxDigits; place++){

    // Sort numbers into buckets based on place
    for (var i = 0, l = array.length; i < l; i++) {
      var d = getDigit(array[i], place);
      buckets[d].push(array[i]);
    }

    // Empty array
    array = [];

    // Dump once-sorted values from buckets back into array and reset each bucket
    for (var b = 0; b < 10; b++){
      array = array.concat(buckets[b]);
      buckets[b] = [];
    }
  }

  return array;

};