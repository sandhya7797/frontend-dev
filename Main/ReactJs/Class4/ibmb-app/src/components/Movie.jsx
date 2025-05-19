import '../App.css';
const Movie = ({movie, watchList, setWatchList}) => {
    const handleWatchListButton = () => {
        setWatchList([...watchList, { id: movie.id, title: movie.title}]);
    }
    return (
        <div className="movie">
            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title}/>
            <div className="movie-info">
                <h2>{movie.title}</h2>
                <button onClick={handleWatchListButton}>{watchList.some(item => item.id === movie.id)?'-':'+'}WatchList</button>
            </div>
        </div>
    );
}

export default Movie;