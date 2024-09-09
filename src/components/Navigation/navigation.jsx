import { NavLink } from "react-router-dom";
import clsx from "clsx";
import css from "./navigation.module.css";

const NavLinkStyle = (props) => {
  return clsx(css.link, props.isActive && css.active);
};

export default function Navigation() {
  return (
    <ul>
      <li>
        <NavLink to="/" className={NavLinkStyle}>
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/movies" className={NavLinkStyle}>
          Movies
        </NavLink>
      </li>
    </ul>
  );
}
