let movX = 5;
let movY = 345;
let medRect = 50;
let originalMovY = movY;
let circX = 200;
let circY = 200;
let diametro = 100;
const SPACE = 32;

let spacePressed = false;

function setup() {
    createCanvas(400, 400);
    background(245);
    fill(255, 0, 0);
    rect(movX, movY, medRect, medRect);
    fill(96, 121, 137)
    ellipse(circX, circY, diametro, diametro);
}

function keyPressed() {
    if (keyCode === SPACE) {
        spacePressed = true;
    } else {
        let newMovX = movX;
        let newMovY = movY;

        if (keyCode === UP_ARROW) {
            newMovY -= 5;
        } else if (keyCode === DOWN_ARROW) {
            newMovY += 5;
        } else if (keyCode === LEFT_ARROW) {
            newMovX -= 5;
        } else if (keyCode === RIGHT_ARROW) {
            newMovX += 5;
        }

        let distance = dist(newMovX + medRect / 10, newMovY + medRect / 10, circX, circY);

        if (distance > diametro / 2) {
            movX = newMovX;
            movY = newMovY;
        }
    }
}

function keyReleased() {
    if (keyCode === SPACE) {
        spacePressed = false;
    }
}

function draw() {
    background(245);

    if (spacePressed) {
        movY -= 3;
    } else {
        movY = originalMovY;
    }

    fill(255, 0, 0);
    rect(movX, movY, 50, 50);

    fill(96, 121, 137);
    ellipse(circX, circY, diametro, diametro);
}