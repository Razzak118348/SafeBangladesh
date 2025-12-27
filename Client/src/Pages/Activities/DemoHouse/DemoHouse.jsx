import React from "react";
import { MotionDiv } from "../../../utils/MotionElements";
import Banner from "../../../Components/Banner/Banner";


const DemoHouse = () => {
  const demoHouseImages = [
    "https://raw.githubusercontent.com/MD-Meheraf-Hossan-Nishat/Image_SafeBD/main/Activities/Demonstration_House/20190209_174325.jpg",
    "https://raw.githubusercontent.com/MD-Meheraf-Hossan-Nishat/Image_SafeBD/main/Activities/Demonstration_House/DSC_0114.JPG",
    "https://raw.githubusercontent.com/MD-Meheraf-Hossan-Nishat/Image_SafeBD/main/Activities/Demonstration_House/DSC_0124.JPG",
    "https://raw.githubusercontent.com/MD-Meheraf-Hossan-Nishat/Image_SafeBD/main/Activities/Demonstration_House/DSC_0127.JPG",
    "https://raw.githubusercontent.com/MD-Meheraf-Hossan-Nishat/Image_SafeBD/main/Activities/Demonstration_House/DSC_0498.JPG",
    "https://raw.githubusercontent.com/MD-Meheraf-Hossan-Nishat/Image_SafeBD/main/Activities/Demonstration_House/JAAGOSchoolSide.JPG",
    "https://raw.githubusercontent.com/MD-Meheraf-Hossan-Nishat/Image_SafeBD/main/Activities/Demonstration_House/P1030657.JPG",
  ];

  return (
    <MotionDiv className="w-full mt-3">
      {/* Reusable Banner */}
      <Banner
        imageUrl="https://raw.githubusercontent.com/MD-Meheraf-Hossan-Nishat/Image_SafeBD/main/Activities/Demonstration_House/ForidpurClinic3.jpg"
        altText="Demo House Banner"
      />

      {/* Images Section */}
      <MotionDiv className="max-w-7xl mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-center mb-10">
          Demonstration House
        </h2>

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
