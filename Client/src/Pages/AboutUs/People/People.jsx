import React from "react";
import { MotionDiv } from "../../../utils/MotionElements";

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
      <MotionDiv className="w-full h-[300px] md:h-[450px] overflow-hidden">
        <img
          src="https://raw.githubusercontent.com/MD-Meheraf-Hossan-Nishat/Image_SafeBD/main/About_Us/People/DSC05633.JPG"
          alt="People Banner"
          className="w-full h-full object-cover rounded-lg"
        />
      </MotionDiv>

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
