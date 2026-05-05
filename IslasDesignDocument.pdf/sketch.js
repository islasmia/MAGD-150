let trail = []; 
let heartColor; 

function setup() {
  createCanvas(windowWidth, windowHeight);
  heartColor = color(255, 100, 150); 
  noStroke();
}

function draw() {
  background(250,174,248); 

  let pos = { x: mouseX, y: mouseY };
  trail.push(pos);

  if (trail.length > 30) {
    trail.shift();
  }

  for (let i = 0; i < trail.length; i++) {
    // Make older hearts smaller and more transparent
    let size = map(i, 0, trail.length, 5, 40);
    let alpha = map(i, 0, trail.length, 0, 255);
    
    fill(red(heartColor), green(heartColor), blue(heartColor), alpha);
    heart(trail[i].x, trail[i].y, size);
  }
}

function mouseClicked() {
  heartColor = color(random(255), random(255), random(255));
}


function heart(x, y, size) {
  beginShape();
  vertex(x, y);
  bezierVertex(x - size / 2, y - size / 2, x - size, y + size / 3, x, y + size);
  bezierVertex(x + size, y + size / 3, x + size / 2, y - size / 2, x, y);
  endShape(CLOSE);
}
