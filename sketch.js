
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var stone; 
var ground;
var mango1,mango2,mango3,mango4,mango5;
var boyImg;
var boy;
var tree;
function preload()
{
	boyImg=loadImage("boy.png");
}

function setup() {
	createCanvas(800, 700);

boy = createSprite(600,350,10,10);
boy.addImage(boyImg);

boy = Bodies.rectangle(600,350,10,10);
	World.add(world, boy);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
  ground = new Ground(300,690,800,20);
 stone = new Stone (boy.body,{x:500,y:150});
mango1 = new Mango(250,250,40);
mango2 = new Mango(300,280,40);
mango3 = new Mango(380,320,40);
mango4 = new Mango(440,390,40);
mango5 = new Mango(490,4600,40);
tree= new Tree(250,200,10,10);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  ground.display();
  stone.display();
  mango1.diaplay();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
boy.display();
  detectollision(stone,mango1);
  detectollision(stone,mango2);
  detectollision(stone,mango3);
  detectollision(stone,mango4);
  detectollision(stone,mango5);
  
  drawSprites();
 
}

function keyPressed(){
if (keyCode === 32){
  Matter.Body.setPosition(stone.body,{x:235,y:235});
  launcherObject.attach(stone.body);
}

}

function detectollision(){
mangoBodyPosition = mango.body.position;
stoneBodyPosition = stone.body.position;

var distance = dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y);
if(distance<-mango.r+stone.r){
  Matter.body.setStatic(mango.body,false);
}
}

function mouseDragged(){
Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY});
}

