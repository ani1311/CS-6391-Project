
function PointsSetup() {
    background(0, 0, 0);

}

function PointsDraw() {
    background(0, 0, 0);
    // drawPoints(points);
    kdTree.drawSeperators(0, width, 0, height);

    // draw vis point
    push();
    stroke(255, 255, 0);
    strokeWeight(15);
    point(vis_point_x, vis_point_y);
    pop();
}
