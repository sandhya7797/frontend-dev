import { useState, useEffect } from "react";
import "../App.css";

const Pagination = ({ fetchMovies, totalPages }) => {
    const [pages, setpages] = useState([]);
    const [selectedPage, setSelectedPage] = useState(pages[0]);
    const THRESHOLD = 10; 

    const setNewPagesList = (pageNo) => {
        const itemsLength = Math.min(totalPages, THRESHOLD);
        let itemsOnLeft = Math.ceil(THRESHOLD / 2) - 1;
        //left most boundary condition
        let startingPageNumber = Math.max(pageNo - itemsOnLeft, 1);
        // right most boundary condition
        if (startingPageNumber + THRESHOLD > totalPages) {
            startingPageNumber = totalPages - itemsLength + 1;
        }
        const list = Array.from({ length: Math.min(THRESHOLD, totalPages) }, (_, i) => startingPageNumber + i);
        setpages(list);
    }


    const handleClick = (pageNo) => {
        fetchMovies(pageNo);//fetch the movies for the selected page
        setSelectedPage(pageNo);//highlight the selected page
        setNewPagesList(pageNo);//set the new pages list for the selected page
    }

    //initial loading of pages
    useEffect(() => {
        const list = Array.from({ length: Math.min(totalPages, THRESHOLD) }, (_, i) => i + 1);
        setpages(list);
    }, [totalPages]);

    return (
        <div className="pagination-section">
            <button onClick={() => handleClick(selectedPage - 1)} disabled={selectedPage == pages[0]}>&lt;</button>
            {
                pages.map((page, index) => (
                    <button 
                    className={selectedPage == page ? 'active' : ''} 
                    onClick={() => handleClick(page)}>
                        {page}
                    </button>
                ))
            }
            <button onClick={() => handleClick(selectedPage + 1)} disabled={selectedPage == pages[pages.length - 1]}>&gt;</button>
        </div>
    );
}

export default Pagination;