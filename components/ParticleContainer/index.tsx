import { useEffect, useState } from "react";
import { initParticlesEngine } from "@tsparticles/react";
import { loadFull } from "tsparticles";
import { Engine } from "@tsparticles/engine";
import ParticlesComponent from "./particles";
import { customOptions } from "./customOptions";

const ParticleContainer = ({
  setLoading,
}: {
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  // const [init, setInit] = useState(false);

  // useEffect(() => {
  //   initParticlesEngine(async (engine: Engine) => {
  //     await loadFull(engine);
  //   }).then(() => {
  //     setInit(true);
  //   });
  // }, []);

  useEffect(() => {
    const initializeParticles = async () => {
      await initParticlesEngine(async (engine: Engine) => {
        await loadFull(engine);
      });
      setLoading(false); // Set loading to false after initialization
    };

    initializeParticles();
  }, [setLoading]);

  return (
    <>
      <ParticlesComponent
        id="tsparticles"
        done={true}
        customOptions={customOptions}
      />
    </>
  );
};

export default ParticleContainer;
