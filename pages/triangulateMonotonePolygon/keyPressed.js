function keyPressed() {
    if (keyCode === 68) {
        points.popPoint();
    }
    if (keyCode === 83) {
        points.sortByX();
        state = State.RUNNING;
        stack.push(points[0]);
        stack.push(points[1]);
    }
}

function mousePressed(event) {
    points.addPoint(mouseX, mouseY);
}
