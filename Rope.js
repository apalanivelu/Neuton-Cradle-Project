class Rope {
    constructor(body1, body2, offsetX ) {
      
        var options = {
            isStatic: false,
            bodyA: body1,
            bodyB: body2,
            pointB:{x:offsetX, y:0},
            length: 200,
            stiffness: 0.08
        }
        this.pointB = offsetX
        this.rope = Constraint.create(options);
        World.add(world, this.rope);
    }
    display() {
        var pointA = this.rope.bodyA.position;
        var pointB = this.rope.bodyB.position;

        strokeWeight(2);

        
        line(pointA.x,pointA.y ,pointB.x + this.pointB,pointB.y );
    }
}