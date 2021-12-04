import React from 'react';
import './styles.modules.css';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

function FooterBar(props) {
  return (
    <div className="FooterBar">
      <div className="FooterSpacer"></div>
      <div>
        <a href="https://twitter.com/hannahbraswell_" target="blank">
          <TwitterIcon className="Icons"/>
        </a>
        <a href="https://www.linkedin.com/in/hannahbraswell/" target="blank">
          <LinkedInIcon className="Icons"/>
        </a>
      </div>
    </div>
  );
}
export default FooterBar;
