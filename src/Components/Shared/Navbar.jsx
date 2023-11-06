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
      {user ? (
        <>
          <p className="text-xs md:text-xl">{user?.displayName}</p>
          <img
            className="w-6 md:w-12 rounded-full mr-2"
            src={user?.photoURL}
            alt=""
          />
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
    </>
  );
  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="flex-1">
          <a className="btn btn-ghost normal-case text-xl">RHR-Hotel</a>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
