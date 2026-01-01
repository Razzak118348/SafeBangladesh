import React from "react";
import { Link } from "react-router-dom";
import { MotionDiv, MotionH2, MotionP } from "../../../utils/MotionElements";

const supportersData = [
  {
    name: "Housing and Hazards",
    logo: "https://housingandhazards.org/wp-content/uploads/2021/02/logo.png",
    website: "https://www.housingandhazards.org",
  },
  {
    name: "Architecture Department, BRAC University",
    logo: "https://upload.wikimedia.org/wikipedia/en/3/3f/BRAC_University_Logo.png",
    website: "https://www.bracu.ac.bd",
  },
  {
    name: "United Nations Development Programme (UNDP), Bangladesh",
    logo: "https://upload.wikimedia.org/wikipedia/commons/4/4d/UNDP_logo.svg",
    website: "https://www.undp.org/bangladesh",
  },
  {
    name: "Australian High Commission, Bangladesh",
    logo: "https://upload.wikimedia.org/wikipedia/commons/8/88/Australian_Government_Logo.svg",
    website: "https://bangladesh.highcommission.gov.au",
  },
  {
    name: "British Women’s Association, Dhaka",
    logo: "https://bwadbd.org/wp-content/uploads/2020/03/bwad-logo.png",
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
                className="h-16 object-contain mb-4 grayscale group-hover:grayscale-0 transition"
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
