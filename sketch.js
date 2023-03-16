let angle = 0;
let angleSpeed;
let radius;
let shapeSize;

function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
  noStroke();
}

function draw() {
  // Change the background color for a strobe effect
  background(random(255), random(255), random(255), 20);

  translate(width / 2, height / 2);

  // Change the radius and angle speed based on mouse position
  radius = map(mouseX, 0, width, 100, 300);
  angleSpeed = map(mouseY, 0, height, 0.001, 0.02);

  let numSegments = floor(map(mouseX, 0, width, 6, 24));

  for (let i = 0; i < numSegments; i++) {
    push();
    rotate((360 / numSegments) * i);
    drawShapes();
    pop();
    push();
    scale(-1, 1);
    rotate((360 / numSegments) * i);
    drawShapes();
    pop();
  }

  angle += angleSpeed;
}

function drawShapes() {
  let x = radius * cos(angle);
  let y = radius * sin(angle);

  // Randomly change the size of the shapes
  shapeSize = random(30, 60);

  fill((angle + frameCount) % 255, 100, 255, 50);
  ellipse(x, y, shapeSize, shapeSize);

  fill((angle + frameCount + 85) % 255, 100, 255, 50);
  ellipse(y, x, shapeSize, shapeSize);

  fill((angle + frameCount + 170) % 255, 100, 255, 50);
  ellipse(-x, -y, shapeSize, shapeSize);

  fill((angle + frameCount + 255) % 255, 100, 255, 50);
  ellipse(-y, -x, shapeSize, shapeSize);
}
