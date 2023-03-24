
function doNextEvent() {
    if (drawing) {
        if (drawers.length > 0) {
            var drawer = drawers.pop();
            if (drawer.NE) {
                drawer.NE.drawOnlyThis();
                nextDrawers.push(drawer.NE);
            }
            if (drawer.NW) {
                drawer.NW.drawOnlyThis();
                nextDrawers.push(drawer.NW);
            }
            if (drawer.SE) {
                drawer.SE.drawOnlyThis();
                nextDrawers.push(drawer.SE);
            }
            if (drawer.SW) {
                drawer.SW.drawOnlyThis();
                nextDrawers.push(drawer.SW);
            }
        } else {
            if (nextDrawers.length == 0 && drawers.length == 0) {
                drawing = false;
                alert("Done drawing");
            } else {
                drawers = nextDrawers;
                nextDrawers = [];
            }
        }
    }
}
