import React, { Suspense, useEffect, useRef } from "react";
import "./Project.css";
import { useLocation } from "react-router-dom";

const Project = () => {

  useEffect(() => {
    window.scrollTo(0,0);
  },[])

  const location = useLocation();
  const link = location.state ? location.state.link : null;
  const about = location.state ? location.state.about : null;
  const github = location.state ? location.state.github : null;
  const head = location.state ? location.state.head : null;
  const image = location.state ? location.state.image : null;

  const visitWebsite = () => {
    window.open(link, '_blank');
  }
  const visitGithub = () => {
    window.open(github, '_blank');
  }

  return (
    <div className="project_main">
      <div className="project_cont">
        <div className="project_left">
          <h1>{head}</h1>
          <div>
            <p>{about}</p>
            <div>
              <button onClick={() => visitWebsite()} >Visit Site</button>
              <button onClick={() => visitGithub()} >Github</button>
            </div>
          </div>
        </div>
        <div className="project_right">
            <img src={image} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Project;
