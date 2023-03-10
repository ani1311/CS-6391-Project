
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


class KDTree {
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

        if (this.distFromRoot % 2 == 0) {
            if (val.x < this.val.x) {
                if (this.left == null) {
                    this.left = new KDTree(val);
                    this.left.parent = this;
                    this.left.distFromRoot = this.distFromRoot + 1;
                    this.left.levelIndex = this.levelIndex * 2;
                } else {
                    this.left.insert(val);
                }
            } else {
                if (this.right == null) {
                    this.right = new KDTree(val);
                    this.right.parent = this;
                    this.right.distFromRoot = this.distFromRoot + 1;
                    this.right.levelIndex = this.levelIndex * 2 + 1;
                } else {
                    this.right.insert(val);
                }
            }
        } else {
            if (val.y < this.val.y) {
                if (this.left == null) {
                    this.left = new KDTree(val);
                    this.left.parent = this;
                    this.left.distFromRoot = this.distFromRoot + 1;
                    this.left.levelIndex = this.levelIndex * 2;
                } else {
                    this.left.insert(val);
                }
            } else {
                if (this.right == null) {
                    this.right = new KDTree(val);
                    this.right.parent = this;
                    this.right.distFromRoot = this.distFromRoot + 1;
                    this.right.levelIndex = this.levelIndex * 2 + 1;
                } else {
                    this.right.insert(val);
                }
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

    drawSeperators(w_min, w_max, h_min, h_max) {
        push();
        if (this.val == null) {
            return;
        }
        if (this.distFromRoot % 2 == 0) {
            stroke(0, 255, 0);
            strokeWeight(5);
            line(this.val.x, h_min, this.val.x, h_max);
            if (this.left != null) {
                this.left.drawSeperators(w_min, this.val.x, h_min, h_max);
            }
            if (this.right != null) {
                this.right.drawSeperators(this.val.x, w_max, h_min, h_max);
            }
        } else {
            stroke(0, 0, 255);
            strokeWeight(5);
            line(w_min, this.val.y, w_max, this.val.y)
            if (this.left != null) {
                this.left.drawSeperators(w_min, w_max, h_min, this.val.y);
            }
            if (this.right != null) {
                this.right.drawSeperators(w_min, w_max, this.val.y, h_max);
            }
        }

        pop();
    }

    drawPathToPoint(x, y, col) {
        push();
        if (this.val == null) {
            return;
        }
        var thisX = this.getX();
        var thisY = this.getY();
        stroke(col);
        strokeWeight(2);
        if (this.distFromRoot % 2 == 0) {
            if (x < this.val.x) {
                if (this.left != null) {

                    line(thisX, thisY, this.left.getX(), this.left.getY());
                    this.left.drawPathToPoint(x, y, col);
                }
            } else {
                if (this.right != null) {
                    line(thisX, thisY, this.right.getX(), this.right.getY());
                    this.right.drawPathToPoint(x, y, col);
                }
            }
        } else {
            if (y < this.val.y) {
                if (this.left != null) {
                    line(thisX, thisY, this.left.getX(), this.left.getY());
                    this.left.drawPathToPoint(x, y, col);
                }
            } else {
                if (this.right != null) {
                    line(thisX, thisY, this.right.getX(), this.right.getY());
                    this.right.drawPathToPoint(x, y, col);
                }
            }
        }
        pop();
    }
}
