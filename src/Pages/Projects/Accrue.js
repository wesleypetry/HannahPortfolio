import React,{useState} from "react";
import './projects.css';
import AccrueImage from './ProjectImages/accrue.png';


function Accrue(props) {

    const [brandguideStyle, setStyle] = useState("brandguide");
    const [blurOverlayStyle, setBlurStyle] = useState("blurOverlay")
  
    const changeStyle = () => {
        if (brandguideStyle === "brandguide") {
            setStyle("brandguideZoom");
            setBlurStyle("blurOverlay-blur");
        }
        else {
            setStyle("brandguide");
            setBlurStyle("blurOverlay");
        }
        
    };

    return (
        <div className="container">
            <div className="colorheader">
                <div className="headertext">
                    <h1>AccruePartners Internship</h1>
                    <h3>During Summer 2021, I worked at AccruePartners based in Charlotte, NC as a Social Media Marketing Intern.</h3>
                </div>
            </div>
            <div className="casestudy">
                <h2>The Brief</h2>
                <p>During my 4 months at AccruePartners, I was tasked with taking over the company’s social media platforms with a goal of increasing both employee engagement and external engagement from followers. In June, I also completed a social media audit AccruePartners’ Instagram, LinkedIn, Twitter, and Facebook in comparison with other competitors in the area.</p>
                <h2>Inspiration + Process</h2>
                <p>I drew a lot of inspiration from the blue and orange colors in AccruePartners’ brand guidelines, the triangle “A” shapes in the logo, and the circular shape of the logo. Prior to creating any designs, I also researched ways to draw engagement from followers and decided to include things like polls and questions in my designs. 
                    <br/><br/>After brainstorming, I created a few “Consultant Announcement” posts to announce new consultants that were joining the company. Then I began creating posts for every holiday through the end of the year. Next, I created polls, recognition announcments, and other fun posts, like a summer playlist. I used Hootsuite to schedule these images for future posting and Monday.com to manage all projects with my supervisor. 
                    <br/><br/>In June, after I was comfortable curating and scheduling posts two weeks in advance, I completed a full social media audit of not only AccruePartners social media platforms but also the competitors’ platforms. This including recording follower count, post frequency, engagement rate, and more. 
                    <br/><br/>In the midst of designing posts for social media, I also wrote a few articles for the AccrueParters Blog on the website. View one of the blogs <a href="https://accruepartners.com/redesigning-work-post-covid/" target="_blank" rel="noreferrer noopener">here</a>.</p>
                <h2>Finished Designs</h2>
                <p>I stuck to AccruePartners’ brand guidelines throughout my posts while also adding different elements that they had not done previously. Below you can view some of the social media posts I designed and output to each of the company’s platforms.</p>
                <img className={brandguideStyle} onClick={changeStyle} src = {AccrueImage} alt = "accrue"/>
                <h2>Key Takeaways</h2>
                <p>I learned many useful skills and advice during this internship. I learned how to use Hootsuite and Monday.com. I also learned how to understand a brand’s voice quickly and effectively. Being a fully remote intern introduced me to a different kind of work environment, but it also allowed me to continue to learn more about the staffing industry while making an impact with the team at AccruePartners.</p>
            </div>
            <div className={blurOverlayStyle} onClick={changeStyle}></div>
        </div>
    );

}
export default Accrue;