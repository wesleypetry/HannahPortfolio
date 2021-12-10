import React from "react";
import './projects.css';
import bankapp from './ProjectImages/bankapp.png';


function UXDesign(props) {
    return (
        <div classname="container">
            <div className="colorheader">
                <div className="headertext">
                    <h1>User Experience Design</h1>
                    <h3>This project is a redesign of the Bank of America mobile app. </h3>
                </div>
            </div>
            <div className="casestudy">
                <h2>The Task</h2>
                <p>During a User Experience Design course at Clemson, I was tasked with creating an app design centered around the experience of the user. I chose to redesign the Bank of America mobile app to be cleaner, more streamlined and have a better interface.</p>
                <h2>Inspiration + Process</h2>
                <p>I personally am a user of the Bank of America app. It has always felt difficult to navigate and accomplish tasks on. This is why I decided to redesign it and focus on the user this time. Bank of America has already established their brand colors, so that was something that I did not change.<br/><br/>First I created a moodboard of web apps and styles that that inspired me. After, I created a clean workflow that made sense. Having a simple workflow was very important to me because I wanted to make the user’s experience with the app as easy and straight-forward as possible. The next step was to create wireframes to clarify consistent ways for displaying particular types of information on the interface. From there, I curated high-fidelity mockups in order to show more detail and give a better taste of what the real user interface elements might look like. Finally, I used Invision to prototype my design and really make it come to life.</p>
                <h2>Finished Designs</h2>
                <p>After a moodboards and wireframes, I moved on to high-fidelity mockups and prototyping. Below are the final high-fidelity mockups. Click <a href="https://invis.io/FE124XZP586Q" target="_blank" rel="noreferrer noopener">here</a> to view the Invision prototype.</p>
                <img className="brandguide" src = {bankapp} alt = "bankapp"/>
                <h2>Key Takeaways</h2>
                <p>This was one of my favorite projects in my college career. I learned the ins and outs of user experience design. I think that I accomplished my goal of making the Bank of America app more refined and user-friendly. The design really draws attention to the most important reason why users open the banking app. I feel more confident in designing mobile and web apps for the user after completing this project.</p>
            </div>
        </div>
    );

}
export default UXDesign;