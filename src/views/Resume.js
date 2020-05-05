import React from "react";
import { Grid } from "@material-ui/core";
import ProgressBar from "react-bootstrap/ProgressBar";

const Resume = () => {
  return (
    <div>
      <Grid container>
        <Grid item md={4}>
          {/* <div style={{ textAlign: "center" }}>
            <img
              src="https://www.shareicon.net/download/2015/09/18/103157_man_512x512.png"
              alt="avatar"
              style={{ height: "200px" }}
            />
          </div> */}

          <h2 style={{ paddingTop: "2em" }}>Kasey Kaufmann</h2>
          <h4 style={{ color: "grey" }}>Software Engineer</h4>
          <hr style={{ borderTop: "3px solid #833fb2", width: "50%" }} />
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged.
          </p>
          <hr style={{ borderTop: "3px solid #833fb2", width: "50%" }} />
          <h5>Address</h5>
          <p>6120 Cypress Hollow Way, Naples, FL 34109</p>
          <h5>Phone</h5>
          <p>(239) 777-0754</p>
          <h5>Email</h5>
          <p>kaseykaufmann@yahoo.com</p>
          <h5>Web</h5>
          <p>kaseykaufmann.com</p>
          <hr style={{ borderTop: "3px solid #833fb2", width: "50%" }} />
        </Grid>
        <Grid item className="resume-right-col" md={8}>
          <h2>Education</h2>

          <Education
            startYear={2016}
            endYear={2021}
            schoolName="University of Florida"
            schoolDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
          />
          <hr style={{ borderTop: "3px solid #e22947" }} />

          <h2>Experience</h2>

          <Experience
            startYear="May 2018"
            endYear="August 2018"
            jobName="Software Engineering Intern"
            jobDescription="●	Assisted with UI/UX development of a brand new offering being brought to market to assist over 40,000 caterers world-wide with their day-to-day administration
            ●	Developed over 100 custom contact pages using Preact for some of the top catering companies worldwide
            ●	Practiced agile methodologies weekly such as sprint planning and playbacks"
          />

          <Experience
            startYear="October 2015"
            endYear="March 2016"
            jobName="Customer Service Associate"
            jobDescription="●	Focused on customer service resolving customer complaints while maintaining composure
            ●	Gained sales experience up-selling goods to customers at the point of sale
            ●	Experience keeping track of finances and updating bookkeeping on a daily basis"
          />
          <hr style={{ borderTop: "3px solid #e22947" }} />
          <h2>Skills</h2>
          <Skills skill="Javascript" progress={100} />
          <Skills skill="HTML/CSS" progress={80} />
          <Skills skill="NodeJS" progress={50} />
          <Skills skill="React" progress={25} />
        </Grid>
      </Grid>
    </div>
  );
};

const Skills = (props) => {
  return (
    <>
      {props.skill}
      <ProgressBar now={props.progress} />
    </>
  );
};

const Experience = (props) => {
  return (
    <Grid container>
      <Grid item md={4}>
        <p>
          {props.startYear} - {props.endYear}
        </p>
      </Grid>
      <Grid item md={8}>
        <h4 style={{ marginTop: "0px" }}>{props.jobName}</h4>
        <p>{props.jobDescription}</p>
      </Grid>
    </Grid>
  );
};

const Education = (props) => {
  return (
    <Grid container>
      <Grid item md={4}>
        <p>
          {props.startYear} - {props.endYear}
        </p>
      </Grid>
      <Grid item md={8}>
        <h4 style={{ marginTop: "0px" }}>{props.schoolName}</h4>
        <p>{props.schoolDescription}</p>
      </Grid>
    </Grid>
  );
};

export default Resume;
