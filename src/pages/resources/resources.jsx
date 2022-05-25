import React from 'react';
import { motion } from 'framer-motion';
import "./resources.styles.scss";
import ResourceItem from '../../components/resource-item/resource-item.component';
const PeopleVariants = () => ({
  initial:{
      opacity:0,
      y:"-100vh",
  },
  end:{
      y:0,
      opacity:1,
      transition:{
        when:"beforeChildren",
          delay:.025,
          type:"spring",
          damping:30
      }
  },
  exit:{
      opacity:0,
      y:"100vh",
      transition:{
        when:"beforeChildren",
        delay:.025,
        type:"spring",
        damping:30
      }
  }
})
const Resources = () => {
  return (
    <motion.div className="resources" 
    variants={PeopleVariants()}
    initial="initial"
    animate="end"
    exit="exit"
    >

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
              ease:"easeInOut",
              duration:1,
              delay:0 * 0.5
            }
          },
          exit:{
            opacity:0,
            x:'-100vw',
            transition:{
                ease:"easeInOut",
                duration:1,
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
              ease:"easeInOut",
              duration:1,
              delay:1 * 0.5
            },
          exit:{
            opacity:0,
            y:-50,
            transition:{
                ease:"easeInOut",
                duration:1,
                when:"beforeChildren",
               delay:1 * 0.5
            }
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
              ease:"easeInOut",
              duration:1,
              delay:2 * 0.5
            }
          },
          exit:{
            opacity:0,
            y:-50,
            transition:{
                ease:"easeInOut",
                duration:1,
                when:"beforeChildren",
               delay:2 * 0.5
            }
        }
        }} 

        name="Undergraduates Textbooks and Course Notes" linkText="Download Undergraduates Textbooks and Course Notes"/>

        
      </div>
      

    </motion.div>
  )
}

export default Resources;