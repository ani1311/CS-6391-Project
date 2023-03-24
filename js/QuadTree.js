





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

        if (this.points.length > 1) {
            this.createChildren();
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
        }
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
}
