function keyPressed() {
    if (keyCode === ENTER) {
        doNextEvent();
    }
    console.log("Pressed n")
    // press n to switch between drawing the tree and the points
    if (keyCode === 78) {
        whatToDraw += 1;
        whatToDraw %= 2;
    }
}
