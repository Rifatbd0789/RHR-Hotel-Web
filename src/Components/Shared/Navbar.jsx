import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { context } from "../ContextProvider/Provider";
import Swal from "sweetalert2";

const Navbar = () => {
  const { user, logOutUser } = useContext(context);
  const handleLogOut = () => {
    logOutUser()
      .then(() => Swal.fire({ text: "Logout Successfully!", icon: "success" }))
      .catch((err) => Swal.fire(err.code));
  };
  const links = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? " bg-orange-200" : "")}
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/room"
          className={({ isActive }) => (isActive ? "bg-orange-200" : "")}
        >
          Rooms
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/booked"
          className={({ isActive }) => (isActive ? "bg-orange-200" : "")}
        >
          My Bookings
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/contact"
          className={({ isActive }) => (isActive ? "bg-orange-200" : "")}
        >
          Contact Us
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/about"
          className={({ isActive }) => (isActive ? "bg-orange-200" : "")}
        >
          About Us
        </NavLink>
      </li>
    </>
  );
  const Users = (
    <div className="flex items-center justify-center">
      {user ? (
        <>
          <p className="text-sm md:text-xl">{user?.displayName}</p>
          <img className="w-12 rounded-full mr-2" src={user?.photoURL} alt="" />
          <NavLink
            onClick={handleLogOut}
            className="btn btn-sm md:btn-md bg-orange-200 "
          >
            Log Out
          </NavLink>
        </>
      ) : (
        <>
          <NavLink to={"/login"} className="btn btn-sm md:btn-md bg-orange-200">
            Login
          </NavLink>
        </>
      )}
    </div>
  );
  return (
    <div className="">
      <div className="navbar justify-between">
        <div className="navbar-start  md:w-1/2">
          <div className="dropdown">
            <label
              tabIndex={0}
              className="btn pr-2 pl-0 btn-sm btn-ghost lg:hidden"
            >
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
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {links}
            </ul>
          </div>
          <Link to="/" className="btn btn-ghost normal-case md:text-xl pl-1">
            <div className="avatar hidden md:flex w-10">
              <img
                className=""
                src="https://i.ibb.co/ZS8h9t7/hotel-svgrepo-com.png"
                alt=""
              />
            </div>
            RHR-Hotel
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
        <div className="navbar-end w-fit md:w-1/2">
          <div className="">{Users}</div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
