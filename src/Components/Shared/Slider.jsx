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
            <div className="max-w-md">
              {/* <h1 className="mb-5 text-5xl font-bold">Hello there</h1> */}
              {/* <p className="mb-5">
                Provident cupiditate voluptatem et in. Quaerat fugiat ut
                assumenda excepturi exercitationem quasi. In deleniti eaque aut
                repudiandae et a id nisi.
              </p> */}
              {/* <button className="btn btn-primary">Explore</button> */}
            </div>
          </div>
        </div>
        {/* <div id="slide1" className="carousel-item relative w-full">
          <img src="https://i.ibb.co/BTYLxpc/3.jpg" className="w-full" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" className="btn btn-circle bg-orange-300 ">
              ❮
            </a>
            <a
              href="#slide2"
              className="btn btn-circle border-none bg-orange-300"
            >
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <img src="https://i.ibb.co/cbmjGBz/1.jpg" className="w-full" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a
              href="#slide1"
              className="btn btn-circle border-none bg-orange-300"
            >
              ❮
            </a>
            <a
              href="#slide3"
              className="btn btn-circle border-none bg-orange-300"
            >
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <img src="https://i.ibb.co/vqWWdhd/2.jpg" className="w-full" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a
              href="#slide2"
              className="btn btn-circle border-none bg-orange-300"
            >
              ❮
            </a>
            <a
              href="#slide1"
              className="btn btn-circle border-none bg-orange-300"
            >
              ❯
            </a>
          </div>
        </div> */}
        <Link
          to="/room"
          className="btn btn-sm lg:btn-md shadow-black shadow-lg bg-orange-300 absolute top-[330px] lg:top-[485px] left-[158px] md:left-[300px] lg:left-[580px] "
        >
          Explore More!
        </Link>
      </div>
    </div>
  );
};

export default Slider;
