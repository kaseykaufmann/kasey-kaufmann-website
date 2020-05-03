import React from "react";
import { Link } from "react-router-dom";
import { Button, AppBar, Toolbar } from "@material-ui/core";

const buttons = [
  { name: "Resume", route: "/resume" },
  { name: "About Me", route: "/aboutme" },
  { name: "Projects", route: "/projects" },
  { name: "Contact Me!", route: "/contact" },
];

const NavBar = () => {
  return (
    <>
      <AppBar position="fixed" className="header-color">
        <Toolbar>
          <Button
            size="large"
            style={{ color: "black", fontSize: "30px" }}
            disableRipple
            disableFocusRipple
            component={Link}
            to="/"
          >
            My Profile
          </Button>
          <div style={{ right: "10px", position: "absolute" }}>
            {buttons.map((x) => (
              <Button
                key={x.route}
                component={Link}
                style={{ color: "white" }}
                to={x.route}
              >
                {x.name}
              </Button>
            ))}
          </div>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </>
  );
};

export default NavBar;
