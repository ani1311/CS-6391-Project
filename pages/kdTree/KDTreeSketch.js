


function KdSetup() {
    background(0, 0, 0);

    kdTree = new KDTree(val = null);
    setGlobals(100, 100, CANVAS_WIDTH - 100, CANVAS_HEIGHT - 100, root = kdTree);

    kdTree.insert(points, 0);
}

function KdDraw() {
    background(0, 0, 0);
    kdTree.draw(drawNo);
    if (vis_point_x != -1 && vis_point_y != -1) {
        kdTree.drawPathToPoint(vis_point_x, vis_point_y, col = [0, 255, 0]);
    }
}


window.onresize = function () {
    var w = window.innerWidth;
    var h = window.innerHeight;
    resizeCanvas(w, h);
    width = w;
    height = h;
}

setInterval(function () {
    //code goes here that will be run every 5 seconds.
}, 100);
