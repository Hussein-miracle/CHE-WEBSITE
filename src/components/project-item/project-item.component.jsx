import React from 'react';
import Button from '../button/button.component';
import "./project-item.styles.scss";

const ProjectItem = () => {
  return (
    <div>
        <img src={``} alt="img T"/>
        <div className="div">
            <h2>title</h2>
            <h3>sub-title</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore accusantium soluta reiciendis odit? Vel esse libero, itaque fugit rerum dolore laboriosam. Cumque, voluptas. Perferendis dolores vero provident ut, aliquid amet.</p>
            <Button text="Read More" />
        </div>
    </div>
  )
}

export default ProjectItem;