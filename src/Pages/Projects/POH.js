import React,{useState} from "react";
import './projects.css';
import bankapp from './ProjectImages/bankapp.png';


function POH(props) {

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
                    <h1>Pieper O'brien Herr Internship</h1>
                    <h3>During Spring 2021, I worked as a Graphic Design Intern for Pieper O’Brien Herr Architects based in Alpharetta, GA.</h3>
                </div>
            </div>
            <div className="casestudy">
                <h2>The Brief</h2>
                <p>As a Graphic Design intern at Pieper O’Brien Herr (POH), I was tasked with creating social media posts, marketing material and external business graphics. Because of these projects, I was able to hone in on my experience with Adobe suite. </p>
                <h2>Inspiration + Process</h2>
                <p>When I arrived at POH, I took a look at the projects that the two graphic designers had previously completed. I knew that I wanted to make my projects more cohesive with the company’s brand by using their fonts, colors and various logos throughout my designs. For many of the projects I completed, I drew a lot of inspiration from exploring Behance and LinkedIn pages that I follow. I had to learn how to tailor my designs to a more business professional setting than I had before.
                    <br/><br/>I worked on a variety of projects including: physical materials boards for interior design of buildings, social media posts, proposal covers, and even short films conveying the company’s past and present work. I honed in on my expertise in Photoshop, Illustrator, InDesign and Premiere Pro specifically. 
                    <br/><br/>My favorite projects to work on were composite images for the master planning section of POH’s website. I really expanded my Photoshop skills while curating these images, and I gained a lot more confidence in the software. These projects also helped me learn how to take constructive criticism on my designs and turn them into something better and more effective.</p>
                <h2>Finished Designs</h2>
                <p>Throughout all of my projects at POH, I maintained a professional look while also keeping designs cohesive with the company’s brand. Take a look below at some of my final designs. </p>
                <img className={brandguideStyle} onClick={changeStyle} src = {bankapp} alt = "bankapp"/>
                <h2>Key Takeaways</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
            <div className={blurOverlayStyle} onClick={changeStyle}></div>
        </div>
    );

}
export default POH;