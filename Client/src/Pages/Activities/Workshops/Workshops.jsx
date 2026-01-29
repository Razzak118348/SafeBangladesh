import Loading from "../../../Components/Loading/Loading";
import PageBanner from "../../../Components/PageBanner/PageBanner";
import useGalleryData from "../../../hooks/useGalleryData";
import { MotionDiv, MotionH2, MotionP } from "../../../utils/MotionElements";

const Workshops = () => {
  const { gallery, loading } = useGalleryData("workshop");

  if (loading) {
    return <Loading />;
  }

  return (
    <>
      {/* Content Section */}
      <MotionDiv>
        <PageBanner />

        <MotionH2
          className="underline text-green-700 dark:text-white my-6"
          text="Build for Safety Training & Workshops"
        />

        <div className="max-w-5xl mx-auto px-4 space-y-6">

          <MotionP className="text-justify text-gray-700 dark:text-gray-300 leading-relaxed">
            Nirapod Bangladesh Songstha conducts Build for Safety workshops to strengthen community
            knowledge and skills on safe, affordable, and climate-resilient housing. These workshops focus
            on helping participants understand the link between hazards, disasters, and housing safety, and
            how small, informed decisions can significantly reduce long-term risks and costs.
          </MotionP>

          <MotionP className="text-justify text-gray-700 dark:text-gray-300 leading-relaxed">
            Our training approach emphasizes learning by doing, ensuring that participants gain practical
            experience alongside theoretical understanding.
          </MotionP>

          <MotionP className="text-justify text-gray-700 dark:text-gray-300 leading-relaxed">
            Build for Safety workshops are highly practical and participatory. Participants work in teams to
            complete hands-on exercises, including house budgeting, construction planning, and material
            preparation. Through these activities, participants clearly see the long-term financial benefits of
            investing slightly more time, care, and resources at the beginning of construction.
          </MotionP>

          <MotionP className="text-justify text-gray-700 dark:text-gray-300 leading-relaxed">
            We also integrate traditional songs and local cultural practices into the workshops to reinforce
            key safety messages, making learning engaging, memorable, and accessible to all participants.
          </MotionP>

         <MotionDiv className="grid grid-cols-1 lg:grid-cols-2 gap-8 my-4">
           {/* Key Activities */}
          <div className="bg-white dark:bg-gray-800 shadow-lg rounded-xl p-6">
            <MotionH2
              className="text-green-700 dark:text-green-400 mb-4"
              text="Key Training Activities Include:"
            />

            <ul className="list-disc ml-5 space-y-2 text-gray-700 dark:text-gray-300">
              <li>Team-based house budget and planning exercises</li>
              <li>Practical demonstrations of improved building techniques</li>
              <li>Hands-on practice mixing borax solution as a low-cost method for treating bamboo</li>
              <li>Discussions on hazards, disasters, and safer construction choices</li>
              <li>Use of traditional songs to reinforce learning messages</li>
            </ul>
          </div>

          {/* Participants */}
          <div className="bg-white dark:bg-gray-800 shadow-lg rounded-xl p-6">
            <MotionH2
              className="text-green-700 dark:text-green-400 mb-4"
              text="Participants"
            />

            <MotionP className="text-gray-700 dark:text-gray-300 leading-relaxed text-justify">
              Our workshops bring together a diverse group of community members to encourage shared
              learning and collaboration. Participants typically include:
            </MotionP>

            <ul className="list-disc ml-5 mt-3 space-y-2 text-gray-700 dark:text-gray-300">
              <li>Women from local communities</li>
              <li>Local builders and craftspeople</li>
              <li>Students and young people interested in construction and design</li>
            </ul>

            <MotionP className="mt-4 text-gray-700 dark:text-gray-300">
              Workshops usually involve <strong>30 to 50 participants</strong>, creating an inclusive and interactive
              learning environment.
            </MotionP>
          </div>
         </MotionDiv>

          {/* Schedule */}
          <div className="bg-white dark:bg-gray-800 shadow-lg rounded-xl p-6">
            <MotionH2
              className="text-green-700 dark:text-green-400 mb-4"
              text="Workshop Duration & Reach"
            />

            <MotionP className="text-gray-700 dark:text-gray-300 leading-relaxed text-justify">
              Build for Safety workshops are typically held over two days, allowing sufficient time for both
              learning and practice. Each year, Nirapod Bangladesh Songstha aims to conduct <strong>35 to 40
              workshops</strong> across different communities, expanding access to safer building knowledge and skills.
            </MotionP>

            <MotionP className="mt-4 text-gray-700 dark:text-gray-300 leading-relaxed text-justify">
              By strengthening practical skills and awareness at the community level, Build for Safety
              workshops help reduce disaster risk, improve housing quality, and empower participants—
              especially women—to make informed decisions about their homes and livelihoods.
            </MotionP>
          </div>

        </div>
      </MotionDiv>

      {/* Image Gallery (UNCHANGED) */}
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
                ${index === 0 || index == 5 || index == 6 || index == 11 || index === gallery?.images?.length - 1 ? "md:col-span-2" : ""}
              `}
            >
              <img
                src={img}
                alt={`Workshop ${index + 1}`}
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
                  Workshop Activity {index + 1}
                </h3>
                <p className="text-gray-200 text-xs mt-1">
                  Community Engagement Program
                </p>
              </div>
            </MotionDiv>
          ))}
        </MotionDiv>
      </MotionDiv>
    </>
  );
};

export default Workshops;
