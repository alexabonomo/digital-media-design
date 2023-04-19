let forrestBg1;
let cat;

let x = 0;
let y = 0;
let xpos;
let ypos;

function forrest1(){
    forrestBg1 = createImg('images/forrest1.jpeg');
    forrestBg1.position(0, 0);
    forrestBg1.size(width, height);
}

function displayCat(){
    forrest1();
    cat = createImg('images/cat.png');
    cat.size(200,200);

    //set the position
    //create arithmetic for x and y position. this lets us read out the position
    xpos = width/2-100+x;
    ypos = height/2-100+y;

  
    //position the cat based on the arrow keys
    cat.position(xpos, ypos);


//controls using arrow keys
    if (keyIsPressed){
      if(key == 'w'){

        //minus 5 in the y direction means up
        y-=5;
        
      } 
      
      if(key == 'd') {

        //plus 5 in the x direction means right
        x+=5;
      }

      if(key == 's') {

        //plus 5 in the y direction means down
        y+=5;
      }

      if(key == 'a') {

        //minus 5 in the x direction means left
        x-=5;
      }
  }
}