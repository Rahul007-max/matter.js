//namspacing
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground;
var ball;


function setup() {
  createCanvas(800,400);
  //createSprite(400, 200, 50, 50);
  engine = Engine.create();
  world = engine.world;

  var groundOptions={
    isStatic:true
  }//JSON

  ground = Bodies.rectangle(400,390,800,20,groundOptions);
  World.add(world,ground);
  console.log(ground.position.x);
  console.log(ground.position.y);

  var ballOption={

    restitution:1.0

  }
  
  ball = Bodies.circle(200,200,25,ballOption);
  World.add(world,ball);


  

}

function draw() {
  background("black");
  Engine.update(engine);
  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,25,25);
  rectMode(CENTER);
  fill("white"); 
  rect(ground.position.x,ground.position.y,800,20);
  drawSprites();
}