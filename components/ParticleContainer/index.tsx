import { useEffect, useState } from "react";
import { initParticlesEngine } from "@tsparticles/react";
import { loadFull } from "tsparticles";
import { Engine } from "@tsparticles/engine";
import ParticlesComponent from "./particles";
import { customOptions } from "./customOptions";

const ParticleContainer = () => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine: Engine) => {
      await loadFull(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  return (
    <>
      <ParticlesComponent
        id="tsparticles"
        done={init}
        customOptions={customOptions}
      />
    </>
  );
};

export default ParticleContainer;
