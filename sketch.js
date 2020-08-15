
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(600, 600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	bob1 = createSprite(200, 360, 55, 55);
	bob2 = createSprite(250, 360, 55, 55);
	bob3 = createSprite(300, 360, 55, 55);
	bob4 = createSprite(350, 360, 55, 55);
	bob5 = createSprite(400, 360, 55, 55);

	roof = createSprite(300, 60, 540, 40);
	
	rope1 = new Rope(bob1.body,roof.body,-bobDiameter*2,0);
	rope2 = new Rope(bob2.body,roof.body,-bobDiameter*2,0);
	rope3 = new Rope(bob3.body,roof.body,-bobDiameter*2,0);
	rope4 = new Rope(bob4.body,roof.body,-bobDiameter*2,0);
	rope5 = new Rope(bob5.body,roof.body,-bobDiameter*2,0);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  
  drawSprites();
 
}



