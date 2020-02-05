import React from "react";
import { Switch, Route } from "react-router-dom";
import CategoryList from "../Components/CategoryList";
import ItemViewer from "../Components/ItemViewer";
import DetailsAbout from "../Components/DetailsAbout";
import DetailsRelated from "../Components/DetailsRelated";

function Films() {
  return (
    <>
      <Switch>
        <Route
          exact
          path="/people"
          render={props => <CategoryList {...props} category="people" />}
        />
        <Route
          path="/people/:number"
          render={props => (
            <ItemViewer {...props} category="people">
              <DetailsAbout
                {...props}
                detailsList={{
                  birth_year: "Birth Year",
                  species: "Species",
                  height: "Height",
                  mass: "Mass",
                  gender: "Gender",
                  hair_color: "Hair Color",
                  skin_color: "Skin Color",
                  homeworld: "Homeworld"
                }}
              />
              <DetailsRelated {...props} relatedCategory="films" />
              <DetailsRelated {...props} relatedCategory="vehicles" />
              <DetailsRelated {...props} relatedCategory="starships" />
            </ItemViewer>
          )}
        />
      </Switch>
    </>
  );
}

export default Films;
