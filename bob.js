class Bob {
    constructor(x) {

      var options = {
          'restitution': 0.8,
          'friction' : 0.5,
          'density':1.0
     
        }
      this.body = Bodies.circle(x,300,30,options);
      this.radius = 30;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push()
      translate(pos.x,pos.y);
      rotate(angle);
      ellipseMode(RADIUS);
      fill("purple");
      ellipse(0,0,this.radius,this.radius);
      pop();
      
    }
}

