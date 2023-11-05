import { useLoaderData, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const Details = () => {
  const Room = useLoaderData();
  const navigate = useNavigate();
  // console.log(Room);
  // const Ratings = (
  //   <div className="rating">
  //     <input
  //       type="radio"
  //       name="rating-1"
  //       disabled
  //       defaultChecked={Room.review === 1}
  //       className="mask mask-star-2 bg-orange-400"
  //     />
  //     <input
  //       type="radio"
  //       name="rating-2"
  //       disabled
  //       defaultChecked={Room.review === 2}
  //       className="mask mask-star-2 bg-orange-400"
  //     />
  //     <input
  //       type="radio"
  //       name="rating-3"
  //       disabled
  //       defaultChecked={Room.review === 3}
  //       className="mask mask-star-2 bg-orange-400"
  //     />
  //     <input
  //       type="radio"
  //       name="rating-4"
  //       disabled
  //       defaultChecked={Room.review === 4}
  //       className="mask mask-star-2 bg-orange-400"
  //     />
  //     <input
  //       type="radio"
  //       name="rating-5"
  //       disabled
  //       defaultChecked={Room.review === 5}
  //       className="mask mask-star-2 bg-orange-400"
  //     />
  //   </div>
  // );
  const handleBook = (e) => {
    e.preventDefault();
    const date = e.target.date.value;
    console.log(date);
    const dateStore = { date };
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
        })
          .then((res) => res.json())
          .then((data) => console.log(data));
        Swal.fire("Booked!", "Your Booking is done", "success");
        navigate("/room");
      }
    });
  };
  return (
    <div>
      <div className="card grid lg:grid-cols-2 bg-base-100 shadow-xl mx-10 px-5">
        <figure>
          <img src={Room.image} alt="Album" />
        </figure>
        <div className="card-body">
          <p>{Room.description}</p>
          <p>
            Price: <span className="font-bold"> {Room.price}$ </span>
            per night
          </p>
          <p>Size: {Room.size}</p>
          <p>Status: {Room.status}</p>
          <p>Offer: {Room?.offers} (Limited Time)</p>
          {/* <div> {Ratings}</div> */}
          <form onSubmit={handleBook}>
            <input type="date" required name="date" id="" />
            <div className="card-actions justify-end">
              <input
                type="submit"
                value="Book Now"
                className="btn btn-primary"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Details;
