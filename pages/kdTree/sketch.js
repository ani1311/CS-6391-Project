const CANVAS_WIDTH = 800;
const CANVAS_HEIGHT = 800;
const sketch_holder = 'sketch-holder';


var tree;

function setup() {
    canvas = createCanvas(CANVAS_WIDTH, CANVAS_HEIGHT);
    canvas.parent(sketch_holder);
    document.getElementById(sketch_holder).style.width = str(CANVAS_WIDTH) + 'px';
    document.getElementById(sketch_holder).style.height = str(CANVAS_HEIGHT) + 'px';
    background(0, 0, 0);

    tree = new Tree(val = null);
    setGlobals(100, 100, CANVAS_WIDTH - 100, CANVAS_HEIGHT - 100, root = tree);

    for (var i = 0; i < 40; i++) {
        tree.insert(random(0, 100));
    }
    console.log(tree);
    tree.print();
}

function draw() {
    background(0, 0, 0);
    tree.draw();
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
