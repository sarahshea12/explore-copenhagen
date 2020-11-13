import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import CovidData from "./pages/CovidData";
import Forecast from "./pages/Forecast";
import Nav from "./components/Navbar";
import TrashData from "./pages/TrashData";

function App() {
  return (
    <Router>
        <Nav />
        <Switch>
          <Route exact path="/" render={() => (
            <Forecast />
          )}>
          </Route>
          <Route exact path="/waste" render={() => (
            <TrashData />
          )}>
          </Route>
        </Switch>
    </Router>
  );
}

export default App;
