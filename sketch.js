var car,wall

var speed,weight

function setup() {
createCanvas(1000,400);

 car = createSprite(200, 200, 90, 40);

 wall = createSprite(900,200,60,190)

 car.velocityX = 5 ;

 speed = Math.random (25,31);
 weight = Math.random (400,1500);
}

function draw() {
  background("black");  

  if(wall.x-car.x < (car.weight=wall.width)/2)
  {
     car.velocityX=0;
     var deformation=0.5 * weight * speed * speed/22500;



     if(deformation>180)
     {
       car.shapeColor=color("yellow");
       wall.shapeColor=color("white");
     }
     if(deformation<180 && deformation>100)
     {
      car.shapeColor=color("green");
      wall.shapeColor=color("white");
     }
     if(deformation<100)
     {
      car.shapeColor=color("red");
      wall.shapeColor=color("white");
     }

  }
  drawSprites();
}