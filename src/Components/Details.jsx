import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { useLoaderData, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import DetailReview from "./Shared/DetailReview";
import { context } from "./ContextProvider/Provider";

const Details = () => {
  const Room = useLoaderData();
  const navigate = useNavigate();
  const [Reviews, setReviews] = useState([]);
  const { user } = useContext(context);
  const userEmail = user?.displayName;
  // console.log(userEmail);

  const handleBook = (e) => {
    e.preventDefault();
    const date = e.target.date.value;
    console.log(date);
    const dateStore = { date, userEmail };
    Swal.fire({
      title: "Are you sure?",
      html: `
          <p className="text-orange-500">${Room.short_description}</p>
          <p>Price: ${Room.price}$</p>
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
        fetch(`http://localhost:5000/room/${Room._id}`, {
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
              Swal.fire("Booked!", "Your Booking is completed", "success");
              navigate("/room");
            } else {
              Swal.fire("Sorry!", "please log in first !", "error");
              navigate("/login");
            }
          });
      }
    });
  };
  useEffect(() => {
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
        <title>Details</title>
      </Helmet>
      <div className="card pb-5  bg-base-100 shadow-xl mx-10 px-5">
        <div className="grid lg:grid-cols-2">
          <figure>
            <img src={Room.image} alt="Album" />
          </figure>
          <div className="card-body">
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
            {/* <div> {Ratings}</div> */}
            <form onSubmit={handleBook}>
              <span>Select your CheckIn Date Below:</span>
              <div className="flex">
                <input className="" type="date" required name="date" id="" />
              </div>
              <div className="card-actions justify-end">
                <input
                  type="submit"
                  value="Book Now"
                  className="btn btn-primary"
                />
              </div>
            </form>
          </div>
          {/* Review Section */}
          <div className="flex gap-5 flex-wrap mt-10">
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
