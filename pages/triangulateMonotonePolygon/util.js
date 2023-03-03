
function doNextEvent() {
    if (state == State.RUNNING) {
        addNextPointUpperHull();
    }
}

function populateUpperAndLowerChain() {
    upperChain = new Set();
    lowerChain = new Set();
    var i = 0;
    for (; i < points.length; i++) {
        if (points[i] == endVertex) {
            break;
        }
        upperChain.push(points[i]);
    }
    for (; i < points.length; i++) {
        lowerChain.push(points[i]);
    }
}

function populateStartAndEndVertex() {
    startVertex = points[0];
    endVertex = points[points.length - 1];
}

function doNextStep() {
    var pointAtChain = upperChain.has(points[pointsAt]); // true if in upper chain, false if in lower chain
    var pointAtStackTopChain = upperChain.has(stack[stack.length - 1]); // true if in upper chain, false if in lower chain

    if (pointAtChain != pointAtStackTopChain) {

    }
}
