import { MotionDiv, MotionH2 } from '../../utils/MotionElements';

const Gallery = () => {
  return (
    <MotionDiv>
      <MotionH2
        className="text-xl font-bold underline text-center text-green-900 dark:text-white my-8"
        text="Gallery section"
      />

      <MotionDiv className="py-8">
        <MotionDiv className="container mx-auto grid grid-cols-2 gap-4 p-4 md:grid-cols-4">

          {/* Large Image */}
          <img
            src="https://raw.githubusercontent.com/MD-Meheraf-Hossan-Nishat/Image_SafeBD/main/Activities/Demonstration_House/DSC_0498.JPG"
            alt="Demonstration House"
            className="w-full h-96 md:h-full col-span-2 row-span-2 rounded-xl shadow-md hover:scale-105 object-cover min-h-64 md:col-start-3 md:row-start-1"
          />

          {/* Small Images */}
          <img
            src="https://raw.githubusercontent.com/MD-Meheraf-Hossan-Nishat/Image_SafeBD/main/Activities/Demonstration_House/ForidpurClinic3.jpg"
            alt="Faridpur Clinic"
            className="w-full h-full rounded-xl shadow-sm hover:scale-105 object-cover min-h-32"
          />

          <img
            src="https://raw.githubusercontent.com/MD-Meheraf-Hossan-Nishat/Image_SafeBD/main/Activities/Demonstration_House/JAAGOSchoolSide.JPG"
            alt="JAAGO School"
            className="w-full h-full rounded-xl shadow-sm hover:scale-105 object-cover min-h-32"
          />

          <img
            src="https://raw.githubusercontent.com/MD-Meheraf-Hossan-Nishat/Image_SafeBD/main/Activities/Demonstration_House/P1030657.JPG"
            alt="Demonstration Activity"
            className="w-full h-full rounded-xl shadow-sm hover:scale-105 object-cover min-h-32"
          />

          <img
            src="https://raw.githubusercontent.com/MD-Meheraf-Hossan-Nishat/Image_SafeBD/main/Activities/Informal_Setelment/DSC05036.JPG"
            alt="Informal Settlement"
            className="w-full h-full rounded-xl shadow-sm hover:scale-105 object-cover min-h-32"
          />

        </MotionDiv>
      </MotionDiv>
    </MotionDiv>
  );
};

export default Gallery;
