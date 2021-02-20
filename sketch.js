const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground;
var paper_ball;
var wall_1,wall_2,wall_3;
var bin;

function preload()
{
	bin=loadImage("dustbingreen.png");
}

function setup() {
	createCanvas(1366, 400);


	engine = Engine.create();
	world = engine.world;

    ground = new Ground(690,380,1400,20);
    paper_ball = new Paper_Ball();
    wall_1= new Dustbin(985,295,10,150);
    wall_2= new Dustbin(1100,365,220,10);
    wall_3= new Dustbin(1215,295,10,150);



	Engine.run(engine);
  
}


function draw() {
  //rectMode(CENTER);
  background(230,230,230);
  image(bin ,985,170,230,190);

  ground.display();
  paper_ball.display();
  wall_1.display();
  wall_2.display();
  wall_3.display();
 
}
function keyPressed(){
  if(keyCode===UP_ARROW){
Matter.Body.applyForce(paper_ball.body,paper_ball.body.position,{x:150,y:-120});}
}