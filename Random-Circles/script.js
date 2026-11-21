let width = window.innerWidth;
let height = window.innerHeight;

var randomX
var randomY

var spawnDelay = 0

var time = spawnDelay


function setup() {
    document.getElementsByTagName("BODY")[0].onresize = function() {fixResize()};
    createCanvas(width, height);
    setTimeout(0); // jonathan kod

    background(50);
}

function fixResize() {
    width = window.innerWidth;
    height = window.innerHeight;
    resizeCanvas(width, height);
}


function draw() {

    noStroke();

    time = time - deltaTime / 1000


    if (time <= 0) {

        fill(random(0, 255),random(0, 255),random(0, 255),random(0,30));



        randomX = random(0, width);
        randomY = random(0, height);

        circle(randomX, randomY, random(10,250));
        time = spawnDelay
    }

}
 

function mousePressed() {
    background(50);
}