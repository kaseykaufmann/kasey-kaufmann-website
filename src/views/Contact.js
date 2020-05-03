import React from "react";
import { Grid, ListItem, List } from "@material-ui/core";

const Contact = () => {
  return (
    <div className="contact-body">
      <Grid container className="contact-grid">
        <Grid item md={6}>
          <h2>Paul Hanna</h2>
          <img
            src="https://cdn2.iconfinder.com/data/icons/avatar-2/512/Fred_man-512.png"
            alt="avatar"
            style={{ height: "250px" }}
          />
          <p style={{ width: "75%", margin: "auto", paddingTop: "1em" }}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries
          </p>
        </Grid>
        <Grid item md={6}>
          <h2>Contact Me</h2>
          <hr />

          <List className="contact-list">
            <ListItem
              style={{
                fontSize: "30px",
                fontFamily: "Anton",
                paddingBottom: "25px",
              }}
              divider
            >
              Phone Number: (123) 456-7890
            </ListItem>

            <ListItem
              style={{
                fontSize: "30px",
                fontFamily: "Anton",
                padding: "25px 0px",
              }}
              divider
            >
              (123) 456-7890
            </ListItem>

            <ListItem
              style={{
                fontSize: "30px",
                fontFamily: "Anton",
                padding: "25px 0px",
              }}
              divider
            >
              Email: someone@example.com
            </ListItem>

            <ListItem
              style={{
                fontSize: "30px",
                fontFamily: "Anton",
                padding: "25px 0px",
              }}
              divider
            >
              GitHub: MySkypeID
            </ListItem>
          </List>
        </Grid>
      </Grid>
    </div>
  );
};

export default Contact;
