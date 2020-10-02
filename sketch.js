const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground, box1;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

  
    ground = new Ground(600,390,1200,20);
    box1  = new Box(840,360,60,60);
   
    box2  = new Box(960,360,60,60);
    log1 = new Log(900,290,200,PI/2)
   console.log(log1);

    
}

function draw(){
    background(0);
    Engine.update(engine);
    
    ground.display();

    box1.display();
    box2.display();
    log1.display();
    push();
    fill("white");
    text(mouseX+","+mouseY,mouseX,mouseY);
    pop();
   
}