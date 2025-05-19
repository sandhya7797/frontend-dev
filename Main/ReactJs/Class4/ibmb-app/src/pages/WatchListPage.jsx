import { useEffect, useState } from 'react';
import '../App.css';

const genresIds = {
    28: 'Action',
    12: 'Adventure',
    16: 'Animation',
    35: 'Comedy',
    80: 'Crime',
    99: 'Documentary',
    18: 'Drama',
    10751: 'Family',
    14: 'Fantasy',
    36: 'History',
    27: 'Horror',
    10402: 'Music',
    9648: 'Mystery',
    10749: 'Romance',
    878: 'Science Fiction',
    10770: 'TV Movie',
    53: 'Thriller',
    10752: 'War',
    37: 'Western',
};

//Note : watchlist is just used to copy the data from the watchList to the list and we are dispalying results of search data by iterating over the list (local copy of watchList) and not the watchList directly.

const WatchList = ({ watchList, setWatchList }) => {
    const [list, setList] = useState([]);

    // remove the movie from the watchList
    const handleRemoveFromWatchList = (id) => {
        const updatedWatchList = watchList.filter((movie) => movie.id !== id);
        setWatchList(updatedWatchList);
    }

    // handle the search input and filter the movies based on the title
    // here watchlist is source of truth and we are maintainting the search state in the list
    // this method will handle the search input when user types in the search box as well as when the user clears the search box
    const handleMovieSearch = (e) => {
        const newList = Object.values(watchList).filter((movie) => (movie.movie.title.toLowerCase().includes(e.target.value.toLowerCase())));
        setList(newList);
    }

    // for the first time when component mounts we should show all the movies in the watchList
    // so we will set the list to the watchList 
    useEffect(() => {
        setList(Object.values(watchList));
    },[watchList]);

    const handleSorting = (type) => {
        const sortedList = Object.values(watchList).sort((a, b) => type === 'ASC' ? a.movie.popularity - b.movie.popularity : b.movie.popularity - a.movie.popularity);
        setList(sortedList);
    }

    return (
        <div>
            <h2>Watch List</h2>
            <div className="container">
                <div className="left-section"></div>
                <div className="right-section">
                    <input type="text" placeholder="Search..." onChange={handleMovieSearch}/>
                    <table border={1} cellPadding={10} cellSpacing={0}>
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Poster</th>
                                <th>Movie Title</th>
                                <th>Genres</th>
                                <th>Popularity<span onClick={() => handleSorting('ASC')}>^</span><span onClick={() => handleSorting('DESC')}>v</span></th>
                            </tr>
                        </thead>
                        <tbody>
                            {list.map((movie) => (
                                <tr>
                                    <td>{movie.id}</td>
                                    <td><img src={`https://image.tmdb.org/t/p/w500${movie.movie.poster_path}`} alt={movie.title} height={'50px'} /></td>
                                    <td>{movie.movie.title}</td>
                                    <td>{movie.movie.genre_ids.map(id => genresIds[id]).filter(Boolean).join(', ')}</td>
                                    <td>{movie.movie.popularity}</td>
                                    <td><button onClick={() => handleRemoveFromWatchList(movie.id)}>Remove</button></td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default WatchList;