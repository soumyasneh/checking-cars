var car1 , car2 , car3 , car4 , wall;
var speed, weight;

function setup() {
  createCanvas(1600,400);
  wall=createSprite(1500,200,60,wall.height/2);
  car1 = createSprite(400,200,50,30);
  car2 = createSprite(400,600,50,30);
  car3 = createSprite(400,1000,60,40);
  car4 = createSprite(400,1400,65,40);

  car1.shapeColor = "red";
  car2.shapeColor = "black";
  car3.shapeColor = "yellow";
  

//  fixedRect.debug = true;
 // movingRect.debug = true;
speed=random(55,90);
weight=random(400,1500);


}

function draw() {
  background("white");  

  car1.velocityX= speed;
  car2.velocityX = speed;
  car3.velocityX = speed;
  car4.velocityX = speed;
 

    
   if( wall.x - car1.x < wall.width/2 + car1.width/2 ){
     car1.velocityX=0;

var deformation=0.5*weight*Speed*speed/22509;

if (deformation>180) {
car1.shapeColor(255,0,0);
}

if (deformation<180 && deformation>100) {
  car1.shapeColor(230,230,0);
  }
  
  if (deformation<100) {
    car1.shapeColor(0,255,0);
    }
    


  }

  if( wall.x - car2.x < wall.width/2 + car2.width/2 ){
    car2.velocityX=0;

var deformation=0.5*weight*Speed*speed/22509;

if (deformation>180) {
car2.shapeColor(255,0,0);
}

if (deformation<180 && deformation>100) {
 car2.shapeColor(230,230,0);
 }
 
 if (deformation<100) {
   car2.shapeColor(0,255,0);
   }
   


 }

 if( wall.x - car3.x < wall.width/2 + car3.width/2 ){
  car3.velocityX=0;

var deformation=0.5*weight*Speed*speed/22509;

if (deformation>180) {
car3.shapeColor(255,0,0);
}

if (deformation<180 && deformation>100) {
car3.shapeColor(230,230,0);
}

if (deformation<100) {
 car3.shapeColor(0,255,0);
 }
 


}

if( wall.x - car4.x < wall.width/2 + car4.width/2 ){
  car4.velocityX=0;

var deformation=0.5*weight*Speed*speed/22509;

if (deformation>180) {
car4.shapeColor(255,0,0);
}

if (deformation<180 && deformation>100) {
car4.shapeColor(230,230,0);
}

if (deformation<100) {
 car4.shapeColor(0,255,0);
 }
 
}

drawSprites();
}



