import { motion, useAnimation, useInView } from "framer-motion";
import Slider from "../../Components/Slider/Slider";
import { useEffect, useRef } from "react";

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
  const sectionRef = useRef(null);
  const controls = useAnimation();

  const isInView = useInView(sectionRef, {
    amount: 0.35, // how much visible triggers animation
  });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [isInView, controls]);

  return (
    <div className="w-full">
      {/* Slider */}
      <Slider />

      {/* content Section */}
{/* Content Section */}
<section className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-20 items-center px-4 py-16">

  {/* Text + Cards */}
  <motion.section
    ref={sectionRef}
    className="w-full lg:col-span-2"
    variants={containerVariants}
    initial="hidden"
    animate={controls}
  >
    {/* Heading */}
    <motion.div variants={itemVariants} className="text-center ">
      <h2 className="text-lg md:text-xl lg:text-2xl font-bold text-gray-800 mb-6 mx-auto dark:text-white">
        Building Safer Homes, Stronger Communities
      </h2>

      <p className="text-gray-700 text-base leading-relaxed mx-auto text-center max-w-3xl dark:text-gray-300">
        SAFE Bangladesh is a non-government organization dedicated to helping vulnerable communities build safer homes and stronger futures.
        We promote <b><i> safe, affordable, and locally appropriate housing solutions</i></b> by strengthening traditional building practices.
        <br />
        We believe real change happens within communities. Through practical learning, local craftsmanship, and environmental initiatives such as tree planting, SAFE supports people in protecting their homes, livelihoods, and surroundings.
      </p>
    </motion.div>

    {/* Cards */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
      {[
        {
          title: "Community Empowerment",
          desc: "We believe real change begins within communities through shared knowledge and local skills.",
        },
        {
          title: "Resilient Housing",
          desc: "Our approach builds safer homes using proven techniques that people already trust.",
        },
        {
          title: "Environmental Care",
          desc: "Through tree planting and awareness programs, we protect nature alongside people.",
        },
      ].map((item, index) => (
        <motion.div
          key={index}
          variants={itemVariants}
          className="bg-white dark:bg-gray-300 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition hover:-translate-y-2"
        >
          <h3 className="text-lg font-semibold text-gray-800 mb-3 dark:text-black">
            {item.title}
          </h3>
          <p className="text-gray-700 dark:text-black">{item.desc}</p>
        </motion.div>
      ))}
    </div>
  </motion.section>

  {/* Image */}
<motion.div
  className="w-full flex justify-center"
>
  <img
    src="/images/banner3.jpg"
    alt="SAFE Bangladesh"
    className="rounded-3xl shadow-lg max-h-[520px] object-cover"
  />
</motion.div>


</section>

    </div>
  );
};

export default Home;
