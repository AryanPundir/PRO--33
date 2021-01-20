 
  const Engine = Matter.Engine;
  const  World = Matter.World;
  const  Events = Matter.Events;
  const  Bodies = Matter.Bodies;
 
var particles = [];
var plinkos = [];
var divisions = [];
var touches = [];
var ground1



var gameState = "play"
var particle;
var count = 0;
console.log(count)

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

    ground1= new Ground(400,795,800,10)
    
   
    
    var render = Matter.Render.create({ element: document.body, engine: engine, options: { width: 1200, height: 800, wireframes: false } });
    Matter.Render.run(render);
    
    
}
 


function draw() {
  background("black");
  textSize(20)
  fill("white")
 text("Score : "+score,20,30);
 text("500",25,525)
 text("500",105,525)
 text("500",180,525)
 text("500",270,525)
 text("100",340,525)
 text("100",420,525)
text("100",505,525)
text("200",585,525)
text("200",670,525)
text("200",740,525)

 

  Engine.update(engine);
 
  ground1.display();
  
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }
  
   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }

 

   if(particle!=null){
     particle.display();
     if(particle.body.position.y>760){
       if(particle.body.position.x<300)
       {
         score = score+500;
         particle= null
         if(count>=5)gameState="end";
       }
     }
   }

   
   if(particle!=null){
    particle.display();
    if(particle.body.position.y>760){
      if(particle.body.position.x<530)
      {
        score = score+100;
        particle= null
        if(count>=5)gameState="end";
      }
    }
  }

  if(particle!=null){
    particle.display();
    if(particle.body.position.y>760){
      if(particle.body.position.x<760)
      {
        score = score+200;
        particle= null
        if(count>=5)gameState="end";
      }
    }
  }


 if(gameState==="end"){
   textSize(40)
   text("GAME OVER",280,230)
 }
   
}

function mouseReleased(){
 
  if(gameState!=="end")
  {
    console.log("my name")
    count++;
    particle = new Particle(mouseX,10,10,10);
  }
}

