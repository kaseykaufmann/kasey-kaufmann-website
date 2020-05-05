import React from "react";
import SwipeableViews from "react-swipeable-views";
import { useTheme } from "@material-ui/core/styles";
import {
  Grid,
  AppBar,
  Tabs,
  Tab,
  Box,
  Button,
  Card,
  CardHeader,
  CardActions,
  CardContent,
  CardMedia,
} from "@material-ui/core";

import ProjectReactLogo from "../static/images/ProjectReactLogo.png";
import ProjectARvsVR from "../static/images/ProjectARvsVR.png";
import ProjectBlackjack from "../static/images/ProjectBlackjack.jpg";
import ProjectMinesweeper from "../static/images/ProjectMinesweeper.png";
import ProjectPersonalWebsite from "../static/images/ProjectPersonalWebsite.png";

const TabPanel = (props) => {
  const { children, value, index, ...other } = props;

  return (
    <div role="tabpanel" hidden={value !== index} {...other}>
      {value === index && <Box p={3}>{children}</Box>}
    </div>
  );
};

const Projects = () => {
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  return (
    <div>
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          variant="fullWidth"
        >
          <Tab label="Javascript" />
          <Tab label="C++" />
          <Tab label="Java" />
        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0} dir={theme.direction}>
          <JavascriptProjects />
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
          <CppProjects />
        </TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction}>
          <JavaProjects />
        </TabPanel>
      </SwipeableViews>
    </div>
  );
};

const ProjectsList = {
  Javascript: [
    {
      title: "Personal Website",
      subheader: "Personal Project",
      image: ProjectPersonalWebsite,
      content:
        "My personal website to demonstrate who I am and the work that I have done, as well as how to reach me.",
      github_href: "https://github.com/kaseykaufmann/kasey-kaufmann-website",
      sandbox_href:
        "https://codesandbox.io/embed/github/kaseykaufmann/kasey-kaufmann-website/tree/master/?fontsize=14&hidenavigation=1&theme=dark",
    },
    {
      title: "VR vs AR Website",
      subheader: "Class Project",
      image: ProjectARvsVR,
      content:
        "A class project to better show the differences between what virtual reality, augmented reality and mixed reality are.",
      github_href: "https://github.com/kaseykaufmann/VRvsARWebsite",
      sandbox_href: "https://codepen.io/kasey-kaufmann/pen/KKdXrYy",
    },
    {
      title: "NodeJS Bootcamp",
      subheader: "Class Project",
      image: ProjectReactLogo,
      content:
        "A bootcamp for a class focused on the MERN stack. It is a basic NodeJS assigment to cover the main points of the language.",
      github_href: "https://github.com/kaseykaufmann/bootcamp_1_kasey_kaufmann",
      //   sandbox_href: "https://codepen.io/kasey-kaufmann/pen/KKdXrYy",
    },
  ],
  CPP: [
    {
      title: "Minesweeper",
      subheader: "Class Project",
      image: ProjectMinesweeper,
      github_href: "https://github.com/kaseykaufmann/Minesweeper",
      content:
        "A class project using SFML and generic minesweeper pictures to implement a realistic game of Minesweeper.",
    },
  ],
  Java: [
    {
      title: "BlackJack",
      subheader: "Class Project",
      image: ProjectBlackjack,
      github_href: "https://github.com/kaseykaufmann/BlackJack",
      content:
        "A class project that creates an incredibly simple version of BlackJack that takes in simple user input and generates random results to simulate a simple game.",
    },
  ],
};

const JavascriptProjects = () => (
  <Grid
    container
    direction="row"
    justify="center"
    alignItems="center"
    spacing={6}
  >
    {ProjectsList.Javascript.map((x, idx) => (
      <Grid item key={idx}>
        <Card raised style={{ width: "300px", maxHeight: "500px" }}>
          <CardHeader title={x.title} subheader={x.subheader} />
          <CardMedia style={{ height: "200px" }} image={x.image} />
          <CardContent>{x.content}</CardContent>
          <CardActions>
            <Button target="_blank" href={x.github_href}>
              GitHub
            </Button>
            {x.sandbox_href ? (
              <Button target="_blank" href={x.sandbox_href}>
                CodePen
              </Button>
            ) : null}
            {/* <Button>Live Demo</Button> */}
          </CardActions>
        </Card>
      </Grid>
    ))}
  </Grid>
);

const CppProjects = () => (
  <Grid
    container
    direction="row"
    justify="center"
    alignItems="center"
    spacing={6}
  >
    {ProjectsList.CPP.map((x, idx) => (
      <Grid item key={idx}>
        <Card raised style={{ width: "300px", maxHeight: "500px" }}>
          <CardHeader title={x.title} subheader={x.subheader} />
          <CardMedia style={{ height: "200px" }} image={x.image} />
          <CardContent>{x.content}</CardContent>
          <CardActions>
            <Button target="_blank" href={x.github_href}>
              GitHub
            </Button>
            {/* <Button>CodePen</Button>
              <Button>Live Demo</Button> */}
          </CardActions>
        </Card>
      </Grid>
    ))}
  </Grid>
);

const JavaProjects = () => (
  <Grid
    container
    direction="row"
    justify="center"
    alignItems="center"
    spacing={6}
  >
    {ProjectsList.Java.map((x, idx) => (
      <Grid item key={idx}>
        <Card raised style={{ width: "300px", maxHeight: "500px" }}>
          <CardHeader title={x.title} subheader={x.subheader} />
          <CardMedia style={{ height: "200px" }} image={x.image} />
          <CardContent>{x.content}</CardContent>
          <CardActions>
            <Button target="_blank" href={x.github_href}>
              GitHub
            </Button>
            {/* <Button>CodePen</Button>
              <Button>Live Demo</Button> */}
          </CardActions>
        </Card>
      </Grid>
    ))}
  </Grid>
);

export default Projects;
