import { Helmet } from "react-helmet";
import Slider from "./Shared/Slider";

import "react-tabs/style/react-tabs.css";
import Featured from "./Shared/Featured";
import Testimonial from "./Shared/Testimonial";
import { useLoaderData } from "react-router-dom";
const Home = () => {
  const loadedRooms = useLoaderData();
  const Rooms = loadedRooms.filter((Room) => Room.featured === true);
  // console.log(Rooms);

  return (
    <div>
      <Helmet>
        <title>RHR-Hotel</title>
      </Helmet>
      <div>
        <Slider />
      </div>
      <div className="flex gap-10 mx-10 my-5">
        {Rooms.map((Room) => (
          <Featured key={Room.num} Room={Room} />
        ))}
      </div>
      <div className="mb-10">
        <Testimonial />
      </div>
    </div>
  );
};

export default Home;
