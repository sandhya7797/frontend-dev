import MovieList from "../components/MovieList";
import React, { useEffect, useState } from "react";
import Pagination from "../components/Pagination";


const MovieListPage = ({watchList, setWatchList}) => {
    const [movies, setMovies] = useState([]);
    const [totalPages, setTotalPages] = useState(0);

    const fetchMovies = (pageNo) => {
            fetch(`https://api.themoviedb.org/3/trending/movie/day?api_key=3aec63790d50f3b9fc2efb4c15a8cf99&language=en-US&page=${pageNo}`)
            .then((response) => response.json())
            .then((data) => {
                setMovies(data.results);
                setTotalPages(data.total_pages)})
            .catch((error) => console.error("Error fetching movies:", error));
    }

    // here we are using useEffect to fetch the movies when the component mounts. useEffect is a hook that allows you to perform side effects in function components
    useEffect(() => {
        fetchMovies(1);
    },[]);

    // Pagination component to handle pagination. The fetchMovies function is passed as a prop to the Pagination component. so that it can be called when the user clicks on a page number.
    return (
        <div className="movie-list-page">
            <MovieList movies={movies} watchList={watchList} setWatchList={setWatchList}/>
            <Pagination fetchMovies={fetchMovies} totalPages={20}/>
        </div>
    );
}

export default MovieListPage;