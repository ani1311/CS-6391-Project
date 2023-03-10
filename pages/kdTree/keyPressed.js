function keyPressed() {
    if (keyCode === ENTER) {
        doNextEvent();
    }
    // press n to switch between drawing the tree and the points
    if (keyCode === 78) {
        whatToDraw += 1;
        whatToDraw %= 2;
    }

    if (whatToDraw == 1) {
        // press i to add point
        if (keyCode === 73) {
            var x = mouseX;
            var y = mouseY;
            var p = new Point(x, y);
            points.push(p);
            kdTree.insert(p);
        }
        // press v to visualize point search
        if (keyCode === 86) {
            console.log("V pressed");
            vis_point_x = mouseX;
            vis_point_y = mouseY;
        }
    }
}
