import { MotionDiv, MotionH1, MotionH2, MotionP } from "../../../utils/MotionElements";
import Banner from "../../../Components/Banner/Banner";
import { Link } from "react-router-dom";

const Background = () => {

  const backgroundImages = [
    "https://raw.githubusercontent.com/MD-Meheraf-Hossan-Nishat/Image_SafeBD/main/About_Us/Background/AzuKo_028.jpg",
    "https://raw.githubusercontent.com/MD-Meheraf-Hossan-Nishat/Image_SafeBD/main/About_Us/Background/AzuKo_016.jpg",
   "https://raw.githubusercontent.com/MD-Meheraf-Hossan-Nishat/Image_SafeBD/main/About_Us/Background/AzuKo_015.jpg",
    "https://raw.githubusercontent.com/MD-Meheraf-Hossan-Nishat/Image_SafeBD/main/Activities/Demonstration_House/DSC_0127.JPG",
   "https://raw.githubusercontent.com/MD-Meheraf-Hossan-Nishat/Image_SafeBD/main/About_Us/Background/AzuKo_003.jpg",
  ]

  return (

     <MotionDiv className="w-full mt-3">
      {/* Reusable Banner */}
      <div className="relative w-full overflow-hidden">
        <Banner
          imageUrl="https://raw.githubusercontent.com/MD-Meheraf-Hossan-Nishat/Image_SafeBD/main/About_Us/Background/AzuKo_003.jpg"
          altText="Informal settlement housing project"
        />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4">
          <MotionH1
            className="bg-gradient-to-r from-lime-200 to-green-600 bg-clip-text text-transparent drop-shadow-lg"
            text="Safe Bangladesh Organization Background"
          />
        </div>
      </div>

      <MotionDiv className="max-w-7xl mx-auto mt-10">

{/* content 1 */}
   <MotionDiv className="max-w-5xl mx-auto mt-8 md:mt-16 p-6 md:p-8 bg-white dark:bg-gray-800 shadow-lg rounded-xl">
            <MotionH2
              text="Background of Nirapod Bangladesh Songstha"
              className="text-green-700 dark:text-green-400 mb-4"
            />
            <MotionP className="text-gray-700 dark:text-gray-300 leading-relaxed text-justify">
              We partner with households to construct new houses which will demonstrate our improved techniques.
              Together with the household and local builders we design and plan the construction and select appropriate
              Building-for-Safety options. These are options that suit the house-owner’s wants and needs, and are in line
              with what the owner would have originally paid, costing between 10-20% extra. We aim to split the costs of
              these demonstration houses with household approximately 50/50.
            </MotionP>
          </MotionDiv>

  {/* IMAGE GALLERY */}

<MotionDiv className="max-w-7xl mx-auto px-4 py-16">
  <div className="grid grid-cols-1 md:grid-cols-12 gap-6">

    {/* LEFT – FEATURE IMAGE */}
    <MotionDiv
      whileHover={{ scale: 1.02 }}
      className="md:col-span-7 relative overflow-hidden rounded-2xl shadow-xl group"
    >
      <img
        src={backgroundImages[0]}
        alt="Demonstration housing project"
        className="w-full h-[320px] md:h-[420px] object-cover transition-transform duration-700 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
      <div className="absolute bottom-6 left-6">
        <h3 className="text-white text-lg font-semibold">
          Demonstration Housing Prototype
        </h3>
        <p className="text-gray-200 text-sm">
          Climate-responsive, community-built homes
        </p>
      </div>
    </MotionDiv>

    {/* RIGHT – SUPPORTING IMAGES */}
    <div className="md:col-span-5 grid grid-cols-2 gap-6">
      {backgroundImages.slice(1, 5).map((img, index) => (
        <MotionDiv
          key={index}
          whileHover={{ scale: 1.04 }}
          className="relative overflow-hidden rounded-xl shadow-lg group"
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


        {/* TEXT CONTENT 2*/}
          <MotionDiv className="max-w-5xl mx-auto p-6 md:p-8 bg-white dark:bg-gray-800 shadow-lg rounded-xl">
             <MotionH2
              text="Rammed earth wall under construction"
              className="text-green-700 dark:text-green-400 mb-4"
            />
            <MotionP className="text-gray-700 dark:text-gray-300 leading-relaxed text-justify">
              The construction of these houses has been funded by the Australian High Commission and the British Women Association.  Between Aug 2010 and May 2011 we have built 4 demonstration houses using a variety of materials: bamboo frame,
            stabilised rammed earth and Compressed Earth Brick. Reports which detail the construction and the design and
            Building-for-Safety improvements used are given in Reports.
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

export default Background;
