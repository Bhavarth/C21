var fixedRect, movingRect;
var ball , obstacle;
function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;

  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  ball =createSprite(700,500,20,20);
  ball.shapeColor= "blue";
  ball.velocityX = -6;

  obstacle= createSprite(500,500,40,100);
  obstacle.shapeColor= "red";
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

 if( is_touching(movingRect, fixedRect)){
  movingRect.shapeColor = "red";
  fixedRect.shapeColor = "red";
 } 
 else {
  movingRect.shapeColor = "green";
  fixedRect.shapeColor = "green";
 }

  if (is_touching(ball,obstacle)){
    ball.x = 1000;
    ball.y = 500;
  }
  drawSprites();
}

