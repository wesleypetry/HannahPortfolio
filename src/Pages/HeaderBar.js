import React from 'react';
import './styles.modules.css';


function HeaderBar(props) {

    return (
        <div className="HeaderBar">
            <div className="H1_Logo">
                <h1 className="H1_Header">HANNAH BRASWELL</h1>
            </div>
            <div className="NavButtons">
                <a href="/" className="H1_Link">
                    <h1 className="H1_Header">WORK</h1>
                </a>
                <a href="/About" className="H1_Link">
                    <h1 className="H1_Header">ABOUT</h1>
                </a>
                <a href="/Contact" className="H1_Link">
                    <h1 className="H1_Header">CONTACT</h1>
                </a>
                <a href="/Resume" className="H1_Link">
                    <h1 className="H1_Header">RESUME</h1>
                </a>
            </div>
        </div>
    )
}

export default HeaderBar;
