import React from 'react'
import { faReact } from "@fortawesome/free-brands-svg-icons";
import { faNode } from "@fortawesome/free-brands-svg-icons";
import { faHtml5 } from "@fortawesome/free-brands-svg-icons";
import { faCss3 } from "@fortawesome/free-brands-svg-icons";
import { faJs } from "@fortawesome/free-brands-svg-icons";
import { faLeaf } from "@fortawesome/free-solid-svg-icons";
import { faJava } from "@fortawesome/free-brands-svg-icons";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import { faCaretUp } from '@fortawesome/free-solid-svg-icons';
import { gsap } from "gsap";
import Tech from "./Tech";
import { useGSAP } from '@gsap/react';

const TechStack = () => {

    useGSAP(() => {

        var t3 = gsap.timeline({
            scrollTrigger: {
              trigger: ".tech",
              // markers: true,
              start: "0 0%",
              end: "100% 50%",
              scrub: 0.4,
              pin: true,
            },
          });
      
          t3.to(
            ".top",
            {
              top: "-50%",
            },
            "a"
          )
            .to(
              ".bottom",
              {
                bottom: "-50%",
              },
              "a"
            )
            .to(
              ".top-h",
              {
                // bottom: "-1%",
                translateY: "80%"
              },
              "a"
            )
            .to(
              ".bottom-h",
              {
                // top: "-60%",
                translateY: "-30%"
              },
              "a"
            )
            .from(
              ".t",
              {
                y: 500,
              },
              "a"
            );
    })

  return (
    <div className="tech">
          <div className="top">
            <h1 className="top-h cursor_scale">TECH STACK</h1>
          </div>
          <div className="bottom">
            <h1 className="bottom-h cursor_scale">TECH STACK</h1>
          </div>
          {/* <div className="center"> */}
            <div className="t">
              <Tech head="React" icon={faReact} color="#005eff" />
              <Tech head="NextJs" icon={faCaretUp} color="#005eff" />
              <Tech head="Node" icon={faNode} color="black" />
              <Tech head="Html" icon={faHtml5} color="salmon" />
              <Tech head="Css" icon={faCss3} color="#005eff" />
              <Tech head="JavaScript" icon={faJs} color="rgb(255, 221, 0)" />
              <Tech head="Java" icon={faJava} color="red" />
              <Tech head="MongoDb" icon={faLeaf} color="green" />
              <Tech head="Express" icon={faCode} color="#005eff" />
              <Tech head="DSA" icon={faCode} color="#005eff" />
            </div>
          {/* </div> */}
        </div>
  )
}

export default TechStack
