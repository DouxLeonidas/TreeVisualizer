class RedBlackTree extends BinarySearchTree {
    constructor() {
      super();
    }
  
    insert(data) {
      var newNode = new NodeRBT(data);
      if(newNode.data > this.max)
        this.max = newNode.data;
      if(this.root === null) {
        console.log("Case 0: Insert the root");
        newNode.color = BLACK;
        this.root = newNode;
      } else {
        super.insertNode(this.root, newNode);
        this.fixup(newNode);
      }
    }
  
    fixup(z) {
      while(z.parent && z.parent.color === RED) {
        if(z.parent === z.parent.parent.right) {
          var y = z.parent.parent.left;
          if(y && y.color === RED) { 
            console.log("Case 1: Uncle is Red");
            z.parent.color = BLACK;
            y.color = BLACK;
            z.parent.parent.color = RED;
            z = z.parent.parent;
          } else {
            if(z === z.parent.left) {
              console.log("Case 2: Uncle is black, triangle");
              z = z.parent;
              this.rotateToRight(z);
            }
            console.log("Case 3: Uncle is black, line");
            z.parent.color = BLACK;
            z.parent.parent.color = RED;
            this.rotateToLeft(z.parent.parent);
          }
        } else {
          var y = z.parent.parent.right;
          if(y && y.color === RED) { 
            console.log("Case 1: Uncle is Red");
            z.parent.color = BLACK;
            y.color = BLACK;
            z.parent.parent.color = RED;
            z = z.parent.parent;
          } else {
            if(z === z.parent.right) {
              console.log("Case 2: Uncle is black, triangle");
              z = z.parent;
              this.rotateToLeft(z);
            }
            console.log("Case 3: Uncle is black, line");
            z.parent.color = BLACK;
            z.parent.parent.color = RED;
            this.rotateToRight(z.parent.parent);
          }
        }
        if(z === this.root) break;
      }
      this.root.color = BLACK;
    }
}