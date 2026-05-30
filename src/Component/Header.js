import { BrowserRouter,Routes,Route,Link } from "react-router-dom";
import Home from "./Home";
import Contact from "./Contact";
import Movies from "./Movies";
import "./Header.css";

function Header(){
    return(
    <BrowserRouter>

      <nav className="navbar">
        <h2 className="logo">MOVIE HUB</h2>

        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/movies">Movies</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

    </BrowserRouter>
     );
}
export default Header;