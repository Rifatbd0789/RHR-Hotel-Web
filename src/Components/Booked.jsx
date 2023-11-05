import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import BookedRoom from "./BookedRoom";
import Swal from "sweetalert2";

const Booked = () => {
  const Room = useLoaderData();
  const [bookedRooms, setBookedRooms] = useState(Room);
  //   setBookedRooms(Room);

  const handleCancel = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, cancel it!",
      cancelButtonText: "No!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/booked/${id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.modifiedCount > 0) {
              Swal.fire({
                title: "Cancelled!",
                text: "Your booking has been cancelled.",
                icon: "success",
              });
              const remaining = bookedRooms.filter((Room) => Room._id !== id);
              setBookedRooms(remaining);
            }
          });
      }
    });
  };

  return (
    <div className="">
      <div className="  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-10 gap-8">
        {bookedRooms.map((Room) => (
          <BookedRoom key={Room._id} Room={Room} handleCancel={handleCancel} />
        ))}
      </div>
    </div>
  );
};

export default Booked;
