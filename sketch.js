
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var hammer ;
var rubber ;
var stone ;
var ground ;
var iron ;

function preload()
{
	
}

function setup() {
	var canvas = createCanvas(1000, 800);
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	hammer = new Hammer(450, 600, 78, 25);
	rubber = new Rubber(250, 700, 80, 80 );
	ground = new Ground(500, 790, 1000, 20);
	stone = new Stone(300, 740, 50, 40);
	iron = new Iron(600, 700, 60, 90);

	


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(200);
  hammer.display();
  rubber.display();
  ground.display();
  stone.display();
  iron.display();
 
}



