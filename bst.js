class BinarySearchTree {
    
    constructor() {
      this.root = null;
      this.max = Number.NEGATIVE_INFINITY;
    }
  
    insert(data) {
      var newNode = new Node(data);
      if(newNode.data > this.max)
        this.max = newNode.data;
      if(this.root === null)
        this.root = newNode;
      else
        this.insertNode(this.root, newNode);
    }
  
    insertNode(node, newNode) {
      if(newNode.data < node.data) {
        if(node.left === null) {
            node.left = newNode;
            newNode.parent = node;
        } else {
          this.insertNode(node.left, newNode); 
        }
      } else {
        if(node.right === null) {
            node.right = newNode;
            newNode.parent = node;
        } else {
          this.insertNode(node.right,newNode);
        }
      }
    }
  
    inorder(node) {
      if(node !== null) {
        this.inorder(node.left);
        console.log(node);
        this.inorder(node.right);
      }
    }
  
    rotateToLeft(x) {
      var y = x.right;
      x.right = y.left;
      if(y.left !== null) {
        y.left.parent = x;
      }
      y.parent = x.parent;
      if(x.parent === null) {
        this.root = y;
      } else if(x === x.parent.left) {
        x.parent.left = y;
      } else {
        x.parent.right = y;
      }
      y.left = x;
      x.parent = y;
    }
  
    rotateToRight(x) {
      var y = x.left;
      x.left = y.right;
      if(y.right !== null) {
        y.right.parent = x;
      }
      y.parent = x.parent;
      if(x.parent === null) {
        this.root = y;
      } else if(x === x.parent.right) {
        x.parent.right = y;
      } else {
        x.parent.left = y;
      }
      y.right = x;
      x.parent = y;
    }
  
}