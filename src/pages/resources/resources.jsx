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

        <ResourceItem variants={{
          initial:{
            opacity:0,
            y:50
          },
          final:{
            y:0,
            opacity:1,
            transition:{
              when:"beforeChildren",
              delay:0 * 0.5
            }
          }
        }} 
        addImg name="Departmental Time Table" />


        <ResourceItem 
        variants={{
          initial:{
            opacity:0,
            y:50
          },
          final:{
            y:0,
            opacity:1,
            transition:{
              when:"beforeChildren",
              delay:1 * 0.5
            }
          }
        }} 
         addText 
        name="Undergraduate Student Handbook" linkText="Download Undergraduate  Handbook"/>

        <ResourceItem addText 
        variants={{
          initial:{
            opacity:0,
            y:50
          },
          final:{
            y:0,
            opacity:1,
            transition:{
              when:"beforeChildren",
              delay:2 * 0.5
            }
          }
        }} 

        name="Undergraduates Textbooks and Course Notes" linkText="Download Undergraduates Textbooks and Course Notes"/>

        
      </div>
      

    </div>
  )
}

export default Resources;