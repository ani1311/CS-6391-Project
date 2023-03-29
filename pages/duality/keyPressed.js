function keyPressed() {
    if (keyCode === ENTER) {
        whatToDraw = (whatToDraw + 1) % 2;
    }

    // press p to add point
    if (keyCode === 80) {
        push();
        standardTransform();
        var x = getMouseX();
        var y = getMouseY();
        pop();
        points.push(new Point(x, y));
    }
}
