let mood;

function setup() {
    // make the div called "mySketch" a p5.js canvas element
    let cnv = createCanvas(windowWidth, windowHeight);
    cnv.parent('mySketch');


  }
  
  function draw() {
    //draw a white circle in the middle of the page
    fill(255);
    ellipse(width/2, height/2, 100,100);
    background(0)

  }
  
  function windowResized() {
    // resize the canvas when the screen is resized.
    resizeCanvas(windowWidth, windowHeight);
}
