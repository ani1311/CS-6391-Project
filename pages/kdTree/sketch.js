const CANVAS_WIDTH = 800;
const CANVAS_HEIGHT = 800;
const sketch_holder = 'sketch-holder';

var points = [];

var whatToDraw = 1

function setup() {
    canvas = createCanvas(CANVAS_WIDTH, CANVAS_HEIGHT);
    canvas.parent(sketch_holder);
    document.getElementById(sketch_holder).style.width = str(CANVAS_WIDTH) + 'px';
    document.getElementById(sketch_holder).style.height = str(CANVAS_HEIGHT) + 'px';

    points = randomPoints(10, 100, CANVAS_WIDTH - 100, 100, CANVAS_HEIGHT);

    KdSetup();
    PointsSetup();
}

function draw() {
    if (whatToDraw == 0) {
        KdDraw();
    } else {
        PointsDraw();
    }
}
