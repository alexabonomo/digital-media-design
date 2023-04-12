//p5 sound library https://p5js.org/reference/#/libraries/p5.sound

let violet, iris, jasmine;

//declare variable up at the top
let mySound1, mySound2, mySound3;

var dragging = false; // Is the object being dragged?


//load sounds before you use them
function preload(){

  soundFormats('mp3', 'ogg');
  mySound1 = loadSound('audio/Plantasia.mp3');
  mySound2 = loadSound('audio/fanfare.mp3');
  mySound3 = loadSound('audio/kirakira.mp3');
}


function setup() {
    // make the div called "mySketch" a p5.js canvas element
    let cnv = createCanvas(windowWidth, windowHeight);
    cnv.parent('mySketch');

    //play sound when mouse is pressed on the canvas
    //cnv.mousePressed(toggleSound);

    violet = createImg("images/violet.png");
    violet.class('flower');
    violet.position(200, 300);

    iris = createImg("images/iris.png");
    iris.class('flower');
    iris.position(700, 300);

    jasmine = createImg("images/jasmine.png");
    jasmine.class('flower');
    jasmine.position(1200, 300);
    
  }
  
  function draw() {
    background(0);
    violet.mousePressed(makeViolet);
    iris.mousePressed(makeIris);
    jasmine.mousePressed(makeJasmine);
  }

  function makeViolet() {
    if (mySound1.isPlaying()){
      mySound1.pause();
    } else {
      mySound1.play();
    }
  }

  function makeIris() {
    if (mySound2.isPlaying()){
      mySound2.pause();
    } else {
      mySound2.play();
    }
  }


  function makeJasmine() {
    if (mySound3.isPlaying()){
      mySound3.pause();
    } else {
      mySound3.play();
    }
  }

  
  function windowResized() {
    // resize the canvas when the screen is resized.
    resizeCanvas(windowWidth, windowHeight);
}
