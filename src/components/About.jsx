import burger from "../assets/img/aboutburger.png";
const About = () =>{

    return(
        <>
        <div className="container">
        <div className="text">
            <h2>Welcome to</h2>
            <h1>The world of</h1>
            <h1><span className="highlight">Tasty & Fresh Food</span></h1>
            <p className="tagline">"Better you will feel if you eat a <b>Food<span>Fire</span></b> healthy meal"</p>
        </div>
        <div className="image">
           <img src={burger} alt="" />
        </div>
        </div>
        </>
    );
}
export default About;