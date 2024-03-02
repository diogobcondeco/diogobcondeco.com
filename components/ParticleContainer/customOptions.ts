export const customOptions = {
  background: {
    color: {
      value: "#111827",
    },
  },
  fpsLimit: 120,
  interactivity: {
    events: {
      onClick: {
        enable: false,
        mode: "push",
      },
      onHover: {
        enable: true,
        mode: "grab",
      },
      resize: {
        enable: true,
      },
    },
    modes: {
      grab: {
        distance: 150,
        line_linked: {
          opacity: 1,
        },
      },
      push: {
        particles_nb: 4,
      },
      remove: {
        particles_nd: 2,
      },
      repulse: {
        distance: 200,
        duration: 0.4,
      },
    },
  },
  fullScreen: { enable: false },
  particles: {
    color: {
      value: "#ffffff",
    },
    links: {
      color: "#ffffff",
      distance: 150,
      enable: true,
      opacity: 0.2,
      width: 1,
    },
    move: {
      enable: true,
      speed: 2,
      direction: "none",
      random: false,
      straight: false,
      // out_mode: "bounce",
      // bounce: true,
      outModes: {
        default: "bounce",
      },
      attract: {
        enable: false,
        rotateX: 600,
        rotateY: 1200,
      },
    },
    number: {
      value: 80,
      density: {
        enable: true,
        value_area: 800,
      },
    },
    opacity: {
      value: 0.3,
      random: false,
      anim: {
        enable: false,
        speed: 1,
        opacity_min: 0.1,
        sync: false,
      },
    },
    shape: {
      type: "circle",
      stroke: {
        width: 0,
        color: "#000000",
      },
      polygon: {
        nb_sides: 5,
      },
    },
    size: {
      value: 2,
      random: true,
      anim: {
        enable: false,
        speed: 40,
        size_min: 0.1,
        sync: false,
      },
    },
    line_linked: {
      enable: true,
      distance: 150,
      color: "#ffffff",
      opacity: 0.4,
      width: 1,
    },
  },
  detectRetina: true,
};
