import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import MainPage from './pages/mainPage/mainpage.component';
import ProjectsPage from './pages/projectsPage/projectspage.components';

function App() {
  return (
    <div>
      {
        <Router>
          <Route exact path="/" component={MainPage} />
          <Route exact path="/projects" component={ProjectsPage} />
        </Router>
      }
    </div>
  );
}

export default App;