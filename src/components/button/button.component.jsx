import React from "react";
import "./button.styles.scss";

const Button = ({text})=>{
    return (
        <>
            <button className="btn">{text}</button>
        </>
    )
}

export default Button;