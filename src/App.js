import React from "react";
import { Switch, Route } from "react-router-dom";

import LandingPage from "./views/LandingPage";
import AboutMe from "./views/AboutMe";
import Contact from "./views/Contact";
import Projects from "./views/Projects";
import Resume from "./views/Resume";
import NotFound from "./views/NotFound";
import NavBar from "./components/NavBar";
import "./App.css";

const routes = [
  {
    exact: true,
    path: "/",
    component: LandingPage,
  },
  {
    exact: false,
    path: "/aboutme",
    component: AboutMe,
  },
  {
    exact: false,
    path: "/contact",
    component: Contact,
  },
  {
    exact: false,
    path: "/projects",
    component: Projects,
  },
  {
    exact: false,
    path: "/resume",
    component: Resume,
  },
  {
    exact: false,
    path: "/notfound",
    component: NotFound,
  },
];

function App() {
  return (
    <>
      <NavBar />
      <Switch>
        {routes.map((r) => (
          <Route
            key={r.path}
            exact={r.exact}
            path={r.path}
            component={r.component}
          />
        ))}
        <Route component={NotFound} />
      </Switch>
    </>
  );
}

export default App;
