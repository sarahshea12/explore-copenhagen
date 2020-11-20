import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Forecast from "./pages/Forecast/Forecast";
import Nav from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import Map from "./components/Map/Map";
import HomeCH from "./pages/Home/HomeCH";
import Paper from "@material-ui/core/Paper";

function App() {
  return (
    <div>
      <Router basename="/explore-copenhagen">
        <div>
          <Paper><Nav /></Paper>
        </div>
        <div>
          <Switch>
            <Route exact path="/" render={() => (
              <Home />
            )}>
            </Route>

            <Route exact path="/ch" render={() => (
              <HomeCH />
            )}>
            </Route>

            <Route exact path="/map" render={() => (
              <Map />
            )}>
            </Route>

            <Route exact path="/weather" render={() => (
              <Forecast />
            )}>
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
