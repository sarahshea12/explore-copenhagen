import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Forecast from "./pages/Forecast";
import Nav from "./components/Navbar/Navbar";
import TrashData from "./pages/TrashData";
import Paths from "./pages/Paths";
import Home from "./pages/Home/Home";
import Library from "./pages/Library";
import HomeCH from "./pages/Home/HomeCH";
import Grid from "@material-ui/core/Grid";

function App() {
  return (
    <Grid 
    container
    direction="row"
    justify="flex-start"
    alignment="stretch"
    spacing={1}
    >
      <Router basename="/explore-copenhagen">

        <Grid xs={12}>
          <Nav />
        </Grid>

        <Grid xs={12}>
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

          <Route exact path="/ch" render={() => (
            <HomeCH />
          )}>
          </Route>
        </Switch>

        </Grid>

      </Router>

    </Grid>
  );
}

export default App;
