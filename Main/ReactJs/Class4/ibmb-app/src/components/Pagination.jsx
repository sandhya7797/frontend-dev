import { useState } from "react";
import { useEffect } from "react";
import "../App.css";
const Pagination = ({fetchMovies, totalPages})=> {
    const [pages, setpages] = useState([]);
    const [selectedPage, setSelectedPage] = useState(pages[0]);
    const THRESHOLD = 10; // number of pages to show on either side of the current page

    const handleClick = (pageNo) => {
        fetchMovies(pageNo);
        setSelectedPage(pageNo);
    }

    // initialization - array of pages is created based on the total number of pages.
    useEffect(() => {
        const list = Array.from({ length: Math.min(totalPages,THRESHOLD)}, (_, i) => i + 1);
        setpages(list);
    }, [totalPages]);

    return (
        <div className="pagination-section">
            <button onClick={()=>handleClick(selectedPage-1)} disabled={selectedPage == pages[0]}>&lt;</button>
            {
                pages.map((page, index) => (
                    <button className={selectedPage==page?'active':''}onClick={()=>handleClick(page)}>
                        {page}
                    </button>
                ))
            }
            <button onClick={()=>handleClick(selectedPage+1)} disabled={selectedPage == pages[pages.length-1]}>&gt;</button>
        </div>
    );
}

export default Pagination;