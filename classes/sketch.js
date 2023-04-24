
let bubbles = [];

let lamb;
let flowers = [];

function preload() {
  lamb = loadImage('images/lamb.png');
  for (let i = 0; i < 3; i++) {
    flowers[i] = loadImage(`images/flower${i}.png`);
  }
}

function setup() {

  let cnv = createCanvas(windowWidth, windowHeight);
  cnv.parent('mySketch');

  for (let i = 0; i < 50; i++) {
    let x = random(width);
    let y = random(height);
    let r = random(50, 150);
    let b = new Bubble(x, y, r);
    bubbles.push(b);
  }
}

function mousePressed() {
  for (let i = 0; i < bubbles.length; i++) {
    bubbles[i].clicked(mouseX, mouseY);
  }
}


function draw() {
  cursor(ARROW);
  background(0);
  for (let i = 0; i < bubbles.length; i++) {
    //bubbles[i].move();
    bubbles[i].show();
    bubbles[i].hover(mouseX, mouseY);
  }
}

class Bubble {
  constructor(x, y, r, img) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.flower = random(flowers);
  }

  clicked(px, py) {
    //let d = dist(px, py, this.x, this.y);
    //if (d < this.r) {
    if (
      //look for the area the image is considering image mode being centered
      px > this.x-this.r/2 &&
      px < this.x + this.r/2 &&
      py > this.y-this.r/2 &&
      py < this.y + this.r/2
    ) {
      this.flower = lamb; //random(flowers);
    }
  }

  hover(px,py){
    if (
      //look for the area the image is considering image mode being centered
      px > this.x-this.r/2 &&
      px < this.x + this.r/2 &&
      py > this.y-this.r/2 &&
      py < this.y + this.r/2
    ) {
      cursor('grab');
    }
  }

  move() {
    // this.x = this.x + random(-2, 2);
    // this.y = this.y + random(-2, 2);

    //rotate based on cursor
    let angle = atan2(mouseY - this.y, mouseX - this.x);
    rotate(angle);
  }

  show() {

    //image(this.flower, this.x , this.y, this.r, this.r);
    
    push();
    translate(this.x, this.y);
    this.move();
    imageMode(CENTER);
    image(this.flower, 0 , 0, this.r, this.r);
    pop();
  }

}

function windowResized() {
  // resize the canvas when the screen is resized.
  resizeCanvas(windowWidth, windowHeight);
  background(0)

}