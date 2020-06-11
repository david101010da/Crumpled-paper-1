class Paper{
    constructor(x,y,radius){
     var options ={
         isStatic:false,
         restitution:0.3,
         friction:2.0,
         density:2.0,
     }
 
     this.body = Bodies.circle(x,y,radius/2,options);
     this.radius = radius;
     
 
     World.add(world,this.body);
    }
   display(){
    var pos =  this.body.position;
    var angle = this.body.angle;
    push();
    translate(pos.x,pos.y);
    rotate(angle);
    fill("white");
    ellipseMode(RADIUS);
    ellipse(0,0,this.radius,this.radius);
    pop();
   }
};
