import { useState } from "react";
import { useLoaderData } from "react-router-dom";

const Booked = () => {
  const Room = useLoaderData();
  const [bookedRooms, setBookedRooms] = useState(Room);
  //   setBookedRooms(Room);

  const handleUpdateDate = (id) => {
    console.log(id);
    // fetch()
    // .then(res=>res.json())
    // .then(data=>console.log(data))
  };

  console.log(bookedRooms);
  return (
    <div className="">
      <div className="  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-10 gap-8">
        {bookedRooms.map((Room) => (
          <div key={Room._id} className="card bg-base-100 shadow-xl mx-auto">
            <figure>
              <img src={Room.image} alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{Room.status}</h2>
              <p>
                Check In date: <span className="font-bold">{Room.date}</span>
              </p>
              <p>{Room.short_description}</p>
              <div className="card-actions justify-between">
                <button
                  onClick={() => handleUpdateDate(Room._id)}
                  className="btn btn-outline btn-warning"
                >
                  Update Date
                </button>
                <button className="btn btn-outline btn-error">Cancel</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Booked;
