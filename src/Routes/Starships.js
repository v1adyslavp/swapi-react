import React from "react";
import { Switch, Route } from "react-router-dom";
import CategoryList from "../Components/CategoryList";
import ItemViewer from "../Components/ItemViewer";
import DetailsAbout from "../Components/DetailsAbout";
import DetailsRelated from "../Components/DetailsRelated";

function Starships() {
  return (
    <>
      <Switch>
        <Route
          exact
          path="/starships"
          render={props => <CategoryList {...props} category="starships" />}
        />
        <Route
          path="/starships/:number"
          render={props => (
            <ItemViewer {...props} category="starships">
              <DetailsAbout
                {...props}
                detailsList={{
                  model: "Model",
                  manufacturer: "Manufacturer",
                  starship_class: "Class",
                  cost_in_credits: "Cost",
                  max_atmosphering_speed: "Speed",
                  hyperdrive_rating: "Hyperdrive Rating",
                  MGLT: "MGLT",
                  length: "Length",
                  cargo_capacity: "Cargo Capacity",
                  crew: "Mimimum Crew",
                  passengers: "Passengers"
                }}
              />
              <DetailsRelated {...props} relatedCategory="films" />
              <DetailsRelated {...props} relatedCategory="pilots" />
            </ItemViewer>
          )}
        />
      </Switch>
    </>
  );
}

export default Starships;
