import React from "react";
import { Grid, ListItem, List, IconButton } from "@material-ui/core";
import GitHubIcon from "@material-ui/icons/GitHub";
import EmailIcon from "@material-ui/icons/Email";
import CallIcon from "@material-ui/icons/Call";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import ProfilePic from "../static/images/ProfilePic.jpeg";

const Contact = () => {
  return (
    <div className="contact-body">
      <Grid container className="contact-grid">
        <Grid item md={6}>
          <img
            src={ProfilePic}
            alt="avatar"
            style={{ height: "350px", margin: "50px 0px", borderRadius: "25px" }}
          />
          <p style={{ width: "75%", margin: "auto", paddingTop: "1em" }}>
            Thank you for contacting me!
            <br /> I will get back to you within the next 24 hours with a
            response to your inquiry.
          </p>
        </Grid>
        <Grid item md={6}>
          <h2 className="contact-me">Contact Info</h2>
          <hr />
          {/* Phone Number */}
          <List className="contact-list">
            <ListItem
              style={{
                fontFamily: "Anton",
                padding: "25px 0px",
              }}
              alignItems="flex-start"
              divider
              button
              href="tel:2397770754"
              component="a"
            >
              <IconButton
                style={{ color: "black", paddingTop: "5px" }}
                disabled
                edge="start"
              >
                <CallIcon fontSize="large" />
              </IconButton>
              Phone Number: (239)777-0754
            </ListItem>
            {/* Email */}
            <ListItem
              style={{
                fontFamily: "Anton",
                padding: "25px 0px",
              }}
              alignItems="flex-start"
              divider
              button
              href="mailto:kaseykaufmann@yahoo.com"
              target="_blank"
              component="a"
            >
              <IconButton
                style={{ color: "black", paddingTop: "5px" }}
                disabled
                edge="start"
              >
                <EmailIcon fontSize="large" />
              </IconButton>
              Email: kaseykaufmann@yahoo.com
            </ListItem>
            {/* Github */}
            <ListItem
              style={{
                fontFamily: "Anton",
                padding: "25px 0px",
              }}
              alignItems="flex-start"
              divider
              button
              href="https://github.com/kaseykaufmann"
              target="_blank"
              component="a"
            >
              <IconButton
                style={{ color: "black", paddingTop: "5px" }}
                disabled
                edge="start"
              >
                <GitHubIcon fontSize="large" />
              </IconButton>
              GitHub: kaseykaufmann
            </ListItem>
            {/* LinkedIn */}
            <ListItem
              style={{
                fontFamily: "Anton",
                padding: "25px 0px",
              }}
              alignItems="flex-start"
              divider
              button
              href="https://www.linkedin.com/in/kaseykaufmann/"
              target="_blank"
              component="a"
            >
              <IconButton
                style={{ color: "black", paddingTop: "5px" }}
                disabled
                edge="start"
              >
                <LinkedInIcon fontSize="large" />
              </IconButton>
              LinkedIn: kaseykaufmann
            </ListItem>
          </List>
        </Grid>
      </Grid>
    </div>
  );
};

export default Contact;
