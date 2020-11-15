import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import CovidData from "./pages/CovidData";
import Forecast from "./pages/Forecast";
import Nav from "./components/Navbar/Navbar";
import TrashData from "./pages/TrashData";
import Paths from "./pages/Paths";
import Home from "./pages/Home";
import Library from "./pages/Library";

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

          <Route exact path="/library" render={() => (
            <Library />
          )}>
          </Route>

          <Route exact path="/weather" render={() => (
            <Forecast />
          )}>
          </Route>

          <Route exact path="/covid" render={() => (
            <CovidData />
          )}>
          </Route>

        </Switch>

    </Router>
  );
}

export default App;
