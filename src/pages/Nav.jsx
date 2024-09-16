import { NavLink } from "react-router-dom";

export default function Nav() {
  const active = ({ isActive }) => (isActive ? "nav-active" : "");
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/" className={active}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" className={active}>
            About
          </NavLink>
        </li>
        <li>
          <NavLink to="/products" className={active}>
            Products
          </NavLink>
        </li>
        <li>
          <NavLink to="/404" className={active}>
            404
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
