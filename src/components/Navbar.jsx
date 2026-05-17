import { NavLink } from "react-router-dom";
import "./Navbar.css"; 

function Navbar({ cartCount }) {
  return (
    <nav>

      <h1>SneakerHub</h1>

      <div className="nav-links">

        <NavLink to="/"> Home </NavLink>
        <NavLink to="/products"> Shop </NavLink>
        <NavLink to="/admin">Admin </NavLink>

      </div>

    </nav>
  );
}

export default Navbar;