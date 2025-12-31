import { Link } from "react-router-dom";
import { MotionDiv, MotionH2, MotionP } from "../../../utils/MotionElements";

const SafeMaterials = () => {
  const galleryImages = [
    'https://raw.githubusercontent.com/MD-Meheraf-Hossan-Nishat/Image_SafeBD/main/Activities/SAFE_Materials/20190203_171813.jpg',
    "https://raw.githubusercontent.com/MD-Meheraf-Hossan-Nishat/Image_SafeBD/main/Activities/SAFE_Materials/Clinic%20Under%20Construction.jpg",
    "https://raw.githubusercontent.com/MD-Meheraf-Hossan-Nishat/Image_SafeBD/main/Activities/SAFE_Materials/Material%20Support.jpg",
  ];

  return (
    <div className="">
      <MotionDiv>
        {/* Title */}
        <MotionH2
          className="underline text-green-700 dark:text-white my-10"
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



        <MotionDiv className="max-w-7xl mx-auto mt-10 px-4 grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* IMAGE GALLERY */}
<div className="lg:col-span-5">
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-6">
    {galleryImages.map((img, index) => (
      <MotionDiv
        key={index}
        whileHover={{ scale: 1.04 }}
        className="overflow-hidden rounded-xl shadow-lg"
      >
        <img
          src={img}
          alt={`Informal settlement ${index + 1}`}
          className="
            w-full
            h-48 md:h-52 lg:h-56
            object-cover object-center
          "
        />
      </MotionDiv>
    ))}
  </div>
</div>



          {/* TEXT CONTENT */}
          <div className="lg:col-span-7 space-y-8">
            <MotionDiv className="p-6 md:p-8 bg-white dark:bg-gray-800 shadow-lg rounded-xl">
              <MotionH2
                text="The SAFE Materials Initiative"
                className="text-green-700 dark:text-green-400 mb-4"
              />
              <MotionP className="text-gray-700 dark:text-gray-300 leading-relaxed text-justify">
                In order to create a sustainable business enterprise that helps fund
          the work of SAFE NGO, while also providing affordable and eco-friendly
          building materials, we have established{" "}
          <strong>SAFE Materials</strong>. This initiative enables residents of
          the Sundarbon Union to access durable construction materials that
          strengthen homes and extend their lifespan.
              </MotionP>
            </MotionDiv>

            <MotionDiv className="p-6 md:p-8 bg-white dark:bg-gray-800 shadow-lg rounded-xl">
              <MotionH2
                text="Rammed earth wall under construction"
                className="text-green-700 dark:text-green-400 mb-4"
              />
              <MotionP className="text-gray-700 dark:text-gray-300 leading-relaxed text-justify">
               Currently, SAFE Materials offers:
               <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2 my-4">
          <li><strong>Treated Bamboo</strong></li>
          <li><strong>Bondachula</strong></li>
          <li><strong>Mud Blocks</strong></li>
          <li>Sand–Cement Tiles (coming soon)</li>
        </ul>
         <MotionP>
           All materials are specifically designed for low-income households,
          helping families build safer, stronger, and longer-lasting homes using
          locally available and climate-resilient techniques.
         </MotionP>

          <MotionP className="text-gray-700 dark:text-gray-300 text-justify mb-10 leading-relaxed">
          International volunteers are welcome to collaborate with SAFE by
          participating in small research projects to develop new materials or
          by sharing ideas and suggestions remotely.
        </MotionP>
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
