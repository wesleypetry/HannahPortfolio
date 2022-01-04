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
                <p>This internship not only allowed me to master my skills in the Adobe suite, but it also gave me immense experience working with a design team in a small company environment. I learned how to take an established company’s brand and apply it to new, forward-moving designs. I took constructive criticism well and was even able to give feedback to other team members. </p>
            </div>
            <div className={blurOverlayStyle} onClick={changeStyle}></div>
        </div>
    );

}
export default POH;