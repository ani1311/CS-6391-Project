function keyPressed() {
    if (keyCode === ENTER) {
        createQuadTree();
    }

    // press s to start drawing
    if (keyCode === 83) {
        if (!drawing) {
            startDraw();
        } else {
            drawing = false;
        }
    }

    // press n to do next event
    if (keyCode === 78) {
        doNextEvent();
    }

    // press i to add point
    if (keyCode === 73) {
        var x = mouseX;
        var y = mouseY;
        points.push(new Point(x, y));
    }
}
