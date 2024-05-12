import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { MdLogin, MdLogout } from "react-icons/md";
import { AuthContext } from "../Provider/AuthProvider";
const NavBar = () => {
  const { user, logOut } = useContext(AuthContext);
  const handleSignOut = () => {
    logOut().then().catch(error=>console.log(error));
  };
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
            <img src="" alt="logo" className="" />
            <h1 className="font-bold text-2xl text-white">TableMingle</h1>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{Link}</ul>
        </div>
        <div className="navbar-end ">
       
           
            {user ? (
              <div
              onClick={handleSignOut}
              className="flex cursor-pointer bg-[#191919] rounded-full px-3 py-2 text-white items-center gap-3 font-bold text-lg  ">
                <MdLogout /> Sign out
              </div>
            ) : (
              <NavLink to="/signin">
                <div className="flex cursor-pointer bg-[#191919] rounded-full px-3 py-2 text-white items-center gap-3 font-bold text-lg  ">
                  <MdLogin /> Sign In
                </div>
              </NavLink>
            )}
           
           
         
          <div className="drawer-end">
           {user?
           <div>
            <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
              {/* Page content here */}
              <label htmlFor="my-drawer-4" className="drawer-button ">
                <div className="tooltip tooltip-left  flex items-center justify-center w-14 h-14 rounded-full bg-white ml-5 cursor-pointer"
                data-tip="Click to view Profile">
                
                  <img src={user?.photoURL} className="h-full w-full" />
                </div>
              </label>
            </div>
            <div className="drawer-side">
              <label
                htmlFor="my-drawer-4"
                aria-label="close sidebar"
                className="drawer-overlay"
              ></label>
              <ul className=" p-4 w-80 min-h-full bg-[#191919]  flex  flex-col items-center text-white">
                <div className="h-14 w-14 cursor-pointer bg-white rounded-full">
                  <img
                    className="h-full w-full rounded-full border-2 border-black"
                    src={user?.photoURL}
                    alt=""
                  />
                </div>
                <li>
                  {" "}
                  <h1 className="font-semibold">
                    {user?.displayName}
                  </h1>
                </li>
                <li>
                  <h1 className="font-semibold">
                    {user?.email}
                  </h1>
                </li>
                <li>
                  <h1 className="font-semibold">
                    {user?.phoneNumber}
                  </h1>
                </li>
              </ul>
            </div>
            </div>:""}
          </div>

         
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
