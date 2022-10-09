let particles = [];
const NUM_OF_PARTICLES = 150;

function setup() {
  createCanvas(800, 800);

  for (let i = 0; i < NUM_OF_PARTICLES; i++) {
    particles[i] = new Particle();
  }
}

function draw() {
  background(0);
  for (let i = 0; i < particles.length; i++) {
    let nextParticle;
    if (i == particles.length - 1){
      nextParticle = particles[0];
    } else {
      nextParticle = particles[i+1];
    }

    particles[i].update(nextParticle);
    particles[i].display();
  }
}
