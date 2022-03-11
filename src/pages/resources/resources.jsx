import React from 'react';
import "./resources.styles.scss";
import ResourceItem from '../../components/resource-item/resource-item.component';

const Resources = () => {
  return (
    <div className="resources">
      <div className="resources__header">
        <h1>Student <span>Resources</span></h1>
      </div>

      <div className="resources__content">
        <ResourceItem addImg name="Departmental Time Table" />
        <ResourceItem  addText 
        name="Undergraduate Student Handbook" linkText="Download Undergraduate  Handbook"/>

        <ResourceItem addText 

        name="Undergraduates Textbooks and Course Notes" linkText="Download Undergraduates Textbooks and Course Notes"/>
      </div>
      

    </div>
  )
}

export default Resources;