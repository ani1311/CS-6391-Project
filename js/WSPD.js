
function drawWSPD(n1, n2, s) {
    if (n1 == null || n2 == null) {
        return;
    } else if (n1.isLeaf() && n2.isLeaf() && n1 == n2) {
        return;
    } else if (n1.points.length == 0 || n2.points.length == 0) {
        return;
    } else if (isSWellSeparated(n1, n2, s)) {
        // draw
        n1.drawCircleAroundNode();
        n2.drawCircleAroundNode();
        drawLineBetweenNodes(n1, n2);
    } else {
        var u, v;
        if (n1.level > n2.level) {
            v = n1;
            u = n2;
        } else if (n1.isLeaf()) {
            u = n2;
            v = n1;
        } else if (n2.isLeaf()) {
            u = n1;
            v = n2;
        } else {
            u = n1;
            v = n2;
        }
        drawWSPD(u.NE, v, s);
        drawWSPD(u.NW, v, s);
        drawWSPD(u.SE, v, s);
        drawWSPD(u.SW, v, s);
    }
}

function drawLineBetweenNodes(n1, n2) {
    stroke(10, 10, 255);
    var c1, c2;
    if (n1.isLeaf()) {
        c1 = n1.points[0];
    } else {
        // c1 = getEdgePoint(n1, n2);
        c1 = n1.getCenter();
    }

    if (n2.isLeaf()) {
        c2 = n2.points[0];
    } else {
        c2 = n2.getCenter();
        // c2 = getEdgePoint(n2, n1);

    }
    line(c1.x, c1.y, c2.x, c2.y);
}

function getEdgePoint(node, otherNode) {
    var center = node.getCenter();
    var otherCenter = otherNode.getCenter();
    var direction = p5.Vector.sub(otherCenter, center);
    direction.normalize();
    direction.mult(node.getRadius());
    var edgePoint = p5.Vector.add(center, direction);
    return edgePoint;
}
