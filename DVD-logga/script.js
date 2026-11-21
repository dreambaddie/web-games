


var x = 250
var y = 170

var velocityY = 0
var velocityX = 0

var touchTimes = 1

var startVelocity = 3

var iShowSpeed = 1

var cornerHit = false

var time = 0

var cornerHitCounter = 0

function setup() {
    createCanvas(600, 400);

    var vector = p5.Vector.random2D();


    velocityY = vector.y * startVelocity
    velocityX = vector.x * startVelocity


}


var previousTouchTimes = 0;

var R = 0;
var G = 0;
var B = 0;


function draw() { //drawdrawdrawdrawdrawdrawdrawdrawdrawdraw
    background(0, 0, 0);


    y = y + velocityY * iShowSpeed
    x = x + velocityX * iShowSpeed


    if (x <= 2) {
        velocityX = -velocityX
        x = 2
        touchTimes = touchTimes + 1
    }

    if (x >= 498) {
        velocityX = -velocityX
        x = 498
        touchTimes = touchTimes + 1
    }

    if (y <= 2) {
        velocityY = -velocityY
        y = 2
        touchTimes = touchTimes + 1
    }

    if (y >= 338) {
        velocityY = -velocityY
        y = 338
        touchTimes = touchTimes + 1
    }

    if (keyIsPressed) { // faster speed thingy
        iShowSpeed = 3
    } else {
        iShowSpeed = 1
    }



    if (touchTimes > previousTouchTimes) {
        R = random(0, 255); // random colours
        G = random(0, 255);
        B = random(0, 255);
        previousTouchTimes = touchTimes
    }

    stroke(R, G, B);
    fill(0, 0, 0);
    rect(x, y, 100, 60);


    fill(R, G, B);
    stroke(R, G, B);
    strokeWeight(4);
    textSize(54);
    textAlign(CENTER);
    text(touchTimes, x + 50, y + 48);


    if (x <= 2 && y <= 2 || x <= 2 && y >= 338 || x >= 498 && y <= 2 || x >= 498 && y >= 338) {
        cornerHit = true
        time = 5
        cornerHitCounter = cornerHitCounter + 1
    }

    time = time - deltaTime / 1000

    var transParency = 255 - (time / 5) * 255

    if (cornerHit === true) {
        noStroke();
        fill(R, G, B, 255 - transParency);
        text("You hit the corner! :3", 300, 200);
        textSize(20);
        text("Youve hit the counter " + cornerHitCounter + " time(s)!", 300, 40);
    }

    if (time <= 0) {
        cornerHit = false
    }


}
