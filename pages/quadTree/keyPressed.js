function keyPressed() {
    if (keyCode === ENTER) {
        createQuadTree();
    }

    // press i to add point
    if (keyCode === 73) {
        var x = mouseX;
        var y = mouseY;
        points.push(new Point(x, y));
    }
}
