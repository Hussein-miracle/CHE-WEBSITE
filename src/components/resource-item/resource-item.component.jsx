import React,{useState} from 'react';
import {Link} from "react-router-dom";
import { motion } from 'framer-motion';
// import 
import img from  "../../assets/images/project-img-1.png"
import {ReactComponent as ArrowDown} from "../../assets/icons/down__icon.svg";

import "./resource-item.styles.scss";

const ResourceItem = ({addImg,name,linkText,addText}) => {
    const [clicked,setClicked] = useState(false);
  return (
    <div className="resource-item" style={{
        borderBottom:clicked ? "none" : "1px solid #C4C4C4"
    }}>
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

        <div className="resource-item__content" style={{
            display:clicked ? "flex" :"none",
        }}>
            {addImg ? 

            <img className="resource-item__img" src={img}/> 

            :null
            
            }
            {addText ? 
            <div className="resource-item__link">
                <Link to="#">{linkText}
                </Link>
            </div> 
            :null
            }
        </div>
    </div>
  )
}

export default ResourceItem;