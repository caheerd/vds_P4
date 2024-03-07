let walkers = [];

class Walker{
  constructor(posisiX, posisiY){
    this.x = posisiX;
    this.y = posisiY;
  }
  
  visual(){
    noStroke();
    let c = color(random(400), random(400), random(400));
    fill(c);
    ellipse(this.x, this.y, 40, 40);
  }

  jalan(){
    var stepX = int(random(-100,100));
    var stepY = int(random(-100,100));
    
    this.x = this.x + stepX/10;
    this.y = this.y + stepY/10;
  }
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  
  for (let i=0; i<250;i++){
    walkers[i] = new Walker(random(windowWidth), random(windowHeight))
  }
}

function draw() {
  background(220);
  for (let i=0; i<250;i++){
    walkers[i].visual();
    walkers[i].jalan();
  }
}