
const EventTypes = {
    SITE: 0,
    CIRCLE: 1,
}

class Event {
    constructor(point, type) {
        this.point = point;
        this.type = type;
    }
}

function sortEvents(events) {
    events.sort(function (a, b) {
        return a.point.y - b.point.y;
    });
}

function initialize() {
    events = initializeEvents(points);
    sweepLineY = 0;
    beachLine = [];
}

function initializeEvents(points) {
    var events = [];
    for (var i = 0; i < points.points.length; i++) {
        events.push(new Event(points.points[i], EventTypes.SITE));
    }
    sortEvents(events);
    return events;
}

function drawSweepLine() {
    strokeWeight(4);
    stroke(0, 255, 0);
    line(0, sweepLineY, width, sweepLineY);
    strokeWeight(1);
}

function drawBeachLine() {
    // for (var i = 0; i < beachLine.length; i++) {
    //     var point_i = beachLine[i];
    //     var pre_x = 0.0;
    //     var pre_y = 0.0;
    //     for (var x_i = 0; x_i < width - 1; x_i++) {
    //         var t1 = (x_i * x_i) - (2 * x_i * point_i.x) + (point_i.x * point_i.x) + (point_i.y * point_i.y) - (sweepLineY * sweepLineY);
    //         var t2 = 2 * (point_i.y - sweepLineY);
    //         var y = t1 / t2;
    //         strokeWeight(1);
    //         stroke(0, 0, 255);
    //         line(pre_x, pre_y, x_i, y);
    //         pre_x = x_i;
    //         pre_y = y;
    //     }
    // }

    for (var x_i = 0; x_i < width - 1; x_i++) {
         var x1 = x_i;
         var x2 = x_i + 1;
         var y1 = 0.0;
         var y2 = 0.0;

        for (var i = 0; i < beachLine.length; i++) {
            var point_i = beachLine[i];

            var t1 = (x1 * x1) - (2 * x1 * point_i.x) + (point_i.x * point_i.x) + (point_i.y * point_i.y) - (sweepLineY * sweepLineY);
            var t2 = 2 * (point_i.y - sweepLineY);
            
            y1 = max(y1,t1 / t2);
            
            t1 = (x2 * x2) - (2 * x2 * point_i.x) + (point_i.x * point_i.x) + (point_i.y * point_i.y) - (sweepLineY * sweepLineY);
            t2 = 2 * (point_i.y - sweepLineY);
            y2 = max(y2,t1 / t2);
            
            
        }
        strokeWeight(1);
        stroke(0, 255, 0);
        line(x1, y1, x2, y2);
    }


}

function updateSweepLineAndDoNextEventMaybe() {
    sweepLineY += 3;
    if (events.length == 0) {
        return;
    }
    if (events[0].point.y <= sweepLineY) {
        doNextEvent();
    }
}

function doNextEvent() {
    if (events.length == 0) {
        state = State.GETTING_INPUT;
        return;
    }
    var event = events.shift();
    if (event.type == EventTypes.SITE) {
        handleSiteEvent(event.point);
    } else if (event.type == EventTypes.CIRCLE) {
        handleCircleEvent(event.point);
    }
}

function handleSiteEvent(point) {
    beachLine.push(point);
}

function handleCircleEvent(point) {
}
