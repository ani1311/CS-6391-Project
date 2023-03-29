const INFINITY_LEVEL = 1000;

class QuadTree {
    constructor(tl, br, points = []) {
        this.NE = null;
        this.NW = null;
        this.SE = null;
        this.SW = null;
        this.parent = null
        this.tl = tl;
        this.br = br;
        this.points = points;
        this.level = 0;

        if (this.points.length > 1) {
            this.createChildren();
        }

        if (this.isLeaf()) {
            this.level = INFINITY_LEVEL;
        }
    }

    createChildren() {
        if (this.points.length < 2) {
            return;
        }

        let NEPoints = [];
        let NWPoints = [];
        let SEPoints = [];
        let SWPoints = [];

        let center = {
            x: this.tl.x + ((this.br.x - this.tl.x) / 2),
            y: this.tl.y + ((this.br.y - this.tl.y) / 2)
        }

        for (var i = 0; i < this.points.length; i++) {
            if (this.points[i].x > center.x && this.points[i].y < center.y)
                NEPoints.push(this.points[i])
            else if (this.points[i].x < center.x && this.points[i].y < center.y)
                NWPoints.push(this.points[i])
            else if (this.points[i].x > center.x && this.points[i].y > center.y)
                SEPoints.push(this.points[i])
            else if (this.points[i].x < center.x && this.points[i].y > center.y)
                SWPoints.push(this.points[i])
        }

        this.createNEIfNull(NEPoints);
        this.createNWIfNull(NWPoints);
        this.createSEIfNull(SEPoints);
        this.createSWIfNull(SWPoints);
    }

    getRadius() {
        var side = this.br.x - this.tl.x;
        var rad = side / sqrt(2);
        if (this.isLeaf()) {
            return 0;
        } else {
            return rad;
        }
    }

    getDrawingRadius() {
        var side = this.br.x - this.tl.x;
        return side / sqrt(2);
    }


    getCenter() {
        return {
            x: this.tl.x + ((this.br.x - this.tl.x) / 2),
            y: this.tl.y + ((this.br.y - this.tl.y) / 2)
        }
    }

    createNEIfNull(points) {
        if (this.NE == null) {
            this.NE = new QuadTree(
                {
                    x: this.tl.x + ((this.br.x - this.tl.x) / 2),
                    y: this.tl.y
                },
                {
                    x: this.br.x,
                    y: this.tl.y + ((this.br.y - this.tl.y) / 2)
                }
                ,
                points
            );
            this.NE.parent = this;
            this.NE.level = this.level + 1;
        }
    }



    createNWIfNull(points) {
        if (this.NW == null) {
            this.NW = new QuadTree(
                {
                    x: this.tl.x,
                    y: this.tl.y
                },
                {
                    x: (this.tl.x + this.br.x) / 2,
                    y: (this.tl.y + this.br.y) / 2
                },
                points
            );
            this.NW.parent = this;
            this.NW.level = this.level + 1;
        }
    }

    createSEIfNull(points) {
        if (this.SE == null) {
            this.SE = new QuadTree(
                {
                    x: (this.tl.x + this.br.x) / 2,
                    y: (this.tl.y + this.br.y) / 2
                },
                {
                    x: this.br.x,
                    y: this.br.y
                },
                points
            );
            this.SE.parent = this;
            this.SE.level = this.level + 1;
        }
    }

    createSWIfNull(points) {
        if (this.SW == null) {
            this.SW = new QuadTree(
                {
                    x: this.tl.x,
                    y: (this.tl.y + this.br.y) / 2
                },
                {
                    x: (this.tl.x + this.br.x) / 2,
                    y: this.br.y
                },
                points
            );
            this.SW.parent = this;
            this.SW.level = this.level + 1;
        }
    }

    isLeaf() {
        return this.NE == null && this.NW == null && this.SE == null && this.SW == null;
    }

    draw() {
        this.drawOnlyThis();
        if (this.NE != null) {
            this.NE.draw();
        }
        if (this.NW != null) {
            this.NW.draw();
        }
        if (this.SE != null) {
            this.SE.draw();
        }
        if (this.SW != null) {
            this.SW.draw();
        }
    }

    drawOnlyThis() {
        stroke(255);
        strokeWeight(0.2);
        line(this.tl.x, this.tl.y, this.br.x, this.tl.y);
        line(this.tl.x, this.tl.y, this.tl.x, this.br.y);
        line(this.br.x, this.tl.y, this.br.x, this.br.y);
        line(this.tl.x, this.br.y, this.br.x, this.br.y);
    }

    drawCircleAroundNode() {
        if (this.isLeaf()) {
            return;
        }

        stroke(0, 0, 255);
        strokeWeight(0.2);
        fill(0, 0, 255, 1);
        var center = this.getCenter();
        var rad = this.getDrawingRadius();
        ellipse(center.x, center.y, rad * 2, rad * 2);
    }
}


function getDistBetweenNodes(n1, n2) {
    var c1 = n1.getCenter();
    var c2 = n2.getCenter();
    return dist(c1.x, c1.y, c2.x, c2.y) - 2 * max(n1.getRadius(), n2.getRadius());
}

function isSWellSeparated(n1, n2, s) {
    var r = max(n1.getRadius(), n2.getRadius());
    var d = getDistBetweenNodes(n1, n2);
    return d >= s * r;
}
