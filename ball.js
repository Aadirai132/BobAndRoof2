class ball {
    constructor(x, y) {
      var options = {
        isStatic:false,
          restitution:0.9,
          friction:0.1,
          density:0.4
      }
      this.body = Bodies.circle(x, y, 15, options);
      World.add(world, this.body);
    }
    display()
    {
      var pos =this.body.position;
      push();
      translate(pos.x, pos.y);
      ellipseMode(CENTER);
      fill("red");
      stroke("black");
      strokeWeight(1);
      ellipse(0, 0, 30, 30);
      pop();
    }
  }