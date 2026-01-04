
import { MotionDiv, MotionH1, MotionH2, MotionP } from "../../../utils/MotionElements";
import Banner from "../../../Components/Banner/Banner";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import PageBanner from "../../../Components/PageBanner/PageBanner";

const Background = () => {

  const backgroundImages = [
    "https://raw.githubusercontent.com/MD-Meheraf-Hossan-Nishat/Image_SafeBD/main/About_Us/Background/AzuKo_028.jpg",
    "https://raw.githubusercontent.com/MD-Meheraf-Hossan-Nishat/Image_SafeBD/main/About_Us/Background/AzuKo_016.jpg",
    "https://raw.githubusercontent.com/MD-Meheraf-Hossan-Nishat/Image_SafeBD/main/About_Us/Background/AzuKo_015.jpg",
    "https://raw.githubusercontent.com/MD-Meheraf-Hossan-Nishat/Image_SafeBD/main/Activities/Demonstration_House/DSC_0127.JPG",
    "https://raw.githubusercontent.com/MD-Meheraf-Hossan-Nishat/Image_SafeBD/main/About_Us/Background/AzuKo_003.jpg",
  ];

  return (
    <MotionDiv className="w-ful">
      {/* banner  */}
      <PageBanner></PageBanner>

      <MotionDiv className="max-w-5xl mx-auto mt-16 p-8 md:p-10 bg-white/90 dark:bg-gray-800/90 backdrop-blur shadow-xl rounded-2xl border border-green-100 dark:border-gray-700">
        <MotionH2
          text="Background of Nirapod Bangladesh Songstha"
          className="text-green-800 dark:text-green-400 mb-4"
        />
        <div className="w-20 h-1 bg-green-600 rounded mb-6" />
        <MotionP className="text-gray-700 dark:text-gray-300 leading-relaxed text-justify">
          We partner with households to construct new houses that demonstrate improved construction techniques.
          Together with local builders, we design climate-responsive homes using safer and affordable building methods.These designs respect household needs while strengthening disaster resilience.
          <br />Over the past two decades, however, this balance has shifted. Fired brick and concrete, once symbols of urban life, have come to represent progress and social status. Families invested their limited resources in brick houses believing they offered permanence and reduced maintenance. In reality, brick production removed fertile topsoil, increased carbon emissions, trapped heat during dry seasons, and required paid expert repairs—gradually excluding women from home maintenance and eroding traditional skills. In contrast, neighboring mud houses remained cooler, repairable, and well maintained by household members themselves.
        </MotionP>
      </MotionDiv>

      {/* GALLERY TITLE  */}
      <MotionDiv className="text-center max-w-3xl mx-auto mt-24 mb-12 px-4">
        <MotionH2
          text="Demonstration Housing & Field Activities"
          className="text-green-800 dark:text-green-400"
        />
        <MotionP className="text-gray-600 dark:text-gray-400 mt-3">
          Visual documentation of community-based housing construction and safety innovations
        </MotionP>
      </MotionDiv>

      {/* IMAGE GALLERY  */}
      <MotionDiv className="max-w-7xl mx-auto px-4 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">

          {/* FEATURE IMAGE */}
          <MotionDiv
            whileHover={{ scale: 1.03 }}
            className="md:col-span-7 relative overflow-hidden rounded-3xl shadow-2xl group"
          >
            <img
              src={backgroundImages[0]}
              alt="Demonstration housing project"
              className="w-full h-[320px] md:h-[420px] object-cover transition-transform duration-700 group-hover:scale-105"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

            <div className="absolute top-5 left-5 bg-green-600 text-white text-xs px-3 py-1 rounded-full">
              Featured Project
            </div>
          </MotionDiv>

          {/* SUPPORTING IMAGES */}
          <div className="md:col-span-5 grid grid-cols-2 gap-6">
            {backgroundImages.slice(1, 5).map((img, index) => (
              <MotionDiv
                key={index}
                whileHover={{ scale: 1.05 }}
                className="relative overflow-hidden rounded-2xl shadow-lg group"
              >
                <img
                  src={img}
                  alt={`Project activity ${index + 1}`}
                  className="w-full h-40 md:h-48 object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </MotionDiv>
            ))}
          </div>

        </div>
      </MotionDiv>

      {/* CONTENT SECTION 2 */}
      <MotionDiv className="max-w-5xl mx-auto mb-24 p-8 md:p-10 bg-gradient-to-br from-green-50 to-white dark:from-gray-800 dark:to-gray-900 shadow-xl rounded-2xl border-l-4 border-green-600">
        <MotionH2
          text="Rammed Earth Wall Under Construction"
          className="text-green-800 dark:text-green-400 mb-4"
        />
        <MotionP className="text-gray-700 dark:text-gray-300 leading-relaxed text-justify">
          These demonstration houses were funded by the Australian High Commission and the British Women Association.
          Between August 2010 and May 2011, four prototype houses were constructed using bamboo framing,
          stabilised rammed earth, and compressed earth brick technologies.
        </MotionP>

        <Link
          to="https://safebangladesh.wordpress.com/wp-content/uploads/2011/07/improved-design-of-urban-low-cost-housing-in-dinajpur-rev-1.pdf"
          target="_blank"
          className="inline-flex items-center gap-2 mt-8 px-6 py-3 bg-green-700 text-white rounded-lg hover:bg-green-800 transition"
        >
          Read Full Research Document →
        </Link>
      </MotionDiv>

    </MotionDiv>
  );
};

export default Background;

