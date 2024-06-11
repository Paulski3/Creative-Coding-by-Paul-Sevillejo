var img, x, y;

function preload() {
  // Loading the image
  img = loadImage("Forest.jpg");
  

}

function setup() {
  
  createCanvas (530, 300); 
  background(0); 
  noStroke();
  
  // Resize the image, keeping the aspect ratio.
  img.resize(0,300);

}

function draw() {

  // Display the image.
  image(img, 0, 0);
  
  // Mouse
  x = mouseX;
  y = mouseY;  
  var c= get(x, y);
  fill(c);
  ellipse (x, y, 50, 50);

}