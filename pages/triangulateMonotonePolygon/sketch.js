const CANVAS_WIDTH = 800;
const CANVAS_HEIGHT = 800;
const sketch_holder = 'sketch-holder';

var points;

var upperChain;
var lowerChain;

var startVertex;
var endVertex;

var edges;
var stack;
var pointsAt;

const State = {
    RUNNING: 0,
    WAITING: 1,
    DONE: 2
}

var state = State.WAITING;

function setup() {
    canvas = createCanvas(CANVAS_WIDTH, CANVAS_HEIGHT);
    canvas.parent(sketch_holder);
    document.getElementById(sketch_holder).style.width = str(CANVAS_WIDTH) + 'px';
    document.getElementById(sketch_holder).style.height = str(CANVAS_HEIGHT) + 'px';
    background(0, 0, 0);
    points = new Points(0, CANVAS_WIDTH * 0.2, CANVAS_WIDTH * 0.8, CANVAS_HEIGHT * 0.2, CANVAS_HEIGHT * 0.8);
    edges = [];
    stack = [];
    i = 2;
}

function draw() {
    background(0, 0, 0);
    points.draw();
    points.drawPolygon();
    drawEdges(edges);
}


window.onresize = function () {
    var w = window.innerWidth;
    var h = window.innerHeight;
    resizeCanvas(w, h);
    width = w;
    height = h;
}

setInterval(function () {
    if (state == State.RUNNING) {
    }
}, 100);
