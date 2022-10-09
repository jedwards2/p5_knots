class Particle {
  constructor() {
    this.pos = createVector(random(width), random(height));
    this.v = createVector();
    this.acc = createVector();
    this.topspeed = 10;
  }

  update(particle) {
    let dir = p5.Vector.sub(particle.pos, this.pos);
    this.acc = dir;
    this.v.add(this.acc);
    this.v.limit(this.topspeed);
    this.pos.add(this.v);
  }

  display() {
    stroke(255);
    fill(255);
    ellipse(this.pos.x, this.pos.y, 5, 5);
  }
}
