
import React from "react";
import banner from "../assets/img/home-banner-1.png";
import {Link} from "react-router-dom";  


const HeroSection = () =>{

    return(

        <div className="HeroSection">

        <div id="leftDiv">
        <h1 id="heading"> Discover the best <br></br>food & drinks Best Restaurants </h1>
        <p><b>There are many variations of passages, but the majority<br></br> have suffered alteration in some form, by injected humour, <br></br>or randomised words which don't look even.. </b></p>

        <div className="btns">
       <Link to="/about"> <button id="btn">Explore Recipes</button></Link>
       <Link to="/grocery"> <button id="btn">Explore Food</button></Link>
       
        </div>
        </div >

        <div id="rightDiv">
            <img src={banner} alt="imge" />
        </div>

        </div>
    );
}

export default HeroSection;