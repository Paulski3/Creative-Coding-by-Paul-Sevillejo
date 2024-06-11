var numbers = [20, 60, 130];
var names = ['shade', 'front', 'sky'];

function setup() {
  createCanvas(600, 400);
  noLoop();
  background(10, 100, 80);

  var total = 0;
  for (var i = 0; i < numbers.length; i++) {
    total += numbers[i];
  }

  var lastAngle = 0;
  var colors = [
    color(64, 29, 10),
    color(255, 206, 86),
    color(54, 162, 235),
  ];
  var diameter = 300;

  for (var i = 0; i < numbers.length; i++) {
    var n = numbers[i];
    var angle = map(n, 0, total, 0, TWO_PI);

    fill(colors[i % colors.length]);
    arc(width / 2, height / 2, diameter, diameter, lastAngle, lastAngle + angle, PIE);

    var midAngle = lastAngle + angle / 2;
    var labelX = width / 2 + cos(midAngle) * (diameter / 2 + 20);
    var labelY = height / 2 + sin(midAngle) * (diameter / 2 + 20);
    fill(255);
    textSize(14);
    textAlign(CENTER, CENTER);
    text(names[i] + ': ' + n, labelX, labelY);

    lastAngle += angle;
  }
}
