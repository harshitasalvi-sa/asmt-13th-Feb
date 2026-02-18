import { Link } from "react-router-dom";
import "./Navbar.css"
const Navbar = () => {

  return (
    <>
        <nav className='nav bg-yellow-600'>
            <div className="heading">Harry Potter Wiki</div>
            <div>
                <Link to="/spells" className="nav-list">Spells</Link>
                <Link to="/houses" className="nav-list">Houses</Link>
                <Link to="/books" className="nav-list">Books</Link>
                <Link to="/characters" className="nav-list">Characters</Link>
            </div>
        </nav>
    </>
  );
};

export default Navbar;