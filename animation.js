let graphics;

function setup() {
  createCanvas(windowHeight*1.77, windowHeight);

  graphics = createGraphics(width, height);
  graphics.background(100);
}

function draw() {
  graphics.ellipse(300, 300, 150, 150);

  image(graphics, 0, 0, width, height);
}

function windowResized() {
  resizeCanvas(windowHeight*1.77, windowHeight);
}