import { Link } from "react-router-dom";
import { MotionDiv, MotionH2, MotionP } from "../../../utils/MotionElements";

const SafeMaterials = () => {
  const galleryImages = [
    {
      src: "https://raw.githubusercontent.com/MD-Meheraf-Hossan-Nishat/Image_SafeBD/main/Activities/SAFE_Materials/20190203_171813.jpg",
      alt: "SAFE materials work 1",
    },
    {
      src: "https://raw.githubusercontent.com/MD-Meheraf-Hossan-Nishat/Image_SafeBD/main/Activities/SAFE_Materials/Clinic%20Under%20Construction.jpg",
      alt: "Clinic under construction",
    },
    {
      src: "https://raw.githubusercontent.com/MD-Meheraf-Hossan-Nishat/Image_SafeBD/main/Activities/SAFE_Materials/Material%20Support.jpg",
      alt: "Material support",
    },
  ];

  return (
    <div className="">
      <MotionDiv>
        {/* Title */}
        <MotionH2
          className="text-lg md:text-xl font-bold underline text-center text-green-700 dark:text-white my-10"
          text="SAFE Materials – Sustainable Building Solutions"
        />

        {/* Banner */}
        <div className="overflow-hidden rounded-lg shadow-md">
          <img
            src="https://raw.githubusercontent.com/MD-Meheraf-Hossan-Nishat/Image_SafeBD/main/Activities/SAFE_Materials/CEB.jpg"
            className="w-full h-80 md:h-96 object-cover hover:scale-105 transition-transform duration-700"
            alt="SAFE Materials cover"
          />
        </div>

        {/* Content */}
        <MotionP className="text-gray-700 dark:text-gray-300 text-justify mt-8 leading-relaxed">
          In order to create a sustainable business enterprise that helps fund
          the work of SAFE NGO, while also providing affordable and eco-friendly
          building materials, we have established{" "}
          <strong>SAFE Materials</strong>. This initiative enables residents of
          the Sundarbon Union to access durable construction materials that
          strengthen homes and extend their lifespan.
        </MotionP>

        <MotionP className="text-gray-700 dark:text-gray-300 text-justify leading-relaxed">
          Currently, SAFE Materials offers:
        </MotionP>

        {/* List */}
        <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2 my-4">
          <li><strong>Treated Bamboo</strong></li>
          <li><strong>Bondachula</strong></li>
          <li><strong>Mud Blocks</strong></li>
          <li>Sand–Cement Tiles (coming soon)</li>
        </ul>

        <MotionP className="text-gray-700 dark:text-gray-300 text-justify mb-10 leading-relaxed">
          All materials are specifically designed for low-income households,
          helping families build safer, stronger, and longer-lasting homes using
          locally available and climate-resilient techniques.
        </MotionP>

        {/* Image Gallery */}
        <MotionDiv className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 my-14">
          {galleryImages.map((item, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-lg shadow-md"
            >
              <img
                src={item.src}
                alt={item.alt}
                className="w-full h-72 object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          ))}
        </MotionDiv>

        <MotionP className="text-gray-700 dark:text-gray-300 text-justify mb-10 leading-relaxed">
          International volunteers are welcome to collaborate with SAFE by
          participating in small research projects to develop new materials or
          by sharing ideas and suggestions remotely.
        </MotionP>

        {/* External Link */}
        <p className="text-center mb-16">
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
