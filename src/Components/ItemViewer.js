import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./ItemViewer.css";

class ItemViewer extends Component {
  state = {
    item: {}
  };

  componentDidMount() {
    this.getItem();
  }

  async getItem() {
    let { number } = this.props.match.params;
    number = parseInt(number, 10);

    if (!number) {
      return (
        <>
          <h2>No such item</h2>
          <Link to="/">Return home</Link>
        </>
      );
    }

    let response = await fetch(
      `https://swapi.co/api/${this.props.category}/${number}?format=json`
    );
    let item = await response.json();

    this.setState({ item });
  }

  render() {
    let { children } = this.props;

    return (
      <>
        
        <div className="ItemViewer-brcrumbs">
          <Link className="ItemViewer-brcrumbs-link" to={`/`}>
            Home
          </Link>
          {" / "}
          <Link
            className="ItemViewer-brcrumbs-link"
            to={`/${this.props.category}`}
          >
            {this.props.category}
          </Link>
          {" / "}
          {this.state.item.name || this.state.item.title}
        </div>

        {this.state.item.name || this.state.item.title ? (
          <div className="ItemViewer">
            {React.Children.map(children, child => ({
              ...child,
              props: { ...child.props, category: this.props.category, item: this.state.item }
            }))}
          </div>
        ) : (
          <>
            <p>loading...</p>
            <p className="ItemViewer-back-btn">
              <Link to={`/${this.props.category}`}>Back</Link>
            </p>
          </>
        )}
      </>
    );
  }
}

export default ItemViewer;
