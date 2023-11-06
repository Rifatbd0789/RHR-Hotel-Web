import { Helmet } from "react-helmet";
import Slider from "./Shared/Slider";

import "react-tabs/style/react-tabs.css";
const Home = () => {
  return (
    <div>
      <Helmet>
        <title>RHR-Hotel</title>
      </Helmet>
      <Slider />
      <p>Hi, from the Homepage of RHR-Hotel</p>
    </div>
  );
};

export default Home;
