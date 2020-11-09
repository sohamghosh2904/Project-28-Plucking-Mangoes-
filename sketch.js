
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;
var treeObject;
var mango1;
var mango2;
var mango3;
var mango4;
var mango5;
var mango6;
var mango7;
var stoneObject;
var groundObject;
var launcherObject;
var world;
var boy;

function preload()
{

boy=loadImage("boy.png");
	
}

function setup() {
	createCanvas(1300, 600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	stoneObject=new Stone(235,420,30);
	mango1=new Mango(1100,100,30);
	mango2=new Mango(1170,130,30);
	mango3=new Mango(1010,140,30);
	mango4=new Mango(1000,70,30);
  mango5=new Mango(1100,180,30);
  mango6=new Mango(1200,170,30);
  mango7=new Mango(940,170,30);

	treeObject=new Tree(1050,580);

	groundObject=new Ground(width/2,600,width,20);
	launcherObject=new launcher(stoneObject.body,{ x:235,y:420 });


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("orange");
  textSize(20);
  fill("red");
  textFont("Ariel");
  text("Press space to get second chance to play once more!!",50,50);
  image(boy,200,340,200,300);

  treeObject.display();
  stoneObject.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();

  groundObject.display();
  launcherObject.display();
  detectollision(stoneObject,mango1);
  detectollision(stoneObject,mango2);
  detectollision(stoneObject,mango3);
  detectollision(stoneObject,mango4);
  detectollision(stoneObject,mango5);
  detectollision(stoneObject,mango6);
  detectollision(stoneObject,mango7);
  
  
 
}


function mouseDragged()
{
	Matter.Body.setPosition(stoneObject.body, {x:mouseX, y:mouseY}) 
}

function mouseReleased()
{
	launcherObject.fly();
    
}

function keyPressed() {
	if (keyCode === 32) {
    Matter.Body.setPosition(stoneObject.body, {x:235, y:420}) 
	  launcherObject.attach(stoneObject.body);
	}

  }

  function detectollision(lstone,lmango){
  mangoBodyPosition=lmango.body.position;
  stoneBodyPosition=lstone.body.position;

  var distance=dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)
  if (distance<=lmango.r+lstone.r)
 {

   Matter.Body.setStatic(lmango.body , false);
   
 } 

}



