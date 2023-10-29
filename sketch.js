let movX = 175;
let movY = 175;


function setup() {
    createCanvas(400, 400);
    fill(255, 0, 0);
    rect(movX, movY, 50, 50);
}

function draw() {

}


function keyPressed() {
    if (keyCode === UP_ARROW) {
        movY -= 5;
    } else if (keyCode === DOWN_ARROW) {
        movY += 5;
    } else if (keyCode === LEFT_ARROW) {
        movX -= 5;
    } else if (keyCode === RIGHT_ARROW) {
        movX += 5;
    }
    
    background(255);

    rect(movX, movY, 50, 50);
}