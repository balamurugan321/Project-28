
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;

var treeObj, stoneObj,groundObject,leftwall,rightwall;
var mango1,mango2,mango3,mango4,mango5,mango6,mango7,mango8,mango9,mango10,mango11,mango12;
var world,boy;
var launcher;
var bg;
var mangoImg;
var no = 0;
var drag=true;
var no1=0,no2=0,no3=0,no4=0,no5=0,no6=0,no7=0,no8=0,no9=0,no10=0,no11=0,no12=0;

//Declare launcherObject and launchForce variable here


function preload(){
	boy=loadImage("images/boy.png");
  bg=loadImage("images/bg.jpg");
  mangoImg=loadImage("images/mango.png");
  }

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;

	stoneObj=new stone(235,420,30); 

	mango1=new mango(960,90,30);
  mango2=new mango(1070,130,30);
	mango3=new mango(870,140,30);
	mango4=new mango(900,70,30);
	mango5=new mango(950,160,40);
	mango6=new mango(900,230,30);
	mango7=new mango(800,230,40);
	mango8=new mango(1040,150,40);
	mango9=new mango(1000,230,40);
	mango10=new mango(1100,220,40);
	mango11=new mango(1020,50,40);
	mango12=new mango(800,160,40);

	treeObj=new tree(950,590);
	groundObject=new ground(width/2,600,width,20);
  leftwall=new ground(-5,(height*height)/2,10,height*height);
  rightwall=new ground(width+5,(height*height)/2,10,height*height);
  //create launcherObject here
  launcher = new Launcher(stoneObj.body,{x: 350,y: 385});

	Engine.run(engine);
}

function draw() {

  background(bg);
  textSize(80);
  fill("black");
  text(no,120 ,100);
  image(boy ,200,340,200,300);
  image(mangoImg ,10,10,100,100);

  no=no1+no2+no3+no4+no5+no6+no7+no8+no9+no10+no11+no12

  treeObj.display();
  stoneObj.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
  mango10.display();
  mango11.display();
  mango12.display();
  stoneObj.display();
  groundObject.display();

  // display launcher object here
 launcher.display();

if(drag===false){
  
  textSize(50);
  stroke(2);
  fill("black");
  text("Press Space to get another chance!!",10 ,310);

 if(keyWentDown("space")){
   Matter.Body.setPosition(stoneObj.body, {x:235, y:420});
   launcher.attach(stoneObj.body);
   drag = true;
}
}
if(mango1.body.isStatic === false){
  no1=1
}
if(mango2.body.isStatic === false){
  no2=1
}
if(mango3.body.isStatic === false){
  no3=1
}
if(mango4.body.isStatic === false){
  no4=1
}
if(mango5.body.isStatic === false){
  no5=1
}
if(mango6.body.isStatic === false){
  no6=1
}
if(mango7.body.isStatic === false){
  no7=1
}
if(mango8.body.isStatic === false){
  no8=1
}
if(mango9.body.isStatic === false){
  no9=1
}
if(mango10.body.isStatic === false){
  no10=1
}
if(mango11.body.isStatic === false){
  no11=1
}
if(mango12.body.isStatic === false){
  no12=1
}

  detectollision(stoneObj,mango1);
  detectollision(stoneObj,mango2);
  detectollision(stoneObj,mango3);
  detectollision(stoneObj,mango4);
  detectollision(stoneObj,mango5);
  detectollision(stoneObj,mango6);
  detectollision(stoneObj,mango7);
  detectollision(stoneObj,mango8);
  detectollision(stoneObj,mango9);
  detectollision(stoneObj,mango10);
  detectollision(stoneObj,mango11);
  detectollision(stoneObj,mango12);
}

//create mouseDragged function here
function mouseDragged(){
  if(drag){
  Matter.Body.setPosition(stoneObj.body,{x:mouseX,y: mouseY});
  }
}

//create mouseReleased function here
function mouseReleased(){
  launcher.fly();
  drag = false;
}

  function detectollision(lstone,lmango){

  mangoBodyPosition=lmango.body.position
  stoneBodyPosition=lstone.body.position
  
  var distance=dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)
  	if(distance<=lmango.r+lstone.r)
    {
  	  Matter.Body.setStatic(lmango.body,false);
    }

  }