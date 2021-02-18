class Box
{
constructor(xInput,yInput,widthInput,heightInput)
{
var options = {
    isStatic:false,
    restitution:0.2,
    friction:0,
    density:2
}
this.x = xInput;
this.y = yInput;
this.width = widthInput;
this.height = heightInput;
this.visibility = 255;
this.body = Bodies.rectangle(this.x,this.y,this.width,this.height,options);
World.add(userWorld,this.body);

}
display()
{
//console.log(this.body.speed);
if(this.body.speed <3){
var angle = this.body.angle
var boxpos = this.body.position;
push();
translate(boxpos.x,boxpos.y);
rotate(angle);
rectMode(CENTER);
rect(0,0,this.width,this.height);
pop();
}else{
    World.remove(userWorld,this.body);
    push();
    this.visibility = this.visibility-1;
    pop();
}
}

 
}