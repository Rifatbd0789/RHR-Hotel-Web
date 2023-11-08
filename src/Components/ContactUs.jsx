import Aos from "aos";
import { useEffect } from "react";
import { Helmet } from "react-helmet";
import { FcHome, FcPhone } from "react-icons/fc";
import { MdEmail } from "react-icons/md";
import Swal from "sweetalert2";
import contactFav from "/contactus.svg";

const ContactUs = () => {
  useEffect(() => {
    Aos.refresh();
  }, []);
  return (
    <div>
      <Helmet>
        <link rel="icon" href={contactFav} type="image/x-icon" />
        <title>Contact Us!</title>
      </Helmet>
      <div data-aos="fade-up" data-aos-duration="2000">
        <h1 className="text-center rounded-xl border border-l-4 border-orange-200 mx-5 bg-orange-200 mt-5 md:text-3xl font-bold py-2">
          Contact Us!
        </h1>
      </div>
      <div className="hero md:min-h-screen ">
        <div className="hero-content pt-0 flex flex-col lg:flex-row  lg:gap-40">
          <div>
            <form>
              <div data-aos="fade-down" data-aos-duration="2000">
                <p className=" card-body pt-0 pb-2 text-2xl font-bold underline ">
                  Message Us :
                </p>
              </div>
              <div data-aos="fade-up" data-aos-duration="2000">
                <div className="card-body pb-2 flex-col md:flex-row gap-5">
                  <div className="form-control">
                    <input
                      type="text"
                      placeholder="Enter Your Name.."
                      className="input input-bordered bg-orange-200 text-white"
                      required
                    />
                  </div>
                  <div className="form-control">
                    <input
                      type="text"
                      placeholder="Enter your email.."
                      className="input input-bordered bg-orange-200"
                      required
                    />
                  </div>
                </div>
                <div className="card-body pt-2 pb-0">
                  <div className="form-control w-full">
                    <input
                      type="text"
                      placeholder="Enter Subject.."
                      className="input input-bordered bg-orange-200"
                      required
                    />
                  </div>
                </div>
                <div className="card-body pt-4 gap-4">
                  <div className="form-control w-full">
                    <textarea
                      placeholder="Message.."
                      className="textarea textarea-bordered textarea-lg w-full max-w-lg bg-orange-200"
                    ></textarea>
                  </div>
                  <div className="form-control">
                    <button
                      onClick={() =>
                        Swal.fire("Your Message was sent successfully !")
                      }
                      className="btn btn-sm lg:btn-md  shadow-orange-600 shadow-md text-white border-none bg-orange-400  normal-case hover:text-black"
                    >
                      Send
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
          <div>
            <div data-aos="fade-down" data-aos-duration="2000">
              <h1 className="text-2xl font-bold underline">Office Address :</h1>
            </div>
            <div data-aos="fade-up" data-aos-duration="2000">
              <div className="py-6 flex gap-3">
                <span className="pt-2">
                  <FcHome className="text-3xl"></FcHome>
                </span>
                <div>
                  <p className="text-xl">Dhaka, Bangladesh.</p>
                  <p className="">Gulshan, kha 52140</p>
                </div>
              </div>
              <div className="py-6 flex gap-3">
                <span className="pt-2">
                  <FcPhone className="text-3xl"></FcPhone>
                </span>
                <div>
                  <p className="text-xl">+880 178 554 8761</p>
                  <p className="">Mon to Fri 10am to 5pm</p>
                </div>
              </div>
              <div className="py-6 flex gap-3">
                <span className="pt-2">
                  <MdEmail className="text-3xl text-red-500"></MdEmail>
                </span>
                <div>
                  <p className="text-xl ">support@rhr-hotel.com</p>
                  <p className="">Send us your query anytime!</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
