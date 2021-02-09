class Dustbin
{
  constructor(x, y,width , height) {
    var option = {
        'isStatic' : false,
        'restitution':0.8,
        'friction':1.0,
        'density':1.0
    }
    this.body = Bodies.rectangle(x, y,width, height, option);
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.image = loadImage("dustbingreen.png");
    World.add(world, this.body);
  }
  display(){
    var pos =this.body.position;
    imageMode(CENTER);
    fill("green");
    image(this.image,this.x,this.y, this.width, this.height);
    
  }
};
