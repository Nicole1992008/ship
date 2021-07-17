var sea 
var seaImg
var ship , ship_sailing,edges;

function preload(){
  ship_sailing= loadAnimation("ship-1.png", "ship-2.png","ship-3.png",
  "ship-4.png");
  seaImg = loadImage("sea.png");


}

function setup(){
  createCanvas(400,400);
  ship= createSprite(50,160,50,50);
  ship.addAnimation("sailing", ship_sailing);

  edges = createEdgeSprites();
  ship.scale = 2;
  ship.x = 50;

  sea = createSprite(150,150,400,20);
  sea = addImage(seaImg);
  sea.velocityX = -2;
}

function draw() {
  background("blue");

  if(sea.x < 0){
    sea.x = ground.width/2;
  }

  console.log(ship.y);

  


  

 drawSprites();
}