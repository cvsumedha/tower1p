class stand {
    constructor(x,y,width,height) {
      var options = {
          isStatic: true
      }
    this.stand= Bodies.rectangle(x,y,width,height,options);
    this.width=width;
    this.height=height;
    World.add(world,this.stand);

    }
    display(){
        var pos=this.stand.position;
        var angle=this.stand.angle;
        push();
      translate(pos.x,pos.y);
     rotate(angle);
   
      rectMode(CENTER);
      fill("black");
      rect(0,0,this.width,this.height);
      pop();
    }
  };