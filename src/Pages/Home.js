import React from "react";
import styles from './styles.modules.css'
import {Link} from 'react-router-dom';

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