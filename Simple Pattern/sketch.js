function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(0);
  
  var circleSize = 67;
  
translate(circleSize/2, circleSize/2);
  noStroke();
  
  for(var x = 0; x < width; x += circleSize) {
    
    for (var y = 0; y < width; y += circleSize) {
      
      fill(1*y, 60, 255);
      ellipse(x,y, circleSize*1.35, circleSize*1.35);
      fill(1*x, 160, 2*y);
      ellipse(x,y, circleSize*0.8, circleSize*0.8);
      fill(x*1, 20, 125);
      ellipse(x,y, circleSize*0.3, circleSize*0.7);
      fill(225);
      ellipse(x+10,y-8, circleSize*0.2, circleSize*0.1)
    }
  }
}