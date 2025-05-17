import { useState } from "react";
import "../App.css";
const Pagination = ({fetchMovies})=> {
    const [list, setList] = useState([1,2,3,4,5]);
    const [selectedPage, setSelectedPage] = useState(1);

    const handleClick = (pageNo) => {
        fetchMovies(pageNo);
        setSelectedPage(pageNo);
    }

    return (
        <div className="pagination-section">
            <button>&lt;</button>
            {
                list.map((page, index) => (
                    <button className={selectedPage==page?'active':''}onClick={()=>handleClick(page)}>
                        {page}
                    </button>
                ))
            }
            <button>&gt;</button>
        </div>
    );
}

export default Pagination;