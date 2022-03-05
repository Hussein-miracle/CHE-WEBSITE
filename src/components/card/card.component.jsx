import React from "react";
import "./card.styles.scss";

import Button from "../button/button.component";

const Card = ({imgUrl})=> {
    return(
        <div className="card">
            <img src={`${imgUrl}`} alt="" className="card__img" />
            <p className="card__content">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <Button style={{
                textAlign:"center"
            }}/>
        </div>
    )
}

export default Card;