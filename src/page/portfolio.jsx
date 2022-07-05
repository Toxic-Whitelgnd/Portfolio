import React from "react";
import "../styles/portfolistyle.css"
import img1 from "../images/tarun right.png"
// import { Typewriter, useTypewriter, Cursor } from 'react-simple-typewriter'
import Typewriter from 'typewriter-effect';

export default function Portfolio(){
    return(
        <>
        <div className="box">
            <div className="content">
                <img src={img1} ></img>
                <div className="name">Tarun S K<br></br></div>

                <div className="skill">
                <Typewriter
                options={{
                    strings: ['Student','Coder','Frontend','Mobile App Developer','Gamer','Software Development'],
                    autoStart: true,
                    loop: true,
                    cursor: '#',
                    deleteSpeed: 40,
                    
                }}
                />
            </div>
                <a href="https://toxic-whitelgnd.github.io/portfolio-deploy/">Learn More</a>
            </div>
        </div>     
        </>
    )
}