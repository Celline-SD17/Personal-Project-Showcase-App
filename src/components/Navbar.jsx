import { NavLink } from "react-router-dom";

function Navbar({ cartCount }) {
  return (
    <nav>

      <h2>SneakerHub</h2>

      <div>

        <NavLink to="/">
          Home
        </NavLink>

        <NavLink to="/products">
          Shop
        </NavLink>

        <NavLink to="/admin">
          Admin
        </NavLink>

        <span>
          Cart: {cartCount}
        </span>

      </div>

    </nav>
  );
}

export default Navbar;