import React from "react";
import { Link } from "react-router-dom";

import "./Pagination.css";

function Pagination({ category, count, setNewPageCallback, activePage }) {
  let pagesAmount = Math.ceil(count / 10);
  let pages = [];
  for (let i = 1; i <= pagesAmount; i++) {
    pages.push(i);
  }

  return (
    <>
      {pages.map(pageNum => (
        <Link
          onClick={() => setNewPageCallback(`?page=${pageNum}`)}
          key={pageNum}
          to={`/${category}/?page=${pageNum}`}
          className={
            activePage === pageNum
              ? "Pagination-page Pagination-page-active"
              : "Pagination-page"
          }
        >
          <span>{pageNum}</span>
        </Link>
      ))}
    </>
  );
}

export default Pagination;
