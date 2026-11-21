var x = 200; // start x value of the ball
var y = 40;  // start y value of the ball

var velocityX = 0;
var velocityY = 0;

var gravity = 0.2;

var groundtimer = 0 //time ball is on ground

function setup() {
  createCanvas(400, 400);
  
  velocityX = random(-15, 15) // start x velocity of the ball
  
}

function draw() {
  background(150);


  velocityY = velocityY + gravity; // increases velocity per frame, so it falls faster after more time
  
  x = x + velocityX; // make circle fall sideways

  y = y + velocityY; // make circle fall


  if (y >= 368){ // make circle bounce on floor
    velocityY = velocityY * 0.85;
    velocityY = -velocityY; 
    y = 368;
    groundtimer = groundtimer + deltaTime/1000;
  }
  else {
    groundtimer = 0;
  }

  
  if (x >= 368){ // make circle bounce on right wall
    velocityX = velocityX * 0.85;
    velocityX = -velocityX; 
    x = 368;
  }

  if (x <= 32){ // make circle bounce on left wall
    velocityX = velocityX * 0.85;
    velocityX = -velocityX; 
    x = 32;
  }

 if(x <= 230 && y >= 330 && x >= 200){ // mitten pin collision höger sida av skärmen
   velocityX = velocityX * 0.85;
   velocityX = -velocityX;
   x = 230;
 }

  if(x >= 170 && y >= 330 && x <= 200){ // mitten pin collision vänster sida av skärmen
   velocityX = velocityX * 0.85;
   velocityX = -velocityX;
   x = 170;
 }


  if(x >= 190 && y >= 300 && x <= 210){ // SUPERTEST för studs på pinne
   velocityY = velocityY * 0.85;
   velocityY = -velocityY;
   y = 300;
 }

  
  
  textSize(80); // text settings

  
    if (groundtimer >= 0.2){ //text with anwser to the question
     if (x >= 200){
        text("NO",140,120);
     } 
          else{
            text("YES",123,120);
          }
  } else{
      text("Hmm",106,120);
  }

  
  fill(170,100,170); // colour

  circle(x, y , 50); // draw circle

  strokeWeight(5);
  line(200,330,200,400); // middle line
  line(0,398,400,398); // floor line
  line(2,0,2,398); // left line
  line(398,0,398,400); // right line
  line(0,2,398,2); // right line

  fill(0,0,0); // text settings

  textSize(50); // text settings
  text("NO", 260, 350);
  text("YES", 40, 350); // text
  


  if (mouseX >= 100 && mouseX <= 300 && mouseY >= 150 && mouseY <= 230 && groundtimer >= 0.2) { // reset button work
    fill(160);
    if (mouseIsPressed === true) {
      reset();
    }
  }  else {
    fill(120);
  }


  if (groundtimer >= 0.2) { // reset button
    strokeWeight(5);
    rect(100, 150, 200, 80);
    fill(0);
    text("Again?", 125, 208);
  }
  
  fill(0,0,0);


}

function reset() {
  x = 200; // start x value of the ball
  y = 40;  // start y value of the ball

  velocityX = 0;
  velocityY = 0;

  velocityX = random(-15, 15) // start x velocity of the ball
}
