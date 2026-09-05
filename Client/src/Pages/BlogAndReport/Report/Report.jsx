// src/pages/Report/Report.jsx

import { useLoaderData } from "react-router-dom";
import { motion } from "framer-motion";
import { MotionDiv, MotionH1, MotionP } from "../../../utils/MotionElements";
import PageBanner from "../../../Components/PageBanner/PageBanner";

const Report = () => {
  const reports = useLoaderData();

  return (
    <section className="px-4 py-6">
      <PageBanner />

      {/* HEADER */}
      <MotionDiv className="mt-6 lg:mt-16 text-center">
        <MotionH1
          className="text-3xl md:text-4xl p-4 font-bold text-green-800"
          text="Our Reports"
        />

        <MotionP className="max-w-2xl mx-auto text-gray-600 px-4">
          Explore our reports, activities, achievements, and important
          organizational updates.
        </MotionP>
      </MotionDiv>

      {/* REPORT GRID */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 mt-8 lg:mt-12"
      >
        {reports?.length > 0 ? (
          reports.map((report) => (
            <MotionDiv
              key={report._id}
              className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col hover:shadow-xl transition-shadow duration-300"
            >
              {/* COVER IMAGE */}
              <div className="aspect-[16/9] w-full overflow-hidden">
                <img
                  src={report.coverPhoto}
                  alt={report.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* REPORT CONTENT */}
              <MotionDiv className="p-6 flex flex-col flex-1">
                <h2 className="text-lg md:text-xl font-semibold text-gray-800">
                  {report.title}
                </h2>

                <MotionP className="text-sm text-gray-600 line-clamp-3 mt-3 flex-1">
                  {report.description}
                </MotionP>

                {/* BUTTON */}
                <a
                  href={report.fileLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex items-center justify-center w-full px-4 py-2.5 rounded-md bg-green-700 text-white font-medium hover:bg-green-800 transition-colors duration-300"
                >
                  View Report →
                </a>
              </MotionDiv>
            </MotionDiv>
          ))
        ) : (
          <p className="text-center col-span-full text-gray-500 py-10">
            No reports found
          </p>
        )}
      </motion.div>
    </section>
  );
};

export default Report;