
let width = window.innerWidth;
let height = window.innerHeight;
function fixResize() {
    width = window.innerWidth;
    height = window.innerHeight;

    resizeCanvas(width, height);
}


var x = 0
var y = 0

var velocityX = 0
var velocityY = 0

var size = 60

var p1Controls = height/2
var p2Controls = height/2

var controlHeight = 120 // the controllers height
var controlWidth = 20 // the controllers width

var controlMargin = 60 // the difference between the controls and the wall

var controlSpeed = 0.4

var controlTouches = 0 // sets the amount of touches to zero

function setup() {
    document.getElementsByTagName("BODY")[0].onresize = function() {fixResize()};
    createCanvas(width, height);
    setTimeout(0);


    x = width/2;
    y = height/2;

    velocityX = int(random(0,2)) // sets starting x velocity
    if(velocityX === 0) {
      velocityX = -5
    } else {
      velocityX = 5
    }

    velocityY = int(random(0,2)) // sets starting y velocity
    if(velocityY === 0) {
      velocityY = -3
    } else {
      velocityY = 3
    }



}

function draw() {
  background(30);

  x += velocityX;
  y += velocityY;

  noStroke();
  rect(x-size/2,y-size/2,size,size); // pinging the pong box

  if(y <= 0 +size/2) { // ceiling hitbox
    velocityY = -velocityY
  }

  if(y >= height -size/2) { // floor hitbox
    velocityY = -velocityY
  }


    if (keyIsDown('w')) { // player 1 controls for y value
        p1Controls -= controlSpeed * deltaTime
    } 
    else if (keyIsDown('s')) { 
        p1Controls += controlSpeed * deltaTime
    }
  


    if (keyIsDown('ArrowUp')) { // player 2 controls for y value
        p2Controls -= controlSpeed * deltaTime
    } 
    else if (keyIsDown('ArrowDown')) { 
        p2Controls += controlSpeed * deltaTime
    }


  rect(controlMargin-controlWidth/2,p1Controls -controlHeight/2, controlWidth, controlHeight);
  rect(width-controlMargin-controlWidth/2,p2Controls -controlHeight/2, controlWidth, controlHeight);

    fill(255); //number of touches
    textSize(50);
    textAlign(CENTER);
    textFont('Impact')
    text(controlTouches, width/2, 100);


    if (x - (controlMargin + controlWidth/2) <= size/2) {
        if (Math.abs(p1Controls-y) <= controlHeight/2+size/2) {
            velocityX = -velocityX +1; //adds velocity per hit
            controlTouches += 1
        }
        else {
            text("p2 wins!", width/2, height/2);
            restartPause();
        }
    }


    if ((width - controlMargin - controlWidth/2)-x <= size/2) {
        if (Math.abs(p2Controls-y) <= controlHeight/2+size/2) {
            velocityX = -velocityX -1; //adds velocity per hit
            controlTouches += 1
        }
        else {
            text("p1 wins!", width/2, height/2);
            restartPause();
        }
    }


    if (p1Controls -controlHeight/2 < 0) {
        p1Controls = height -controlHeight/2
    } else if (p1Controls +controlHeight/2 > height) {
        p1Controls = +controlHeight/2
    }

    if (p2Controls -controlHeight/2 < 0) {
        p2Controls = height -controlHeight/2
    } else if (p2Controls +controlHeight/2 > height) {
        p2Controls = +controlHeight/2
    }

    fill(255,255,255); // changes colours back to white on controls
    noStroke(); // removes stroke after restartPause function



}


function restartPause() {

    velocityX = 0 // stops the pong after someone wins
    velocityY = 0



    fill(50,50,50); // button
    stroke(200);
    strokeWeight(5);
    rect(width/2 -200,height/2 +50,400,100);

    noStroke(); // text on the button
    fill(200);
    text("play again?", width/2, height/2 +120);

    if (mouseX >= width/2 -200 && mouseX <= width/2 +200 && mouseY >= height/2 +50 && mouseY <= height/2 +150) {
        fill(100);
        rect(width/2 -200,height/2 +50,400,100);
        fill(255);
        text("play again?", width/2, height/2 +120);
        
        controlSpeed = 0 // sets control speed to zero so you cant move controls


        if (mouseIsPressed) {
            
            p1Controls = height/2
            p2Controls = height/2
            
            x = width/2 // sets the pong to the middle of the screen
            y = height/2
            controlTouches = 0 // sets the amount of touches to zero

            controlSpeed = 0.4 // sets control speed to normal amount


            velocityX = int(random(0,2)) // sets starting x velocity
            if(velocityX === 0) {
                velocityX = -5
            } else {
                velocityX = 5
            }

            velocityY = int(random(0,2)) // sets starting y velocity
            if(velocityY === 0) {
                velocityY = -3
            } else {
                velocityY = 3
            }


        
        }
    }

}