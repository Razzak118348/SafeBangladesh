import { MotionDiv, MotionH2 } from "../../utils/MotionElements";

const Gallery = () => {
  const images = [
    {
      src: "https://raw.githubusercontent.com/MD-Meheraf-Hossan-Nishat/Image_SafeBD/main/Activities/Demonstration_House/DSC_0498.JPG",
      alt: "Demonstration House",
      large: true,
    },
    {
      src: "https://raw.githubusercontent.com/MD-Meheraf-Hossan-Nishat/Image_SafeBD/main/Activities/Demonstration_House/ForidpurClinic3.jpg",
      alt: "Faridpur Clinic",
    },
    {
      src: "https://raw.githubusercontent.com/MD-Meheraf-Hossan-Nishat/Image_SafeBD/main/Activities/Demonstration_House/JAAGOSchoolSide.JPG",
      alt: "JAAGO School",
    },
    {
      src: "https://raw.githubusercontent.com/MD-Meheraf-Hossan-Nishat/Image_SafeBD/main/Activities/Demonstration_House/P1030657.JPG",
      alt: "Demonstration Activity",
    },
    {
      src: "https://raw.githubusercontent.com/MD-Meheraf-Hossan-Nishat/Image_SafeBD/main/Activities/Informal_Setelment/DSC05036.JPG",
      alt: "Informal Settlement",
    },
  ];

  return (
    <MotionDiv>
      {/* Title */}
      <MotionH2
        className="text-xl font-bold underline text-center text-green-900 dark:text-white my-8"
        text="Gallery"
      />

      <MotionDiv className="py-8">
        <MotionDiv className="container mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10 p-4">
          {images.map((img, index) => (
            <div
              key={index}
              className={`overflow-hidden rounded-xl shadow-md transition-transform duration-500 hover:scale-105
                ${img.large ? "col-span-2 row-span-2 md:col-start-3 md:row-start-1 h-96 md:h-full" : "min-h-32"}
              `}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </MotionDiv>
      </MotionDiv>
    </MotionDiv>
  );
};

export default Gallery;
