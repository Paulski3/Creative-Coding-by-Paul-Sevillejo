var sound;
var fft;

function preload() {
  sound = loadSound("Djo.mp3");
}

function setup() {
  createCanvas(800, 800);
  background(220);
  sound.play();
  fft = new p5.FFT();
  colorMode(HSB, 255);  // Set color mode to HSB
}

function draw() {
  background(0);
  noStroke();
  

  var spectrum = fft.analyze();

  for (let i = 0; i < spectrum.length * 2; i += 10) {
    let hue = map(mouseX, 0, width, 0, 255); // Change color based on mouse position
    let diameter = map(spectrum[i], 0, 255, 0, height *0.25);

    fill(hue, mouseX, 225);

    let x = map(i, 0, spectrum.length, width / 2, width);
    ellipse(x, height / 2, diameter / mouseX, diameter * 2);

    x = map(i, 0, spectrum.length, width / 2, 0);
    ellipse(x, height / 2, diameter / mouseX, diameter * 2);
  }

  for (let i = 0; i < spectrum.length * 3; i += 30) {
    let hue = map(mouseX, 0, width, 0, 255); // Change color based on mouse position
    let diameter = map(spectrum[i], 0, 255, 0, height * 0.25);

    fill(hue, mouseX, 225);

    let x = map(i, 0, spectrum.length, width / 6, width / 3);
    ellipse(x, height / 2, diameter / mouseX, diameter / 2);

    x = map(i, 0, spectrum.length, width / 6, 0);
    ellipse(x, height / 2, diameter / mouseX, diameter / 2);
  }

  for (let i = 0; i < spectrum.length * 3; i += 30) {
    let hue = map(mouseX, 0, width, 0, 255); // Change color based on mouse position
    let diameter = map(spectrum[i], 0, 255, 0, height * 0.25);

    fill(hue, mouseX, 225);

    let x = map(i, 0, spectrum.length, width * 5 / 6, width * 2 / 3);
    ellipse(x, height / 2, diameter / mouseX, diameter / 2);

    x = map(i, 0, spectrum.length, width * 5 / 6, width);
    ellipse(x, height / 2, diameter / mouseX, diameter / 2);
  }
}
