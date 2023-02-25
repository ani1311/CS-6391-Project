
function doNextEvent() {
    if (state == State.UPPER_HULL) {
        addNextPointUpperHull();
    } else if (state == State.LOWER_HULL) {
        addNextPointLowerHull();
    }
}

function orient(p1, p2, p3) {
    var val = (p2.y - p1.y) * (p3.x - p2.x) - (p2.x - p1.x) * (p3.y - p2.y);
    if (val == 0) return 0;  // colinear
    return (val > 0) ? 1 : 2; // clock or counterclock wise
}

// Adds nextPoint to upperHull
function addNextPointUpperHull() {
    if (i == points.points.length) {
        state = State.LOWER_HULL;
        i = 2;
        return;
    }
    while (upperHullPoints.length >= 2 && orient(upperHullPoints[upperHullPoints.length - 2], upperHullPoints[upperHullPoints.length - 1], points.points[i]) != 2) {
        upperHullPoints.pop();
    }
    upperHullPoints.push(points.points[i]);
    i++;
}

// Adds nextPoint to lowerHull
function addNextPointLowerHull() {
    if (i == points.points.length) {
        state = State.DONE;
        i = 2;
        return;
    }
    while (lowerHullPoints.length >= 2 && orient(lowerHullPoints[lowerHullPoints.length - 2], lowerHullPoints[lowerHullPoints.length - 1], points.points[i]) != 1) {
        lowerHullPoints.pop();
    }
    lowerHullPoints.push(points.points[i]);
    i++;
}
