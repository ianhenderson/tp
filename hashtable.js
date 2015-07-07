function HashTable(){
  this.storage = [];
}

HashTable.prototype = (function(){
  /////////////////
  // Private API //
  /////////////////

  function hash(key){}

  function resize(){}

  /**
   * Helper fn to filter bucket in hash table for a certain key.
   * @param  {hkey} key    Hashed key
   * @return {boolean}     Whether hkey is in ith item of bucket
   */
  function bucketContainsKey(key){
    return function(obj){
      return obj[0] === key;
    };
  }

  ////////////////
  // Public API //
  ////////////////
  return api = {
    set: function(key, value){
      var hkey = hash(key);
      var buckets = this.storage[hkey];
      buckets = Array.isArray(buckets) ?  buckets || [];
      for (var i = 0, len = buckets.length; i < len; i++){
        var bucket = buckets[i];
        var bkey = bucket[0];
        var bval = bucket[1];
        if (bkey === key) bucket = [key, value];
        return 'Update';
      }

      buckets.push( [key, value] );
      return 'Insert';

    },
    get: function(key){
      var hkey = hash(key);
      var buckets = this.storage[hkey];
      return bucket;
    },
    remove: function(){},
  };

}());
