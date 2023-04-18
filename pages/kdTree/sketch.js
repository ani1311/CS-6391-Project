const CANVAS_WIDTH = 800;
const CANVAS_HEIGHT = 800;
const sketch_holder = 'sketch-holder';

var points = [];
var kdTree;

var N = -1;

var drawNo = -1;

var vis_point_x = -1;
var vis_point_y = -1;

var whatToDraw = 1

function setup() {
    canvas = createCanvas(CANVAS_WIDTH, CANVAS_HEIGHT);
    canvas.parent(sketch_holder);
    document.getElementById(sketch_holder).style.width = str(CANVAS_WIDTH) + 'px';
    document.getElementById(sketch_holder).style.height = str(CANVAS_HEIGHT) + 'px';

}

function draw() {
    // do nothing till someone enters input
    if (N == -1) {
        return
    }
    if (whatToDraw == 0) {
        KdDraw();
    } else {
        PointsDraw();
    }
}

function start() {
    N = document.getElementById("N").value;

    points = randomPoints(N, 100, CANVAS_WIDTH - 100, 100, CANVAS_HEIGHT);

    KdSetup();
    PointsSetup();
}


setInterval(function () {
    // do nothing till someone enters input
    if (N == -1) {
        return;
    }
    drawNo += 1;
}, 2000);
