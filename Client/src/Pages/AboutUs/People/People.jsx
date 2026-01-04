import React from "react";
import { MotionDiv } from "../../../utils/MotionElements";
import PageBanner from "../../../Components/PageBanner/PageBanner";

const People = () => {
  const teamMembers = [
    "https://raw.githubusercontent.com/MD-Meheraf-Hossan-Nishat/Image_SafeBD/main/About_Us/People/Picture5576568.jpg",
    "https://raw.githubusercontent.com/MD-Meheraf-Hossan-Nishat/Image_SafeBD/main/About_Us/People/DSC05548.JPG",
    "https://raw.githubusercontent.com/MD-Meheraf-Hossan-Nishat/Image_SafeBD/main/About_Us/People/DSC05468.JPG",
    "https://raw.githubusercontent.com/MD-Meheraf-Hossan-Nishat/Image_SafeBD/main/About_Us/People/DSC05461.JPG",
    "https://raw.githubusercontent.com/MD-Meheraf-Hossan-Nishat/Image_SafeBD/main/About_Us/People/Picture634816.jpg",
  ];

  return (
    <MotionDiv className="w-full mt-3">
      {/* Banner Section */}
      <PageBanner></PageBanner>

      {/* Team Section */}
      <MotionDiv className="max-w-7xl mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-center mb-10">
          Our People
        </h2>

        <MotionDiv className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {teamMembers.map((img, index) => (
            <MotionDiv
              key={index}
              className="overflow-hidden rounded-xl shadow-md hover:shadow-xl transition"
            >
              <img
                src={img}
                alt={`Team member ${index + 1}`}
                className="w-full h-[320px] object-cover hover:scale-105 transition duration-500"
              />
            </MotionDiv>
          ))}
        </MotionDiv>
      </MotionDiv>
    </MotionDiv>
  );
};

export default People;
