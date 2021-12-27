import React,{useState} from "react";
import './projects.css';
import bankapp from './ProjectImages/bankapp.png';


function ClemsonFrisbee(props) {
    
    const [brandguideStyle, setStyle] = useState("brandguide");
    const [blurOverlayStyle, setBlurStyle] = useState("blurOverlay")
  
    const changeStyle = () => {
        if (brandguideStyle === "brandguide") {
            setStyle("brandguideZoom");
            setBlurStyle("blurOverlay-blur");
        }
        else {
            setStyle("brandguide");
            setBlurStyle("blurOverlay");
        }
        
    };

    return (
        <div className="container">
            <div className="colorheader">
                <div className="headertext">
                    <h1>Clemson Frisbee Website Concept</h1>
                    <h3>While learning HTML and CSS for the first time, I designed and coded a conceptual website for the Clemson Ultimate Frisbee Team.</h3>
                </div>
            </div>
            <div className="casestudy">
                <h2>The Task</h2>
                <p>During my sophomore year at Clemson, I learned HTML and CSS. I was tasked with a semester-long project of designing and developing a conceptual, responsive website for a student client.</p>
                <h2>Process</h2>
                <p>I first met with a student-client to discuss their purpose, goals and aesthetic look that they wanted the site to accomplish. 
                    <br/><br/>I decided to create a label for a beer bottle that showcased an octopus logo with an ocean in the background. Putting the name “Octoholic” and other alcohol information on the design really made the label look like it could be on a shelf at the grocery store. I then printed the labels on a flexography press using 4-color CMYK inks. On my final labels, I also printed a silver metallic cold foil outline on the octopus logo. This element really brought a unique element to the label and would definitely make it pop if it were on a shelf among the rest of the bottled beers. 
                    <br/><br/>I then created a 4-pack beer carrier to accompany the beer bottle label. I blew up the octopus logo to really emphasize it on the package. I added the name and necessary information to the diecut. I digitally printed the package on a flatbed press then cut and folded it together. Having these two matching pieces together made me very proud because they looked as though they were a real product. </p>
                <h2>Finished Designs</h2>
                <p>I took the student client’s wants and needs into consideration as a priority when I was designing this site. After multiple meetings with the client, they were greatly pleased with the result. View the final designs below or click here to see the site on your browser.</p>
                <img className={brandguideStyle} onClick={changeStyle} src = {bankapp} alt = "bankapp"/>
                <h2>Key Takeaways</h2>
                <p>Since this was my first time utilizing HTML and CSS code, I learned so much about designing websites. This was also the first time I had been introduced to the importance of the user experience of sites. This project really made me fall in love with user interface and design. Even though I may have done some things differently if this were a project I was doing currently, I found my passion through this project and am super proud of the final website that I designed and developed.</p>
            </div>
            <div className={blurOverlayStyle} onClick={changeStyle}></div>
        </div>
    );

}
export default ClemsonFrisbee;