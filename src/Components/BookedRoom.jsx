import moment from "moment/moment";
import { useState } from "react";
import Swal from "sweetalert2";

/* eslint-disable react/prop-types */
const BookedRoom = ({ Room, setBookedRooms, bookedRooms }) => {
  const [date, setDate] = useState(Room.date);

  const handleUpdateDate = async (id) => {
    const { value: date } = await Swal.fire({
      title: "Input email address",
      input: "date",
      inputLabel: "Your email address",
      inputPlaceholder: "Enter your email address",
    });
    const dateStore = { date };
    fetch(`http://localhost:5000/booked/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dateStore),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          Swal.fire("Successfully Updated Check In Date!");
          setDate(date);
        }
      });
    // window.location.reload();
  };

  const currentDate = moment().format("YYYY-MM-DD");
  const handleCancel = (id) => {
    const momentDate = moment(date);
    const addDate = momentDate.subtract(1, "days");
    const finalDate = addDate.format("YYYY-MM-DD");
    const toDay = moment(currentDate).format("YYYY-MM-DD");
    const compare = moment(toDay).isBefore(finalDate);
    if (compare) {
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
    } else {
      Swal.fire("Sorry !");
    }
  };

  return (
    <div className="card bg-base-100 shadow-xl mx-auto">
      <figure>
        <img src={Room.image} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{Room.status}</h2>
        <p>
          Check In date: <span className="font-bold">{date}</span>
        </p>
        <p>{Room.short_description}</p>
        <div className="card-actions justify-between">
          <button
            onClick={() => handleUpdateDate(Room._id)}
            className="btn btn-outline btn-warning"
          >
            Update Date
          </button>
          <button
            onClick={() => handleCancel(Room._id)}
            className="btn btn-outline btn-error"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookedRoom;
