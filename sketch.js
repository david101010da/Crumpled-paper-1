const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;

var ground;
var dustbin1,dustbin2,dustbin3;
var paper;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;

	
	

	//Create a Ground
	ground = new Ground(350,700,1800,20);
	 
	dustbin1 = new Dustbin(930,650,20,100);
	dustbin2 = new Dustbin(1000,690,120,20);
	dustbin3 = new Dustbin(1070,650,20,100);

	paper = new Paper(300,690,20);


	Engine.run(engine);
  
}


function draw() {
  background(0);
  Engine.update(engine);
  ground.display();
  dustbin1.display();
  dustbin2.display();
  dustbin3.display(); 
  paper.display();
 
  


 
}

function keyPressed(){
	if (keyCode === UP_ARROW){
		
		Matter.Body.applyForce(paper.body,paper.body.position,{x:27,y:-27})
	}
}



