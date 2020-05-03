import React from "react";
import { Grid } from "@material-ui/core";

const LandingPage = () => {
  return (
    <div style={{ width: "100%", margin: "auto" }}>
      <Grid className="landing-grid">
        <Grid md={12}>
          <img
            src="https://www.shareicon.net/download/2015/09/18/103157_man_512x512.png"
            alt="avatar"
            className="avatar-img"
          />

          <div className="banner-text">
            <h1>Full Stack Web Developer</h1>

            <hr />

            <p>
              HTML/CSS | Bootstrap | JavaScript | React | React Native | NodeJS
              | Express | MongoDB
            </p>

            <div className="social-links">
              {/* LinkedIn */}
              <a
                href="http://google.com"
                rel="noopener noreferrer"
                target="_blank"
              >
                <i className="fa fa-linkedin-square" aria-hidden="true" />
              </a>

              {/* Github */}
              <a
                href="http://google.com"
                rel="noopener noreferrer"
                target="_blank"
              >
                <i className="fa fa-github-square" aria-hidden="true" />
              </a>

              {/* Freecodecamp */}
              <a
                href="http://google.com"
                rel="noopener noreferrer"
                target="_blank"
              >
                <i className="fa fa-free-code-camp" aria-hidden="true" />
              </a>

              {/* Youtube */}
              <a
                href="http://google.com"
                rel="noopener noreferrer"
                target="_blank"
              >
                <i className="fa fa-youtube-square" aria-hidden="true" />
              </a>
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default LandingPage;
