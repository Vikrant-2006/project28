class Tree{
constructor(x,y,width,height){
    this.body = Bodies.rectangle(x,y,width,height,options);
    this.width = width;
    this.height = height;
    this.image = loadImage("tree.png");
    World.add(world, this.body);
  }
  
  display(){
    image(this.image,200,300);
    var pos =this.body.position;
    rectMode(CENTER);
    rect(this.body.position.x, this.body.position.y, this.width, this.height);
  }
}


