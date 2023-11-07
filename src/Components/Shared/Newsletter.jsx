import Swal from "sweetalert2";

const Newsletter = () => {
  return (
    <div className="flex flex-col md:flex-row md:w-3/4 mx-auto my-5  justify-center lg:justify-around  bg-orange-200 rounded-2xl text-center lg:text-left ">
      {/* left side */}
      {/* <div className=" w-2/3 flex rounded-xl  lg:justify-center    "> */}
      <div className="card  px-0 md:px-10  max-w-sm md:max-w-2xl ">
        {/* <div className="card-body w-3/4 px-4 md:px-8 mx-auto items-center"> */}
        <div className="lg:w-2/3 card-body">
          <img
            className=" w-full "
            src="https://i.ibb.co/3mt83Z3/mail-svgrepo-com.png"
            alt=""
          />
        </div>
        {/* </div> */}
        {/* </div> */}
      </div>
      {/* Right  */}
      <div className=" lg:w-2/3 flex rounded-xl  lg:justify-center    ">
        <div className="card ">
          <div className="card-body">
            <h2 className="card-title">
              Wanna Get our update, deals and exclusive offers ?
            </h2>
            <p>Please Subscribe to our Newsletter and stay updated !</p>

            <input
              type="email"
              className="input input-warning"
              required
              name=""
              placeholder="Email..."
              id=""
            />
            <div className="card-actions justify-end">
              <div
                onClick={() => Swal.fire("Thanks! you become a subscriber !")}
                className="btn btn-sm lg:btn-md  shadow-orange-600 shadow-md text-white border-none bg-orange-400  normal-case hover:text-black"
              >
                Subscribe
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
