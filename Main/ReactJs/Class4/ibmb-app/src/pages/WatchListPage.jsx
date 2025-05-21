import { useContext, useEffect, useState } from 'react';
import '../App.css';
import { useDispatch, useSelector } from 'react-redux';
import { setWatchList } from '../store/WatchListStore';

//Note : here watchlist is just used to copy the data from the watchList to the list and we are dispalying results of search data by iterating over the list (local copy of WatchListPage) and not the watchList directly.

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

const WatchList = () => {
    const [list, setList] = useState([]);//local copy of watchList to display the results of search,sort or filtered data
    const watchList = useSelector((state) => state.watchlist);
    const dispatch = useDispatch();

    // Remove movie from watchlist
    const handleRemoveFromWatchList = (id) => {
        const updatedWatchList = Object.values(watchList).filter((movie) => movie.id !== id);
        dispatch(setWatchList({...updatedWatchList}));
    }

    // Searching - Handles search input and filters movies by title; watchList is the source of truth and list holds the filtered state for both typing and clearing the search box.
    const handleMovieSearch = (e) => {
        const newList = Object.values(watchList).filter((movie) => (movie.movie.title.toLowerCase().includes(e.target.value.toLowerCase())));
        setList(newList);
    }

    // On initial mount, set the list to show all movies from the watchList. It also updates the list whenever the watchList changes.
    useEffect(() => {
        setList(Object.values(watchList));
    }, [watchList]);

    //Sorting - Handles sorting of movies by popularity in ascending or descending order.
    const handleSorting = (type) => {
        const sortedList = Object.values(watchList).sort((a, b) => type === 'ASC' ? a.movie.popularity - b.movie.popularity : b.movie.popularity - a.movie.popularity);
        setList(sortedList);
    }

    // Genre Filter - It creates a unique list of genres from the watchList.
    const selectedMoviesGenre = () => {
        const selectedGenres = Object.values(watchList).map((movie) => movie.movie.genre_ids).flat();
        return [...new Set(selectedGenres)];
    }

    // Filter movies by genre. It filters the list based on the selected genre id. If no genre is selected, it shows all movies.
    const handleGenreFilter = (genreId) => {
        const filteredList = Object.values(watchList).filter(genreId ? (movie) => movie.movie.genre_ids.includes(parseInt(genreId)) : (movie) => true);
        setList(filteredList);
    }

    return (
        <div>
            <div className="container">
                <div className="left-section">
                    <div className="genre-section">
                        <ul>
                            <h2>Genre</h2>
                            <li>
                                <input type="checkbox" onClick={() => handleGenreFilter()} />ALL
                            </li>
                            {
                                selectedMoviesGenre().map((id) => (
                                    <li>
                                        <input type="checkbox" onClick={() => handleGenreFilter(id)} />
                                        <label>{genresIds[id]}</label>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                </div>
                <div className="right-section">
                    <input type="text" placeholder="Search..." onChange={handleMovieSearch} />
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