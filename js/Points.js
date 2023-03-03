
class Points {
    constructor(n, min_w, max_w, min_h, max_h) {
        this.points = [];
        for (var i = 0; i < n; i++) {
            this.points.push(new Point(random(min_w, max_w), random(min_h, max_h)));
        }
    }

    addPoint(x, y) {
        this.points.push(new Point(x, y));
    }

    popPoint() {
        this.points.pop();
    }

    deleteAll() {
        this.points = [];
    }

    draw() {
        for (var i = 0; i < this.points.length; i++) {
            this.points[i].draw();
        }
    }

    drawLine() {
        drawLine(this.points);
    }

    drawPolygon() {
        drawLine(this.points);
        if (this.points.length > 0) {
            line(this.points[0].x, this.points[0].y, this.points[this.points.length - 1].x, this.points[this.points.length - 1].y);
        }
    }

    sortByX() {
        this.points.sort(function (a, b) {
            return a.x - b.x;
        });
    }
}

function drawLine(points, color = [0, 0, 255]) {
    stroke(color);
    for (var i = 0; i < points.length - 1; i++) {
        line(points[i].x, points[i].y, points[i + 1].x, points[i + 1].y);
    }
}
