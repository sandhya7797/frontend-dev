import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';
import "./Header.css";

const Header = () => {
  return (
    <div className="nav">
      <div className="nav-left">
        <h1>Employee Management System</h1>
        </div>
      <div className="nav-right">
        <Link to="/">
          <span>Employees</span>
        </Link>
        <Link to="/employee">
          <span>Create</span>
        </Link>
      </div>
    </div>
  );
}

export default Header;

