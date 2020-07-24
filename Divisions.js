class Divisions {
    constructor(x,y,width,height,score) {
      var options = {
          isStatic: true
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      this.score=score
      World.add(world, this.body);
      //this.divisions=[]


      
      }
    
    display(){
      var pos =this.body.position;
      push();
      rectMode(CENTER);
      fill("brown");
      rect(pos.x, pos.y, this.width, this.height);
      pop();
      //for(var k =0<= width;k = k+80){
       // Divisions.push(new Divisions(k,height-divisionHeight/2,10,divisionHeight));
    }
  }
  
  