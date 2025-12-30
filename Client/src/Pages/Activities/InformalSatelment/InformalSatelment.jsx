import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Banner from "../../../Components/Banner/Banner";
import { MotionDiv, MotionP } from "../../../utils/MotionElements";

const InformalSettlement = () => {
  const galleryImages = [
    "https://raw.githubusercontent.com/MD-Meheraf-Hossan-Nishat/Image_SafeBD/main/Activities/Informal_Setelment/DSC05039.JPG",
    "https://raw.githubusercontent.com/MD-Meheraf-Hossan-Nishat/Image_SafeBD/main/Activities/Informal_Setelment/DSC05036.JPG",
    "https://raw.githubusercontent.com/MD-Meheraf-Hossan-Nishat/Image_SafeBD/main/Activities/Informal_Setelment/DSC05567.JPG",
  ];

  return (
    <div className="relative">
      {/* Banner with overlay text */}
      <div className="relative w-full h-[60vh] md:h-[70vh] overflow-hidden">
        <Banner
          imageUrl="https://raw.githubusercontent.com/MD-Meheraf-Hossan-Nishat/Image_SafeBD/main/Activities/Informal_Setelment/DSC05571.JPG"
          altText="Informal settlement housing project"
        />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4">
          <motion.h1
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-lg md:text-2xl lg:text-4xl font-bold bg-gradient-to-r text-lime-200 bg-clip-text text-transparent drop-shadow-lg"
          >
            Improving Housing in Informal Settlements
          </motion.h1>

          <motion.p
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.2 }}
            className="mt-4 text-lg md:text-xl max-w-3xl bg-gradient-to-r from-green-200 via-green-300 to-green-400 bg-clip-text text-transparent"
          >
            A community-driven approach to better urban low-cost housing in Dinajpur.
          </motion.p>

        </div>
      </div>

      {/* Description Sections with Cards */}
      <MotionDiv className="max-w-6xl mx-auto px-4 grid gap-8 md:grid-cols-2">
        <MotionDiv

          className="p-6 bg-white dark:bg-gray-800 shadow-lg rounded-lg"
        >
          <p className="text-gray-700 dark:text-gray-300 text-justify leading-relaxed">
            We have recently undertaken a pilot to demonstrate our approach to
            improved housing in a slum in Dinajpur called Jorgen Babur Mart. This
            project is part of the Urban Partnerships for Poverty Reduction Project
            from UKAID and UNDP.
          </p>
        </MotionDiv>

        <MotionDiv
          className="p-6 bg-white dark:bg-gray-800 shadow-lg rounded-lg"
        >
          <MotionP className="text-gray-700 dark:text-gray-300 text-justify leading-relaxed">
            Our approach was underpinned by community involvement and included
            workshops with local builders and the community, architecture students
            from BRAC, and other building professionals. Together, we shared ideas,
            learned about the issues facing this community, and designed and built
            10 demonstration houses.
          </MotionP>
          <p className="mt-4 text-gray-700 dark:text-gray-300">
            Read more here:{" "}
            <Link
              to="https://safebangladesh.wordpress.com/wp-content/uploads/2011/07/improved-design-of-urban-low-cost-housing-in-dinajpur-rev-1.pdf"
              className="underline text-green-700 hover:text-green-900 dark:text-green-400"
              target="_blank"
            >
              Improved design of urban low cost housing in Dinajpur
            </Link>
          </p>
        </MotionDiv>
      </MotionDiv>

      {/* Interactive Image Gallery */}
      <MotionDiv className="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 my-12">
        {galleryImages.map((img, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="overflow-hidden rounded-lg shadow-lg cursor-pointer"
          >
            <img
              src={img}
              alt={`Informal settlement ${index + 1}`}
              className="w-full h-64 md:h-72 object-cover transition-transform duration-500"
            />
          </motion.div>
        ))}
      </MotionDiv>
    </div>
  );
};

export default InformalSettlement;
