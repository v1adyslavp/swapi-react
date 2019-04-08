import React from "react";
import { Switch, Route } from "react-router-dom";
import CategoryList from "../Components/CategoryList";
import ItemViewer from "../Components/ItemViewer";
import DetailsAbout from "../Components/DetailsAbout";
import DetailsRelated from "../Components/DetailsRelated";

function Planets() {
  return (
    <>
      <Switch>
        <Route
          exact
          path="/planets"
          render={props => <CategoryList {...props} category="planets" />}
        />
        <Route
          path="/planets/:number"
          render={props => (
            <ItemViewer {...props} category="planets">
              <DetailsAbout
                {...props}
                detailsList={{
                  population: "Population",
                  rotation_period: "Rotation Period",
                  orbital_period: "Orbital Period",
                  diameter: "Diameter",
                  gravity: "Gravity",
                  terrain: "Terrain",
                  surface_water: "Surface Water",
                  climate: "Climate"
                }}
              />
              <DetailsRelated {...props} relatedCategory="films" />
              <DetailsRelated {...props} relatedCategory="residents" />
            </ItemViewer>
          )}
        />
      </Switch>
    </>
  );
}

export default Planets;
