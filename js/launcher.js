class Launcher{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.002,
            length: 20
        }
        this.sling = Constraint.create(options);
        this.pointB = pointB;
        World.add(world, this.sling);
    }
    fly(){
        this.sling.bodyA= null;
    }
    attach(body){
		this.sling.bodyA=body;
	}

    display(){
        if(this.sling.bodyA){
        var pointA = this.sling.bodyA.position;
        var pointB = this.pointB;
        strokeWeight(4);
        stroke("black");
        line(pointA.x-15, pointA.y, pointB.x-11, pointB.y+7);
        line(pointA.x+15, pointA.y, pointB.x+11, pointB.y-7);
        }
    }
    
}