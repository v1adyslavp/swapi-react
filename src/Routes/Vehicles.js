import React from "react";
import { Switch, Route } from "react-router-dom";
import CategoryList from "../Components/CategoryList";
import ItemViewer from "../Components/ItemViewer";
import DetailsAbout from "../Components/DetailsAbout";
import DetailsRelated from "../Components/DetailsRelated";

function Vehicles() {
  return (
    <>
      <Switch>
        <Route
          exact
          path="/vehicles"
          render={props => <CategoryList {...props} category="vehicles" />}
        />
        <Route
          path="/vehicles/:number"
          render={props => (
            <ItemViewer {...props} category="vehicles">
              <DetailsAbout
                {...props}
                detailsList={{
                  model: "Model",
                  manufacturer: "Manufacturer",
                  vehicle_class: "Class",
                  cost_in_credits: "Cost",
                  max_atmosphering_speed: "Speed",
                  length: "Length",
                  cargo_capacity: "Cargo Capacity",
                  crew: "Crew",
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

export default Vehicles;
