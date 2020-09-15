class Stone {
    constructor(bodyA,pointB) {
      var options = {
          isStatic: false,
          restitution:0,
          friction:1,
          density:1.2,
          stiffness:0.004,
          bodyA: bodyA,
            pointB: pointB
      }
     
      this.image = loadImage("stone.png");
      this.pointB = pointB
      this.stone = Constraint.create(options);
      World.add(world, this.stone);
    }
    attach(body){
      this.stone.bodyA = body;
     }
     
  fly(){
      this.stone.bodyA = null;
  }
    display(){
      image(this.image,200,300);
      var pointA = this.sling.bodyA.position;
      var pointB = this.pointB;
    line(pointA.x,pointA.y,pointB.x,pointB.y);
     
    }
  }


