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

const WatchList = ({ watchList, setWatchList }) => {

    console.log(watchList);

    const handleRemoveFromWatchList = (id) => {
        // Here we will filter the watchList and remove the movie with the given id
        const updatedWatchList = watchList.filter((movie) => movie.id !== id);
        // Update the watchList state with the new watchList
        setWatchList(updatedWatchList);
    }
    return (
        <div>
            <h2>Watch List</h2>
            <div className="container">
                <div className="left-section"></div>
                <div className="right-section">
                    <table border={1} cellPadding={10} cellSpacing={0}>
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Poster</th>
                                <th>Movie Title</th>
                                <th>Genres</th>
                                <th>Popularity</th>
                            </tr>
                        </thead>
                        <tbody>
                            {watchList.map((movie) => (
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