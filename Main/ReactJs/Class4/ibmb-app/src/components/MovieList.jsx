import Movie from "./Movie";
import '../App.css';
import { use } from "react";
import { useSelector } from "react-redux";

const MovieList = () => {
    const movies = useSelector((state) => state.movielist.movies);
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