let timer;
let timerDuration = 5; // 50 seconds

function setup() {
  createCanvas(500, 500);
  textAlign(CENTER, CENTER);
  textSize(72);
  noStroke();
  frameRate(5);

  // Start the timer
  timer = millis();
}

function draw() {
  // Calculate the elapsed time
  let elapsedTime = millis() - timer;
  
  if (elapsedTime < timerDuration * 1000) {
    if (frameCount % 3 === 0 && frameCount % 5 === 0) {
      background(255, 0, 0);
      fill(0);
      text('The END', width / 2, height / 2);
    } else if (frameCount % 3 === 0) {
      background(0, 255, 0);
      fill(0);
      text('Of\nSchool', width / 2, height / 2);
    } else if (frameCount % 5 === 0) {
      background(0, 0, 255);
      fill(255);
      text('Is coming', width / 2, height / 2);
    } else {
      background(32);
      fill(255);
      ellipse(250, 200, 300, 200);
      rect(175, 250, 150, 100);
      fill(0);
      ellipse(175, 200, 50, 50);
      ellipse(325, 200, 50, 50);
      rect(200, 300, 10, 50);
      rect(250, 300, 10, 50);
      rect(300, 300, 10, 50);
    }
  } else {
    // Switch to the second code snippet
    secondCode();
  }
}

function secondCode() {
  let flowerX = random(0, width);
  let flowerY = random(0, height);
  let petalSize = random(25, 150);
  let petalDistance = petalSize / 2;

  background(0, 200, 0);

  fill(255, 128, 0);

  // upper-left petal
  circle(flowerX - petalDistance, flowerY - petalDistance, petalSize);

  // upper-right petal
  circle(flowerX + petalDistance, flowerY - petalDistance, petalSize);

  // lower-left petal
  circle(flowerX - petalDistance, flowerY + petalDistance, petalSize);

  // lower-right petal
  circle(flowerX + petalDistance, flowerY + petalDistance, petalSize);

  // center petal
  fill(255, 0, 0);
  circle(flowerX, flowerY, petalSize);
}
