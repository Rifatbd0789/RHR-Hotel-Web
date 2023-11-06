import { useState } from "react";
import { Helmet } from "react-helmet";
import { Link, useLoaderData } from "react-router-dom";

const Rooms = () => {
  const allRooms = useLoaderData();
  //   console.log(availableRooms);
  const [availableRooms, setAvailableRooms] = useState(allRooms);
  const handleSort = (e) => {
    const value = e.target.value;
    fetch(`http://localhost:5000/room/${value}`)
      .then((res) => res.json())
      .then((data) => setAvailableRooms(data));
  };
  return (
    <div>
      <Helmet>
        <title>Rooms</title>
      </Helmet>
      <div className="flex justify-center">
        <select
          className="select select-bordered w-full max-w-xs"
          onChange={handleSort}
        >
          <option value="">Sort by price</option>
          <option value="asc">Sort Low to High Price </option>
          <option value="desc"> Sort High to Low Price</option>
        </select>
      </div>
      <div className="grid grid-cols-3 gap-10 mx-10 mb-10">
        {availableRooms.map((Room) => (
          <div className="card shadow-xl" key={Room._id}>
            <Link className="card-body" to={`/room/details/${Room._id}`}>
              <img className="rounded-lg" src={Room.image} alt="" />
              <div className="flex mt-2">
                <p>{Room.review_count} review!</p>
                <p className="text-center">
                  Price: <span className=" font-bold">{Room.price}</span> $
                </p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Rooms;
