import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import BookedRoom from "./BookedRoom";
import { Helmet } from "react-helmet";
import { useContext } from "react";
import { context } from "./ContextProvider/Provider";
import axios from "axios";
import moment from "moment/moment";
import Swal from "sweetalert2";

// import Swal from "sweetalert2";

const Booked = () => {
  const Room = useLoaderData();
  const [bookedRooms, setBookedRooms] = useState(Room);
  const [Date, setDate] = useState(Room.date);
  const { user } = useContext(context);
  const userName = user?.displayName;
  const handleUpdateDate = async () => {
    const { value: date } = await Swal.fire({
      title: "Choose Check In Date",
      inputAttributes: {
        required: "true",
      },
      input: "date",
      inputLabel: "Check In Date",
      inputValue: Date,
    });
    const dateStore = { date };
    fetch(`https://rhr-hotel-server.vercel.app/booked/${Room._id}`, {
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
  };

  const currentDate = moment().format("YYYY-MM-DD");
  const handleCancel = (num) => {
    const seats = Room.seat;
    const id = Room._id;
    const momentDate = moment(Date);
    const addDate = momentDate.subtract(1, "days");
    const finalDate = addDate.format("YYYY-MM-DD");
    const toDay = moment(currentDate).format("YYYY-MM-DD");
    const compare = moment(toDay).isBefore(finalDate);
    const seat = { seats, id };
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
          fetch(`https://rhr-hotel-server.vercel.app/booked/${num}`, {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
            },
            credentials: "include",
            body: JSON.stringify(seat),
          })
            .then((res) => res.json())
            .then((data) => {
              console.log(num, data);
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
      Swal.fire({
        title: "Sorry !",
        text: "your cancellation date is over.",
        icon: "error",
      });
    }
  };

  const handlePostReview = () => {
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
        const review = { num: Room.num, rating, comment, userName };
        axios
          .post(`https://rhr-hotel-server.vercel.app/review`, review, {
            withCredentials: true,
          })
          .then((res) => {
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
    <div>
      <Helmet>
        <link rel="icon" href="/booked.svg" type="image/x-icon" />
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
              handleUpdateDate={handleUpdateDate}
              handleCancel={handleCancel}
              handlePostReview={handlePostReview}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Booked;
