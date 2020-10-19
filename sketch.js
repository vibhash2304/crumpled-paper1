const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var Paper,bin,floor;

function setup() {
  createCanvas(800, 700);
  rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
  Paper=new paper(50,height-50,30);
  floor= new ground(width/2, height-35, width,10);
  bin=new dustbin(600,655);
   
	Engine.run(engine);
  
}

function draw()
{
    rectMode(CENTER);
    background(0);

    floor.display();
    Paper.display();
    bin.display();

    keyPressed();
}

function keyPressed()
{
  if (keyCode===UP_ARROW)
    {
    Matter.Body.applyForce(Paper.body,Paper.body.position,{x:85,y:-85});
    }
}
