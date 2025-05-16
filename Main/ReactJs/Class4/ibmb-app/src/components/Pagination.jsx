import { useState } from "react";
import "../App.css";
const Pagination = ({fetchMovies})=> {
    const [list, setList] = useState([1,2,3,4,5]);

    const handleClick = (pageNo) => {
        fetchMovies(pageNo);
    }

    return (
        <div className="pagination-section">
            <button>&lt;</button>
            {
                list.map((item, index) => (
                    <button onClick={()=>handleClick(item)}>{item}</button>
                ))
            }
            <button>&gt;</button>
        </div>
    );
}

export default Pagination;