let a = 0;
let bearbear = false;

function setup() {
    // make the div called "mySketch" a p5.js canvas element
    let cnv = createCanvas(windowWidth, windowHeight);
    cnv.parent('mySketch');

  }
  
  function draw() {
    //removeElements();

    //draw a white circle in the middle of the page
    // fill(255);
    // ellipse(width/2, height/2, 100,100);

    //this is how to use p5.js and javascript to generate images into html elements

    //create an image element in html
    let cat = createImg("images/cat.png");

    //select size of image
    cat.size(200,200);

    //set the position
    cat.position(500, 500);

    // give it an id
    cat.id('cat');

    //now you can see that in your html, an <img> tag is created that has an id of "cat", has a size of 200x200, and is positioned at 500x500 on the page. 

    //lets make this follow your cursor
    //cat.position(mouseX, mouseY);

    //lets make this cat move
    //cat.position((200 + a), 500);


    //lets make this cat move without leaving a trail - removeElements(); up at the top
    // cat.position((200 + a), 500);

    //a++;
    //console.log(a);

    //make the bear appear when pressed
    cat.mousePressed(bear);

  }
  
  function windowResized() {
    // resize the canvas when the screen is resized.
    resizeCanvas(windowWidth, windowHeight);
}

function bear(){
  let bear = createImg("images/bearhug.png");
  bear.size(400,400);
  bear.position(800, 400);
}
