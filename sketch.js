var player, computer1, computer2, playerimg, computerimg, track, trackimg;
var rightButton, rightbuttonimg, leftButton, leftbuttonimg;
var gamelostSprite, gamelostimg;

var gameState=1;

function preload(){
  playerimg=loadImage("playerCar.png");
  computerimg=loadImage("opponentCar.png");

  leftbuttonimg=loadImage("LeftButton.png");
  rightbuttonimg=loadImage("RightButton.png");

  trackimg=loadImage("track.png");
  gamelostimg=loadImage("GameLost.png");
  
} 

function setup() {
  createCanvas(400, 500);

  track=createSprite(200, 250, 50, 50);
  track.addImage("t", trackimg);
  
  track.velocityY=15;
  
  computer1=createSprite(380, -200, 50, 50);
  computer1.addImage("b", computerimg);
  
  player=createSprite(200, 400, 50, 50);
  player.addImage("a", playerimg);
  
  computer2=createSprite(20, -200, 50, 50);
  computer2.addImage("c", computerimg);

  computer1.velocityY=17;
  computer2.velocityY=12;

  leftButton=createSprite(50, 480, 50, 50);
  rightButton=createSprite(350, 480, 50, 50);

  leftButton.addImage("l", leftbuttonimg);
  rightButton.addImage("r", rightbuttonimg);

  gamelostSprite=createSprite(200, 250, 50, 50);
  gamelostSprite.addImage("gl", gamelostimg);
  gamelostSprite.visible=false;
}
  
function draw() {
  background(225);

  if(gameState===1){
    if (track.y > 1000){
      track.y = track.width/2;
    }

  
    if(keyDown(LEFT_ARROW) || mousePressedOver(leftButton)){
      player.x=player.x-5;
    }
  
    if(keyDown(RIGHT) || mousePressedOver(rightButton)){
      player.x=player.x+5;
    }
  
    if(computer1.y>500){
      computer1.x=random(20, 380);
      computer1.y=-50;
    }
  
    if(computer2.y>500){
      computer2.x=random(20, 380);
      computer2.y=-50;
    }

    if(player.isTouching(computer1) || player.isTouching(computer1) && gameState === 1){
      gameState = 0;
    }
  }

  if(gameState===0){
    computer1.velocityY=0;
    computer2.velocityY=0;

    track.velocityY=0;


    gamelostSprite.visible=true;
  }
  
  
  drawSprites();
  
}