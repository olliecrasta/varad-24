class Ground{
    constructor(x,y,width,height){
        var ground_options ={
            isStatic: true
          
        }
    
        this.ground = Bodies.rectangle(x,y,width,height,ground_options);
        World.add(world,this.ground);
        this.width = width;
        this.height = height;
    }
    display(){
    var pos = this.ground.position;
    push();
    rectMode(CENTER);
    fill("brown");
    rect(pos.x,pos.y,this.width,this.height);
    pop();
    }

}