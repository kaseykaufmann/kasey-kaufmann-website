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

          <h2 style={{ paddingTop: "2em" }}>Paul Hanna</h2>
          <h4 style={{ color: "grey" }}>Programmer</h4>
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
          <p>1 Hacker Way Menlo Park, 94025</p>
          <h5>Phone</h5>
          <p>(123) 456-7890</p>
          <h5>Email</h5>
          <p>someone@example.com</p>
          <h5>Web</h5>
          <p>mywebsite.com</p>
          <hr style={{ borderTop: "3px solid #833fb2", width: "50%" }} />
        </Grid>
        <Grid item className="resume-right-col" md={8}>
          <h2>Education</h2>

          <Education
            startYear={2002}
            endYear={2006}
            schoolName="My University"
            schoolDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
          />

          <Education
            startYear={2007}
            endYear={2009}
            schoolName="My 2nd University"
            schoolDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
          />
          <hr style={{ borderTop: "3px solid #e22947" }} />

          <h2>Experience</h2>

          <Experience
            startYear={2009}
            endYear={2012}
            jobName="First Job"
            jobDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
          />

          <Experience
            startYear={2012}
            endYear={2016}
            jobName="Second Job"
            jobDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
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
      {/* <div style={{ display: "flex" }}> */}
      {props.skill}
      <ProgressBar now={props.progress} />
      {/* </div> */}
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
