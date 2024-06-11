function setup() {
  createCanvas(400, 400);
  background(250,201,151);
}

function draw() {
  
  //Border//
  push()
  strokeWeight(7)
  noFill();
  stroke('white');
  square(10, 10, 380);
  pop();
  
  //outline//
  stroke('white')
  fill('white')
  circle(200, 120, 89);
  circle(166, 170, 89);
  circle(234, 170, 89);
  triangle(200, 358, 126, 190, 274, 190);
  
  //Ice cream 1//
  stroke('#8d451f');
  fill(138, 75, 41);
  circle(200, 120, 81);
  
  //Ice cream 2//
  stroke('#ff93f7');
  fill(255, 175, 249);
  circle(166, 170, 81);
  
  //Ice cream 3//
  stroke('#8DF2AA');
  fill(194,242,208);
  circle(234, 170, 81);
  
  //cone//
  stroke('#c67b2a');
  fill(216, 144, 67);
  triangle(200, 350, 130, 190, 270, 190);
}
