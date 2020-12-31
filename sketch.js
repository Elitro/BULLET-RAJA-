var waall, thickness;
var bullet, speed, weight;
var bulletWeight, bulletSpeed;
 
function setup() {
  createCanvas(1600,400);
  
  thickness = random(22, 83);
  speed = random(223, 321);
  weight = random(30, 52);

  bullet = createSprite(50, 200, 40, 10);
  bullet.velocityX = speed;
  bullet.shapeColor = color("white");
  
  wall = createSprite(1200, 200, thickness, height/2);
  wall.shapeColor = color(80,80,80);

}

  
  

function draw() {
  background("black");
  
  if(hasCollided(bullet, wall))
  {
    
    bullet.velocityX = 0;

    var damage = 0.5 * weight * speed * speed/thickness * thickness * thickness;

    if(damage < 10){
      wall.shapeColor = color(0, 255, 0);
    }
     if(damage > 10 ){
      wall.shapeColor = color(255, 0, 0);
    }
    
  }      
  
  
  drawSprites();
}