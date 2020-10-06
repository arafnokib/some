const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint

var engine, world;
var box1, pig1;
var backgroundImg,platform;
var chain;
var cLog;

function preload() {


}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(width/2,50,width,20);


    box1 = new Bird(600,100);
    box2 = new Bird(400,100);
    box3 = new Bird(800,100);
    box4 = new Bird(200,100);
    box5 = new Bird(1000,100);

    chain1 = new Chain(600,box1.body,ground.body)
    
    chain2 = new Chain(400,box2.body,ground.body)

    chain3 = new Chain(200,box3.body,ground.body)

    chain4 = new Chain(800,box4.body,ground.body)

    chain5 = new Chain(1000,box5.body,ground.body)

   
}

function draw(){
    background(85);
    Engine.update(engine);
  
    ground.display();
   


    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    chain1.display();
    chain2.display();

    chain3.display();

    chain4.display();

    chain5.display();

}
