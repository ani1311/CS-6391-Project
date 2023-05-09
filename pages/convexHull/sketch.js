const CANVAS_WIDTH = 800;
const CANVAS_HEIGHT = 800;
const sketch_holder = 'sketch-holder';

var points;
var startPoint, endPoint;

var upperHullPoints, lowerHullPoints;

var i;
var N = 100;

const State = {
    WAITING: -1,
    UPPER_HULL: 0,
    LOWER_HULL: 1,
    DONE: 2
}

var state = State.WAITING;

function setup() {
    canvas = createCanvas(CANVAS_WIDTH, CANVAS_HEIGHT);
    canvas.parent(sketch_holder);
    document.getElementById(sketch_holder).style.width = str(CANVAS_WIDTH) + 'px';
    document.getElementById(sketch_holder).style.height = str(CANVAS_HEIGHT) + 'px';
    background(0, 0, 0);
    points = new Points(N, CANVAS_WIDTH * 0.2, CANVAS_WIDTH * 0.8, CANVAS_HEIGHT * 0.2, CANVAS_HEIGHT * 0.8);
    points.sortByX();

    startPoint = points.points[0];
    endPoint = points.points[points.points.length - 1];
    startPoint.color = [0, 0, 255];
    endPoint.color = [0, 0, 255];

    i = 2;

    upperHullPoints = [points.points[0], points.points[1]];
    lowerHullPoints = [points.points[0], points.points[1]];

}

function draw() {
    background(0, 0, 0);
    points.draw();
    drawLine(upperHullPoints);
    drawLine(lowerHullPoints)
}


function start() {
    N = document.getElementById("n").value;

    background(0, 0, 0);
    points = new Points(N, CANVAS_WIDTH * 0.2, CANVAS_WIDTH * 0.8, CANVAS_HEIGHT * 0.2, CANVAS_HEIGHT * 0.8);
    points.sortByX();

    startPoint = points.points[0];
    endPoint = points.points[points.points.length - 1];
    startPoint.color = [0, 0, 255];
    endPoint.color = [0, 0, 255];

    i = 2;

    upperHullPoints = [points.points[0], points.points[1]];
    lowerHullPoints = [points.points[0], points.points[1]];

    state = State.UPPER_HULL;
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
    doNextEvent();
}, 100);
