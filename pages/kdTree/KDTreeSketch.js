

var kdTree;

function KdSetup() {
    background(0, 0, 0);

    kdTree = new KDTree(val = null);
    setGlobals(100, 100, CANVAS_WIDTH - 100, CANVAS_HEIGHT - 100, root = kdTree);

    for (var i = 0; i < points.length; i++) {
        kdTree.insert(points[i]);
    }
}

function KdDraw() {
    background(0, 0, 0);
    kdTree.draw();
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
