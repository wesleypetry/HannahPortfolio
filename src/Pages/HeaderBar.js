import React from 'react';
import './styles.modules.css';

function HeaderBar(props) {
    return (
        <div className="HeaderBar">
            <a href="/">
                <h1>Home</h1>
            </a>
            <a href="/About">
                <h1>About</h1>
            </a>
        </div>
    )
}

export default HeaderBar;
