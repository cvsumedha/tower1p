class Block {
    constructor(x,y,width,height) {
      var options = {
         // isStatic: true
         restitution:0.4,
         friction:0.1,
         density:0.1
      }
    this.block= Bodies.rectangle(x,y,width,height,options);
    this.width=width;
    this.height=height;
    World.add(world,this.block);

    }
    display(){
        var pos=this.block.position;
        var angle=this.block.angle;
        push();
      translate(pos.x,pos.y);
     rotate(angle);
    
      rectMode(CENTER);
      rect(0,0,this.width,this.height);
      pop();
    }
  };