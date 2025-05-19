import Movie from "./Movie";
import '../App.css';

const MovieList = ({movies, watchList, setWatchList}) => {
    return (
        <div className="movie-list">
            <ul>
                {movies.map((movie) => (
                    <li key={movie.id}>
                        <Movie movie={movie} watchList={watchList} setWatchList={setWatchList}/>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default MovieList;