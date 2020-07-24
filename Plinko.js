class Plinko {
    constructor(x, y,radius) {
      var options = {
          //'density':5,
          friction: 0,
          restitution: 1,
          isStatic:true
      }
      this.body = Bodies.circle(x, y,radius,options);
      this.radius=radius;
      World.add(world, this.body)

    }
     
    
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      ellipse(0,0,15,15);
      fill("yellow");
      pop();
      
    }
    
}







  