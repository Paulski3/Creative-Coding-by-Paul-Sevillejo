function setup() {
  createCanvas(500, 500);
  background("#F7AF19");
}

function draw() {
  //background(220);
  rectMode(CENTER);
  
  //head
  fill("#FFE1A9");
  rect(mouseX, mouseY-53, 40);
  
  
  //arms
  rect(mouseX-30, mouseY, 20, 60);
  rect(mouseX+30, mouseY, 20, 60);
  
  //hair
  fill("#5A3D0E");
  rect(mouseX, mouseY-70, 40, 15);
  
  //body
  fill("#84E8CC");
  rect(mouseX, mouseY, 40, 60 );
  rect(mouseX-30, mouseY-20, 20);
  rect(mouseX+30, mouseY-20, 20);
  
  //legs
  fill("#4135CB");
  rect(mouseX+10, mouseY+60, 20, 60);
  rect(mouseX-10, mouseY+60, 20, 60);
  
  //shoes
  fill("#7D858C");
  rect(mouseX+10, mouseY+85, 20, 15);
  rect(mouseX-10, mouseY+85, 20, 15);
}

function mousePressed() {
  background('#F7AF19');
}