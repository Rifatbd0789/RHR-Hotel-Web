import { NavLink } from "react-router-dom";

const Navbar = () => {
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
