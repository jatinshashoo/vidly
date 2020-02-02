import React, { Component } from "react";
import _ from "lodash";

const Pagination = props => {
  const { itemsCount, pageSize, onPageChange, currentPage } = props;
  console.log(currentPage);

  const pageCount = Math.ceil(itemsCount / pageSize);
  if (pageCount === 1) return null;
  const pages = _.range(1, pageCount + 1);

  return (
    <nav className="ul pagination">
      {pages.map(page => (
        <li
          key={page}
          className={page === currentPage ? "page-item active" : "page-item"}
        >
          <a onClick={() => onPageChange(page)} className="page-link">
            {page}
          </a>
        </li>
      ))}
    </nav>
  );
};

export default Pagination;
