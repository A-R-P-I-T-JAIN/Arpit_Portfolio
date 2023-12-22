import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Draggable } from "gsap/Draggable";
gsap.registerPlugin(ScrollTrigger, Draggable);
import "./Hero.css";
import self_1 from "../../assets/self_1.png";
import random_1 from "../../assets/random_1.png";
import random_2 from "../../assets/random_2.png";
import random_3 from "../../assets/random_3.png";
import random_4 from "../../assets/random_4.png";
import { useGSAP } from "@gsap/react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Sphere } from "@react-three/drei";
import { pointsInner, pointsOuter } from "./utils";
import logo from "../../assets/aj_logo.png";

import Projects from "./Projects";
import TechStack from "./TechStack";
import Connect from "./Connect";

const Hero = () => {

  const [hovered,setHovered] = useState(false)

  const handleMouseEnter = () => {
    gsap.to(cursor.current, {
      // scale: 6,
      width: "200px",
      height: "200px",
      duration: 0.3,
      ease: 'power2.out',
      backgroundColor: "white",
      onComplete:() => {
        cursor.current.style.mixBlendMode = "difference"
      }
    });
  };
  
  const handleMouseLeave = () => {
    gsap.to(cursor.current, {
      width: "50px",
      height: "50px",
      duration: 0.3,
      ease: 'power2.out',
      backgroundColor: "transparent",
      onComplete:() => {
        cursor.current.style.mixBlendMode = "normal"
      }
    });
  };

  const cursor = useRef()

  const changePosition = (e) => {
    gsap.to(cursor.current, {
      top: e.clientY,
      left: e.clientX,
      duration: 0.2, // Adjust the duration as needed
      ease: 'power2.out', // Adjust the easing function as needed
    });
  };

  const ref = useRef();

  useGSAP(() => {
    gsap.to(ref.current, {
      width: "100vw",
      height: "100vh",
      borderRadius: 0,
      duration: 10,
      backgroundColor: "grey",
      scrollTrigger: {
        trigger: ".hero_main",
        // markers: {
        //     startColor: "red",
        //     endColor: "blue"
        // },
        start: "5% 0%",
        end: "90% 0%",
        scrub: 0.5,
      },
    });

    var t1 = gsap.timeline({
      scrollTrigger: {
        trigger: ".about",
        // markers: {
        //     startColor: "white",
        //     endColor: "yellow"
        // },
        start: "0% 50%",
        end: "0% 20%",
        scrub: 0.5,
      },
    });

    t1.from(".about_square", {
      y: 500,
    });
    t1.from(".self_1_img", {
      x: -500,
      y: 300,
    });
    t1.from([".random_1", ".random_2", ".random_3", ".random_4", ".random_5"], {
      opacity: 0,
    });

    var t2 = gsap.timeline({
      scrollTrigger: {
        trigger: ".about",
        // markers: {
        //     startColor: "orange",
        //     endColor: "grey"
        // },
        start: "0% 20%",
        end: "0% 1%",
        scrub: 0.5,
      },
      onComplete: () => {
        ScrollTrigger.refresh();
      },
    });

    t2.from(".about_right h1", {
      x: 800,
    });
    t2.from(".about_right p", {
      x: 800,
    });
  });

  const main_heading = "< Full Stack Web Developer />";
  const l = "<";
  const r1 = ">";
  const r2 = "/>";

  const PointCircle = () => {
    const ref = useRef(null);

    useFrame(({ clock }) => {
      if (ref.current?.rotation) {
        ref.current.rotation.z = clock.getElapsedTime() * 0.05;
      }
    });

    return (
      <group ref={ref}>
        {pointsInner.map((point) => (
          <Point
            key={point.idx}
            position={point.position}
            color={point.color}
          />
        ))}
        {pointsOuter.map((point) => (
          <Point
            key={point.idx}
            position={point.position}
            color={point.color}
          />
        ))}
      </group>
    );
  };

  const Point = ({ position, color }) => {
    return (
      <Sphere position={position} args={[0.1, 10, 10]}>
        <meshStandardMaterial
          emissive={color}
          emissiveIntensity={0.5}
          roughness={0.5}
          color={color}
        />
      </Sphere>
    );
  };

  return (
    <>
      <div onMouseMove={changePosition} className="main">
        <div style={{display: window.innerWidth < 768?"none":""}} ref={cursor} className="cursor"></div>
        <div className="hero_main">
          <Canvas
            camera={{
              position: [10, -7.5, -5],
            }}
            className="hero_canvas"
          >
            <OrbitControls enableZoom={false} />
            <directionalLight />
            <pointLight position={[-30, 0, -30]} power={10.0} />
            <PointCircle />
          </Canvas>

          <div className="hero_head">
            <img 
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
             src={logo} alt="" />
            <h3>Hii,</h3>
            <h2 
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className="cursor_scale">
              I am Arpit</h2>
            <h1 
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className="cursor_scale">{main_heading}</h1>
          </div>
        </div>

        <div className="about_temp">
          <div ref={ref} className="about">
            <div className="about_left">
              <img className="self_1_img cursor_scale" src={self_1} alt="" />
              <div className="about_square"></div>
              <img src={random_1} alt="" className="random_1" />
              <img src={random_2} alt="" className="random_2" />
              <img src={random_3} alt="" className="random_3" />
              <img src={random_4} alt="" className="random_4" />
              <img src={random_4} alt="" className="random_5" />
            </div>

            <div className="about_right">
              <h1 onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} >About Me</h1>
              <p onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} >
                Hello, I'm a dedicated full-stack web developer currently in my
                second year of pursuing a B.Tech in Information Technology at
                Jabalpur Engineering College. My journey in technology has been
                marked by a deep exploration of the MERN stack, where I've honed
                my skills in MongoDB, Express.js, React, and Node.js. Alongside
                my proficiency in the web development arena, I bring a strong
                foundation in Java and a comprehensive understanding of Data
                Structures and Algorithms. This well-rounded expertise empowers
                me to approach projects with versatility and problem-solving
                finesse. I am driven by a passion for innovation and a
                commitment to continuous learning, always seeking opportunities
                to expand my knowledge and contribute to cutting-edge projects.
                My goal is to leverage my skills to make a meaningful impact in
                the ever-evolving landscape of technology.
              </p>
            </div>
          </div>
          <div className="hello_world">
            <h1 onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} >HELLO</h1>
            <h1 onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} >WORLD</h1>
          </div>
        </div>

        {/* <div className="temp2"></div> */}

        <TechStack />
        <div className="temp"></div>
        <Projects />
        <Connect />
      </div>
    </>
  );
};

export default Hero;
