import React from "react";
import './styles.modules.css';
import headshotedited from './Images/headshotedited.png';

function About(props) {
    return (
        <div className="AboutWrapper">
            <img className="headshot" src = {headshotedited} alt = "headshot" />
            <div className="AboutText">
                <div className="AboutTitle">
                    <h1>Hannah Braswell</h1>
                </div>
                <div className="aboutparagraph">
                    <p>Hi! Thanks for dropping by! I am currently a Senior at Clemson University finishing up my Bachelor’s Degree in Graphic Communications and graduating in May 2022. I have thoroughly enjoyed my time as a student while learning and growing throughout my college career. I have always had an extreme passion for design from photography to architecture to graphic design. Growing up in a family whose careers are design-oriented, I have been around the principles and aspects of design my entire life. Being in the graphic communications department at Clemson has really expanded my skills and allowed my passion for design to grow even further.</p>
                    <p>My time as a student has allowed me to experience 3+ of design, branding and communication classes. I have completed courses in graphic design processes, marketing, and web development. I am advanced in Adobe Suite including Illustrator, InDesign and Photoshop. I have had immense experience in Adobe XD, After Effects, Premiere Pro and Lightroom. I am highly proficient in Sketch and Invision as I have utilized them for projects concerning user experience design. I also have experience with photography. </p>
                    <p>User experience and code was first introduced to me during my sophomore year at Clemson. I took a course on web development where I learned how to code HTML and CSS. Since then, I have fallen in love with web design and development. My passion for user experience and interface expanded when I took a UX design course. I was able to go through the entire process of designing a mobile app with the user in mind. During this course, I was also tasked with designing and coding my own portfolio – the one you’re looking at right now! I took it upon myself to learn ReactJs to code my portfolio as it was something that I had been wanting to learn, and it was a great way to challenge myself.</p>
                    <p>My goal is to obtain knowledge and experience with design-related industries in the real world. I have an extreme passion for user experience and interface, and I would love to pursue this passion in my career. I see myself being an important asset to a team focused on design, development and the user. </p>
                    <h2>Contact Me</h2>
                    <p>hbraswe@g.clemson.edu</p>
                 </div>
            </div>
        </div>
    );

}
export default About;