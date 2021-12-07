import React from "react";
import './styles.modules.css';
import heroimage from './Images/heroimage.png';


function Work(props) {
    return (
        <div>
            <div className="HomeDiv">
                <img className="HeroImage" src = {heroimage} alt = "heroimage" />
                <div className="IntroHeaderDiv">
                    <h1>Hi, I'm Hannah</h1>
                </div>
                <div className="IntroTextDiv">
                    <div>
                        <p>I’m an aspiring user experience designer. I’m passionate about crafting user experiences and design systems for mobile and web products. </p>
                        <p>I am currently finishing my Bachelor’s Degree in Graphic Communications at Clemson University and am graduating in May 2022. </p>
                    </div>
                </div>
            </div>
            <div className="WorkDiv">
                <div className="WorkGrid">
                    <a href = "/UXDesign">
                        <div className="GridItem1">
                            <div className="GridOverlay">
                                <p className="GridItemText">User Experience Design</p>
                            </div>
                        </div>
                    </a>
                    <a href = "/Work">
                        <div className="GridItem2">
                            <div className="GridOverlay">
                                <p className="GridItemText">AccruePartners Internship</p>
                            </div>
                        </div>
                    </a>
                    <a href = "/Work">
                        <div className="GridItem3">
                            <div className="GridOverlay">
                                <p className="GridItemText">Pieper O'Brien Herr Internship</p>
                            </div>
                        </div>
                    </a>
                    
                    <a href = "/Work">
                        <div className="GridItem4">
                            <div className="GridOverlay">
                                <p className="GridItemText">Clemson Ultimate Frisbee Website Concept</p>
                            </div>
                        </div>
                    </a>
                    <a href = "/Work">
                        <div className="GridItem5">
                            <div className="GridOverlay">
                                <p className="GridItemText">Brand Creation and Design Concepts</p>
                            </div>
                        </div>
                    </a>
                    <a href = "/Work">
                        <div className="GridItem6">
                            <div className="GridOverlay">
                                <p className="GridItemText">Octoholic Beer Packaging Concept</p>
                            </div>
                        </div>
                    </a>
                </div>
            </div>
        </div>
        

    );

}
export default Work;