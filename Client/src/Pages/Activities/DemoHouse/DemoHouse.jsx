import React from "react";
import { MotionDiv, MotionH2, MotionP } from "../../../utils/MotionElements";
import Banner from "../../../Components/Banner/Banner";


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
      <Banner
        imageUrl="https://raw.githubusercontent.com/MD-Meheraf-Hossan-Nishat/Image_SafeBD/main/Activities/Demonstration_House/ForidpurClinic3.jpg"
        altText="Demo House Banner"
      />

      {/* Content Section */}
      <MotionDiv className="mx-auto px-4 pt-6 underline text-gray-800 dark:text-gray-200">
         <MotionH2
      text="Demonstration House Project"
      className="font-bold md:text-xl lg:text-2xl mb-16  text-green-800 dark:text-white"
    />
        <MotionDiv className="space-y-4 text-lg leading-relaxed">
          <MotionP><strong>Bamboo frame prior to mud wall construction of 'wattle and daub'</strong></MotionP>
          <MotionP><strong>Rammed earth wall under construction</strong></MotionP>
          <MotionP>
            We partner with households to construct new houses which will demonstrate our improved techniques.
            Together with the household and local builders we design and plan the construction and select appropriate
            Building-for-Safety options. These are options that suit the house-owner’s wants and needs, and are in line
            with what the owner would have originally paid, costing between 10-20% extra. We aim to split the costs of
            these demonstration houses with household approximately 50/50.
          </MotionP>
          <MotionP>
            Between Aug 2010 and May 2011 we have built 4 demonstration houses using a variety of materials: bamboo frame,
            stabilised rammed earth and Compressed Earth Brick. Reports which detail the construction and the design and
            Building-for-Safety improvements used are given in Reports.
          </MotionP>
          <MotionP><strong>House built with Compressed Earth Blocks</strong></MotionP>
          <MotionP>
            The construction of these houses has been funded by the Australian High Commission and the British Women Association.
          </MotionP>
        </MotionDiv>
      </MotionDiv>

      {/* Images Section */}
      <MotionDiv className="mx-auto px-4 py-12">
        <MotionH2 className="text-lg md:text-xl underline mb-10 text-green-700 text-center font-bold dark:text-white" text="Gallery of Demo Houses">

        </MotionH2>

        <MotionDiv className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {demoHouseImages.map((img, index) => (
            <MotionDiv
              key={index}
              className="overflow-hidden rounded-xl shadow-md hover:shadow-xl transition"
            >
              <img
                src={img}
                alt={`Demo House ${index + 1}`}
                className="w-full h-[320px] object-cover hover:scale-105 transition duration-500"
              />
            </MotionDiv>
          ))}
        </MotionDiv>
      </MotionDiv>
    </MotionDiv>
  );
};

export default DemoHouse;
