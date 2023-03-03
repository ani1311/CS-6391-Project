const CANVAS_WIDTH = 800;
const CANVAS_HEIGHT = 800;
const sketch_holder = 'sketch-holder';


const State = {
    GETTING_INPUT: 0,
    DRAWING: 1,
}

var state = State.GETTING_INPUT;
var points;

var events;
var sweepLine;
var beachLine;
var sweepLineY;

function setup() {
    canvas = createCanvas(CANVAS_WIDTH, CANVAS_HEIGHT);
    canvas.parent(sketch_holder);
    document.getElementById(sketch_holder).style.width = str(CANVAS_WIDTH) + 'px';
    document.getElementById(sketch_holder).style.height = str(CANVAS_HEIGHT) + 'px';
    background(0, 0, 0);

    points = new Points(0, CANVAS_WIDTH * 0.2, CANVAS_WIDTH * 0.8, CANVAS_HEIGHT * 0.2, CANVAS_HEIGHT * 0.8);
    beachLine = [];
}

function draw() {
    background(0, 0, 0);
    points.draw();
    drawSweepLine();
    drawBeachLine();
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
    if (state == State.DRAWING) {
        updateSweepLineAndDoNextEventMaybe();
    }
}, 100);
