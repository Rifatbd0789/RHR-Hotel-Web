const Slider = () => {
  return (
    <div>
      <div className="carousel  lg:h-[500px]">
        <div id="slide1" className="carousel-item relative w-full">
          <img src="https://i.ibb.co/BTYLxpc/3.jpg" className="w-full" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" className="btn btn-circle bg-orange-300 ">
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
              href="#slide4"
              className="btn btn-circle border-none bg-orange-300"
            >
              ❯
            </a>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full">
          <img src="https://i.ibb.co/ggn5Rv5/4.jpg" className="w-full" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a
              href="#slide3"
              className="btn btn-circle border-none bg-orange-300 "
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
        </div>
      </div>
    </div>
  );
};

export default Slider;
