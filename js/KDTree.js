
var startX = 100;
var startY = 100;
var endX = 700;
var endY = 0;
var nodeSize = 10;
var root;
var maxDistanceFromRoot = 0;

function setGlobals(startx, starty, endx, endy, r) {
    startX = startx;
    startY = starty;
    endX = endx;
    endY = endy;
    root = r;
}

function updateGlobals() {
    maxDistanceFromRoot = root.getMaxDistFromRoot();
}


class Tree {
    constructor(val) {
        this.left = null;
        this.right = null;
        this.parent = null
        this.val = val;
        this.distFromRoot = 0;
        this.levelIndex = 0;
    }

    insert(val) {
        if (this.val == null) {
            this.val = val;
            return;
        }

        if (this.parent != null) {
            this.parent.distFromRoot + 1;
        }
        if (val < this.val) {
            if (this.left == null) {
                this.left = new Tree(val);
                this.left.parent = this;
                this.left.distFromRoot = this.distFromRoot + 1;
                this.left.levelIndex = this.levelIndex * 2;
            } else {
                this.left.insert(val);
            }
        } else {
            if (this.right == null) {
                this.right = new Tree(val);
                this.right.parent = this;
                this.right.distFromRoot = this.distFromRoot + 1;
                this.right.levelIndex = this.levelIndex * 2 + 1;
            } else {
                this.right.insert(val);
            }
        }

        updateGlobals();
    }

    getMaxDistFromRoot() {
        var max = this.distFromRoot;
        if (this.left != null) {
            var leftMax = this.left.getMaxDistFromRoot();
            if (leftMax > max) {
                max = leftMax;
            }
        }
        if (this.right != null) {
            var rightMax = this.right.getMaxDistFromRoot();
            if (rightMax > max) {
                max = rightMax;
            }
        }
        return max;
    }

    getX() {
        var maxIndexForLevel = Math.pow(2, this.distFromRoot);
        var sections = maxIndexForLevel + 1;
        var sectionSize = (endX - startX) / sections;
        return startX + sectionSize * (this.levelIndex + 1);
    }

    getY() {
        if (this.distFromRoot == 0) {
            return startY;
        }
        return startY + (this.distFromRoot * (endY - startY) / maxDistanceFromRoot);
    }

    print() {
        console.log(this.val, this.distFromRoot, this.levelIndex, this.getX(), this.getY());
        if (this.left != null) {
            this.left.print();
        }
        if (this.right != null) {
            this.right.print();
        }
    }


    draw() {
        if (this.val == null) {
            return;
        }
        var x = this.getX();
        var y = this.getY();
        stroke(255, 255, 255);
        // rect(x, y, nodeSize, nodeSize);
        strokeWeight(2);
        if (this.left != null) {
            var leftX = this.left.getX();
            var leftY = this.left.getY();
            line(x, y, leftX, leftY);
            this.left.draw();
        }
        if (this.right != null) {
            var rightX = this.right.getX();
            var rightY = this.right.getY();
            strokeWeight(2);
            stroke(255, 255, 255);
            line(x, y, rightX, rightY);
            this.right.draw();
        }
        noStroke();
        fill(255, 255, 255);
        ellipse(x, y, 10, 10);
    }
}
