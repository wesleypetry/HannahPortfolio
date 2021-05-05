import React from "react";
import './styles.modules.css';

function Home(props) {
    return (
        <div className="HomeDiv">
            <h1>Hannah's Portfolio</h1>
            <a href ="/About">
                <button>About Me</button>
            </a>
        </div>
    );

}
export default Home;