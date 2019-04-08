import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./Components/Home";
import Planets from "./Routes/Planets";
import Starships from "./Routes/Starships";
import Vehicles from "./Routes/Vehicles";
import People from "./Routes/People";
import Films from "./Routes/Films";
import Species from "./Routes/Species";

function Main() {
  return (
    <main>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/planets" component={Planets} />
        <Route path="/starships" component={Starships} />
        <Route path="/vehicles" component={Vehicles} />
        <Route path="/people" component={People} />
        <Route path="/films" component={Films} />
        <Route path="/species" component={Species} />
      </Switch>
    </main>
  );
}

export default Main;
