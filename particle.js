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

  display(nextParticle) {
    stroke(255);
    fill(255);

    let dir = p5.Vector.sub(nextParticle.pos, this.pos);

    if (abs(dir.x) < 15 && abs(dir.y) < 15) {
      strokeWeight(5);
      this.drawLine(nextParticle);
    } else {
      strokeWeight(1);
      ellipse(this.pos.x, this.pos.y, 1, 1);
    }
  }

  drawLine(nextParticle) {
    line(this.pos.x, this.pos.y, nextParticle.pos.x, nextParticle.pos.y);
  }
}
