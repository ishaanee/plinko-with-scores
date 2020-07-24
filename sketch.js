const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground;
var particles=[]
var plinkos=[]
var count=0;
var particle
var gamestate="play"



function setup() {
  createCanvas(480,720);
  engine = Engine.create();
    world = engine.world;
    
    

    division1 = new Divisions(80,708,10,400);
     division2 = new Divisions(160,708,10,400);
    division3 = new Divisions(240,708,10,400);
    division4 = new Divisions(320,708,10,400);
    division5 = new Divisions(400,708,10,400);
    ground = new Ground(240,715,480,15)
    mousePressed()
   

    for ( j = 0; j < 5; j++) {
      for ( i = 0; i < 6 ; i++) {
         x = i * width/5;
        if (j%2==0){
          x+=width / 5/2
        }
        

        y = width / 5+ j * width / 5;
         p = new Plinko(x, y, 20);
        plinkos.push(p);
      }
    }
 }
    

function draw()
 {
  Engine.update(engine);
  background(342,360,250);  
 

  if(frameCount%60===0){
    particles.push(new Particle(random(width/2-40,width/2+40),10,10))
  }
  textSize(20)
  text("score:"+count,50,50)
  text("100",20,550)
  text("100",100,550)
  text("200",180,550)
  text("200",260,550)
  text("100",420,550)
  text("200",340,550)

      
  ground.display()
  
  mousePressed();
  
 
  division1.display()
  division2.display()
  division3.display()
  division4.display()
  division5.display()

  for (let i = 0; i < plinkos.length; i++) {
    plinkos[i].display();
  }
  
  for(var p=0; p<particles.length; p++){
particles[p].display();
  }

}

 
  

function mousePressed(){
  if(gamestate!=="end"){
    count++
    particle=new Particle (mouseX,10,10,10)
  }
  if (particle!=null)
{
  particle.display()

  if (particle.body.position.y>720){
    if (particle.body.position.x<300)
    {
      count=count+200
      particle=null
      if(count>=5)gamestate="end"
    }
  }
}
}