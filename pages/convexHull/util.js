
function doNextEvent() {
    if (state == State.UPPER_HULL) {
        addNextPointUpperHull();
    } else if (state == State.LOWER_HULL) {
        addNextPointLowerHull();
    }
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
