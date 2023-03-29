const CANVAS_WIDTH = 800;
const CANVAS_HEIGHT = 800;
const sketch_holder = 'sketch-holder';
const POINT_RADIUS = 4;

var points = [];

var drawingWSPD = false;
var quadTree;
var s = 2.0;

function setup() {
    canvas = createCanvas(CANVAS_WIDTH, CANVAS_HEIGHT);
    canvas.parent(sketch_holder);
    document.getElementById(sketch_holder).style.width = str(CANVAS_WIDTH) + 'px';
    document.getElementById(sketch_holder).style.height = str(CANVAS_HEIGHT) + 'px';

    points = randomPoints(4, 0, CANVAS_WIDTH, 0, CANVAS_HEIGHT, POINT_RADIUS);
    setupWSPD();
}

function draw() {
    background(255);
    drawPoints(points);
    drawLineBetweenAllPoints(points);

    if (drawingWSPD) {
        drawWSPD(quadTree, quadTree, s);
    }
}


setInterval(function () {
}, 1000);
