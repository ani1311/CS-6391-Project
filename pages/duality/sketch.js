const CANVAS_WIDTH = 800;
const CANVAS_HEIGHT = 800;
const sketch_holder = 'sketch-holder';

var points = [];

var whatToDraw = 1; // 0 = primary, 1 = dual

function standardTransform() {
    translate(CANVAS_WIDTH / 2, CANVAS_HEIGHT / 2);
    scale(1, -1);
}

function getMouseX() {
    return mouseX - CANVAS_WIDTH / 2;
}

function getMouseY() {
    return (mouseY - CANVAS_HEIGHT / 2) * -1;
}

function setup() {
    canvas = createCanvas(CANVAS_WIDTH, CANVAS_HEIGHT);
    canvas.parent(sketch_holder);
    document.getElementById(sketch_holder).style.width = str(CANVAS_WIDTH) + 'px';
    document.getElementById(sketch_holder).style.height = str(CANVAS_HEIGHT) + 'px';

    points.push(new Point(100, 150));
}

function draw() {
    background(0);
    if (whatToDraw == 0) {
        push();
        standardTransform();
        stroke(255);
        drawPoints(points);
        pop();
    } else {
        stroke(255, 0, 0);
        drawDual(points);
    }
}


setInterval(function () {
    //code goes here that will be run every 5 seconds.
    // standardTransform();
    // console.log(mouseX, mouseY);
}, 1000);
