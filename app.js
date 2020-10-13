var e

function setup() {
  createCanvas(innerWidth, innerHeight, WEBGL);

  e = new figDraw

  
  createEasyCam();
  document.oncontextmenu = function() { return false; }
  }
  
  function draw() {
    background(0)

    //e.line2d(150,-200, 100, -100)
    //e.line3d(0, 0, 100, 100, 100, 100)
    //e.rect2d(0, 0, 200, 200)
    //e.rect3d(0, 0, 0, 150, 50, 200)
    //e.triangulo(0, -100, 100, 0, 200, -100)
    //e.piramide(50, 50, 50, 100, 100, 100)
    //e.circle(0,0,70,10)
    e.esfera(0, 0, 0, 100, 10, 10)
  }