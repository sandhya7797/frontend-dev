import '../App.css';
import { Link } from 'react-router';

const Header = () => {
    return  (
        <div className="header">
            <h1>IMDB</h1>
            <ul>
                <li>
                    <Link to="/">MovieList</Link>
                </li>
                <li>
                    <Link to="/details">MovieDetails</Link>
                </li>
                <li>
                    <Link to="/watchList">WatchList</Link>
                </li>
            </ul>
        </div>
    );
}

export default Header;