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
                        <p>text text text</p>
                        <p>text text text</p>
                        <p>text text text</p>
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
                    <a href = "/Work">
                    <div className="GridItem">
                            <div className="GridOverlay">
                                <p></p>
                            </div>
                        </div>
                    </a>
                    <a href = "/Work">
                    <div className="GridItem">
                            <div className="GridOverlay">
                                <p></p>
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
                    <a href = "/Work">
                    <div className="GridItem">
                            <div className="GridOverlay">
                                <p></p>
                            </div>
                        </div>
                    </a>
                </div>
            </div>
        </div>
        

    );

}
export default Work;