var towerImg, tower;
var doorImg, door, doorsGroup;
var climberImg, climber, climbersGroup;
var ghost, ghostImg;
var invisibleBlockGroup, invisibleBlock;
var gameState = "play"

function preload(){
  towerImg = loadImage("tower.png");
  doorImg = loadImage("door.png");
  climberImg = loadImage("climber.png");
  ghostImg = loadImage("ghost-standing.png");
  spookySound = loadSound("spooky.wav");
}

function setup() {
  createCanvas(600, 600);
  tower = createSprite(300,300);
  tower.addImage("tower",towerImg);
  tower.velocityY = 1;
  ghost=createSprite(262,533,10,10)
  ghost.addImage("ghost",ghostImg)
  ghost.scale=0.3
  doorsGroup=new Group()
  climbersGroup=new Group()
  
}

function draw() {
  background(0);
  if(gameState=='play')
  {
    if(tower.y > 400){
      tower.y = 300
    }


   if(keyDown('space'))
   {
     ghost.velocityY=-4

   }


   if(keyDown('left'))
   {
     ghost.velocityX=-3
   }

   if(keyDown('right'))
   {
     ghost.velocityX=3
   }
   spawnDoors()
   if(climbersGroup.isTouching(ghost))
   {
    ghost.velocityY=0
   }
   if(doorsGroup.isTouching(ghost)||ghost.y>600)
   {
    gameState='end'
    ghost.destroy()
    tower.destroy()
    doorsGroup.destroyEach()
    climbersGroup.destroyEach()
   }
  }
  



   ghost.velocityY+=0.2

    drawSprites()
    
text(mouseX+','+mouseY,mouseX,mouseY)

if(gameState=='end')
{
 text('Game Over',230,250)
 
}
  }


function spawnDoors()
{
  
    if(frameCount%50==0)
  {
    door=createSprite(random(120,400),-50,10,10)
    door.addImage("door",doorImg)
    door.lifetime=400
    door.velocityY=4
    climber=createSprite(200,10,10,10)
    climber.addImage("climber",climberImg)
    climber.x=door.x
    climber.velocityY=4
    climber.lifetime=400
    doorsGroup.add(door)
    climbersGroup.add(climber)
  }
 



}