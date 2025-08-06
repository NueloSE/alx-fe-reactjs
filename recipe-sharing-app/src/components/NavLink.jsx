import { Link } from "react-router-dom";

function Navbar () {
    return (
      <nav className="static">
        <ul className="flex-2 space-edge">
          <li>
            <Link to="/">Recipes Haven</Link>
          </li>
          <ul  className="flex-2">
            <li>
              <Link to="/add">Add Recipes</Link>
            </li>
            <li>
              <Link to="/list">View Recipes</Link>
            </li>
          </ul>
        </ul>
      </nav>
    );
}

export default Navbar;