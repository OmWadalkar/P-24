
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper;
var dustbin,dustbin2,dustbin3;
var ground;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
   paper = new Paper(500,400,2);
   dustbin = new Dustbin(450,600,200,200);
  ground = new Ground(500,700,1000,10);
  

	Engine.run(engine);
  
}


function draw() {
Engine.update(engine);
  background("pink");
  

 paper.display();
 ground.display();
 dustbin.display();
}
function keyPressed()
{
	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(paper.body,paper.body.position,{x: 130,y: -145});
	}
}


