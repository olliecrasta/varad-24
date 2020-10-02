class Box {
  
    constructor(x,y,width,height){


        var box_options ={
            restitution: 0.4,
            friction: 0.3,
            density : 1
        }
        this.box = Bodies.rectangle(x,y,width,height, box_options);
        World.add(world,this.box);

        this.width = width;
        this.height = height;
        
    }

    display(){

        var pos = this.box.position;
        var angle = this.box.angle;
        push();
        rectMode(CENTER);
        translate(pos.x,pos.y);
        rotate(angle);
        strokeWeight(4);
        stroke("green");
        rect(0,0,this.width, this.height);
        pop();
    }




}