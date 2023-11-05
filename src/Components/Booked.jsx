import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import BookedRoom from "./BookedRoom";

const Booked = () => {
  const Room = useLoaderData();
  const [bookedRooms, setBookedRooms] = useState(Room);
  //   setBookedRooms(Room);

  //   console.log(bookedRooms);
  return (
    <div className="">
      <div className="  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-10 gap-8">
        {bookedRooms.map((Room) => (
          <BookedRoom key={Room._id} Room={Room} />
        ))}
      </div>
    </div>
  );
};

export default Booked;
