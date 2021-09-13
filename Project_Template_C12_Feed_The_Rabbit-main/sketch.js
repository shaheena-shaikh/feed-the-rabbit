var garden,rabbit,apple,orange,red,leaf;
var garden,rabbit,leaf,orange,red,apple;


function preload(){
  garden = loadImage(garden.png);
  rabbit = loadImage(rabbit.png);
  apple = loadImage(apple.png);
  orange = loadImage(oramgeLeaf.png);
  leaf = loadImage(leaf.png);

}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
}


function draw() {
  background(0);

  rabbit.x= WORLD.mouseX;
  
  edges= createEdgeSprites();
  rabbit.collide(edges);

  var select_sprites = Math.round(random(1,3));
  if(frameCount % 80 === 0){
    if(select_sprites === 1){
      createApples();
    }else if (select_sprites == 2){
        createorange();
    }else
       createred();
        
      }
function createapples(){
 apple= craeteSprite(random(50, 150),40,10,10);
 apple.addImage("apple.png")
 apple.velocityY=3;
 apple.scale=0.07;
 apple.lifetime = 150;

}

function createOrange(){
 orange = createSprite(random(50, 150),40,10,10);
 orange.addImage("orangeLeaf.png");
 orange.velocityY=3;
 orange.scale=0.07;
 orange.lifetime = 150;

}

function createred(){
 red = createSprite(random(50, 150),40,10,10);
 red.addImage("redlmage.png");
 red.velocityY=3;
 red.scale=0,07;
 red.lifetime = 150;
}

function createLeaf(){
 lea =createSprite(random(50, 150),40,10,10);
 leaf.addImage(leaf.png)
 leaf.velocityY =3;
 leaf.scale=0.07;
 leaf.lifetime = 150;
}
  drawSprites();}
