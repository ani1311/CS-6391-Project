
class Point {
    constructor(x, y, rad = 10, color = [255, 0, 0]) {
        this.x = x;
        this.y = y;
        this.rad = rad;
        this.color = color;
    }

    draw() {
        fill(this.color);
        ellipse(this.x, this.y, this.rad, this.rad);
    }
}
