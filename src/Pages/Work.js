import React from "react";
import './styles.modules.css';
import ArrowDropDownCircleIcon from '@material-ui/icons/ArrowDropDownCircle';

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
                <a href = "/Work">
                    <ArrowDropDownCircleIcon className="ArrowDown"/>
                </a>
            </div>
            <div className="WorkDiv">
                <div className="WorkGrid">
                    <a href = "/Work">
                        <div className="GridItem">AccruePartners Internship</div>
                    </a>
                    <a href = "/Work">
                        <div className="GridItem">Pieper O'Brien Herr Internship</div>
                    </a>
                    <a href = "/Work">
                        <div className="GridItem"></div>
                    </a>
                    <a href = "/Work">
                        <div className="GridItem"></div>
                    </a>
                    <a href = "/UXDesign">
                        <div className="GridItem">User Experience Design</div>
                    </a>
                    <a href = "/Work">
                        <div className="GridItem">Brand Creation and Design Concepts</div>
                    </a>
                    <a href = "/Work">
                        <div className="GridItem">Clemson Ultimate Frisbee Website Concept</div>
                    </a>
                    <a href = "/Work">
                        <div className="GridItem">Brand Creation and Design Concepts</div>
                    </a>
                    <a href = "/Work">
                        <div className="GridItem"></div>
                    </a>
                </div>
            </div>
        </div>
        

    );

}
export default Work;