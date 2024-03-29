"use client";

import Particles from "@tsparticles/react";
import configs from "@tsparticles/configs";

export default function ParticlesComponent(props: {
  id: string;
  done: boolean;
  customOptions?: any;
}) {
  const { id, done, customOptions } = props;
  return (
    props.done && (
      <Particles id={props.id} options={customOptions || configs.basic} />
    )
  );
}
