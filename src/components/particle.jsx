"use client";

import React, { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";


const ParticleComponent = (props) => {
    const [init, setInit] = useState(false);
    useEffect(() => {
        initParticlesEngine(async(engine) => {
            await loadSlim(engine);
        }).then(() => {
            setInit(true);
        })
    }, []);

    const partilesLoaded = (container)=> {
        console.log(container);
    }
    const options = useMemo(() => ({
      background: {
        color: {
          value: "#0C0C0C"
        }
      },
      fullScreen: {
        enable: true,
        zIndex: 0
      },
      fpsLimit: 60,
      interactivity: {
        events: {
          onHover: {
            enable: true,
            mode: "repulse"
          },
          resize: true
        },
        modes: {
          repulse: {
            distance: 100,
            duration: 0.4
          }
        }
      },
      particles: {
        number: {
          value: 100,
          density: {
            enable: true,
            area: 800
          }
        },
        color: {
          value: "#ffffff"
        },
        shape: {
          type: "circle"
        },
        opacity: {
          value: 0.5
        },
        size: {
          value: 3
        },
        links: {
          enable: true,
          distance: 150,
          color: "#ffffff",
          opacity: 0.4,
          width: 1
        },
        move: {
          enable: true,
          speed: 2,
          direction: "none",
          random: false,
          straight: false,
          outModes: {
            default: "bounce"
          },
          attract: {
            enable: false
          }
        }
      },
      detectRetina: true
    }), []);
    
      return <Particles id={props.id} init={partilesLoaded} options={options} className="-z-100"/>;
}

export default ParticleComponent;