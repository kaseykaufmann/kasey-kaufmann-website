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
          <p>
            HTML/CSS | Bootstrap | JavaScript | React | React Native | NodeJS |
            Express | MongoDB
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
                style={{ color: "white", fontSize: "54px" }}
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
                style={{ color: "white", fontSize: "54px" }}
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
