const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine,world;
var ball,ground,ball1;

function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;

  ball = Bodies.rectangle(200,100,50,50);
  World.add(world,ball);
  var options = {
    restitution: 0.8
    }
  ball1 = Bodies.circle(300,100,20,options);
  World.add(world,ball1);

  var options = {
    isStatic: true
    }
  ground = Bodies.rectangle(200,height,400,50,options);
  World.add(world,ground);

  console.log(ball.position.x);
  console.log(ball.position.y);

}

function draw() {
  background("black");
  Engine.update(engine);
  rectMode(CENTER);
  rect (ball.position.x,ball.position.y,50,50);
  rect (ground.position.x,ground.position.y,400,50);

  ellipseMode(RADIUS);
  ellipse(ball1.position.x,ball1.position.y,20);
  drawSprites();
}