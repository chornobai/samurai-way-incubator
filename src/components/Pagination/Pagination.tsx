import React, { useState } from "react";
import s from "./Pagination.module.css";

const Pagination = React.memo((props: any) => {
  // Local state of current page
  const [currentPage, setCurrentPage] = useState(1);

  /*How many number of pages you want see -  now it 20 */
  const countPages = Math.round(props.totalCount / 20);

  // Create Array of pages
  const pages = [];

  // Fill the Array "pages" with numbers
  for (let i = 1; i <= countPages; i++) {
    pages.push(i);
  }

  // Portion of pages from left and right sides
  const leftPages = (currentPage - 1) * 20 + 1;
  const rightPages = currentPage * 20;

  return (
    <div className={s.pagination}>
      {/*  Render button*/}
      {currentPage > 1 && (
        <button
          onClick={() => {
            setCurrentPage(currentPage - 1);
          }}
        >
          PREV
        </button>
      )}
      <ul className={s.pagination_list}>
        {pages
          .filter((p) => p >= leftPages && p <= rightPages)
          .map((p) => {
            return (
              <li
                key={p}
                onClick={() => {
                  props.onAddUsersPagination(p);
                }}
              >
                {p}
              </li>
            );
          })}
      </ul>
      {/*  Render button*/}
      {countPages > currentPage && (
        <button
          onClick={() => {
            setCurrentPage(currentPage + 1);
          }}
        >
          NEXT
        </button>
      )}
    </div>
  );
});

export { Pagination };
