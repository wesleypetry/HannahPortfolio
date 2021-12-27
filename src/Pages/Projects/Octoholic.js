import React,{useState} from "react";
import './projects.css';
import bankapp from './ProjectImages/bankapp.png';


function Octoholic(props) {
    
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
                    <h1>Octoholic Beer Packaging Concept</h1>
                    <h3>In Fall 2021, I designed and printed a beer bottle label and 4-pack beer carrier for a brand a created called “Octoholic”.</h3>
                </div>
            </div>
            <div className="casestudy">
                <h2>The Task</h2>
                <p>During my fall semester of senior year, I was tasked with creating a 4-color label and package for a conceptual brand. The goal was to learn to use a flexography press to print the label and a digital printer to output the package.</p>
                <h2>Inspiration + Process</h2>
                <p>My inspiration came from my love for the ocean and my small knowledge of local beer. 
                    <br/><br/>I decided to create a label for a beer bottle that showcased an octopus logo with an ocean in the background. Putting the name “Octoholic” and other alcohol information on the design really made the label look like it could be on a shelf at the grocery store. I then printed the labels on a flexography press using 4-color CMYK inks. On my final labels, I also printed a silver metallic cold foil outline on the octopus logo. This element really brought a unique element to the label and would definitely make it pop if it were on a shelf among the rest of the bottled beers. 
                    <br/><br/>I then created a 4-pack beer carrier to accompany the beer bottle label. I blew up the octopus logo to really emphasize it on the package. I added the name and necessary information to the diecut. I digitally printed the package on a flatbed press then cut and folded it together. Having these two matching pieces together made me very proud because they looked as though they were a real product.</p>
                <h2>Finished Designs</h2>
                <p>I had a cohesive theme across both pieces of this project. I am very proud of this work as it was a unique projec to complete that took an immense amount of time and effort. Below you can view the final label and beer carrier together. </p>
                <img className={brandguideStyle} onClick={changeStyle} src = {bankapp} alt = "bankapp"/>
                <h2>Key Takeaways</h2>
                <p>Throughout this semester long project, I learned how to use a Nilpeter flexography press and a digital flatbead printer and cutter. I also got to really experiment with my own conceptual brand and had a lot of freedom in what I wanted the end products to look like. </p>
            </div>
            <div className={blurOverlayStyle} onClick={changeStyle}></div>
        </div>
    );

}
export default Octoholic;