import { Link } from "react-router-dom";
import { MotionDiv, MotionH2, MotionP } from "../../../utils/MotionElements";
import PageBanner from "../../../Components/PageBanner/PageBanner";
import useGalleryData from "../../../hooks/useGalleryData";
import Loading from "../../../Components/Loading/Loading";

const SafeMaterials = () => {
  const { gallery, loading } = useGalleryData("safe_materials");

  if (loading) {
    return <Loading />;
  }

  return (
    <div>
      <MotionDiv>
        {/* Title */}
        <MotionH2
          className="underline text-green-700 dark:text-white my-10"
          text="Materials – Sustainable Building Solutions"
        />

        {/* Banner */}
        <PageBanner />

        <MotionDiv className="max-w-7xl mx-auto mt-10 px-4 grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">

          {/* IMAGE GALLERY */}
          <div className="lg:col-span-5">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-6">
              {gallery?.images?.map((img, index) => (
                <MotionDiv
                  key={index}
                  whileHover={{ scale: 1.04 }}
                  className="overflow-hidden rounded-xl shadow-lg"
                >
                  <img
                    src={img}
                    alt={`Materials ${index + 1}`}
                    className="w-full h-48 md:h-52 lg:h-96 object-cover object-center"
                  />
                </MotionDiv>
              ))}
            </div>
          </div>

          {/* TEXT CONTENT */}
          <div className="lg:col-span-7 space-y-8">

            {/* Intro */}
            <MotionDiv className="p-6 md:p-8 bg-white dark:bg-gray-800 shadow-lg rounded-xl">
              <MotionH2
                text="The Materials Initiative"
                className="text-green-700 dark:text-green-400 mb-4"
              />

              <MotionP className="text-gray-700 dark:text-gray-300 leading-relaxed text-justify">
                Nirapod Bangladesh Songstha has established Nirapod Bangladesh Songstha Materials as a
                community-based materials initiative to support affordable, durable, and environmentally
                responsible housing solutions. This initiative contributes to the sustainability of our work while
                increasing access to locally appropriate building materials for low-income households.
              </MotionP>

              <MotionP className="mt-4 text-gray-700 dark:text-gray-300 leading-relaxed text-justify">
                By developing and promoting safe, climate-resilient construction materials, we aim to strengthen
                homes, extend building lifespan, and reduce long-term costs for vulnerable communities in Bangladesh.
              </MotionP>

              <MotionP className="mt-4 text-gray-700 dark:text-gray-300 leading-relaxed text-justify">
                The Materials Initiative was developed to complement Nirapod Bangladesh Songstha’s housing and
                sanitation work while also supporting local livelihoods by working with community-based producers
                and craftspeople.
              </MotionP>

              <MotionP className="mt-4 text-gray-700 dark:text-gray-300 leading-relaxed text-justify">
                Through this initiative, residents in areas such as Sundarban Union, Dinajpur, can access materials
                that are designed to perform well in local environmental conditions while remaining affordable and easy to use.
              </MotionP>
            </MotionDiv>

            {/* Sustainable Materials */}
            <MotionDiv className="p-6 md:p-8 bg-white dark:bg-gray-800 shadow-lg rounded-xl">
              <MotionH2
                text="Sustainable Materials Under Development and Use"
                className="text-green-700 dark:text-green-400 mb-4"
              />

              <MotionP className="text-gray-700 dark:text-gray-300 leading-relaxed text-justify">
                We are exploring and demonstrating rammed earth wall construction and stabilized mud techniques
                as low-cost, climate-resilient alternatives to conventional materials. These methods reduce reliance
                on cement, lower carbon impact, and improve indoor comfort.
              </MotionP>

              <MotionP className="mt-4 font-semibold text-gray-700 dark:text-gray-300">
                Nirapod Bangladesh Songstha Materials currently produces and supplies:
              </MotionP>

              <ul className="list-disc ml-5 mt-3 space-y-2 text-gray-700 dark:text-gray-300">
                <li><strong>Treated Bamboo</strong> – durable, insect-resistant bamboo suitable for structural framing</li>
                <li><strong>Concrete Katla</strong> – precast concrete foundation blocks to protect and anchor bamboo posts</li>
                <li><strong>Bondachula</strong> – improved cooking solutions supporting household safety and efficiency</li>
                <li><strong>Mud Blocks</strong> – low-cost, locally produced blocks for walls and partitions</li>
                <li><strong>Sand–Cement Tiles</strong> (coming soon) – affordable flooring and roofing solutions</li>
              </ul>

              <MotionP className="mt-4 text-gray-700 dark:text-gray-300 leading-relaxed text-justify">
                All materials are designed specifically for low-income households, supporting safer, stronger, and
                longer-lasting homes using locally available resources and climate-resilient techniques.
              </MotionP>
            </MotionDiv>

            {/* Research & Collaboration */}
            <MotionDiv className="p-6 md:p-8 bg-white dark:bg-gray-800 shadow-lg rounded-xl">
              <MotionH2
                text="Research, Learning, and Collaboration"
                className="text-green-700 dark:text-green-400 mb-4"
              />

              <MotionP className="text-gray-700 dark:text-gray-300 leading-relaxed text-justify">
                The Materials Initiative also serves as a learning and research platform. We collaborate with local
                builders, students, and technical partners to test, refine, and improve material performance.
              </MotionP>

              <MotionP className="mt-4 text-gray-700 dark:text-gray-300 leading-relaxed text-justify">
                Researchers, practitioners, and partners are welcome to collaborate through small-scale research
                projects, technical exchanges, or remote knowledge-sharing, contributing to the development of new
                and improved sustainable materials.
              </MotionP>

              <MotionP className="mt-4 text-gray-700 dark:text-gray-300 leading-relaxed text-justify">
                Affordable and appropriate building materials are critical to improving housing quality in low-income
                communities. By combining material innovation, local production, and community knowledge, Nirapod
                Bangladesh Songstha Materials supports safer housing while strengthening local capacity and reducing
                environmental impact.
              </MotionP>
            </MotionDiv>

          </div>
        </MotionDiv>

        {/* External Link */}
        <p className="text-center my-6">
          <Link
            to="https://safebangladesh.wordpress.com/wp-content/uploads/2011/07/improved-design-of-urban-low-cost-housing-in-dinajpur-rev-1.pdf"
            className="underline text-green-700 hover:text-green-900 dark:text-green-400"
            target="_blank"
          >
            Read more: Improved design of urban low-cost housing in Dinajpur
          </Link>
        </p>
      </MotionDiv>
    </div>
  );
};

export default SafeMaterials;
