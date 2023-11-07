import { Helmet } from "react-helmet";
import Slider from "./Shared/Slider";

import "react-tabs/style/react-tabs.css";
import Featured from "./Shared/Featured";
import Testimonial from "./Shared/Testimonial";
import { useLoaderData } from "react-router-dom";
import Newsletter from "./Shared/Newsletter";
const Home = () => {
  const loadedRooms = useLoaderData();
  const Rooms = loadedRooms.filter((Room) => Room.featured === true);
  // console.log(Rooms);

  return (
    <div className="bg-orange-300">
      <Helmet>
        <title>RHR-Hotel</title>
      </Helmet>
      <div>
        <Slider />
      </div>
      <h1 className="text-center rounded-xl border border-l-4 border-orange-200 m-5 bg-orange-200 md:text-3xl font-bold py-2">
        Featured
      </h1>
      <div className="flex flex-col lg:flex-row gap-10 mx-10  ">
        {Rooms.map((Room) => (
          <Featured key={Room.num} Room={Room} />
        ))}
      </div>
      <h1 className="text-center rounded-xl border border-l-4 border-orange-200 m-5 bg-orange-200 md:text-3xl font-bold py-2">
        Guests Testimonials
      </h1>
      <div className="border-b-2 border-white w-full mx-auto">
        <Testimonial />
      </div>
      <div>
        <Newsletter></Newsletter>
      </div>
    </div>
  );
};

export default Home;
