class Chain{
    constructor(pos1,pos2, bodyA,bodyB){

        this.pos1 = pos1;
        this.pos2 = pos2

        var options = {
            length: 255,
            stiffness: 0,
            bodyA: bodyA,
            bodyB: bodyB,
        }
        
     this.chain = Constraint.create(options)   
    World.add(world, this.chain)
    }

    display(){
        
        push()
        strokeWeight(4);
        line(this.pos2, this.chain.bodyA.position.y, this.pos1 , this.chain.bodyB.position.y);
        pop ();
    }
}