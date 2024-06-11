function setup() {
  createCanvas(400, 400);
  background("#C11C1E");
}

function draw() {
  translate(height/2, width/2);
  rectMode(CENTER);
  noStroke();
  smooth();
  
  push();
  fill("#FDF3E5")
  ellipse(-75, 0, 120, 100);
  ellipse(75, 0, 120, 100);
  pop();
  
  push();
  fill("#084314")
  ellipse(-58.4, 0, 85, 90);
  ellipse(58.4, 0, 85, 90);
  pop();
  
  push();
  fill("#1B1818")
  ellipse(-54.4, 0, 65, 65);
  ellipse(54.4, 0, 65, 65);
  pop();
  
  push();
  ellipse(-79.4, 2, 30, 15);
  ellipse(33, 4, 30, 12.5);
  pop();
  
  push();
  smooth();
  stroke('#2B211F')
  fill('#2B211F')
  quad(0, -40, 0, 0, 170, -30, 170, -90);
  quad(0, -40, 0, 0, -170, -30, -170, -90);
  pop();
  
  push();
  fill("#F3B532");
  triangle(0, 90, 70, 55, -70, 55);
  pop();
  
  push();
  fill("#FCDC4E");
  triangle(0, 5, 90, 55, -90, 55);
  pop();
  
}