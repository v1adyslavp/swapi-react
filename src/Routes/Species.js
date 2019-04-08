import React from "react";
import { Switch, Route } from "react-router-dom";
import CategoryList from "../Components/CategoryList";
import ItemViewer from "../Components/ItemViewer";
import DetailsAbout from "../Components/DetailsAbout";
import DetailsRelated from "../Components/DetailsRelated";

function Species() {
  return (
    <>
      <Switch>
        <Route
          exact
          path="/species"
          render={props => <CategoryList {...props} category="species" />}
        />
        <Route
          path="/species/:number"
          render={props => (
            <ItemViewer {...props} category="species">
              <DetailsAbout
                {...props}
                detailsList={{
                  classification: "Classification",
                  designation: "Designation",
                  language: "Language",
                  average_lifespan: "Avg Lifespan",
                  average_height: "Avg Height",
                  hair_colors: "Hair Color(s)",
                  skin_colors: "Skin Color(s)",
                  eye_colors: "Eye Color(s)"
                }}
              />
              <DetailsRelated {...props} relatedCategory="films" />
              <DetailsRelated {...props} relatedCategory="people" />
            </ItemViewer>
          )}
        />
      </Switch>
    </>
  );
}

export default Species;
