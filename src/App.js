import React from "react";
import { Route } from 'react-router-dom'

import MainPage from './pages/mainPage/mainpage.component';
import ProjectsPage from './pages/projectsPage/projectspage.components';
import ExperiencePage from "./pages/Experience/experiencepage.component";
import AboutPage from "./pages/About/aboutpage.component";
import Header from "./components/header/header.component";
function App() {
  return (
    <div>
      {
        <Route>
          <Header/>
          <Route exact path="/" component={MainPage} />
          <Route exact path="/projects" component={ProjectsPage} />
          <Route exact path="/experience" component={ExperiencePage} />
          <Route exact path="/aboutMe" component={AboutPage} />
        </Route>
      }
    </div>
  );
}

export default App;