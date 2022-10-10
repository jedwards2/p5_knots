class Particle {
  constructor() {
    this.pos = createVector(random(width), random(height));
    this.v = createVector();
    this.acc = createVector();
    this.topspeed = 10;
    this.dir = createVector();
  }

  update(nextParticle) {
    this.dir = p5.Vector.sub(nextParticle.pos, this.pos);
    this.acc = this.dir;
    this.v.add(this.acc);
    this.v.limit(this.topspeed);
    this.pos.add(this.v);
  }

  display(nextParticle) {
    if (abs(this.dir.x) < 25 && abs(this.dir.y) < 25) {
      this.drawLine(nextParticle);
    } else {
      ellipse(this.pos.x, this.pos.y, 1, 1);
    }
  }

  drawLine(nextParticle) {
    line(this.pos.x, this.pos.y, nextParticle.pos.x, nextParticle.pos.y);
  }
}
