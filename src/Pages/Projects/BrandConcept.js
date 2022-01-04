import React, { useState } from 'react';
import './projects.css';
import brandguide from './ProjectImages/brandguide.png';


function BrandConcept(props) {

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
            <div className="colorheader-p">
                <div className="headertext">
                    <h1>Botanical Brand Concept</h1>
                    <h3>In Fall 2020, I was tasked with a semester-long project. This project was to create a brand and all of the assets to accompany its creation. This included brand guidelines, a brand story booklet, a brochure, and a variable data printed booklet. </h3>
                </div>
            </div>
            <div className="casestudy">
                <h2>The Brief</h2>
                <p>The task was to create my own mock brand from scratch. I then had to design and produce multiple items to accompany its creation includuing brand specifications, a brand story booklet, a brochure, and a variable data printed booklet. All of these concepts were carried from design to production on various printing presses. </p>
                <h2>Inspiration + Process</h2>
                <p>After ample brainstorming, I decided to create a brand called “Botanical” inspired by zero-waste living and clean ingredients. Since starting my college career, I became very interested in the zero-waste lifestyle. I learned a lot about how plastic waste is harming the environment, so I decided to create Botanical as an all natural, zero-waste company that sells skincare products.<br/><br/>I created thumbnail logo designs, finally deciding on one. Next, I created a brand guide containing colors, fonts, logo variations and the overall style of Botanical. From there, I designed a trifold brochure meant to be sent to customers via mail to inform them about the brand, mission and products. I printed this piece using a HP Indigo 5000 digital printing press. Next, I designed a variable data printed (VDP) booklet using Adobe InDesign in conjunction with XMPie uCreate software. XMPie makes it possible to take data and use it to make different variables in a design. Many variables change in this piece including the recipient's name, the information on page 5 pertaining to each person's skin type, and colors of graphics and images. Finally, I created the brand's story, which showcases Botanical's marketing strategy, brand specifications, and a detailed look at the variable data printed booklet.</p>
                <h2>Finished Designs</h2>
                <p>I stuck to the brand guidelines I created throughout this entire project. Below you can view each of the different pieces that made up this project from start to finish. </p>
                <img className={brandguideStyle} src = {brandguide} onClick={changeStyle} alt = "brandguide"/>              
                <iframe title="brandguide booklet" allowfullscreen="allowfullscreen" scrolling="no" className="iframe" src="https://heyzine.com/flip-book/7e5aad1792.html" width="100%" height="400px"></iframe>                
                <h2>Key Takeaways</h2>
                <p> I really enjoyed this project because I was able to basically create something from the ground up and really build it to what I wanted it to be. I was able to bring my ideas to life through print media. It also opened my eyes on the creative and design side of branding. I learned new software, like XMPie, that is used in marketing campaigns. Even though this project was conceptual, it felt real when I had all of the pieces together. </p>
            </div>
            <div className={blurOverlayStyle} onClick={changeStyle}></div>
        </div>
    );

}
export default BrandConcept;