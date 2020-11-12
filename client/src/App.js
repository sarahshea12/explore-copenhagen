import React, {useState} from "react";
import CovidData from "./pages/CovidData";
import Forecast from "./pages/Forecast";

function App() {
  return (
    <div>
      <CovidData/>
      <Forecast/>
    </div>
  );
}

export default App;
