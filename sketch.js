
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;





var engine,world;



function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world =engine.world;


  ball = new Ball(100,0,50);
  
}

function draw() {
  background(255,255,255);  
  Engine.update(engine);
ball.display();
}