import food from "../Images/burger-image.png";

const About = () => {

    return(
        <div className="about-container">
            <div className="about-left">
                <h1>
                    Welcome to <br /> The world of <br /> <span>Tasty and Feash Food</span>
                </h1>
                <h4>
                    "Better you will feel if you eat a Food<span>Fire</span> healthy meal"
                </h4>
            </div>
            <div className="about-right">
                <img src="{food}" alt="Food Image"></img>
                
            </div>
                
        </div>
    );
};

export default About;