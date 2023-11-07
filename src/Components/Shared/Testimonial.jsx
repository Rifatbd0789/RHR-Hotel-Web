import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
// import "./Testimonial.css";
const Testimonial = () => {
  return (
    <div>
      <div className="  bg-orange-200 ">
        <Carousel
          className="py-5"
          showArrows={true}
          showStatus={true}
          showIndicators={true}
          infiniteLoop={true}
          showThumbs={false}
          useKeyboardArrows={true}
          autoPlay={true}
          stopOnHover={true}
          swipeable={true}
          emulateTouch={true}
          autoFocus={true}
          selectedItem={0}
          interval={3000}
          transitionTime={900}
          swipeScrollTolerance={5}
        >
          {/* First */}
          <div className="text-center">
            <div className=" ">
              {/* first person */}
              <div className="  ">
                <div className=" avatar w-36 md:w-48 h-36 md:h-48">
                  <img
                    className="  rounded-full"
                    src="https://i.ibb.co/4psncQy/1.jpg"
                    alt=""
                  />
                </div>
                <div className="">
                  <p className="font-medium text-xl">Mr. Rifat</p>
                  <div className="rating flex rating-sm mb-2 justify-center ">
                    <input
                      type="radio"
                      disabled
                      className="mask mask-star-2 bg-orange-400"
                    />
                    <input
                      type="radio"
                      disabled
                      className="mask mask-star-2 bg-orange-400"
                    />
                    <input
                      type="radio"
                      disabled
                      className="mask mask-star-2 bg-orange-400"
                    />
                    <input
                      type="radio"
                      disabled
                      checked
                      className="mask mask-star-2 bg-orange-400"
                    />
                    <input
                      type="radio"
                      disabled
                      className="mask mask-star-2 bg-orange-400"
                    />
                  </div>
                  <p className="w-1/2 mx-auto">
                    Exceptional stay! Impeccable service and stunning views. The
                    room was cozy, and the staff went above and beyond to make
                    our visit memorable. We enjoyed every moment at this
                    beautiful hotel.
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* Second */}
          <div className="text-center">
            {/* second person */}
            <div className="">
              <div className="avatar w-36 md:w-48 h-36 md:h-48">
                <img
                  className="rounded-full"
                  src="https://i.ibb.co/VCRbLBB/3.jpg"
                  alt=""
                />
              </div>
              <div className="text-center">
                <p className="font-medium text-xl">Ms. Sara</p>
                <div className="rating flex rating-sm mb-2 justify-center">
                  <input
                    type="radio"
                    disabled
                    className="mask mask-star-2 bg-orange-400"
                  />
                  <input
                    type="radio"
                    disabled
                    className="mask mask-star-2 bg-orange-400"
                  />
                  <input
                    type="radio"
                    disabled
                    className="mask mask-star-2 bg-orange-400"
                  />
                  <input
                    type="radio"
                    disabled
                    className="mask mask-star-2 bg-orange-400"
                  />
                  <input
                    type="radio"
                    disabled
                    checked
                    className="mask mask-star-2 bg-orange-400"
                  />
                </div>
                <p className="w-1/2 mx-auto">
                  A hidden gem! Charming, clean, and affordable. The staff was
                  friendly and helpful. We loved the complimentary breakfast and
                  the convenient location near local attractions.
                </p>
              </div>
            </div>
          </div>
          {/* Third */}
          <div className="text-center">
            {/* third person */}
            <div className="">
              <div className="avatar w-36 md:w-48 h-36 md:h-48 ">
                <img
                  className=" rounded-full"
                  src="https://i.ibb.co/dGgMCgY/2.jpg"
                  alt=""
                />
              </div>
              <div className="text-center">
                <p className="font-medium text-xl">Mr. Risam</p>
                <div className="rating flex rating-sm mb-2 justify-center">
                  <input
                    type="radio"
                    disabled
                    className="mask mask-star-2 bg-orange-400"
                  />
                  <input
                    type="radio"
                    disabled
                    checked
                    className="mask mask-star-2 bg-orange-400"
                  />
                  <input
                    type="radio"
                    disabled
                    className="mask mask-star-2 bg-orange-400"
                  />
                  <input
                    type="radio"
                    disabled
                    className="mask mask-star-2 bg-orange-400"
                  />
                  <input
                    type="radio"
                    disabled
                    className="mask mask-star-2 bg-orange-400"
                  />
                </div>
                <p className="w-1/2 mx-auto">
                  Wonderful experience! The hotel was elegant and comfortable.
                  Our room had a breathtaking ocean view. The on-site restaurant
                  served delicious cuisine. We had a truly relaxing getaway.
                </p>
              </div>
            </div>
          </div>
          {/* Fourth */}
          <div className="text-center">
            {/* fourth person */}
            <div className="">
              <div className="avatar w-36 md:w-48 h-36 md:h-48">
                <img
                  className="rounded-full"
                  src="https://i.ibb.co/WBNCng3/4.jpg"
                  alt=""
                />
              </div>
              <div className="text-center">
                <p className="font-medium text-xl">Ms. Angela</p>
                <div className="rating flex rating-sm mb-2 justify-center">
                  <input
                    type="radio"
                    disabled
                    className="mask mask-star-2 bg-orange-400"
                  />
                  <input
                    type="radio"
                    disabled
                    className="mask mask-star-2 bg-orange-400"
                  />
                  <input
                    type="radio"
                    disabled
                    checked
                    className="mask mask-star-2 bg-orange-400"
                  />
                  <input
                    type="radio"
                    disabled
                    className="mask mask-star-2 bg-orange-400"
                  />
                  <input
                    type="radio"
                    disabled
                    className="mask mask-star-2 bg-orange-400"
                  />
                </div>
                <p className="w-1/2 mx-auto">
                  Perfect choice! The hotels ambiance was lovely, and the room
                  was spacious and spotless. The staff was welcoming, and the
                  location could not have been better. We had a delightful time.
                </p>
              </div>
            </div>
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default Testimonial;
