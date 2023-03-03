function keyPressed() {
    if (keyCode === ENTER) {
        if (state == State.GETTING_INPUT) {
            state = State.DRAWING;
            initialize();
        } else if (state == State.DRAWING) {
            state = State.GETTING_INPUT
        }
    } else if (keyCode === 82) {
        points.deleteAll();
    }
}
