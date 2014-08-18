var Tree = function(value){
  this.value = value;
  this.children = [];
};

Tree.prototype.addChild = function(value){
  var child = new Tree(value);
  this.children.push(child);
};

Tree.prototype.DFS = function(value){
  if (this.value === value) return true;
  for (var i = 0; i < this.children.length; i++) {
    var child = this.children[i];
    if (child.DFS(value) === true) return true;
  }
  return false;
};

Tree.prototype.BFS = function(value){
  var node;
  var q = [];
  q.unshift(this);
  while(q.length > 0){
    node = q.pop();
    if (node.value === value) return true;
    q = q.concat(node.children);
  }
  return false;
};

// testing
var t = new Tree(1);
t.addChild(2);
t.addChild(3);
console.log(t.BFS(2));
console.log(t.BFS(3));
console.log(t.BFS(4));
