
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;
var bobRadius;

function setup() {
  createCanvas(800, 600);


	engine = Engine.create();
	world = engine.world;

	
	roof = new Roof(400,100,800,20);
	bob1 = new Bob(100);
	bob2 = new Bob(200);
	bob3 = new Bob(300);
	bob4 = new Bob(400);
	bob5 = new Bob(500);
	rope1 = new Rope(bob1.body,{x:100,y:100});
	rope2 = new Rope(bob2.body,{x:200,y:100});
	rope3 = new Rope(bob3.body,{x:300,y:100});
	rope4 = new Rope(bob4.body,{x:400,y:100});
	rope5 = new Rope(bob5.body,{x:500,y:100});
}
  function keyPressed()  {
  if (keyCode === UP_ARROW)
     {Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-50,y:-45})};
  }

function draw() {
  Engine.run(engine);
  background(230);
  roof.display();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
}


