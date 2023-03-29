
function drawLineBetweenAllPoints(points) {
    for (var i = 0; i < points.length; i++) {
        for (var j = i + 1; j < points.length; j++) {
            var x1 = points[i].x;
            var y1 = points[i].y;
            var x2 = points[j].x;
            var y2 = points[j].y;

            push();
            stroke(0, 255, 0);
            strokeWeight(0.1);
            line(x1, y1, x2, y2)
            pop();
        }
    }
}

function setupWSPD() {
    quadTree = new QuadTree(
        {
            x: 0,
            y: 0,
        },
        {
            x: CANVAS_WIDTH,
            y: CANVAS_HEIGHT,
        }, points)
}

function drawWSPD() {

}
