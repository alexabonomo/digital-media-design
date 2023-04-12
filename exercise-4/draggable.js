// Click and Drag an object
// Daniel Shiffman <http://www.shiffman.net>

class Draggable {
    constructor(x, y) {
      this.dragging = false; // Is the object being dragged?
      this.x = x;
      this.y = y;
      this.offsetX = 0;
      this.offsetY = 0;
    }

    violet(){
        violet = createImg("images/violet.png");
        violet.class('flower');
    }

    iris(){
        iris = createImg("images/iris.png");
        iris.class('flower');
    }

    jasmine(){
        jasmine = createImg("images/jasmine.png");
        jasmine.class('flower');
    }
  
    update() {
      // Adjust location if being dragged
      if (this.dragging) {
        this.x = mouseX + this.offsetX;
        this.y = mouseY + this.offsetY;
      }
    }
  
    pressed() {
      // Did I click on the rectangle?
        this.dragging = true;
        // If so, keep track of relative location of click to corner of rectangle
        this.offsetX = this.x - mouseX;
        this.offsetY = this.y - mouseY;
    }
  
    released() {
      // Quit dragging
      this.dragging = false;
    }
  }