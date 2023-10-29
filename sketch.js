let movX = 15;
let movY = 15;
let circX = 175;
let circY = 175;


function setup() {
    createCanvas(400, 400);
    fill(255, 0, 0);
    rect(movX, movY, 50, 50);
    ellipse(circX, circY, 100, 100);
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

    ellipse(circX, circY, 100, 100);
}



function draw() {
}