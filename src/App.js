import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Forecast from "./pages/Forecast";
import Nav from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import MapPage from "./pages/MapPage";
import HomeCH from "./pages/Home/HomeCH";
import Grid from "@material-ui/core/Grid";

function App() {
  return (
    <div>
    <Grid 
    container
    direction="row"
    justify="center"
    alignment="stretch"
    height="100%"
    >
      <Router basename="/explore-copenhagen">
      <div>
        <Grid item xs={12}>
          <Nav />
        </Grid>
        
      </div>

      <div>
        <Grid item xs={12}>
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
            <MapPage />
          )}>
          </Route>

          <Route exact path="/weather" render={() => (
            <Forecast />
          )}>
          </Route>
        </Switch>

        </Grid>
        </div>

      </Router>

    </Grid>
    </div>
  );
}

export default App;
