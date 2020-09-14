var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
//var particles = [];
var particles;
var divisions = [];
var plinkos = [];

var divisionHeight=300;
var score =0;
var turn = 5;
//var line;
var gamestate = "play";

function setup() {
  createCanvas(800, 800);

  //line = createSprite(400,350,800,10);

  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);


   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }

    

    
}
 


function draw() {
  background("black");
  textSize(20)
 //text("Score : "+score,20,30);
  Engine.update(engine);
 
  
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }
  /* if(frameCount%60===0){
     particles.push(new Particle(random(width/2-30, width/2+30), 10,10));
     score++;
   }
 
  for (var j = 0; j < particles.length; j++) {
   
     particles[j].display();
   }*/

   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }

  // mousePressed();

   if(particles!==null){

    particles.display();

    if(particles.body.position.y>760){

      if(particles.body.position.x<=300){
        score+=500;
        particles=null;
        if(turn<=0){
          gamestate="end";
        }
      }
    }
  }
  


    if(particles!==null){
 
     particles.display();
     
     if(particles.body.position.y>760){
      if(particles.body.position.x>=301 && particles.body.position.x<=600){
        score+=100;
        particles=null;
        if(turn<=0){
          gamestate="end";
        }
      }
    }
  }

        if(particles!==null){
     
         particles.display();
         
         if(particles.body.position.y>760){
      if(particles.body.position.x>600 && particles.body.position.x<=900){
        score+=500;
        particles=null;
        if(turn<=0){
          gamestate="end";
        }
      }
    }
  }

 

  textSize(20);
  fill("yellow");
  stroke(40);
  text("score: "+score,50,20)


  // drawSprites();
}

function mousePressed(){
  if(gamestate!=="end"){

    turn-=1;
    
    particles = new Particle(mouseX,10,10,10);
  }
}