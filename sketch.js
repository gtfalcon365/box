const Engine=Matter.Engine
const World=Matter.World
const Bodies=Matter.Bodies
var engine,world
var ground,box

function setup() {
  createCanvas(400,400);
  createSprite(400, 200, 50, 50);
  engine=Engine.create()
  world=engine.world
  ground=Bodies.rectangle(0,390,800,20,{isStatic:true})
  World.add(world,ground)
  box=Bodies.rectangle(200,200,30,30,{restitution:4})
  World.add(world,box)
}

function draw() {
 background("orange");  
Engine.update(engine)
rect(ground.position.x,ground.position.y,400,20)
rect(box.position.x,box.position.y,30,30)
drawSprites();
}

