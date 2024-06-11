function setup() {
  createCanvas(400, 400);
  background('#DF3F7E');
}

function draw() {
  
  noStroke();
  
  //sky//
  push();              
  translate(200,200);
  fill("#EB4885");
  circle(0, -4, 450);
  pop();
  push();
  translate(200,200);
  fill("#FC619E");
  circle(0, -4, 310);
  pop();
  push();
  translate(200,200);
  fill("#FCC961");
  circle(0, -4, 200);
  pop();
  
  
  //Sun//
  push();
  translate(200,200);
  fill("#FEF9DF");
  circle(0,-4,110);
  pop();
  
  //ocean//
  push();
  fill("#DF3F7E")
  rect(0,200,400,200);
  pop();
  
  push();
  translate(200,200);
  
  push();
  fill("#EB4885")
  ellipse(0, 3, 450, 10);
  ellipse(0, 8.8, 450, 10);
  ellipse(0, 14.5, 450, 10);
  ellipse(0, 20.4, 450, 10);
  ellipse(0, 26.4, 450, 10);
  ellipse(0, 32.5, 450, 10);
  ellipse(0, 38.8, 450, 10);
  ellipse(0, 45.5, 450, 8);
  ellipse(0, 52.2, 450, 8);
  ellipse(0, 59, 450, 8);
  ellipse(0, 66, 450, 8);
  ellipse(0, 73, 450, 7.5);
  ellipse(0, 79.8, 450, 7.5);
  ellipse(0, 86.3, 450, 7.5);
  ellipse(0, 92.8, 450, 7.5);
  ellipse(0, 98.8, 450, 7.5);
  ellipse(0, 105.8, 440, 7.5);
  ellipse(0, 113, 430, 7.5);
  ellipse(0, 120.1, 401, 7.5);
  ellipse(0, 127.5, 380, 6.8);
  ellipse(0, 134.4, 341, 6.4);
  ellipse(0, 141, 300, 6.4);
  ellipse(0, 148, 250, 5.8);
  ellipse(0, 153.8, 180, 5);
  ellipse(0, 159.8, 115, 4.5);
  pop();
  
  push();
  fill("#FC619E")
  ellipse(0, 3, 313, 8);
  ellipse(0, 8.8, 313, 8);
  ellipse(0, 14.5, 312, 8);
  ellipse(0, 20.4, 311, 8);
  ellipse(0, 26.4, 311, 8);
  ellipse(0, 32.5, 310, 8);
  ellipse(0, 38.8, 305, 8);
  ellipse(0, 45.5, 299, 8);
  ellipse(0, 52.2, 290, 8);
  ellipse(0, 59, 288, 8);
  ellipse(0, 66, 276, 8);
  ellipse(0, 73, 262, 7.5);
  ellipse(0, 79.8, 249, 6.5);
  ellipse(0, 86.3, 215, 6.5);
  ellipse(0, 92.8, 175, 6.5);
  ellipse(0, 98.8, 125, 5.5);
  pop();
  
  push();
  fill("#FCC961")
  ellipse(0, 3, 205, 6);
  ellipse(0, 8.5, 203, 6);
  ellipse(0, 14, 200, 6);
  ellipse(0, 19.5, 195, 6);
  ellipse(0, 25, 188, 6);
  ellipse(0, 30.5, 178, 6);
  ellipse(0, 36, 164, 5.5);
  ellipse(0, 41.2, 145, 5.5);
  ellipse(0, 46.2, 122, 5.5);
  ellipse(0, 51, 92, 5);
  ellipse(0, 55.5, 61, 4.2);
  pop();
  
  push();
  fill("#FEF9DF")
  ellipse(0, 3, 110, 4);
  ellipse(0, 7.5, 108, 4);
  ellipse(0, 12, 100, 4);
  ellipse(0, 16.5, 90, 4);
  ellipse(0, 21, 78, 4);
  ellipse(0, 25.5, 59, 4);
  ellipse(0, 30, 35, 3.5);
  pop();
  
  pop();
  
}