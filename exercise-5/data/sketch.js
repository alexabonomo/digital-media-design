let days = [];

let weather, mood, desire;


//images!
let cat,bear;

let enter, entered;

let text;

let body = document.getElementById('html-body');

//returns an array of all the html elements that are <img> tags
const element = document.getElementsByTagName('img');

let spacex = 0;
let spacey = 0;

function setup() {
  // make the div called "mySketch" a p5.js canvas element
  let cnv = createCanvas(windowWidth, windowHeight);
  cnv.parent('mySketch');

  enter = createButton('enter');
  enter.id('enter')
  entered = document.getElementById('enter');
  body.appendChild(entered);
  enter.mousePressed(add);

  background(0);

}

function draw() {

  weather = document.getElementById('weather').value;
  mood = document.getElementById('mood').value;
  desire = document.getElementById('desire').value;

}

function windowResized() {
  // resize the canvas when the screen is resized.
  resizeCanvas(windowWidth, windowHeight);
}

function glyph(){

  background(0);
  if (weather == "sunny"){
    //removes past image from html before drawing a new one
    cat = createImg('images/cat.png');
    cat.id('images');
    cat.size(200,200);
    cat.position(400,200);
    console.log("draw cat")

    text = createP('hello');
    text.style('font-size', "16px")
    text.position(410, 200);


  } else if ( weather == "gloomy"){
    //removes past image from html before drawing a new one
    bear = createImg('images/bearhug.png');
    bear.id('images');
    bear.size(200,200);
    bear.position(200,200);
  }
  if (mood == 'happy'){
    cat = createImg('images/cat.png');
    cat.id('images');
    cat.size(200,200);
    cat.position(400,200);
    console.log("draw cat")
  } else if (mood == 'sad'){
    fill(31, 96, 181)
    bear = createImg('images/bearhug.png');
    bear.id('images');
    bear.size(200,200);
    bear.position(200,200);S
  }
  if(desire == "hug"){
    cat = createImg('images/cat.png');
    cat.id('images');
    cat.size(200,200);
    cat.position(400,200);
    console.log("draw cat")

    text = createP('hello');
    text.style('font-size', "16px")
    text.position(410, 200);

  }else if (desire == "sleep"){
    bear = createImg('images/bearhug.png');
    bear.id('images');
    bear.size(200,200);
    bear.position(200,200);
  } else if(desire =="nature"){
    stroke(25, 97, 17)
  }
  
  spacex += 200;
  if(spacex > 1000){
    spacex = 0;
    spacey += 200;
  }

  if(element.length == 1){
    console.log('working')
    element[0].remove;
  }

}

function add() {

  days.push({
    date: Date(),
    weather: weather,
    mood: mood,
    desire: desire
  })
  console.log(days);
  console.log("day submitted")

  console.log('weather: '+ weather);

  removeImg();
  glyph();
}

function removeImg(){
  //if there is an image, remove it before making a new one
  if(element.length == 3){
    //the first image in the array, remove it
    // for(){}
    // element[0].remove();
  }
}