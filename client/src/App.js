import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import CovidData from "./pages/CovidData";
import Forecast from "./pages/Forecast";
import Nav from "./components/Navbar";
import TrashData from "./pages/TrashData";
import Paths from "./pages/Paths";

function App() {
  return (
    <Router>
        <Nav />
        <Switch>
          <Route exact path="/" render={() => (
            <Paths />
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
