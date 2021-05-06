import React from 'react';
import './styles.modules.css';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

function FooterBar(props) {
  return (
    <div className="FooterBar">
        <div>
        <a href="https://www.facebook.com/" target="blank">
          <FacebookIcon className="Icons"/>
        </a>
        <a href="https://www.instagram.com/" target="blank">
          <InstagramIcon className="Icons"/>
        </a>
        <a href="https://twitter.com/" target="blank">
          <TwitterIcon className="Icons"/>
        </a>
        <a href="https://linkedin.com/" target="blank">
          <LinkedInIcon className="Icons"/>
        </a>
        
      </div>
    </div>
  );
}
export default FooterBar;
