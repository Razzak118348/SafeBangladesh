import { Link } from "react-router-dom";
import { MotionDiv, MotionH2, MotionP } from "../../../utils/MotionElements";
import Banner from "../../../Components/Banner/Banner";

const InformalSettlement = () => {
  const galleryImages = [
    "https://raw.githubusercontent.com/MD-Meheraf-Hossan-Nishat/Image_SafeBD/main/Activities/Informal_Setelment/DSC05039.JPG",
    "https://raw.githubusercontent.com/MD-Meheraf-Hossan-Nishat/Image_SafeBD/main/Activities/Informal_Setelment/DSC05036.JPG",
    "https://raw.githubusercontent.com/MD-Meheraf-Hossan-Nishat/Image_SafeBD/main/Activities/Informal_Setelment/DSC05567.JPG",
  ];

  return (
    <>
      {/* Content Section */}
      <MotionDiv className="">
            <MotionH2
          className="text-lg md:text-xl font-bold underline text-center text-green-700 dark:text-white my-8"
          text="Improving Housing in Informal Settlements"
        />
        <Banner imageUrl="https://raw.githubusercontent.com/MD-Meheraf-Hossan-Nishat/Image_SafeBD/main/Activities/Informal_Setelment/DSC05571.JPG"
            altText="Informal settlement housing project">
</Banner>
        {/* Description */}
        <MotionP className="text-gray-700 dark:text-gray-300 text-justify my-6 leading-relaxed">
          We have recently undertaken a pilot to demonstrate our approach to
          improved housing in a slum in Dinajpur called Jorgen Babur Mart. This
          project is part of the Urban Partnerships for Poverty Reduction Project
          from UKAID and UNDP.
        </MotionP>

        <MotionP className="text-gray-700 dark:text-gray-300 text-justify leading-relaxed">
          Our approach was underpinned by community involvement and included
          workshops with local builders and the community, architecture students
          from BRAC, and other building professionals. Together, we shared ideas,
          learned about the issues facing this community, and designed and built
          10 demonstration houses.
        </MotionP>

        {/* Read More */}
        <p className="mt-6 mb-10 text-gray-700 dark:text-gray-300">
          You can read more about this project here:{" "}
          <Link
            to="https://safebangladesh.wordpress.com/wp-content/uploads/2011/07/improved-design-of-urban-low-cost-housing-in-dinajpur-rev-1.pdf"
            className="underline text-green-700 hover:text-green-900 dark:text-green-400"
            target="_blank"
          >
            Improved design of urban low cost housing in Dinajpur
          </Link>
        </p>
      </MotionDiv>

      {/* Image Gallery */}
      <MotionDiv className="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 lg:gap-16 my-12">
        {galleryImages.map((img, index) => (
          <div
            key={index}
            className="overflow-hidden rounded-md shadow-md"
          >
            <img
              src={img}
              alt={`Informal settlement ${index + 1}`}
              className="w-full h-72 object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
        ))}
      </MotionDiv>
    </>
  );
};

export default InformalSettlement;
