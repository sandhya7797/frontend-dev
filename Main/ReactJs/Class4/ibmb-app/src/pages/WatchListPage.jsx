const WatchList = ({watchList, setWatchList}) => {

    const handleRemoveFromWatchList = (id) => {
        // Here we will filter the watchList and remove the movie with the given id
        const updatedWatchList = watchList.filter((movie) => movie.id !== id);
        // Update the watchList state with the new watchList
        setWatchList(updatedWatchList);
    }
    return (
        <div>
            <h2>Watch List</h2>
            <table border={1} cellPadding={10} cellSpacing={0}>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Movie Title</th>
                    </tr>
                </thead>
                <tbody>
                    {watchList.map((movie) => (
                        <tr>
                            <td>{movie.id}</td>
                            <td>{movie.title}</td>
                            <td><button onClick={() => handleRemoveFromWatchList(movie.id)}>Remove</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default WatchList;