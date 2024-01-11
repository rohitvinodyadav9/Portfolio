import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li className="navbar-item">
          <NavLink
            to="/"
            className="navbar-link"
            style={({ isActive }) => ({ color: isActive ? "hsl(45, 100%, 72%)" : "white" })}
            activeClassName="active-link"
            data-nav-link
          >
            About
          </NavLink>
        </li>

        <li className="navbar-item">
          <NavLink
            to="/resume"
            className="navbar-link"
            style={({ isActive }) => ({ color: isActive ? "hsl(45, 100%, 72%)" : "white" })}
            activeClassName="active-link"
            data-nav-link
          >
            Resume
          </NavLink>
        </li>

        <li className="navbar-item">
          <NavLink
            to="/portfolio"
            className="navbar-link"
            style={({ isActive }) => ({ color: isActive ? "hsl(45, 100%, 72%)" : "white" })}
            activeClassName="active-link"
            data-nav-link
          >
            Projects
          </NavLink>
        </li>

        {/* <li className="navbar-item">
          <NavLink
            to="/blog"
            className="navbar-link"
            style={({ isActive }) => ({ color: isActive ? "hsl(45, 100%, 72%)" : "white" })}
            activeClassName="active-link"
            data-nav-link
          >
            Blog
          </NavLink>
        </li> */}

        <li className="navbar-item">
          <NavLink
            to="/contact"
            className="navbar-link"
            style={({ isActive }) => ({ color: isActive ? "hsl(45, 100%, 72%)" : "white" })}
            activeClassName="active-link"
            data-nav-link
          >
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;