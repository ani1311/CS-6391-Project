function keyPressed() {
    if (keyCode === ENTER) {
        drawingWSPD = !drawingWSPD;
    }

    // press p to add point
    if (keyCode === 80) {
        var x = mouseX;
        var y = mouseY;
        points.push(new Point(x, y, rad = POINT_RADIUS));
        setupWSPD();
    }
}
