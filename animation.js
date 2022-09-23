let graphics;

function setup() {
  if (windowWidth/windowHeight > 1.77) {
    createCanvas(windowHeight*1.77, windowHeight);
  }
  else {
    createCanvas(windowWidth, windowWidth/1.77);
  }

  graphics = createGraphics(width, height);
}

function draw() {
  background("#131626");

  graphics.clear();

  graphics.noStroke();
  graphics.fill("#0ED0A9")
  graphics.ellipse(400, 200, 150, 150);

  image(graphics, 0, 0, width, height);
  graphics.reset();
}

function windowResized() {
  if (windowWidth/windowHeight > 1.77) {
    resizeCanvas(windowHeight*1.77, windowHeight);
  }
  else {
    resizeCanvas(windowWidth, windowWidth/1.77);
  }
}