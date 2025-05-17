import { useState } from "react";
import "../App.css";
const Pagination = ({fetchMovies})=> {
    const [pages, setpages] = useState([1,2,3,4,5]);
    const [selectedPage, setSelectedPage] = useState(pages[0]);

    const handleClick = (pageNo) => {
        fetchMovies(pageNo);
        setSelectedPage(pageNo);
    }

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