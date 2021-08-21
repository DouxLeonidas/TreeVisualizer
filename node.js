class Node {
    constructor(data) {
        this.data = parseInt(data);
        this.left = null;
        this.right = null;
        this.parent = null;
    }
}

const RED = 1;
const BLACK = 0;

class NodeRBT extends Node {
    constructor(data) {
        super(data);
        this.color = RED;
    }
}