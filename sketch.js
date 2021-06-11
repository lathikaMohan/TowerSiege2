const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var holder,ball,ground;
var stand1,stand2;
var ball;
var slingShot;
var polygon_img;

function preload(){
  polygon_img=loadImage("polygon.png");
}
function setup() {
  createCanvas(900,400);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);
  ground = new Ground();
  stand1 = new Stand(390,300,250,10);
  stand2 = new Stand(700,200,200,10);
 
  //Part one
  block1 = new Block(300,275,30,40);
  console.log(block1);
  block2 = new Block(330,275,30,40);
  block3 = new Block(360,275,30,40);
  block4 = new Block(390,275,30,40);
  block5 = new Block(420,275,30,40);
  block6 = new Block(450,275,30,40);
  block7 = new Block(480,275,30,40);
  //Part two
  block8 = new Block(330,235,30,40);
  block9 = new Block(360,235,30,40);
  block10 = new Block(390,235,30,40);
  block11 = new Block(420,235,30,40);
  block12 = new Block(450,235,30,40);
  //Part three
  block13 = new Block(360,195,30,40);
  block14 = new Block(390,195,30,40);
  block15 = new Block(420,195,30,40);

  block16 = new Block(390,155,30,40);

  polygon = Bodies.circle(50,200,20);
  World.add(world,polygon);

  console.log(polygon);

  sling = new slingShot(polygon,{x:100,y:200});


  piece1 = new Block(625,175,30,40);
  console.log(piece1);
  piece2 = new Block(655,175,30,40);
  piece3 = new Block(685,175,30,40);
  piece4 = new Block(715,175,30,40);
  piece5 = new Block(745,175,30,40);
  piece6 = new Block(775,175,30,40);

  piece7 = new Block(655,135,30,40);
  piece8 = new Block(685,135,30,40);
  piece9 = new Block(715,135,30,40);
  piece10 = new Block(745,135,30,40);

  piece11 = new Block(685,105,30,40);
  piece12 = new Block(715,105,30,40);

  piece13 = new Block(700,75,30,40);

  

}
function draw() {
  background(56,44,44); 
 
  textSize(20);
  fill("lightyellow");
  

  ground.display();
  stand1.display();
  stand2.display();
  
  strokeWeight(2);
  stroke(15);
  fill("skyblue");
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  fill("pink");
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  fill("turquoise");
  block13.display();
  block14.display();
  block15.display();
  fill("grey");
  block16.display();

  fill("skyblue");
  piece1.display();
  piece2.display();
  piece3.display();
  piece4.display();
  piece5.display();
  piece6.display();
  
  fill("pink");
  piece7.display();
  piece8.display();
  piece9.display();
  piece10.display();

  fill("turquoise")
  piece11.display();
  piece12.display();

  fill("grey");
  piece13.display();

  var angle = polygon.angle;

  posX=polygon.position.x;
  posY=polygon.position.y;

 imageMode(CENTER);
 image(polygon_img,polygon.position.x,polygon.position.y,40,40);
 sling.display();
 drawSprites();
}
 
/*function mouseDragged(){
  Matter.Body.setPosition(polygon,{x:mouseX, y: mouseY});
 }*/
 function mouseDragged(){
if(mouseX>=0 && mouseX>0 && gameState != "launched")
  Matter.Body.setPosition(this.polygon,{x:mouseX,y:mouseY});
}
function mouseReleased(){
  slingShot.fly();
  gameState = "launched";
}
function keyPressed(){
if(keyCode===32){
  slingShot.attach(this.polygon);
  Matter.Body.setPosition(this.polygon,{x:100,y:200});
  Matter.Body.setAngle(this.polygon,0);
  gameState = "onSling";
}
}

