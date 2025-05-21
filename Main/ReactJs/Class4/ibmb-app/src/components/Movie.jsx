import { useContext } from 'react';
import '../App.css';
import { useDispatch, useSelector } from 'react-redux';
import { setWatchList } from '../store/WatchListStore';

const Movie = ({ movie }) => {
    const watchList = useSelector((state) => state.watchlist);
    const dispatch = useDispatch();
    const handleWatchListButton = () => {
        const list = Object.values(watchList);
        const isMovieInWatchList = list.some(item => item.id === movie.id);
        if(!isMovieInWatchList) {
            dispatch(setWatchList([...Object.values(watchList), { id: movie.id, movie }]));
        } else {
            const updatedWatchList = list.filter(item => item.id !== movie.id);
            dispatch(setWatchList(updatedWatchList));
        }
    }
    return (
        <div className="movie">
            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
            <div className="movie-info">
                <h2>{movie.title}</h2>
                <button onClick={handleWatchListButton}>{Object.values(watchList).some(item => item.id === movie.id) ? '-' : '+'}WatchList</button>
            </div>
        </div>
    );
}

export default Movie;