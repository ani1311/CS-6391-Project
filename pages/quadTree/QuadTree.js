
var root;

var points;

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

function QuadTreeSetup() {
    background(0, 0, 0);
    points = randomPoints(10, 0, CANVAS_WIDTH, 0, CANVAS_HEIGHT, rad = 2);

    createQuadTree();
}

function QuadTreeDraw() {
    background(0, 0, 0);
    root.draw();
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
}, 100);
