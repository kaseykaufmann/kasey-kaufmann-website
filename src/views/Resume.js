import React from "react";
import { Grid } from "@material-ui/core";
import ProgressBar from "react-bootstrap/ProgressBar";

const Resume = () => {
  return (
    <Grid container style={{ height: "100%" }}>
      <Grid item md={4} style={{ padding: "0px 25px" }}>
        <h2 style={{ paddingTop: "1em" }}>Kasey Kaufmann</h2>
        <h4 style={{ color: "grey" }}>Student @ UF</h4>
        <hr style={{ borderTop: "3px solid #833fb2", width: "50%" }} />
        <p>
          I am a 5th year Computer Science major at the University of Florida
          graduating in Spring of 2021. I intend to pursue and career in
          software development in a growing company in order to grow my own
          skills and experience. I will use that experience to eventually lead
          my own team, either in a meaningful role in a company I believe in or
          in a company of my own making.
        </p>
        <hr style={{ borderTop: "3px solid #833fb2", width: "50%" }} />
        <h5>Address</h5>
        <p>6120 Cypress Hollow Way, Naples, FL 34109</p>
        <h5>Phone</h5>
        <p>(239) 777-0754</p>
        <h5>Email</h5>
        <p>kaseykaufmann@yahoo.com</p>
        <p>kaseyk@ufl.edu</p>
        <h5>Web</h5>
        <p>kaseykaufmann.com</p>
        <hr style={{ borderTop: "3px solid #833fb2", width: "50%" }} />
      </Grid>
      <Grid item className="resume-right-col" md={8}>
        <h2>Education</h2>

        <Education
          startYear="June 2016"
          endYear="May 2021"
          schoolName="University of Florida"
          major="Bachelor of Science in Computer Science"
          minor="Minor in Digital Design"
        />
        <hr style={{ borderTop: "3px solid #e22947" }} />

        <h2>Experience</h2>

        <Experience
          startYear="May 2018"
          endYear="August 2018"
          jobName="Software Engineering Intern"
          jobDescription1="Assisted with UI/UX development of a brand new offering being brought to market to assist over 40,000 caterers world-wide with their day-to-day administration."
          jobDescription2="Developed over 100 custom contact pages using Preact for some of the top catering companies worldwide."
          jobDescription3="Practiced agile methodologies weekly such as sprint planning and playbacks"
        />

        <Experience
          startYear="June 2015"
          endYear="August 2015"
          jobName="Market Researcher"
          jobDescription1="Prospected local businesses to generate sales leads."
          jobDescription2="Increase profits for a startup within fitness industry."
        />
        <hr style={{ borderTop: "3px solid #e22947" }} />
        <h2>Language Skills</h2>
        {/* Languages */}
        <Grid container spacing={2}>
          <Grid item md={6}>
            <Skills skill="Java" progress={40} />
            <Skills skill="MongoDB" progress={40} />
          </Grid>
          <Grid item md={6}>
            <Skills skill="NodeJS" progress={50} />
            <Skills skill="C++" progress={50} />
          </Grid>
          <Grid item md={6}>
            <Skills skill="ExpressJS" progress={50} />
            <Skills skill="Javascript" progress={70} />
          </Grid>
          <Grid item md={6}>
            <Skills skill="HTML/CSS" progress={80} />
            <Skills skill="React" progress={85} />
          </Grid>
        </Grid>
        <h2>Software Skills</h2>

        {/* Softwares */}
        <Grid container spacing={2}>
          <Grid item md={6}>
            <Skills skill="Sketch" progress={30} />
            <Skills skill="Unity" progress={30} />
          </Grid>
          <Grid item md={6}>
            <Skills skill="VSCode" progress={70} />
            <Skills skill="Microsoft Suite" progress={80} />
            <Skills skill="MaterialUI" progress={85} />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

const Skills = (props) => {
  return (
    <>
      {props.skill}
      <ProgressBar
        label={props.progress}
        // style={{ width: "45%" }}
        animated
        now={props.progress}
      />
    </>
  );
};

const Experience = (props) => {
  return (
    <Grid container>
      <Grid item md={8}>
        <h4 style={{ marginTop: "0px" }}>{props.jobName}</h4>
        <ul>
          <li>{props.jobDescription1}</li>
          <li>{props.jobDescription2}</li>
          {props.jobDescription3 ? <li>{props.jobDescription3}</li> : null}
        </ul>
      </Grid>
      <Grid item md={4} style={{ textAlign: "right" }}>
        <p>
          {props.startYear} - {props.endYear}
        </p>
      </Grid>
    </Grid>
  );
};

const Education = (props) => {
  return (
    <Grid container>
      <Grid item md={8}>
        <h4 style={{ margin: "0px" }}>{props.schoolName}</h4>
        <p>
          <i>
            {props.major}
            <br />
            {props.minor}
          </i>
        </p>
      </Grid>
      <Grid item md={4} style={{ textAlign: "right" }}>
        <p>
          {props.startYear} - {props.endYear}
        </p>
      </Grid>
      Relevant Course Work: Intro to Software Engineering, Data Structures and
      Algorithm, Information and Database Systems 1
    </Grid>
  );
};

export default Resume;
