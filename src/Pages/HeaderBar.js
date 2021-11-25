import React from 'react';
import './styles.modules.css';

function HeaderBar(props) {
    return (
        <div className="HeaderBar">
            <a href="/" className="H1_Link">
                <h1 className="H1_Header">home</h1>
            </a>
            <a href="/About" className="H1_Link">
                <h1 className="H1_Header">about</h1>
            </a>
            <a href="/Contact" className="H1_Link">
                <h1 className="H1_Header">contact</h1>
            </a>
            <a href="/Work" className="H1_Link">
                <h1 className="H1_Header">work</h1>
            </a>
        </div>
    )
}

export default HeaderBar;
