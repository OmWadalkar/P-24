class Paper
{
constructor(x,y)
{
var options ={
'isStatic' : false,
'restituion':0.3,
'friction' :0.5,
'density':1.3
}
this.body = Bodies.circle(500,400,2,options);
this.image = loadImage("paper.png")
World.add(world,this.body);
}
display()
{
var pos   = this.body.position;
imageMode(CENTER);
fill("red");
image(this.image,pos.x,pos.y,50,50);

}
}