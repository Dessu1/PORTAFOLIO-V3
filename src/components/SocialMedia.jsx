import React from "react";

import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import FacebookIcon from "@material-ui/icons/Facebook";

const SocialMedia = () => {
  return (
    <div id='social-media'>
      <div className='container-social'>
        <div className='item'>
          <a
            href='https://www.instagram.com/dessu_1/'
            target='_blank'
            rel='noreferrer'
          >
            <InstagramIcon />
          </a>
        </div>
        <div className='item'>
          <a href='https://github.com/dessu1' target='_blank' rel='noreferrer'>
            <GitHubIcon />
          </a>
        </div>
        <div className='item'>
          <a
            href='https://twitter.com/BrianStivenAlv3'
            target='_blank'
            rel='noreferrer'
          >
            <TwitterIcon />
          </a>
        </div>
        <div className='item'>
          <a
            href='https://www.linkedin.com/in/brian-alvarado-a81636196/'
            target='_blank'
            rel='noreferrer'
          >
            <LinkedInIcon />
          </a>
        </div>
        <div className='item'>
          <a
            href='https://www.facebook.com/Brian.Alvarado.99'
            target='_blank'
            rel='noreferrer'
          >
            <FacebookIcon />
          </a>
        </div>
      </div>
    </div>
  );
};

export default SocialMedia;
