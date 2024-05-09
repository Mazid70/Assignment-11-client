import { useState } from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
    const [use,setUser]=useState
  const Link = (
    <>
      <li>
        <NavLink
          to="/"
          style={({ isActive }) => {
            return {
              fontWeight: isActive ? "bold" : "bold",
              color: isActive ? "#ffcc00" : "#fff",
              background: isActive ? "transparent" : "",
              border: isActive ? "1px solid #ffcc00" : "",
            };
          }}
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/all"
          style={({ isActive }) => {
            return {
              fontWeight: isActive ? "bold" : "bold",
              color: isActive ? "#ffcc00" : "#fff",
              background: isActive ? "transparent" : "",
              border: isActive ? "1px solid #ffcc00" : "",
            };
          }}
        >
          All Tourists Spot
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/add"
          style={({ isActive }) => {
            return {
              fontWeight: isActive ? "bold" : "bold",
              color: isActive ? "#ffcc00" : "#fff",
              background: isActive ? "transparent" : "",
              border: isActive ? "1px solid #ffcc00" : "",
            };
          }}
        >
          Add Tourists Spot
        </NavLink>
      </li>

      {!user ? (
        <li>
          <NavLink
            to="/signin"
            style={({ isActive }) => {
              return {
                fontWeight: isActive ? "bold" : "bold",
                color: isActive ? "#ffcc00" : "#fff",
                background: isActive ? "transparent" : "",
                border: isActive ? "1px solid #ffcc00" : "",
              };
            }}
          >
            Sign In
          </NavLink>
        </li>
      ) : (
        <li>
          {" "}
          <NavLink
            to={`spot/${user.email}`}
            style={({ isActive }) => {
              return {
                fontWeight: isActive ? "bold" : "bold",
                color: isActive ? "#ffcc00" : "#fff",
                background: isActive ? "transparent" : "",
                border: isActive ? "1px solid #ffcc00" : "",
              };
            }}
          >
            My List
          </NavLink>
        </li>
      )}
    </>
  );

  return <div></div>;
};

export default NavBar;
