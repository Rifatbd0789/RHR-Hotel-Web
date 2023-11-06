import axios from "axios";
import moment from "moment/moment";
import { useState } from "react";
import Swal from "sweetalert2";

/* eslint-disable react/prop-types */
const BookedRoom = ({ Room, setBookedRooms, bookedRooms }) => {
  const [date, setDate] = useState(Room.date);

  const handleUpdateDate = async (id) => {
    const { value: date } = await Swal.fire({
      title: "Choose Check In Date",
      inputAttributes: {
        required: "true",
      },
      input: "date",
      inputLabel: "Check In Date",
    });
    const dateStore = { date };
    fetch(`http://localhost:5000/booked/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dateStore),
      credentials: "include",
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
            credentials: "include",
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

  const handlePostReview = () => {
    console.log(Room._id);
    Swal.fire({
      title: "Rate and Comment",
      html:
        "<div>" +
        '<label for="rating">Rate Our Service! (1-5):</label>' +
        '<input id="rating" class="swal2-input" type="number" min="1" max="5" placeholder="Rating (1-5)">' +
        "</div>" +
        "<div>" +
        '<label for="comment">Comment:</label>' +
        '<input id="comment" class="swal2-input" type="text" placeholder="Comment">' +
        "</div>",
      showCancelButton: true,
      preConfirm: () => {
        let rating = document.getElementById("rating").value;
        const comment = document.getElementById("comment").value;
        const review = { num: Room.num, rating, comment };
        axios.post(`http://localhost:5000/review`, review).then((res) => {
          console.log(res.data);
          if (res.data.insertedId) {
            Swal.fire({
              title: "Posted!",
              text: "Thanks for your review!.",
              icon: "success",
            });
          }
        });
      },
    });
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
        <p
          onClick={handlePostReview}
          className="text-blue-600 link link-hover mx-1"
        >
          Post a review!
        </p>
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
