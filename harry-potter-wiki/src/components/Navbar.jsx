import { Link } from "react-router-dom";
import "./Navbar.css"
const Navbar = () => {

  return (
    <>
        <nav className='nav bg-yellow-600 sticky top-0 z-50 '>
            <Link 
        to="/" 
        className="text-xl sm:text-2xl font-bold text-black hover:text-white transition-colors duration-200"
      >
        Harry Potter Wiki
      </Link>
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