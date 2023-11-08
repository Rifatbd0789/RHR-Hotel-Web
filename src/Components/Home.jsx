import { Helmet } from "react-helmet";
import Slider from "./Shared/Slider";

import "react-tabs/style/react-tabs.css";
import Featured from "./Shared/Featured";
import Testimonial from "./Shared/Testimonial";
import { useLoaderData } from "react-router-dom";
import Newsletter from "./Shared/Newsletter";
import { useEffect } from "react";
import Aos from "aos";
import homeFav from "/hotel-svgrepo-com.svg";
const Home = () => {
  const loadedRooms = useLoaderData();
  const Rooms = loadedRooms.filter((Room) => Room.featured === true);
  // console.log(Rooms);
  useEffect(() => {
    Aos.refresh();
  }, []);
  return (
    <div className=" space-y-10">
      <Helmet>
        <link rel="icon" href={homeFav} type="image/x-icon" />
        <title>RHR-Hotel</title>
      </Helmet>
      <div>
        <Slider />
      </div>
      <div data-aos="flip-right" data-aos-duration="2000">
        <h1 className="text-center rounded-xl border border-l-4 border-orange-200 m-5 bg-orange-200 md:text-3xl font-bold py-2">
          Featured Rooms !
        </h1>
      </div>
      <div className="flex flex-col lg:flex-row gap-10 mx-10  ">
        {Rooms.map((Room) => (
          <Featured key={Room.num} Room={Room} />
        ))}
      </div>
      <div data-aos="flip-left" data-aos-duration="2000">
        <h1 className="text-center rounded-xl border border-l-4 border-orange-200 m-5 bg-orange-200 md:text-3xl font-bold py-2">
          Guests Testimonials
        </h1>
      </div>
      <div className="border-b-2 border-white w-full mx-auto">
        <Testimonial />
      </div>
      <div className="py-5 mx-5" data-aos="flip-right" data-aos-duration="2000">
        <Newsletter />
      </div>
    </div>
  );
};

export default Home;
