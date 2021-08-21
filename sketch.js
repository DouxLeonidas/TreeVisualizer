let bst, type;
let margin, sizeNode, lenline;
var w, h, minh;

function setup() {
  w = window.innerWidth;
  minh = 1080;
  h = minh;
  margin = 30;
  sizeNode = 50;
  lenline = 50;
  createCanvas(w, h);
  setType("RBT");
  clearBST();
  addExample();
}

function draw() {
  resizeCanvas(w,h);
  background(14,44,87);
  drawBST(bst.root, margin, margin, w-margin, 1);
}

function insertNode(val) {
  bst.insert(val);
}

function drawBST(root, x, y, width, level) {
  if(root !== null) {
    h = Math.max(minh,y+margin);
    if(bst instanceof RedBlackTree) {
      if(root.color === RED) {
         fill("#BB2723");
      } else if(root.color === BLACK) {
         fill("#03000A");
      }
      stroke(200,200,200);
    } else {
      fill("#129267");
      stroke(190,163,54);
    }
    var mid = x + (width - x)/2;
    strokeWeight(2);
    if(root.left !== null) 
      line(mid,y,x + (mid - x)/2,y+50*level);
    if(root.right !== null) 
      line(mid,y,mid + (width - mid)/2,y+50*level);
    
    circle(mid,y,sizeNode);
    fill("#FFFFF");
    noStroke();
    textAlign(CENTER);
    textSize(15);
    text(root.data,mid,y+6);
    this.drawBST(root.left, x, y+50*level, mid, level+0.25);
    this.drawBST(root.right, mid, y+50*level, width, level+0.25);
  }
}

function setType(type) {
  this.type = type;
  if(!bst) return;
  currentBst = bst;
  clearBST();
  addExample();
}

function clearBST() {
  if(this.type === "BST")
    bst = new BinarySearchTree();
  else if(this.type === "RBT")
    bst = new RedBlackTree();
}

function addExample() {
  /*bst.insert(5);  bst.insert(4);  bst.insert(11);  bst.insert(50);
  bst.insert(22); bst.insert(33); bst.insert(14);  bst.insert(30);
  bst.insert(42); bst.insert(27); bst.insert(18);  bst.insert(3);
  bst.insert(2);  bst.insert(1);  bst.insert(6);   bst.insert(7);
  bst.insert(9);  bst.insert(45); bst.insert(100); bst.insert(46);
  bst.insert(19); bst.insert(41); bst.insert(39);  bst.insert(31);*/
  for(var i = 0; i < 10; i++) {
    bst.insert(random(1,100));
  }
}
