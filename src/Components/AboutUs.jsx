import Aos from "aos";
import { useEffect } from "react";

const AboutUs = () => {
  useEffect(() => {
    Aos.refresh();
  }, []);
  return (
    <div>
      <div>
        <div data-aos="fade-up" data-aos-duration="2000">
          <h1 className="text-center rounded-xl border border-l-4 border-orange-200 m-5 bg-orange-200 md:text-3xl font-bold py-2">
            About Us
          </h1>
        </div>
        <div className="mx-5 lg:mx-20 mb-5 text-clip gap-20 grid grid-cols-1 lg:grid-cols-2  justify-between">
          <div data-aos="fade-down" data-aos-duration="2000">
            <p className="indent-2 pb-2">
              <span className="text-orange-500 text-3xl border-l-2 border-l-orange-500 pl-2">
                R
              </span>
              HR Hotel, a bastion of hospitality and refinement, weaves together
              the rich tapestry of its history, mission, and core values to
              offer a unique narrative of excellence. Our story dates back to
              the early 20th century when RHR Hotel was conceived as a haven for
              travelers seeking both opulence and tranquility. Through the
              years, our commitment to preserving our heritage while embracing
              contemporary luxury has remained unwavering.{" "}
            </p>
            <p className="pb-1">
              Our mission is to provide an unforgettable experience where every
              guest feels valued and cherished. We aim to create a home away
              from home, a sanctuary of comfort and sophistication. Our
              dedicated team, with their unwavering dedication, upholds these
              values daily.
            </p>
            <p className="pb-1">
              The management at RHR Hotel is a blend of seasoned professionals
              and passionate individuals who are deeply committed to ensuring
              your stay surpasses all expectations. Their expertise, combined
              with a passion for hospitality, ensures that every moment spent at
              RHR Hotel is marked by warmth and excellence.
            </p>
            <p className="pb-1">
              Our core values, rooted in the tradition of hospitality, center on
              providing personalized service, embracing diversity, and fostering
              sustainability. We are dedicated to giving back to our community
              and preserving the environment.
            </p>
            <p className="pb-1">
              At RHR Hotel, we invite you to become a part of our legacy, where
              the past meets the present in a harmonious symphony of luxury and
              grace.
            </p>
          </div>
          <div
            data-aos="fade-down"
            data-aos-duration="2000"
            className="my-auto"
          >
            <img
              className="w-full h-[240px]  md:h-[380px]"
              src="https://i.ibb.co/SXd18YW/about.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
