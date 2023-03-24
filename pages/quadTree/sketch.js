const CANVAS_WIDTH = 750;
const CANVAS_HEIGHT = 750;
const sketch_holder = 'sketch-holder';

var points = [];


function setup() {
    canvas = createCanvas(CANVAS_WIDTH, CANVAS_HEIGHT);
    canvas.parent(sketch_holder);
    document.getElementById(sketch_holder).style.width = str(CANVAS_WIDTH) + 'px';
    document.getElementById(sketch_holder).style.height = str(CANVAS_HEIGHT) + 'px';

    QuadTreeSetup();
}

function draw() {
    QuadTreeDraw();
}
