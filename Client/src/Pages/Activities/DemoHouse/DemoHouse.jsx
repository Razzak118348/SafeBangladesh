import React from "react";
import { MotionDiv, MotionH1, MotionH2, MotionP } from "../../../utils/MotionElements";
import Banner from "../../../Components/Banner/Banner";
import { Link } from "react-router-dom";
import PageBanner from "../../../Components/PageBanner/PageBanner";

const DemoHouse = () => {
  const demoHouseImages = [
    "https://raw.githubusercontent.com/MD-Meheraf-Hossan-Nishat/Image_SafeBD/main/Activities/Demonstration_House/20190209_174325.jpg",
    "https://raw.githubusercontent.com/MD-Meheraf-Hossan-Nishat/Image_SafeBD/main/Activities/Demonstration_House/DSC_0114.JPG",
    "https://raw.githubusercontent.com/MD-Meheraf-Hossan-Nishat/Image_SafeBD/main/Activities/Demonstration_House/DSC_0124.JPG",
    "https://raw.githubusercontent.com/MD-Meheraf-Hossan-Nishat/Image_SafeBD/main/Activities/Demonstration_House/DSC_0127.JPG",
    "https://raw.githubusercontent.com/MD-Meheraf-Hossan-Nishat/Image_SafeBD/main/Activities/Demonstration_House/DSC_0498.JPG",
    "https://raw.githubusercontent.com/MD-Meheraf-Hossan-Nishat/Image_SafeBD/main/Activities/Demonstration_House/JAAGOSchoolSide.JPG",
  ]

  return (
    <MotionDiv className="w-full mt-3">
      {/* Reusable Banner */}
     <PageBanner></PageBanner>

      <MotionDiv className="max-w-7xl mx-auto mt-10">

{/* content 1 */}
   <MotionDiv className="max-w-5xl mx-auto mt-8 md:mt-16 p-6 md:p-8 bg-white dark:bg-gray-800 shadow-lg rounded-xl">
            <MotionH2
              text="Bamboo frame prior to mud wall construction of 'wattle and daub'"
              className="text-green-700 dark:text-green-400 mb-4"
            />
            <MotionP className="text-gray-700 dark:text-gray-300 leading-relaxed text-justify">
              We partner with households to construct new houses which will demonstrate our improved techniques.
              Together with the household and local builders we design and plan the construction and select appropriate
              Building-for-Safety options. These are options that suit the house-owner’s wants and needs, and are in line
              with what the owner would have originally paid, costing between 10-20% extra. We aim to split the costs of
              these demonstration houses with household approximately 50/50.
            </MotionP>
          </MotionDiv>

  {/* IMAGE GALLERY */}
        <MotionDiv className="py-14">
  <MotionDiv className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-5 md:gap-8 px-4">
    {demoHouseImages.map((img, index) => (
      <MotionDiv
        key={index}
        whileHover={{ scale: 1.04 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className={`
          group relative overflow-hidden rounded-2xl
          shadow-lg hover:shadow-2xl
          ${index === 0 ||index ==5 || index==6 || index==11 || index === demoHouseImages.length - 1 ? "md:col-span-2" : ""}
        `}
      >
        {/* Image */}
        <img
          src={img}
          alt={`Workshop ${index + 1}`}
          className="
            h-52 sm:h-60 md:h-72 lg:h-80
            w-full object-cover object-center
            transition-transform duration-700 group-hover:scale-110
          "
        />

        {/* Gradient Overlay */}
        <div className="
          absolute inset-0 bg-gradient-to-t
          from-black/60 via-black/20 to-transparent
          opacity-0 group-hover:opacity-100
          transition-opacity duration-500
        " />

        {/* Caption */}
        <div className="
          absolute bottom-4 left-4 right-4
          translate-y-6 opacity-0
          group-hover:translate-y-0 group-hover:opacity-100
          transition-all duration-500
        ">
          <h3 className="text-white text-sm md:text-base font-semibold">
            Demonstration house {index + 1}
          </h3>
          <p className="text-gray-200 text-xs mt-1">
            Make a reliable and comfort house
          </p>
        </div>
      </MotionDiv>
    ))}
  </MotionDiv>
</MotionDiv>


        {/* TEXT CONTENT 2*/}
          <MotionDiv className="max-w-5xl mx-auto p-6 md:p-8 bg-white dark:bg-gray-800 shadow-lg rounded-xl">
             <MotionH2
              text="Rammed earth wall under construction"
              className="text-green-700 dark:text-green-400 mb-4"
            />
            <MotionP className="text-gray-700 dark:text-gray-300 leading-relaxed text-justify">
              The construction of these houses has been funded by the Australian High Commission and the British Women Association.  Between Aug 2010 and May 2011 we have built 4 demonstration houses using a variety of materials: bamboo frame,
            stabilised rammed earth and Compressed Earth Brick. Reports which detail the construction and the design and
            Building-for-Safety improvements used are given in Reports.
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




      </MotionDiv>

    </MotionDiv>
  );
};

export default DemoHouse;
