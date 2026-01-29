import { MotionDiv, MotionH2, MotionP } from "../../../utils/MotionElements";
import PageBanner from "../../../Components/PageBanner/PageBanner";
import { Link } from "react-router-dom";
import useGalleryData from "../../../hooks/useGalleryData";
import Loading from "../../../Components/Loading/Loading";

const DemoHouse = () => {
  const { gallery, loading } = useGalleryData("demo_house");

  if (loading) {
    return <Loading />;
  }

  return (
    <MotionDiv className="w-full mt-3 mb-10">
      {/* Banner */}
      <PageBanner />

      <MotionDiv className="max-w-7xl mx-auto mt-10">

        {/* CONTENT SECTION 1 */}
        <MotionDiv className="max-w-5xl mx-auto mt-8 md:mt-16 p-6 md:p-8 bg-white dark:bg-gray-800 shadow-lg rounded-xl">
          <MotionH2
            text="Demonstration Houses – Building for Safety"
            className="text-green-700 dark:text-green-400 mb-4"
          />
          <MotionP className="text-gray-700 dark:text-gray-300 leading-relaxed text-justify">
            Nirapod Bangladesh Songstha partners with households to construct demonstration houses
            that showcase improved, safer, and climate-resilient building techniques. These houses serve
            as practical examples for communities, local builders, and partners, demonstrating how small
            design and construction improvements can significantly increase safety and durability.
          </MotionP>

          <MotionP className="mt-4 text-gray-700 dark:text-gray-300 leading-relaxed text-justify">
            Each demonstration house is developed through a collaborative process. Together with the
            household and local builders, we design and plan the construction and select appropriate Build
            for Safety options. These options respond to the house owner’s needs, preferences, and local
            context, while remaining affordable.
          </MotionP>

          <MotionP className="mt-4 text-gray-700 dark:text-gray-300 leading-relaxed text-justify">
            Improved construction techniques typically increase costs by <strong>10–20%</strong> compared to
            conventional housing, reflecting better materials and safer, longer-lasting design choices.
            To ensure affordability and shared ownership, we aim to split construction costs
            approximately <strong>50/50</strong> between Nirapod Bangladesh Songstha and the household.
          </MotionP>
        </MotionDiv>

        {/* IMAGE GALLERY */}
        <MotionDiv className="py-14">
          <MotionDiv className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-5 md:gap-8 px-4">
            {gallery?.images?.map((img, index) => (
              <MotionDiv
                key={index}
                whileHover={{ scale: 1.04 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className={`
                  group relative overflow-hidden rounded-2xl
                  shadow-lg hover:shadow-2xl
                  ${
                    index === 0 ||
                    index == 5 ||
                    index == 6 ||
                    index == 11 ||
                    index === gallery?.images?.length - 1
                      ? "md:col-span-2"
                      : ""
                  }
                `}
              >
                <img
                  src={img}
                  alt={`Demonstration house ${index + 1}`}
                  className="
                    h-52 sm:h-60 md:h-72 lg:h-80
                    w-full object-cover object-center
                    transition-transform duration-700 group-hover:scale-110
                  "
                />

                <div className="
                  absolute inset-0 bg-gradient-to-t
                  from-black/60 via-black/20 to-transparent
                  opacity-0 group-hover:opacity-100
                  transition-opacity duration-500
                " />

                <div className="
                  absolute bottom-4 left-4 right-4
                  translate-y-6 opacity-0
                  group-hover:translate-y-0 group-hover:opacity-100
                  transition-all duration-500
                ">
                  <h3 className="text-white text-sm md:text-base font-semibold">
                    Demonstration House {index + 1}
                  </h3>
                  <p className="text-gray-200 text-xs mt-1">
                    Safe and climate-resilient construction
                  </p>
                </div>
              </MotionDiv>
            ))}
          </MotionDiv>
        </MotionDiv>

        {/* CONTENT SECTION 2 */}
        <MotionDiv className="max-w-5xl mx-auto p-6 md:p-8 bg-white dark:bg-gray-800 shadow-lg rounded-xl">
          <MotionH2
            text="Materials and Construction Techniques"
            className="text-green-700 dark:text-green-400 mb-4"
          />
          <MotionP className="text-gray-700 dark:text-gray-300 leading-relaxed text-justify">
            Between <strong>August 2010 and May 2025</strong>, Nirapod Bangladesh Songstha has supported
            the construction of <strong>32 demonstration houses</strong> using a range of locally appropriate
            and sustainable materials. These include:
          </MotionP>

          <ul className="list-disc ml-5 mt-4 space-y-2 text-gray-700 dark:text-gray-300">
            <li>Bamboo framing systems</li>
            <li>Stabilized rammed earth construction</li>
            <li>Compressed Earth Brick (CEB)</li>
          </ul>

          <MotionP className="mt-4 text-gray-700 dark:text-gray-300 leading-relaxed text-justify">
            These houses demonstrate practical alternatives to unsafe construction practices while
            respecting local skills, materials, and building traditions.
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

      </MotionDiv>
    </MotionDiv>
  );
};

export default DemoHouse;
