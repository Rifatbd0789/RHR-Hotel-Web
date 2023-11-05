import { useState } from "react";
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
      <div className="flex justify-center">
        <select
          className="select select-bordered w-full max-w-xs"
          onChange={handleSort}
        >
          <option selected value="">
            Sort by price
          </option>
          <option value="asc">Sort Low to High Price </option>
          <option value="desc"> Sort High to Low Price</option>
        </select>
      </div>
      <div className="grid grid-cols-3 gap-10 mx-10 mb-10">
        {availableRooms.map((Room) => (
          <div className="card shadow-xl" key={Room._id}>
            <Link className="card-body" to={`/details/${Room._id}`}>
              <img className="rounded-lg" src={Room.image} alt="" />

              <p className="text-center">
                Only for <span className=" font-bold">{Room.price}</span> $
              </p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Rooms;
