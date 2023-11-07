import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { context } from "../ContextProvider/Provider";
import Swal from "sweetalert2";

const Navbar = () => {
  const { user, logOutUser } = useContext(context);
  console.log(user);
  const handleLogOut = () => {
    logOutUser()
      .then(() => Swal.fire("Logout Successfully!"))
      .catch((err) => Swal.fire(err.code));
  };
  const links = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "border border-orange-600" : ""
          }
        >
          Home
        </NavLink>
      </li>

      <li>
        <NavLink
          to="/room"
          className={({ isActive }) =>
            isActive ? "border border-orange-600" : ""
          }
        >
          Rooms
        </NavLink>
      </li>

      <li>
        <NavLink
          to="/booked"
          className={({ isActive }) =>
            isActive ? "border border-orange-600" : ""
          }
        >
          My Bookings
        </NavLink>
      </li>
    </>
  );
  const Users = (
    <div className="flex items-center">
      {user ? (
        <>
          <p className="text-sm md:text-xl">{user?.displayName}</p>
          <img className="w-12 rounded-full mr-2" src={user?.photoURL} alt="" />
          <NavLink
            onClick={handleLogOut}
            className="btn btn-md border border-orange-600 "
          >
            Log Out
          </NavLink>
        </>
      ) : (
        <>
          <NavLink
            to={"/login"}
            className="btn btn-md border border-orange-600"
          >
            Login
          </NavLink>
        </>
      )}
    </div>
  );
  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
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
          <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
        <div className="navbar-end">
          <a className="">{Users}</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
