var wall, thickness;
var bullet, speed, weight;

function setup() {
  createCanvas(1600,400);
  bullet = createSprite(200,200,20,7);
  bullet.shapeColor = "gold";
  bullet.velocityX = 40;
  speed=random(223,321);
  weight=random(30,52);

  wall = createSprite(1300,200,thickness,height/2);
  wall.shapeColor = "80,80,80";
  

}

function draw() {
  background("black");

  if(bullet.collide(wall)) {
    wall.x = 1300;
    wall.shapeColor = "green";
    
  }
  

  wall.bounce(bullet);
  bullet.bounce(wall);
  thickness

  drawSprites();
}