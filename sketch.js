function setup() {
    createCanvas(600, 600);
    background ("Purple");
  }
  
  function draw () {
    stroke("black");
    fill("pink");
    
    if(mouseIsPressed){
       rect(mouseX, mouseY, 20, 35);
    }
  }