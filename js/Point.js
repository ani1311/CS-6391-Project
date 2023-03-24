
class Point {
    constructor(x, y, rad = 10, color = [255, 0, 0]) {
        this.x = x;
        this.y = y;
        this.rad = rad;
        this.color = color;
    }

    draw() {
        fill(this.color);
        ellipse(this.x, this.y, this.rad, this.rad);
    }
}

// 1 for clockwise, 2 for counterclockwise, 0 for colinear
function orient(p1, p2, p3) {
    var val = (p2.y - p1.y) * (p3.x - p2.x) - (p2.x - p1.x) * (p3.y - p2.y);
    if (val == 0) return 0;  // colinear
    return (val > 0) ? 1 : 2; // clock or counterclock wise
}

function randomPoints(n, w_min = 0, w_max = width, h_min = 0, h_max = height, rad = 20) {
    var points = [];
    for (var i = 0; i < n; i++) {
        var x = random(w_min, w_max);
        var y = random(h_min, h_max);
        points.push(new Point(x, y, rad));
    }
    return points;
}

function drawPoints(points) {
    for (var i = 0; i < points.length; i++) {
        points[i].draw();
    }
}
