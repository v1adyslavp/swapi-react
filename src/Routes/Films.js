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
          path="/films"
          render={props => <CategoryList {...props} category="films" />}
        />
        <Route
          path="/films/:number"
          render={props => (
            <ItemViewer {...props} category="films">
              <DetailsAbout
                {...props}
                detailsList={{
                  release_date: "Date Created",
                  director: "Director",
                  producer: "Producers",
                  opening_crawl: "Opening Crawl"
                }}
              />
              <DetailsRelated {...props} relatedCategory="characters" />
              <DetailsRelated {...props} relatedCategory="planets" />
              <DetailsRelated {...props} relatedCategory="vehicles" />
              <DetailsRelated {...props} relatedCategory="starships" />
              <DetailsRelated {...props} relatedCategory="species" />
            </ItemViewer>
          )}
        />
      </Switch>
    </>
  );
}

export default Films;
