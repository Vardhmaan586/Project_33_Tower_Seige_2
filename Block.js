class Block{
    constructor(x, y, width, height) {
        var options = {
           
            restitution :0.4,
            friction :0.0,
            //isStatic:true
           
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.Visibility=255;
        World.add(world, this.body);
      }
      display(){
      
        

        if(this.body.speed<6){
         if(this.Visibility==255){
         
          var angle = this.body.angle;
          var pos= this.body.position;
          push();
          translate(pos.x, pos.y);
          rotate(angle);
          rectMode(CENTER);
          rect(0,0,this.width, this.height);
          pop();
         }
         }
         else{
          push();
          this.Visibility = this.Visibility-5;
         //console.log("i am here")
          //image(this.image,this.body.position.x,this.body.position.y,50,50);
           tint(255,this.Visibility);
          // rectMode(CENTER)
           //rect(this.body.position.x,this.body.position.y,40,40);
           World.remove(world,this.body)

    pop();
         }
        }
      }
      
        
      