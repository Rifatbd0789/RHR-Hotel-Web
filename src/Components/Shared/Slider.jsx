import { Link } from "react-router-dom";

const Slider = () => {
  return (
    <div>
      <div className=" h-[300px] lg:h-[500px]">
        <div
          className="hero bg-inherit bg-no-repeat  h-[300px] lg:h-[500px]"
          style={{
            backgroundImage: "url(https://i.ibb.co/BTYLxpc/3.jpg)",
          }}
        >
          <div className="hero-overlay bg-opacity-10"></div>
          <div className="hero-content text-center text-neutral-content">
            <div className="max-w-md"></div>
          </div>
        </div>
        <Link
          to="/room"
          className="btn btn-sm lg:btn-md shadow-black shadow-lg text-white border-none bg-orange-400 absolute top-[330px] lg:top-[485px] left-[158px] md:left-[300px] lg:left-[580px] normal-case hover:text-black"
        >
          Explore Rooms!
        </Link>
      </div>
    </div>
  );
};

export default Slider;
