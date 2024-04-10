import Particle from "./Particles";
const ParticleContainer = ({ count }) => {
    const particles = [];

    for (let i = 0; i < count; i++) {
      particles.push(
        <Particle key={i} initialX={Math.random() * window.innerWidth} initialY={Math.random() * window.innerHeight} />
      );
    }

    return <>{particles}</>;
  };

  export default ParticleContainer;
