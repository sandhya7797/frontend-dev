import MovieList from "../components/MovieList";
import React, { useEffect, useState } from "react";
import Pagination from "../components/Pagination";
import { useDispatch, useSelector } from "react-redux";
import { setMovies, setTotalPages } from "../store/MovieList";

const MovieListPage = () => {

    const dispatch = useDispatch();
    const totalPages = useSelector((state) => state.movielist.totalPages);
    const movies = useSelector((state) => state.movielist.movies);

    const fetchMovies = (pageNo) => {
            fetch(`https://api.themoviedb.org/3/trending/movie/day?api_key=3aec63790d50f3b9fc2efb4c15a8cf99&language=en-US&page=${pageNo}`)
            .then((response) => response.json())
            .then((data) => {
                dispatch(setMovies(data.results));
                dispatch(setTotalPages(data.total_pages));})
            .catch((error) => console.error("Error fetching movies:", error));
    }

    // here we are using useEffect to fetch the movies when the component mounts. useEffect is a hook that allows you to perform side effects in function components
    useEffect(() => {
        fetchMovies(1);
    },[]);

    // Pagination component to handle pagination. The fetchMovies function is passed as a prop to the Pagination component. so that it can be called when the user clicks on a page number.
    return (
        <div className="movie-list-page">
            <MovieList />
            <Pagination fetchMovies={fetchMovies} totalPages={totalPages}/>
        </div>
    );
}

export default MovieListPage;