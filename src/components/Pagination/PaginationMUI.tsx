import React, { useState } from "react";
import { Pagination, Stack } from "@mui/material";

type PaginationMUIPropsType = {
  totalCount: number;
  onAddUsersPagination: (page: number) => void;
};

export const PaginationMUI = React.memo;
{
  (props: PaginationMUIPropsType) => {
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
    // When you change page
    const handlePageChange = (event: any, page: number) => {
      debugger;
      setCurrentPage(page);
      props.onAddUsersPagination(page);
    };

    return (
      <Stack spacing={2}>
        <Pagination count={countPages} onChange={handlePageChange} />
      </Stack>
    );
  };
}
