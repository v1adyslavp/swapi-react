import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./DetailsRelated.css";

class DetailsRelated extends Component {
  state = {
    item: this.props.item
  };

  componentDidMount() {
    let { item, relatedCategory } = this.props;

    if (!item[relatedCategory].length) {
      return;
    }

    this.setRelatedDetails();
  }

  async setRelatedDetails() {
    let { item, relatedCategory } = this.props;
    let relatedLinks = item[relatedCategory];
    let relatedTitles = [];

    for (let relLink of relatedLinks) {
      let response = await fetch(relLink);
      let relatedItem = await response.json();

      relatedTitles.push([
        relatedItem.name || relatedItem.title,
        this.getLink(relLink, true),
        this.getLink(relLink)
      ]);
    }

    this.setState(prevState => {
      let newItem = prevState.item;
      newItem[relatedCategory] = relatedTitles;

      return { item: newItem };
    });
  }

  getLink(itemLink, isForImage = false) {
    let { relatedCategory } = this.props;
    relatedCategory = relatedCategory.replace("residents", "people");
    relatedCategory = relatedCategory.replace("characters", "people");
    relatedCategory = relatedCategory.replace("pilots", "people");
    let reg = new RegExp(`${relatedCategory}/\\d+`);
    let newLink = itemLink.match(reg).toString();

    if (isForImage) {
      newLink = newLink.replace("people", "characters");
      return `https://starwars-visualguide.com/assets/img/${newLink}.jpg`;
    } else {
      return newLink;
    }
  }

  render() {
    let { relatedCategory } = this.props;
    let { item } = this.state;

    return (
      <div className="DetailsRelated">
        <p>Related {relatedCategory}</p>
        <div>
          {item[relatedCategory].length ? (
            item[relatedCategory].map(itemInCat => (
              <div key={itemInCat} className="DetailsRelated-thumbnail">
                {typeof itemInCat === "string" ? (
                  <div className="lds-ring"><div></div><div></div><div></div><div></div></div>
                ) : (
                  <Link to={`/${itemInCat[2]}`}>
                    <img
                      alt={itemInCat[0]}
                      src={itemInCat[1]}
                      width="50"
                      onError={event =>
                        (event.target.src =
                          "https://starwars-visualguide.com/assets/img/placeholder-small.jpg")
                      }
                    />
                    <div>{itemInCat[0]}</div>
                  </Link>
                )}
              </div>
            ))
          ) : (
            <div className="DetailsRelated-no-items">
              <b>No items related</b>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default DetailsRelated;
