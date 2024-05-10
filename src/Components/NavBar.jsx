import { useState } from "react";
import { NavLink } from "react-router-dom";
import { MdLogin } from "react-icons/md";
const NavBar = () => {
  const [user, setUser] = useState();
  const Link = (
    <>
      <li>
        <NavLink
          to="/"
          style={({ isActive }) => {
            return {
              fontWeight: isActive ? "bold" : "bold",
              color: isActive ? "#E04444" : "#fff",
              background: isActive ? "transparent" : "",
              paddingBottom: "5px",
              borderBottom: isActive ? "#E04444 2px solid" : "",
              fontSize: "1.2rem",
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
              color: isActive ? "#E04444" : "#fff",
              background: isActive ? "transparent" : "",
              paddingBottom: "5px",
              borderBottom: isActive ? "#E04444 2px solid" : "",
              fontSize: "1.2rem",
            };
          }}
        >
          All Foods
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/add"
          style={({ isActive }) => {
            return {
              fontWeight: isActive ? "bold" : "bold",
              color: isActive ? "#E04444" : "#fff",
              background: isActive ? "transparent" : "",
              paddingBottom: "5px",
              borderBottom: isActive ? "#E04444 2px solid" : "",
              fontSize: "1.2rem",
            };
          }}
        >
          Gallery
        </NavLink>
      </li>

      {!user ? (
        <li>
          <NavLink
            to="/signin"
            style={({ isActive }) => {
              return {
                fontWeight: isActive ? "bold" : "bold",
                color: isActive ? "#E04444" : "#fff",
                background: isActive ? "transparent" : "",
                paddingBottom: "5px",
                borderBottom: isActive ? "#E04444 2px solid" : "",
                fontSize: "1.2rem",
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
                color: isActive ? "#E04444" : "#fff",
                background: isActive ? "transparent" : "",
                paddingBottom: "5px",
                borderBottom: isActive ? "#E04444 2px solid" : "",
                fontSize: "1.2rem",
              };
            }}
          >
            Sign Out
          </NavLink>
        </li>
      )}
    </>
  );

  return (
    <nav className="bg-black lg:bg-transparent w-full z-10 fixed backdrop-blur-lg top-0">
      <div className="navbar mx-auto container">
        <div className="navbar-start">
          <div className="dropdown text-white">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-black rounded-box w-52"
            >
              {Link}
            </ul>
          </div>
          <div className="flex justify-center items-center">
            <img src="logo.png" alt="logo" className="h-10" />
            <h1 className="font-bold text-2xl text-white">TableMingle</h1>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{Link}</ul>
        </div>
        <div className="navbar-end ">
          <div className="relative">
            <div className="bg-gray-300 h-10 w-32 rounded-full  opacity-25 "></div>
          {user?"":<div className="flex  text-white items-center gap-3 font-bold text-lg absolute top-1 left-3">
<MdLogin /> Sign In
        </div>}
          </div>
         
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
