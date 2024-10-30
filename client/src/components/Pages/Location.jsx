import React from "react";
import karachi from '../images/karachi.png'
import Footer from '../FooterEnd/FooterEnd'

export default function Location() {
    return(
       <div className="location-body">
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <img src={karachi} alt=""/>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <h1>Address</h1>
        <h2>XXX,123, Karachi Pakistan.</h2>
        <br></br>
        <br></br>
        <br></br>

        <Footer/>
       </div>
    );
}