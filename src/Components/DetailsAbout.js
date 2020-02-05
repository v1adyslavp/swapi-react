import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./DetailsAbout.css";

class DetailsAbout extends Component {
  state = {
    item: this.props.item
  };

  componentDidMount() {
    this.getLinksFromUrl();
  }

  async getLinksFromUrl() {
    let { item: stateItem } = this.state;
    let { detailsList } = this.props;

    for (let option in stateItem) {
      let optionValue = stateItem[option].toString();

      if (
        /https:\/\/swapi\.co\/api/.test(optionValue) &&
        detailsList.hasOwnProperty(option)
      ) {
        let [linkRoute] = optionValue
          .match(/(?<=https:\/\/swapi\.co\/api).+/);
        let response = await fetch(optionValue);
        let linkTitle = await response.json();

        this.setState(prevState => {
          let newItem = { ...prevState.item };
          newItem[option] = <Link to={linkRoute}> {linkTitle.name} </Link>;

          return {
            item: newItem
          };
        });
      }
    }
  }

  getImageLink() {
    let reg = new RegExp(`${this.props.category}.+`);
    let pathname = window.location.pathname;

    let [imageLink] = pathname.match(reg);

    if (/people/.test(imageLink)) {
      imageLink = imageLink.replace("people", "characters");
    }

    return `https://starwars-visualguide.com/assets/img/${imageLink}.jpg`;
  }

  render() {
    let { detailsList } = this.props;
    let { item } = this.state;

    return (
      <div className="DetailsAbout">
        <div className="DetailsAbout-photo-wrapper">
          <img
            alt={this.state.item.name || this.state.item.title}
            src={this.getImageLink()}
            onError={event =>
              (event.target.src =
                "https://starwars-visualguide.com/assets/img/big-placeholder.jpg")
            }
          />
        </div>
        <div className="DetailsAbout-info-wrapper">
          <h3>{this.state.item.name || this.state.item.title}</h3>
          {Object.entries(detailsList).map(([objKey, title]) => (
            <p key={title}>
              <b>{title}:</b> {item[objKey]}
            </p>
          ))}
        </div>
      </div>
    );
  }
}

export default DetailsAbout;
