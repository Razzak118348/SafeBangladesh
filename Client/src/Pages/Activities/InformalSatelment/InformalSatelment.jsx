import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { MotionDiv, MotionH2, MotionP } from "../../../utils/MotionElements";
import PageBanner from "../../../Components/PageBanner/PageBanner";
import Loading from "../../../Components/Loading/Loading";
import useGalleryData from "../../../hooks/useGalleryData";

const InformalSettlement = () => {
  const { gallery, loading } = useGalleryData("informal_settlement");

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="relative mb-10">
      <PageBanner />

      {/* Content Section */}
      <MotionDiv className="max-w-7xl mx-auto mt-10 px-4 grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">

        {/* TEXT CONTENT */}
        <div className="lg:col-span-7 space-y-8">

          {/* Intro */}
          <MotionDiv className="p-6 md:p-8 bg-white dark:bg-gray-800 shadow-lg rounded-xl">
            <MotionH2
              text="Informal Settlement – Housing & Sanitation"
              className="text-green-700 dark:text-green-400 mb-4"
            />

            <MotionP className="text-gray-700 dark:text-gray-300 leading-relaxed text-justify">
              Nirapod Bangladesh Songstha works with vulnerable and marginalized communities in
              Bangladesh to improve housing safety and access to adequate sanitation, with a strong
              focus on informal settlements and low-income areas. In these contexts, unsafe housing,
              poor sanitation, and limited household facilities directly affect health, dignity, and livelihoods.
            </MotionP>

            <MotionP className="mt-4 text-gray-700 dark:text-gray-300 leading-relaxed text-justify">
              Our housing and sanitation work is grounded in the belief that safe homes and basic services
              are essential foundations for poverty alleviation and community resilience. We therefore
              focus on practical, affordable, and community-led solutions that respond to real needs and local conditions.
            </MotionP>
          </MotionDiv>

          {/* Housing Section */}
          <MotionDiv className="p-6 md:p-8 bg-white dark:bg-gray-800 shadow-lg rounded-xl">
            <MotionH2
              text="Safe and Climate-Resilient Housing"
              className="text-green-700 dark:text-green-400 mb-4"
            />

            <MotionP className="text-gray-700 dark:text-gray-300 leading-relaxed text-justify">
              We support families to improve their homes using low-cost, locally available materials and
              construction techniques adapted to environmental risks such as flooding, heat, and storms.
              Our work strengthens traditional building practices through technical guidance, demonstration
              projects, and hands-on learning.
            </MotionP>

            <MotionP className="mt-4 text-gray-700 dark:text-gray-300 leading-relaxed text-justify">
              In informal settlements, we have implemented community-led housing pilots, including
              demonstration houses, to show how safer and more dignified homes can be built within limited
              space and resources. These initiatives are developed collaboratively with community members,
              local builders, and technical partners.
            </MotionP>

            <div className="mt-4 text-gray-700 dark:text-gray-300">
              <p className="font-semibold mb-2">Our housing activities include:</p>
              <ul className="list-disc ml-5 space-y-1">
                <li>Demonstration housing projects</li>
                <li>Housing improvement support for vulnerable households</li>
                <li>Technical housing advice and guidance</li>
                <li>Training on safe and climate-resilient construction practices</li>
              </ul>
            </div>
          </MotionDiv>

          {/* Sanitation Section */}
          <MotionDiv className="p-6 md:p-8 bg-white dark:bg-gray-800 shadow-lg rounded-xl">
            <MotionH2
              text="Sanitation and Household Facilities"
              className="text-green-700 dark:text-green-400 mb-4"
            />

            <MotionP className="text-gray-700 dark:text-gray-300 leading-relaxed text-justify">
              Access to safe sanitation and functional household facilities is critical for health, safety,
              and dignity, especially for women, children, and elderly people. Nirapod Bangladesh Songstha
              works with communities to improve toilets, kitchens, water access, and household spaces in
              ways that are practical and culturally appropriate.
            </MotionP>

            <MotionP className="mt-4 text-gray-700 dark:text-gray-300 leading-relaxed text-justify">
              Our sanitation work goes beyond infrastructure. We combine physical improvements with
              community awareness and behavior change, ensuring that facilities are used, maintained,
              and valued over the long term.
            </MotionP>

            <div className="mt-4 text-gray-700 dark:text-gray-300">
              <p className="font-semibold mb-2">Our sanitation activities include:</p>
              <ul className="list-disc ml-5 space-y-1">
                <li>Decent toilets programs</li>
                <li>Kitchen and household facility improvements</li>
                <li>Hygiene and sanitation awareness sessions</li>
                <li>Support for community-led maintenance and care</li>
              </ul>
            </div>
          </MotionDiv>

        </div>

        {/* IMAGE GALLERY */}
        <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6">
          <div className="grid grid-cols-1  gap-6">
            {gallery?.images?.map((img, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.04 }}
                className="overflow-hidden rounded-xl shadow-lg"
              >
                <img
                  src={img}
                  alt={`Informal settlement ${index + 1}`}
                  className="w-full h-64 lg:h-72 object-cover object-center"
                />
              </motion.div>
            ))}
          </div>
        </div>

      </MotionDiv>
    </div>
  );
};

export default InformalSettlement;
