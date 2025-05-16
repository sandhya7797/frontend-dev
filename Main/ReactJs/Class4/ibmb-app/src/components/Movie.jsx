import '../App.css';
const Movie = ({movie}) => {
    return (
        <div className="movie">
            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title}/>
            <button>+WatchList</button>
        </div>
    );
}

export default Movie;