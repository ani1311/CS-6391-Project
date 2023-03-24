
var root;

var points;
var drawers = [];
var nextDrawers = [];
var drawing = false;

function createQuadTree() {
    root = new QuadTree(
        tl = {
            x: 0,
            y: 0
        },
        br = {
            x: min(CANVAS_HEIGHT, CANVAS_WIDTH),
            y: min(CANVAS_HEIGHT, CANVAS_WIDTH),
        },
        points);
    root.createNEIfNull([])
    root.NE.createNEIfNull([])
}

function startDraw() {
    background(0, 0, 0);
    createQuadTree();
    drawing = true;
    drawers = [root];
    nextDrawers = []
}

function QuadTreeSetup() {
    background(0, 0, 0);
    points = randomPoints(1000, 0, CANVAS_WIDTH, 0, CANVAS_HEIGHT, rad = 2);

    createQuadTree();
}

function QuadTreeDraw() {
    // background(0, 0, 0);
    stroke(255, 255, 255);
    drawPoints(points);
}

function mousePressed() {
    var x = mouseX;
    var y = mouseY;
    points.push(new Point(x, y, rad = 2));
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
    if (drawing) {
        doNextEvent();
    }
}, 50);
