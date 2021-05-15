var car,wall;
var speed,weight;



function setup() {
  createCanvas(1600,800);
  speed = random(55,90);
  weight = random(400,1500);

  car=createSprite(400, 200, 50, 50);
  wall=createSprite(1000,200,60,400);

  car.velocityX=speed;


  
}

function draw() {
  background(255,255,255); 
  if(wall.x-car.x<car.width/2+wall.width/2 && car.x-wall.x<car.width/2+wall.width/2){
    deformation=(0.5*weight*speed*speed)/22500
    if(deformation<100){
      car.shapeColor='green'
    }
    if(deformation>100 && deformation>180){
      car.shapeColor='yellow'
    }
    if(deformation>180){
      car.shapeColor='red'
    }
    car.velocityX=0
  }
  

  drawSprites();
}