import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import BookedRoom from "./BookedRoom";
// import Swal from "sweetalert2";

const Booked = () => {
  const Room = useLoaderData();
  const [bookedRooms, setBookedRooms] = useState(Room);
  //   setBookedRooms(Room);

  return (
    <div className="">
      <p className="text-center font-bold text-3xl">
        My Bookings: {bookedRooms.length}
      </p>

      {bookedRooms.length === 0 ? (
        <div className="text-center space-y-10 ">
          <p className="text-2xl mt-5 font-bold text-red-600">
            Sorry ! You Currently have no bookings
          </p>
          <Link to="/room" className="btn btn-primary btn-lg">
            Book your room
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-10 gap-8">
          {bookedRooms.map((Room) => (
            <BookedRoom
              key={Room._id}
              Room={Room}
              setBookedRooms={setBookedRooms}
              bookedRooms={bookedRooms}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Booked;
