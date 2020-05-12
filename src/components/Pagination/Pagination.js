import React from 'react';
import Pagination from "react-js-pagination";

const PaginationBar = ({ activePage, photosPerPage, total, handlePageChange }) => {
    return (
        <Pagination
            className='justify-content-center'
            itemClass="page-item"
            linkClass="page-link"
            activePage={activePage}
            itemsCountPerPage={photosPerPage}
            totalItemsCount={total}
            onChange={handlePageChange}
            pageRangeDisplayed={5}
            prevPageText='Prev'
            nextPageText='Next'
        />
    )
}

export default PaginationBar;