/* eslint-disable no-dupe-keys */
import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import {
  Button,
  IconButton,
  Hidden,
  Drawer,
  AppBar,
  Toolbar,
  List,
  ListItem,
  CssBaseline,
} from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import MenuIcon from "@material-ui/icons/Menu";
import { makeStyles, useTheme } from "@material-ui/core/styles";

const drawerWidth = 200;
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    height: "65px",
  },
  drawer: {
    [theme.breakpoints.up("sm")]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    background: "#833ab4" /* fallback for old browsers */,
    background:
      "-webkit-linear-gradient(to right,#fcb045,#fd1d1d, #833ab4)" /* Chrome 10-25, Safari 5.1-6 */,
    background:
      "linear-gradient(to right, #fcb045,#fd1d1d, #833ab4)" /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */,
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    // padding: theme.spacing(3),
  },
  closeMenuButton: {
    marginRight: "auto",
    marginLeft: 0,
  },
}));
const buttons = [
  { name: "Resume", route: "/resume" },
  { name: "About Me", route: "/aboutme" },
  { name: "Projects", route: "/projects" },
  { name: "Contact Me!", route: "/contact" },
];

const NavBar = () => {
  const classes = useStyles();
  const theme = useTheme();

  const [mobileOpen, setMobileOpen] = React.useState(false);
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <List>
        {buttons.map((x, index) => (
          <ListItem button key={index}>
            <Button
              disableRipple
              onClick={handleDrawerToggle}
              component={Link}
              to={x.route}
            >
              {x.name}
            </Button>
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar className={classes.appBar}>
        <Toolbar className={classes.toolbar}>
          <IconButton
            color="inherit"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
          <Button
            size="large"
            style={{ color: "black", fontSize: "28px" }}
            disableRipple
            disableFocusRipple
            component={Link}
            to="/"
          >
            Kasey Kaufmann
          </Button>
          <Hidden xsDown implementation="css">
            <div style={{ right: "10px", top: "15px", position: "absolute" }}>
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
          </Hidden>
        </Toolbar>
      </AppBar>
      <nav className={classes.drawer}>
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden smUp implementation="css">
          <Drawer
            variant="temporary"
            anchor={theme.direction === "rtl" ? "right" : "left"}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            <IconButton
              onClick={handleDrawerToggle}
              className={classes.closeMenuButton}
            >
              <CloseIcon />
            </IconButton>
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
      <Toolbar />
    </div>
  );
};
NavBar.propTypes = {
  container: PropTypes.object,
};
export default NavBar;
