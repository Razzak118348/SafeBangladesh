import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { MotionDiv,MotionH2, MotionP } from "../../../utils/MotionElements";
import PageBanner from "../../../Components/PageBanner/PageBanner";
import Loading from "../../../Components/Loading/Loading";
import useGalleryData from "../../../hooks/useGalleryData";

const InformalSettlement = () => {
  const { gallery, loading} = useGalleryData("informal_settlement")

if(loading){
  return <Loading></Loading>
}

  return (
    <div className="relative">
      {/* Banner with overlay text */}
      <PageBanner></PageBanner>

     {/* Content Section */}
<MotionDiv className="max-w-7xl mx-auto mt-10 px-4 grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">

  {/* TEXT CONTENT */}
  <div className="lg:col-span-7 space-y-8">
    <MotionDiv className="p-6 md:p-8 bg-white dark:bg-gray-800 shadow-lg rounded-xl">
      <MotionH2
        text="Community-Led Housing Innovation"
        className=" text-green-700 dark:text-green-400 mb-4"
      />
      <MotionP className="text-gray-700 dark:text-gray-300 leading-relaxed text-justify">
        We have recently undertaken a pilot to demonstrate our approach to
        improved housing in a slum in Dinajpur called Jorgen Babur Mart. This
        project is part of the Urban Partnerships for Poverty Reduction Project
        from UKAID and UNDP.
      </MotionP>
    </MotionDiv>

    <MotionDiv className="p-6 md:p-8 bg-white dark:bg-gray-800 shadow-lg rounded-xl">
      <MotionP className="text-gray-700 dark:text-gray-300 leading-relaxed text-justify">
        Our approach was underpinned by community involvement and included
        workshops with local builders, the community, architecture students
        from BRAC, and building professionals. Together, we designed and built
        10 demonstration houses.
      </MotionP>

      <p className="mt-4">
        <Link
          to="https://safebangladesh.wordpress.com/wp-content/uploads/2011/07/improved-design-of-urban-low-cost-housing-in-dinajpur-rev-1.pdf"
          target="_blank"
          className="inline-block mt-2 font-medium text-green-700 dark:text-green-400 underline hover:text-green-900"
        >
          Read full research document →
        </Link>
      </p>
    </MotionDiv>
  </div>

  {/* IMAGE GALLERY */}
  <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6">
   <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
     {gallery?.images?.map((img, index) => (
      <motion.div
        key={index}
        whileHover={{ scale: 1.04 }}
        className="overflow-hidden rounded-xl shadow-lg"
      >
        <img
          src={img}
          alt={`Informal settlement ${index + 1}`}
          className="w-full h-46 sm:h-64 lg:h-56 object-cover object-center"
        />
      </motion.div>
    ))}
     </div>
  </div>

</MotionDiv>

    </div>
  );
};

export default InformalSettlement;
