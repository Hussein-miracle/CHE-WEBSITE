import React,{useState} from 'react';
import { motion ,AnimatePresence } from 'framer-motion';
import {Link} from "react-router-dom";

import img from  "../../assets/images/project-img-1.png"
import {ReactComponent as ArrowDown} from "../../assets/icons/down__icon.svg";

import "./resource-item.styles.scss";

const v = {
    initial:{
        opacity:0,
        y:"-50%"
    },
    final:{
        opacity:1,
        y:0
    },
    exit:{
        opacity:0,
        transition:{
            delay:.4,
            duration:1
        }
    }
}
const ResourceItem = ({addImg,name,linkText,addText,variants}) => {
    const [clicked,setClicked] = useState(false);

  return (
    <motion.div className="resource-item" style={{
        borderBottom:clicked ? "none" : "1px solid #C4C4C4"
    }}
    
    variants={variants}

    initial="initial"

    animate="final"
    
    >
        <div className="resource-item__title"
        onClick={() => setClicked(!clicked)}
        >
            <h2>{name}</h2> <ArrowDown 
            onClick={() => setClicked(!clicked)}
             style={{
                rotate:clicked ? "80deg" : "0"
            }}         
            className="resource-item__btn"/>
        </div>

        <motion.div className="resource-item__content" style={{
            display:clicked ? "flex" :"none",
        }}
        variants={v}

    initial="initial"

    animate="final"
        exit="exit"
        
        >
            <AnimatePresence exitBeforeEnter>
            {addImg ? 
            (<motion.img className="resource-item__img" src={img} alt={name}
              variants={v}

                initial="initial"

                animate="final"
                exit="exit"
            
            ></motion.img>  )
            : null
            }
         </ AnimatePresence>


         <AnimatePresence exitBeforeEnter>
            {addText ? 
            <motion.div className="resource-item__link"
            variants={v}

                initial="initial"

                animate="final"
            exit="exit"
            >
                <Link to="#">{linkText}
                </Link>
            </motion.div> 
            :null
            }
            </AnimatePresence>
        </motion.div>
        
    </motion.div>
  )
}

export default ResourceItem;