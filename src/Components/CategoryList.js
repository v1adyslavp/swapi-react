import React, { Component } from "react";
import { Link } from "react-router-dom";
import Pagination from "./Pagination";

import "./CategoryList.css";

class CategoryList extends Component {
  state = {
    items: "",
    pageParam: this.getPageParam()
  };

  componentDidMount() {
    this.setItems();
    this.setNewPage = this.setNewPage.bind(this);
  }

  async setItems() {
    let response = await fetch(
      `https://swapi.co/api/${this.props.category}/${this.state.pageParam}`
    );
    let items = await response.json();

    this.setState({ items });
  }

  getItemLink(itemURL, isForImage = false) {
    let reg = new RegExp("/" + this.props.category + ".*(?=/)");
    [itemURL] = itemURL.match(reg);

    if (isForImage && /people/.test(itemURL)) {
      itemURL = itemURL.replace("people", "characters");
    }

    return itemURL;
  }

  getPageParam() {
    let paramsStr = window.location.search;
    let searchParams = new URLSearchParams(paramsStr);
    let pageParam = searchParams.has("page")
      ? `?page=${searchParams.get("page")}`
      : "?page=1";

    return pageParam;
  }

  setNewPage(param) {
    this.setState(
      {
        pageParam: param,
        items: ""
      },
      () => this.setItems()
    );
  }

  render() {
    return (
      <div>
        <div className="CategoryList-navigation">
          <div className="CategoryList-brcrumbs">
            <Link className="CategoryList-brcrumbs-link" to={`/`}>
              Home
            </Link>
            {" / "}
            <span className="CategoryList-brcrumbs-current">
              {this.props.category}
            </span>
          </div>
          <div className="CategoryList-pagination-wrapper">
            <Pagination
              setNewPageCallback={this.setNewPage}
              category={this.props.category}
              count={this.state.items.count}
              activePage={+this.state.pageParam.replace(/\D+/g, "")}
            />
          </div>
        </div>
        {this.state.items ? (
          <>
            <div className="CategoryList-Items-Container">
              {this.state.items.results.map(item => (
                <Link 
                  className="CategoryList-Items-link"
                  key={item.name || item.title}
                  to={this.getItemLink(item.url)}
                >
                  <div className="CategoryList-Item">
                    <div className="CategoryList-Item-image">
                      <img
                        src={`https://starwars-visualguide.com/assets/img${this.getItemLink(
                          item.url,
                          true
                        )}.jpg`}
                        onError={event =>
                          (event.target.src =
                            "https://starwars-visualguide.com/assets/img/placeholder.jpg")
                        }
                        alt={item.name || item.title}
                      />
                    </div>

                    <div className="CategoryList-Item-title">{item.name || item.title}</div>
                  </div>
                </Link>
              ))}
            </div>
          </>
        ) : (
          "loading..."
        )}
      </div>
    );
  }
}

export default CategoryList;
