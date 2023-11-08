import { Link } from "react-router-dom";

const Slider = () => {
  return (
    <div>
      <div className="relative ">
        <div className="">
          <img
            className="h-full w-full"
            src="https://i.ibb.co/YjqVj0r/banner.jpg"
            alt=""
          />
        </div>
        <Link
          to="/room"
          className="btn btn-xs md:btn-md lg:btn-lg md:btn-wide shadow-black md:shadow-2xl text-white border-none bg-orange-400 absolute top-[103px] md:top-[260px] lg:top-[435px]  lg:left-[65px]  normal-case hover:text-black"
        >
          Explore Rooms!
        </Link>
      </div>
    </div>
  );
};

export default Slider;
