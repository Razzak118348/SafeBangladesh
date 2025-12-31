import React from "react";
import { MotionDiv, MotionH1, MotionH2, MotionP } from "../../../utils/MotionElements";
import Banner from "../../../Components/Banner/Banner";
import { Link } from "react-router-dom";

const DemoHouse = () => {
  const demoHouseImages = [
    "https://raw.githubusercontent.com/MD-Meheraf-Hossan-Nishat/Image_SafeBD/main/Activities/Demonstration_House/20190209_174325.jpg",
    "https://raw.githubusercontent.com/MD-Meheraf-Hossan-Nishat/Image_SafeBD/main/Activities/Demonstration_House/DSC_0114.JPG",
    "https://raw.githubusercontent.com/MD-Meheraf-Hossan-Nishat/Image_SafeBD/main/Activities/Demonstration_House/DSC_0124.JPG",
    "https://raw.githubusercontent.com/MD-Meheraf-Hossan-Nishat/Image_SafeBD/main/Activities/Demonstration_House/DSC_0127.JPG",
    "https://raw.githubusercontent.com/MD-Meheraf-Hossan-Nishat/Image_SafeBD/main/Activities/Demonstration_House/DSC_0498.JPG",
    "https://raw.githubusercontent.com/MD-Meheraf-Hossan-Nishat/Image_SafeBD/main/Activities/Demonstration_House/JAAGOSchoolSide.JPG",
    // "https://raw.githubusercontent.com/MD-Meheraf-Hossan-Nishat/Image_SafeBD/main/Activities/Demonstration_House/P1030657.JPG",
  ];

  return (
    <MotionDiv className="w-full mt-3">
      {/* Reusable Banner */}
      <div className="relative w-full overflow-hidden">
        <Banner
          imageUrl="https://raw.githubusercontent.com/MD-Meheraf-Hossan-Nishat/Image_SafeBD/main/Activities/Demonstration_House/ForidpurClinic3.jpg"
          altText="Informal settlement housing project"
        />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4">
          <MotionH1
            className="bg-gradient-to-r from-lime-200 to-green-600 bg-clip-text text-transparent drop-shadow-lg"
            text="Demonstration House Project"
          />
        </div>
      </div>

      <MotionDiv className="max-w-7xl mx-auto mt-10 px-4 grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
  {/* IMAGE GALLERY */}
        <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {demoHouseImages.map((img, index) => (
              <MotionDiv
                key={index}
                whileHover={{ scale: 1.04 }}
                className="overflow-hidden rounded-xl shadow-lg"
              >
                <img
                  src={img}
                  alt={`Informal settlement ${index + 1}`}
                  className="w-full h-40 lg:h-56 object-cover object-center"
                />
              </MotionDiv>
            ))}
          </div>
        </div>
        {/* TEXT CONTENT */}
        <div className="lg:col-span-7 space-y-8">
          <MotionDiv className="p-6 md:p-8 bg-white dark:bg-gray-800 shadow-lg rounded-xl">
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

          <MotionDiv className="p-6 md:p-8 bg-white dark:bg-gray-800 shadow-lg rounded-xl">
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
        </div>



      </MotionDiv>

    </MotionDiv>
  );
};

export default DemoHouse;
