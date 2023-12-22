import React, { Suspense, useEffect, useRef } from "react";
import "./Project.css";
import { Canvas, useFrame } from "@react-three/fiber";
import { ContactShadows, Environment, OrbitControls } from "@react-three/drei";
import Expense_Splitter from "../../../public/Expense_splitter";
import Ecommerce from "../../../public/Ecommerce"
import Quizwiz from "../../../public/Quizwiz"
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { useLocation } from "react-router-dom";



const Project = () => {

  useEffect(() => {
    window.scrollTo(0,0);
  },[])

  const location = useLocation();
  const link = location.state ? location.state.link : null;
  const about = location.state ? location.state.about : null;
  const model = location.state ? location.state.model : null;

  const RotatingObject = () => {
    const ref = useRef();
    const rotationSpeed = 0.01;
  
    useFrame(() => {
      if (ref.current) {
        ref.current.rotation.y += rotationSpeed;
      }
    });
  
  
    if(model === 1){
      return (
        <group ref={ref}>
          <Expense_Splitter />
        </group>
      );
    } else if(model === 2) {
      return (
        <group ref={ref}>
          <Ecommerce />
        </group>
      );
    } else if(model === 3){
      return (
        <group ref={ref}>
          <Quizwiz />
        </group>
      );
    }
  };

  const visitWebsite = () => {
    window.open(link, '_blank');
  }

  return (
    <div className="project_main">
      <div className="laptop_cont">
        <Canvas className="project_canvas" style={{height: "90vh"}} >
          <ambientLight intensity={5} />
          <OrbitControls enableZoom={false} />
          <ContactShadows position={[0, -4, 0]} />
          {/* <Environment preset="dawn" /> */}
          <Suspense fallback={null}>
            <RotatingObject />
          </Suspense>
        </Canvas>
        <div onClick={visitWebsite} className="visit_web visit_web1">
          <FontAwesomeIcon icon={faGlobe} size="3x" />
          <h1>Visit Website</h1>
        </div>
        <div className="visit_web visit_web2">
          <h1>Visit Website</h1>
          <FontAwesomeIcon icon={faGlobe} 
          // size={window.innerWidth < 500?"10x":"3x"}
          size="3x"
          />
        </div>
      </div>
      <div className="case_study">
        <h1>About</h1>
        <p>
          {about}
        </p>
      </div>
    </div>
  );
};

export default Project;
