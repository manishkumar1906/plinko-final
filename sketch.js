var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
var gamestate = "start"
var count = 0
var turn = 0
var particle
var particles = [];
var plinkos = [];
var divisions = []
var divisionHeight=300;
var score =0;
function setup() {
  createCanvas(800, 800);
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
  text("Score : "+score,20,30);
  text("500",25,520)
  text("300",100,520)
  text("500",745,520)
  text("300",660,520)
  text("100",420,520)
  text("100",340,520)
  text("100",260,520)
  text("200",180,520)
  text("100",500,520)
  text("200",580,520)


  Engine.update(engine);
 
  console.log(gamestate)
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }
  // if(frameCount%60===0){
    // particles.push(new Particle(random(width/2-30, width/2+30), 10,10));
    // score++;
   //}
 
 // for (var j = 0; j < particles.length; j++) {
  if(particle!=undefined)
    {
       particle.display();
        
        if (particle.body.position.y>760)
        {
              if (particle.body.position.x < 300) 
              {
                  score=score+500;      
                  particle=undefined;
                  if ( count>= 5) gameState ="end";                          
              }


              else if (particle.body.position.x < 600 && particle.body.position.x > 301 ) 
              {
                    score = score + 100;
                    particle=undefined;
                    if ( count>= 5) gameState ="end";

              }
              else if (particle.body.position.x < 900 && particle.body.position.x > 601 )
              {
                    score = score + 200;
                    particle=undefined;
                    if ( count>= 5)  gameState ="end";

              }      
              
        }
  
      }
    
   //}
   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }
   if(gamestate=="end"){
     textSize(100)
     text ("game over",150,250)
   }
}
function mousePressed(){
  if(gamestate!=="end"){
    count=count+1
    console.log(count)
    particle = new  Particle(mouseX,10,10,10)
  }
}