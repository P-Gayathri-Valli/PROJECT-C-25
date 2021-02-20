class Paper_Ball {
    constructor(){
        var options={
            isStatic :false,
            restitution :0.3,
            friction :0,
            density :1.2
        }
        this.body = Bodies.circle(200,100,25,options);
        this.image=loadImage("paper.png")
        World.add(world, this.body);

    }
    display(){
        var pos =this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        imageMode(CENTER);
        fill("rgb(255, 0, 128)");
        image(this.image,0, 0, 80, 80);
        pop();
      }
   
}