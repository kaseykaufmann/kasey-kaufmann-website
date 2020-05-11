import React from "react";
import wolf from "../static/images/wolf.jpg";
import { Grid, IconButton } from "@material-ui/core";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";

const LandingPage = () => {
  return (
    <Grid className="landing-grid">
      <Grid md={12} item>
        <img src={wolf} alt="avatar" className="avatar-img" />
        <div className="banner-text">
          <h1 className="banner-text-h1">Full Stack Web Developer</h1>
          <hr />
          <p className="banner-text-p">
            HTML/CSS | MaterialUI | JavaScript | React | NodeJS | Express |
            MongoDB | Java | C/C++
          </p>
          <div className="social-links">
            {/* LinkedIn */}
            <IconButton
              href="https://www.linkedin.com/in/kaseykaufmann/"
              rel="noopener noreferrer"
              target="_blank"
            >
              <LinkedInIcon
                fontSize="large"
                className="social-links"
                style={{ color: "white" }}
              />
            </IconButton>
            {/* Github */}
            <IconButton
              href="https://github.com/kaseykaufmann"
              rel="noopener noreferrer"
              target="_blank"
            >
              <GitHubIcon
                fontSize="large"
                className="social-links"
                style={{ color: "white" }}
              />
            </IconButton>

            {/* Freecodecamp */}
            {/* <a
              href="http://google.com"
              rel="noopener noreferrer"
              target="_blank"
            >
              <i className="fa fa-free-code-camp" aria-hidden="true" />
            </a> */}

            {/* Youtube */}
            {/* <a
              href="http://google.com"
              rel="noopener noreferrer"
              target="_blank"
            >
              <i className="fa fa-youtube-square" aria-hidden="true" />
            </a> */}
          </div>
        </div>
      </Grid>
    </Grid>
  );
};

export default LandingPage;
