let iris, violet, jasmine;

function setup() {
    // make the div called "mySketch" a p5.js canvas element
    let cnv = createCanvas(windowWidth, windowHeight);
    cnv.parent('mySketch');

    //as long as you add the class "dragme" to the image, it should work.

    iris = createImg('images/iris.png')
    iris.position(700, 300);
    iris.class('dragme')

    violet = createImg('images/violet.png')
    violet.position(700, 300);
    violet.class('dragme')

    jasmine = createImg('images/jasmine.png')
    jasmine.position(700, 300);
    jasmine.class('dragme')


  }
  
  function draw() {
    background(0);

  }
  
  function windowResized() {
    // resize the canvas when the screen is resized.
    resizeCanvas(windowWidth, windowHeight);
}
