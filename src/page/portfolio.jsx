import React from "react";
import "../styles/portfolistyle.css"
import img1 from "../images/tarun right.png"

export default function Portfolio(){
    return(
        <>
        <div className="box">
            <div className="content">
                <img src={img1} ></img>
                <div className="name">Tarun S K<br></br></div><div className="skill"><span>Web Developer | Frontend</span></div>
                <a href="https://toxic-whitelgnd.github.io/portfolio-deploy/">Learn More</a>
            </div>
        </div>
        
        </>
    )
}