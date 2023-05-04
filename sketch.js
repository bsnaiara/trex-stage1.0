var trex, trex_running;

function preload(){
  trex_running = loadAnimation("assets/trex1.png", "assets/trex3.png", "assets/trex4.png");
}

function setup(){
  createCanvas(600,200)
  
  //Crie um sprite de trex
  trex = createSprite(50,160,20,50);
  trex.addAnimation("running", trex_running);
  trex.scale= 0.5;
 
}

function draw(){
  background("black");
  drawSprites();

}