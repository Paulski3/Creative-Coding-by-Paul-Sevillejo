var img;


function preload() {
  img = loadImage("sunset.jpg");
}


function setup() {
  createCanvas(626, 417);
  background(0);
}

function draw() {
  background(200, 0, 0);
  image(img, 0, 0);

  var v = map(mouseX, 0, width, 2, 20);
  filter(POSTERIZE, v);
}