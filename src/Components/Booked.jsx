import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import BookedRoom from "./BookedRoom";
import { Helmet } from "react-helmet";
import { useEffect } from "react";
import Aos from "aos";
// import Swal from "sweetalert2";

const Booked = () => {
  const Room = useLoaderData();
  const [bookedRooms, setBookedRooms] = useState(Room);
  //   setBookedRooms(Room);
  useEffect(() => {
    Aos.refresh();
  }, []);

  return (
    <div>
      <Helmet>
        <title>Booked Rooms</title>
      </Helmet>
      <div data-aos="fade-up" data-aos-duration="2000">
        <h1 className="text-center rounded-xl border border-l-4 border-orange-200 m-5 bg-orange-200 md:text-3xl font-bold py-2">
          Booked Rooms: {bookedRooms.length}
        </h1>
      </div>

      {bookedRooms.length === 0 ? (
        <div
          data-aos="fade-down"
          data-aos-duration="2000"
          className="text-center space-y-10 my-10"
        >
          <p className="text-2xl mt-5 font-bold text-red-600">
            Sorry ! You Currently have no bookings
          </p>
          <Link
            to="/room"
            className="btn btn-sm lg:btn-md  shadow-orange-600 shadow-md text-white border-none bg-orange-400  normal-case hover:text-black"
          >
            Book your room
          </Link>
        </div>
      ) : (
        <div
          data-aos="fade-down"
          data-aos-duration="2000"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-10 my-5 gap-8"
        >
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
