class Particle {
    constructor(x, y, r) {
        var options = {
            restitution: 0.4
        }
        this.r = r
        this.body = Bodies.circle(x, y, this.r, options)
        //0-black n 255-white
        //rgb
        this.color = color(random(0, 255), random(0, 255), random(0, 255))
        World.add(world, this.body)
    }
    display() {
        var pos = this.body.position
        var angle = this.body.angle
        //to capture new setting
        push()
        translate(pos.x, pos.y)
        rotate(angle)
        fill(this.color)
        ellipseMode(RADIUS)
        ellipse(0, 0, this.r, this.r)
        pop();
    }



}