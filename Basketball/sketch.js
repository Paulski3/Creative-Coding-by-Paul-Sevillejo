function setup() {
  createCanvas(400, 400);
  background('#4DF57D');
}

function draw() {
  
  //Border//
  noFill();
  stroke('white');
  square(10, 10, 380);
  rect(30,10, 340, 380);
  rect(50,10, 300, 380);
  rect(70,10, 260, 380);
  rect(90,10, 220, 380);
  rect(110,30, 180, 340);
  
  //outline//
  noStroke();
  fill('white')
  circle(200,200, 135);
  
  //Main Basketball base//
  push();
  fill('#F39528');
  stroke('#AF6A1A');
  translate(height/2, width/2);
  strokeWeight(6)
  circle(0,0,120);
  pop();
  
  //basket ball arc lines//
  push();
  noFill();
  stroke('#AF6A1A');
  translate(height/2, width/2);
  rotate(29.84);
  arc(0, 41, 80, 40, PI, TWO_PI);
  rotate(97.4);
  arc(0, 41, 80, 40, PI, TWO_PI);
  pop();
  
  //Two straight lines//
  stroke('#AF6A1A');
  strokeWeight(6);
  line(260, 200, 140, 200);
  line(200, 260, 200, 140);
  
  
  
}