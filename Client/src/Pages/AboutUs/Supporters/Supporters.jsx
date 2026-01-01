import React from "react";
import { Link } from "react-router-dom";
import { MotionDiv, MotionH2, MotionP } from "../../../utils/MotionElements";

const supportersData = [
{
    name: "Housing and Hazards",
    logo: "https://raw.githubusercontent.com/MD-Meheraf-Hossan-Nishat/Image_SafeBD/main/Support/HH%20Logo.jpeg",
    website: "https://www.housingandhazards.org",
  },
  {
    name: "Architecture Department, BRAC University",
    logo: "https://raw.githubusercontent.com/MD-Meheraf-Hossan-Nishat/Image_SafeBD/main/Support/BRAC%201.png",
    website: "https://www.bracu.ac.bd",
  },
  {
    name: "United Nations Development Programme (UNDP), Bangladesh",
    logo: "https://raw.githubusercontent.com/MD-Meheraf-Hossan-Nishat/Image_SafeBD/main/Support/UNDP%201.png",
    website: "https://www.undp.org/bangladesh",
  },
  {
    name: "Australian High Commission, Bangladesh",
    logo: "https://raw.githubusercontent.com/MD-Meheraf-Hossan-Nishat/Image_SafeBD/main/Support/Australia_logo-1.jpg",
    website: "https://bangladesh.highcommission.gov.au",
  },
  {
    name: "British Women’s Association, Dhaka",
    logo: "https://raw.githubusercontent.com/MD-Meheraf-Hossan-Nishat/Image_SafeBD/main/Support/BWA%20Logo%202.jpg",
    website: "https://bwadbd.org",
  },
];

const Supporters = () => {
  return (
    <section className="py-8 md:py-16">
      <div className="max-w-7xl mx-auto px-4">

        {/* Title */}
        <MotionH2 className="text-green-600 mb-4" text="Our Supporters">

        </MotionH2>
        <MotionP className="text-center text-gray-600 dark:text-white max-w-2xl mx-auto mb-12">
          With heartfelt thanks to our partners and supporters who contribute
          to strengthening communities and building a safer future.
        </MotionP>

        {/* Supporters Grid */}
        <MotionDiv className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {supportersData.map((supporter, index) => (
            <Link
              key={index}
              to={supporter.website}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white rounded-xl shadow-md p-6 flex flex-col items-center justify-center
                        transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              {/* Logo */}
              <img
                src={supporter.logo}
                alt={supporter.name}
                className="h-16 object-contain mb-4 group-hover:grayscale-0 transition"
              />

              {/* Name */}
              <MotionP className="text-sm font-semibold text-center text-gray-700 group-hover:text-green-800">
                {supporter.name}
              </MotionP>
            </Link>
          ))}
        </MotionDiv>
      </div>
    </section>
  );
};

export default Supporters;
