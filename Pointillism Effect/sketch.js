var img, x, y;

function preload() {

  img = loadImage("sky.jpg");

}

function setup() {
  createCanvas (300, 300);
  background(0);
  noStroke();
  
  img.resize(0,300);

}

function draw() {

  x = random(width);
  y = random(height);
  var c = img.get(x, y);
  fill(c[0], c[1], c[2], 50);
  ellipse (x, y, 20, 20);

}