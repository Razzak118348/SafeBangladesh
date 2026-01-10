import { motion, useAnimation, useInView } from "framer-motion";
import Slider from "../../Components/Slider/Slider";
import { useEffect, useRef } from "react";

import LatestWork from "./LatestWork";
import HomeContent from "./HomeContent";
import Gallery from "./Gallery";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.25,
      delayChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      // ease: "easeOut",
    },
  },
};




const Home = () => {

  return (
    <div className="">
      {/* Slider */}
      <Slider />

      {/* content Section */}
<div className="">
<HomeContent></HomeContent>
<LatestWork></LatestWork>
<Gallery></Gallery>
</div>

    </div>
  );
};

export default Home;
