class Mango {
constructor(x,y,radius){
    var options={
        restitution:0,
        friction:1,
        isStatic:true
    }

    this.body=Bodies.circle(x,y,radius,options);
    this.radius= radius;
    this.image = loadImage("mango.js");

World.add(world,this.body);
}
display(){

var pos = this.body.position;
imageMode(CENTER)
image(this.image,pos.x,pos.y,45,45);


}


}