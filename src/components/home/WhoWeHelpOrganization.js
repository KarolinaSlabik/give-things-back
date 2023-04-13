import ReactPaginate from "react-paginate";
import React, { useEffect, useState } from "react";
// import listOfFoundations from "../utils/listOfFoundations";

function Items({ currentItems }) {
    return (
        <div className="items">
            {currentItems && currentItems.map((item) => (
                <div className="itemContainer">
                    <div className="itemLeftBox">
                        <div className="nameOrganization">
                            { item.nameOrganization }
                        </div>
                        <div className="goalsOrganization">
                            { item.goalsOrganization }
                        </div>
                    </div>
                    <div className="itemRightBox goalsOrganization">
                        { item.collectedItems }
                    </div>
                </div>
            ))}
        </div>
    );
}

function PaginatedItems(props) {
    // We start with an empty list of items.
    const [currentItems, setCurrentItems] = useState(null);
    const [pageCount, setPageCount] = useState(0);
    // Here we use item offsets; we could also use page offsets
    // following the API or data you're working with.
    const [itemOffset, setItemOffset] = useState(0);

    useEffect(() => {
        // Fetch items from another resources.
        const endOffset = itemOffset + props.itemsPerPage;
        console.log(`Loading items from ${itemOffset} to ${endOffset}`);
        setCurrentItems(props.listOfItems.slice(itemOffset, endOffset));
        const calcPageCount = Math.ceil(props.listOfItems.length / props.itemsPerPage);
        if (calcPageCount === 1) {
            setPageCount(0);
        } else {
            setPageCount(calcPageCount);
        }
    }, [itemOffset, props.itemsPerPage, props.listOfItems]);

    // Invoke when user click to request another page.
    const handlePageClick = (event) => {
        const newOffset = event.selected * props.itemsPerPage % props.listOfItems.length;
        console.log(`User requested page number ${event.selected}, which is offset ${newOffset}`);
        setItemOffset(newOffset);
    };

    return (
        <>
            <Items currentItems={currentItems} />

            <ReactPaginate
                nextLabel=""
                onPageChange={handlePageClick}
                pageRangeDisplayed={20}
                marginPagesDisplayed={20}
                pageCount={pageCount}
                previousLabel=""
                pageClassName="page-item"
                pageLinkClassName="page-link"
                breakLabel=""
                containerClassName="pagination"
                activeClassName="active"
                renderOnZeroPageCount={null}
            />
        </>
    );
}

const WhoWeHelpOrganization = (props) => {
    return <>
        <div className="whoWeHelpPaginationContainer">
            <div className="whoWeHelpText">
                { props.description }
            </div>
            <PaginatedItems itemsPerPage={3} listOfItems={props.listOfItems}/>
        </div>
    </>
};
export default WhoWeHelpOrganization