import '../App.css';

const Header = () => {
    return  (
        <div className="header">
            <h1>IMDB</h1>
            <ul>
                <li><a href="/">MovieList</a></li>
                <li><a href="/details">MovieDetails</a></li>
                <li><a href="/watchlist">WatchList</a></li>
            </ul>
        </div>
    );
}

export default Header;