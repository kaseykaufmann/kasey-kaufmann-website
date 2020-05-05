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

const ProjectsList = [
  {
    language: "Javascript",
    title: "Personal Website",
    subheader: "Personal Project",
    image: ProjectReactLogo,
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's",
    github_href: "",
    sandbox_href:
      "https://codesandbox.io/embed/github/kaseykaufmann/kasey-kaufmann-website/tree/master/?fontsize=14&hidenavigation=1&theme=dark",
  },
  {
    language: "Javascript",
    title: "React Project #1",
    subheader: "Class Project",
    image: ProjectReactLogo,
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's",
  },
  {
    language: "CPP",
    title: "React Project #1",
    subheader: "Class Project",
    image: ProjectReactLogo,
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's",
  },
  {
    language: "Java",
    title: "React Project #1",
    subheader: "Class Project",
    image: ProjectReactLogo,
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's",
  },
];

const JavascriptProjects = () => (
  <Grid
    container
    direction="row"
    justify="center"
    alignItems="center"
    spacing={6}
  >
    {ProjectsList.map((x, idx) =>
      x.language === "Javascript" ? (
        <Grid item key={idx}>
          <Card raised style={{ width: "300px", maxHeight: "500px" }}>
            <CardHeader title={x.title} subheader={x.subheader} />
            <CardMedia style={{ height: "200px" }} image={x.image} />
            <CardContent>{x.content}</CardContent>
            <CardActions>
              <Button target="_blank" href={x.github_href}>
                GitHub
              </Button>
              <Button target="_blank" href={x.sandbox_href}>
                CodePen
              </Button>
              <Button>Live Demo</Button>
            </CardActions>
          </Card>
        </Grid>
      ) : null
    )}
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
    {ProjectsList.map((x, idx) =>
      x.language === "CPP" ? (
        <Grid item key={idx}>
          <Card raised style={{ width: "300px", maxHeight: "500px" }}>
            <CardHeader title={x.title} subheader={x.subheader} />
            <CardMedia style={{ height: "200px" }} image={x.image} />
            <CardContent>{x.content}</CardContent>
            <CardActions>
              <Button>GitHub</Button>
              <Button>CodePen</Button>
              <Button>Live Demo</Button>
            </CardActions>
          </Card>
        </Grid>
      ) : null
    )}
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
    {ProjectsList.map((x, idx) =>
      x.language === "Java" ? (
        <Grid item key={idx}>
          <Card raised style={{ width: "300px", maxHeight: "500px" }}>
            <CardHeader title={x.title} subheader={x.subheader} />
            <CardMedia style={{ height: "200px" }} image={x.image} />
            <CardContent>{x.content}</CardContent>
            <CardActions>
              <Button>GitHub</Button>
              <Button>CodePen</Button>
              <Button>Live Demo</Button>
            </CardActions>
          </Card>
        </Grid>
      ) : null
    )}
  </Grid>
);

export default Projects;
