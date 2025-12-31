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
    {
      src: "https://raw.githubusercontent.com/MD-Meheraf-Hossan-Nishat/Image_SafeBD/main/Activities/Workshop/WorkshopDay-110.jpg",
      alt: "Workshop Activity",
    }

  ];

  return (
    <MotionDiv>
      {/* Title */}
      <MotionH2
        className="underline text-green-900 dark:text-white mt-6"
        text="Gallery"
      />

      <MotionDiv className="py-8">
        <MotionDiv className="container mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10 p-4">
          {images.map((img, index) => (
            <MotionDiv
              key={index}
              className={`overflow-hidden rounded-xl shadow-md transition-transform duration-500 hover:scale-105
                ${index == 0 || index ==5 ? "lg:col-span-2 " : ""}
              `}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="h-56 md:h-72 w-full object-cover object-center"
              />
            </MotionDiv>
          ))}
        </MotionDiv>
      </MotionDiv>
    </MotionDiv>
  );
};

export default Gallery;
