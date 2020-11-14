import React from "react";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import CovidData from "./pages/CovidData";
import Forecast from "./pages/Forecast";
import Nav from "./components/Navbar";
import TrashData from "./pages/TrashData";
import Paths from "./pages/Paths";
import Home from "./pages/Home";

function App() {
  return (
    <Router basename="/explore-copenhagen">

        <Nav />

        <Switch>

          <Route exact path="/" render={() => (
            <Home />
          )}>
          </Route>

          <Route exact path="/waste" render={() => (
            <TrashData />
          )}>
          </Route>
          
          <Route exact path="/paths" render={() => (
            <Paths />
          )}>
          </Route>

        </Switch>

    </Router>
  );
}

export default App;
