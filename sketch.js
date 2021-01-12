var fixedrect,movingrect;


function setup() {
  createCanvas(800,400);
  fixedrect=createSprite(400, 200, 50, 100);
  fixedrect.shapeColor="green";
  movingrect= createSprite(100,100,100,50);
  movingrect.shapeColor="green";
}

function draw() {
  background(255,255,255);  
  movingrect.x=World.mouseX;
  movingrect.y =World.mouseY;
  if(movingrect.x-fixedrect.x<fixedrect.width/2+movingrect.width/2
    && fixedrect.x-movingrect.x<movingrect.width/2+fixedrect.width/2
    && movingrect.y-fixedrect.y<fixedrect.height/2+movingrect.height/2
    && fixedrect.y-movingrect.y<movingrect.height/2+fixedrect.height/2)
  {
    movingrect.shapeColor="red";
    fixedrect.shapeColor= "red";

  }
  else
  {
    movingrect.shapeColor="green";
    fixedrect.shapeColor="green";
    
  }
   

  
  drawSprites();
}