var ball;
var paddle
var bricks;



//    var brick = createSprite(65+54*c,y,50, 25);

function createBrickRow(y,color){
  for(var c=0; c<6; c++){
    var brick = createSprite(65+54*c,y,50, 25);
    brick.shapeColor=color;
    bricks.add(brick);
  }
}




function setup(){
  createCanvas(400,400);

  ball = createSprite(200, 200, 20, 20);
  ball.shapeColor="#FFADE7 ";
  ball.velocityX = 0;
  ball.velocityY = 0;
  paddle = createSprite(200, 350, 120, 10);
  paddle.shapeColor= "#1D1664 ";

  bricks= createGroup();


  
}

function draw(){
  background("white");
  paddle.x = mouseX;
  if(paddle.x < 60){
    paddle.x =60;
  }
  
  if(paddle.x > 340){
    paddle.x =340;
  }
  drawSprites();
  edges= createEdgeSprites();
  ball.bounceOff(edges);
  ball.bounceOff(paddle);
  ball.bounceOff(bricks);

}

function keyPressed(){

  if(keyCode==32){
    ball.velocityX = 4;
    ball.velocityY = 2;
  }
 
}


