function setup() {
    createCanvas(400, 400);
    background("rgb(201,217,221)");
  }
  
  function draw() {
    stroke("rgb(121,110,158)");
    fill("rgb(170,192,239)");
    
    if(mouseIsPressed) {
    rect(mouseX , mouseY, 20, 20);
  }
  }