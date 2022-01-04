import React,{useState} from "react";
import './projects.css';

function ClemsonFrisbee(props) {
    
    const [brandguideStyle, setStyle] = useState("FrisbeeImage");
    const [blurOverlayStyle, setBlurStyle] = useState("blurOverlay")
  
    const changeStyle = () => {
        if (brandguideStyle === "FrisbeeImage") {
            setStyle("FrisbeeImageZoom");
            setBlurStyle("blurOverlay-blur");
        }
        else {
            setStyle("FrisbeeImage");
            setBlurStyle("blurOverlay");
        }
        
    };

    return (
        <div className="container">
            <div className="colorheader-g">
                <div className="headertext">
                    <h1>Clemson Frisbee Website Concept</h1>
                    <h3>While learning HTML and CSS for the first time, I designed and coded a conceptual website for the Clemson Ultimate Frisbee Team.</h3>
                </div>
            </div>
            <div className="casestudy">
                <h2>The Brief</h2>
                <p>During my sophomore year at Clemson, I learned HTML and CSS. I was tasked with a semester-long project of designing and developing a conceptual, responsive website for a student client.</p>
                <h2>Process</h2>
                <p>I first met with a student-client to discuss their purpose, goals and aesthetic look that they wanted the site to accomplish. 
                    <br/><br/>This client wanted a website to showcase the Clemson Women’s Ultimate Frisbee Team. They wanted to feature the roster, practice and tournament information and a contact form. They provided images and text they wanted to include on the site. They had a few ideas sketched that we discussed and determined one of the sketches to be the most ideal. 
                    <br/><br/>I began by creating wireframes using Adobe XD. I then previewed these wireframes with the client where we tweaked details. After agreeing on the wireframes, I moved on to high fidelity mockups to ensure the coding process would go as smoothly as possible. 
                    <br/><br/>I then began coding the website using HTML and CSS languages. Since this was my first time coding a full site, it was a great challenge for me. I also made the site responsive with three different media screens: desktop, tablet and mobile phone. I was able to figure out how to code the site exactly like the mockups, and I was very pleased with the final website. 
                </p>
                <h2>Finished Designs</h2>
                <p>I took the student client’s wants and needs into consideration as a priority when I was designing this site. After multiple meetings with the client, they were greatly pleased with the result. View the final designs below or click here to see the site on your browser.</p>
                <div className={brandguideStyle} onClick={changeStyle}/>
                <h2>Key Takeaways</h2>
                <p>Since this was my first time utilizing HTML and CSS code, I learned so much about designing websites. This was also the first time I had been introduced to the importance of the user experience of sites. This project really made me fall in love with user interface and design. Even though I may have done some things differently if this were a project I was doing currently, I found my passion through this project and am super proud of the final website that I designed and developed.</p>
            </div>
            <div className={blurOverlayStyle} onClick={changeStyle}></div>
        </div>
    );

}
export default ClemsonFrisbee;