import Movie from "./Movie";
import '../App.css';

const MovieList = ({movies}) => {
    return (
        <div className="movie-list">
            <ul>
                {movies.map((movie) => (
                    <li key={movie.id}>
                        <Movie movie={movie} />
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default MovieList;