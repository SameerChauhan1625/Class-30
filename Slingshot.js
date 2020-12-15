class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB = pointB
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
        this.Slingshot1 = loadImage("sprites/sling1.png");
        this.Slingshot2 = loadImage("sprites/sling2.png");
        this.Slingshot3 = loadImage("sprites/sling3.png");
    }

    fly(){
        this.sling.bodyA = null;
    }

    attach(body){
        this.sling.bodyA = body;
    }

    display(){
        image(this.Slingshot1,200,20);
        image(this.Slingshot2,170,20);
        
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            strokeWeight(8);
            stroke(48,22,8);
            if(pointA.x<220){
                line(pointA.x-20 ,pointA.y+5, pointB.x-10, pointB.y);
                line(pointA.x-20, pointA.y+5, pointB.x+25, pointB.y);
                image(this.Slingshot3,pointA.x-25,pointA.y-10,15,20);
            }else{
            line(pointA.x+20, pointA.y+10, pointB.x-10, pointB.y);
            line(pointA.x+20, pointA.y+10, pointB.x+25, pointB.y);
            image(this.Slingshot3,pointA.x+25,pointA.y+10,15,20);
        }
    }


    }
    
}