
class Edge {
    constructor(source = null, target = null) {
        this.source = source;
        this.target = target;
    }

    draw(color = [0, 0, 255]) {
        if (this.source != null && this.target != null) {
            stroke(color[0], color[1], color[2]);
            strokeWeight(1);
            line(this.source.x, this.source.y, this.target.x, this.target.y);
        }
    }
}

function drawEdges(edges, color = [0, 0, 255]) {
    for (var i = 0; i < edges.length; i++) {
        edges[i].draw(color);
    }
}
