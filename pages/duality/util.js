
function drawDualLine(point) {
    var x_intercept = point.y;
    var slope = radians(point.x);


    var x1 = -CANVAS_WIDTH / 2;
    var y1 = slope * x1 + x_intercept;
    var x2 = CANVAS_WIDTH / 2;
    var y2 = slope * x2 + x_intercept;

    push();
    standardTransform();
    stroke(0, 0, 255);
    strokeWeight(2);
    fill(0, 0, 255);
    line(x1, y1, x2, y2);
    pop();
}

function drawDual(points) {
    for (var i = 0; i < points.length; i++) {
        drawDualLine(points[i]);
    }
}
