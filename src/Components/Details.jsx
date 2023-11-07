import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { useLoaderData, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import DetailReview from "./Shared/DetailReview";
import { context } from "./ContextProvider/Provider";
import Aos from "aos";

const Details = () => {
  const Room = useLoaderData();
  const navigate = useNavigate();
  const [Reviews, setReviews] = useState([]);
  const { user } = useContext(context);
  const email = user?.email;
  // console.log(userEmail);

  const handleBook = (e) => {
    e.preventDefault();
    const date = e.target.date.value;
    const seat = e.target.seat.value;
    const short_description = Room.short_description;
    const image = Room.image;
    const num = Room.num;
    // const seat = parseInt(seats);
    // const dateStore = { date, email };
    // console.log(typeof Room.seats);
    const seats = { date, email, seat, short_description, image, num };
    if (Room.seats < seat || seat === "0") {
      Swal.fire(
        "Please Choose Seats less or equal then Available Seats, and do not use 0 seats !"
      );
      return;
    }

    Swal.fire({
      title: "Are you sure?",
      html: `
          <p className="text-orange-500">${Room.short_description}</p>
          <p>Price: ${Room.price}$</p>
          <p>Seats: ${seat}</p>
          <p>Date: ${date}</p>
      `,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Book it!",
    }).then((result) => {
      if (result.isConfirmed) {
        // Booking and sending date to server

        axios
          .put(`http://localhost:5000/room/seat/${Room._id}`, seats, {
            withCredentials: true,
          })
          .then((res) => {
            console.log(res.data);
            if (res.data.modifiedCount > 0) {
              Swal.fire("Booked!", "Your Booking is completed", "success");
              navigate("/booked");
            }
          })
          .catch((error) => {
            if (error) {
              Swal.fire("Sorry!", "please log in first !", "error");
              navigate("/login");
            }
          });
      }
    });
  };
  useEffect(() => {
    Aos.refresh();
    axios
      .get(`http://localhost:5000/review/${Room.num}`)
      .then((res) => setReviews(res.data))
      .catch((error) => {
        console.error("Error:", error);
      });
  }, [Room.num]);
  return (
    <div>
      <Helmet>
        <link rel="icon" href="/details.svg" type="image/x-icon" />
        <title>Details</title>
      </Helmet>
      <div className="card pb-5  bg-base-100 shadow-xl mx-10 px-5 pt-2">
        <div
          data-aos="fade-down"
          data-aos-duration="2000"
          className="grid grid-cols-1 lg:grid-cols-2"
        >
          <figure>
            <img src={Room.image} alt="Album" />
          </figure>
          <div className="card-body p-0 md:p-8 py-4 md:py-8">
            <p>{Room.short_description}</p>
            <p>
              Price: <span className="font-bold"> {Room.price}$ </span>
              per night
            </p>
            <p>Size: {Room.size}</p>
            <p>Status: {Room.status}</p>
            <p>
              Offer:{" "}
              {Room?.offers ? (
                Room.offers
              ) : (
                <span className="text-red-400">No Offers Available !</span>
              )}
            </p>
            <p>Available Seats: {Room.seats}</p>
            {/* <div> {Ratings}</div> */}
            <form onSubmit={handleBook}>
              <span>Select your CheckIn Date and Seats Below:</span>
              <div className="flex flex-col md:flex-row md:gap-4 my-2 md:my-0">
                <input
                  className="input input-warning"
                  type="date"
                  required
                  name="date"
                  id=""
                />
                <div>
                  <span>Seats: </span>
                  <input
                    className="input input-warning "
                    type="number"
                    required
                    name="seat"
                    id=""
                  />
                </div>
              </div>
              <div className="card-actions justify-end">
                <input
                  type="submit"
                  value="Book Now"
                  className="btn btn-sm lg:btn-md  shadow-orange-600 shadow-md text-white border-none bg-orange-400  normal-case hover:text-black my-5"
                />
              </div>
            </form>
          </div>
          {/* Review Section */}
        </div>
        <div data-aos="fade-up" data-aos-duration="2000">
          <h1 className="text-center rounded-xl border border-l-4 border-orange-200 m-5 bg-orange-200 md:text-3xl font-bold ">
            Reviews
          </h1>
          <div className="flex flex-wrap gap-5 mt-10">
            {Reviews.length === 0 ? (
              <p className="text-red-400">Not Reviewed Yet!</p>
            ) : (
              Reviews.map((Review) => (
                <DetailReview key={Review._id} Review={Review}></DetailReview>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
