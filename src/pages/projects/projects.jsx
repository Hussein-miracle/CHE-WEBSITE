import React from 'react';
import "./projects.styles.scss";
// import Proj from "../../assets/images/project-img-1.png"
// import Button from '../../components/button/button.component';
import {ReactComponent as  WorkInProgress} from "../../assets/images/undraw_work_in_progress.svg";

;
const Projects = () => {
  return (
    <div className="projects">
      <div className="people__header">
          <h1>Projects</h1>
      </div>
      <div className="projects__contents">
        <h5>Work in progress</h5>
        <WorkInProgress className="icon-progress"/>
      </div>
    </div>
  )
}

export default Projects;