import React from "react";
import './styles.modules.css';


function Work(props) {
    return (
        <div>
            <div className="HomeDiv">
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
                    <a href = "/Work">
                        <div className="GridItem">
                            <div className="GridOverlay">
                                <p>AccruePartners Internship</p>
                            </div>
                        </div>
                    </a>
                    <a href = "/Work">
                        <div className="GridItem">
                            <div className="GridOverlay">
                                <p>Pieper O'Brien Herr Internship</p>
                            </div>
                        </div>
                    </a>
                    <a href = "/UXDesign">
                        <div className="GridItem">
                            <div className="GridOverlay">
                                <p>User Experience Design</p>
                            </div>
                        </div>
                    </a>
                    <a href = "/Work">
                        <div className="GridItem">
                            <div className="GridOverlay">
                                <p>Brand Creation and Design Concepts</p>
                            </div>
                        </div>
                    </a>
                    <a href = "/Work">
                        <div className="GridItem">
                            <div className="GridOverlay">
                                <p>Clemson Ultimate Frisbee Website Concept</p>
                            </div>
                        </div>
                    </a>
                    <a href = "/Work">
                        <div className="GridItem">
                            <div className="GridOverlay">
                                <p>Brand Creation and Design Concepts</p>
                            </div>
                        </div>
                    </a>
                </div>
            </div>
        </div>
        

    );

}
export default Work;