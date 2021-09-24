var road,car,leftBoundary,rightBoundary;
var backgroundImg,carImg,car2Img;

function preload(){
  backgroundImg = loadImage("road.png");
  carImg= loadImage("car.png");
}

function setup(){
  
  createCanvas(400,800);
 
road=createSprite(200,200);
road.addImage("backgroundroad",backgroundImg);
road.velocityY = 4;
road.scale=1.8;

car = createSprite(200,560,30,30);
car.scale=0.3;
car.addImage("racingcar",carImg);
  

leftBoundary=createSprite(0,0,100,800);
 leftBoundary.visible = false;


rightBoundary=createSprite(410,0,100,800);
rightBoundary.visible = false;
}

function draw() {
  background(0);

  road.velocityY = 4;
  
  car.x = World.mouseX;

  edges= createEdgeSprites();
  car.collide(edges[3]);
  car.collide(leftBoundary);
  car.collide(rightBoundary);

  if(road.y > 400 ){
    road.y = height/8;
  }
  
  drawSprites();
}
