class Boat {
    constructor(x, y, width, height, boatPos)
    {
        var bOptions = {
            restitution: 0.5,
            friction: 2.0,
            density: 2.0,
        }

        this.body = Bodies.rectangle(x, y, width, height, bOptions);
        this.width = width;
        this.height = height;
        this.image = loadImage("./assets/boat.png");

        this.boatPosition= boatPos;
        World.add(world, this.body);
    }

    display(){
        var pos = this.body.position;
        
        push();
            translate(pos.x, pos.y);
            imageMode(CENTER);
            image(this.image, 0, this.boatPosition, this.width, this.height);
        pop();
    }
}