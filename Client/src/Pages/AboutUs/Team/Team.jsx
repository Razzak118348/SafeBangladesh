import { MotionDiv, MotionH2, MotionP } from "../../../utils/MotionElements";


const Team = () => {
  const teamImages = [
    {
      img: "https://raw.githubusercontent.com/MD-Meheraf-Hossan-Nishat/Image_SafeBD/main/About_Us/Team/AzuKo_036.jpg",
      alt: "AzuKo Team Member 1",
      designation: "Project Coordinator",
    },
    {
      img: "https://raw.githubusercontent.com/MD-Meheraf-Hossan-Nishat/Image_SafeBD/main/About_Us/Team/AzuKo_038.jpg",
      alt: "AzuKo Team Member 2",
      designation: "Community Architect",
    },
    {
      img: "https://raw.githubusercontent.com/MD-Meheraf-Hossan-Nishat/Image_SafeBD/main/About_Us/Team/AzuKo_039-1.jpg",
      alt: "AzuKo Team Member 3",
      designation: "Construction Supervisor",
    },
    {
      img: "https://raw.githubusercontent.com/MD-Meheraf-Hossan-Nishat/Image_SafeBD/main/About_Us/Team/AzuKo_039-3.jpg",
      alt: "AzuKo Team Member 4",
      designation: "Field Engineer",
    },
    {
      img: "https://raw.githubusercontent.com/MD-Meheraf-Hossan-Nishat/Image_SafeBD/main/About_Us/Team/AzuKo_041.jpg",
      alt: "AzuKo Team Member 5",
      designation: "Programme Officer",
    },
    {
      img: "https://raw.githubusercontent.com/MD-Meheraf-Hossan-Nishat/Image_SafeBD/main/About_Us/Team/AzuKo_042.jpg",
      alt: "AzuKo Team Member 6",
      designation: "Technical Advisor",
    },
    {
      img: "https://raw.githubusercontent.com/MD-Meheraf-Hossan-Nishat/Image_SafeBD/main/About_Us/Team/AzuKo_044-1.jpg",
      alt: "AzuKo Team Member 7",
      designation: "Research Assistant",
    },
    {
      img: "https://raw.githubusercontent.com/MD-Meheraf-Hossan-Nishat/Image_SafeBD/main/About_Us/Team/AzuKo_044.jpg",
      alt: "AzuKo Team Member 8",
      designation: "Community Mobilizer",
    },
    {
      img: "https://raw.githubusercontent.com/MD-Meheraf-Hossan-Nishat/Image_SafeBD/main/About_Us/Team/AzuKo_045.jpg",
      alt: "AzuKo Team Member 9",
      designation: "Site Manager",
    },
    {
      img: "https://raw.githubusercontent.com/MD-Meheraf-Hossan-Nishat/Image_SafeBD/main/About_Us/Team/AzuKo_046.jpg",
      alt: "AzuKo Team Member 10",
      designation: "Security Officer",
    },
  ];

  return (
    <>
      {/* Banner */}
      <MotionDiv className="w-full h-80 md:h-[450px] overflow-hidden md:mt-2 rounded-lg">
        <img
          src="https://raw.githubusercontent.com/MD-Meheraf-Hossan-Nishat/Image_SafeBD/main/About_Us/Team/AzuKo_034.jpg"
          alt="Our Team Banner"
          className="w-full h-full object-cover"
        />
      </MotionDiv>

      {/* Team Section */}
      <MotionDiv className="max-w-7xl mx-auto px-4">
        <MotionH2
          className="underline text-green-700 dark:text-green-400 my-10"
          text="Our Team"
        />

        <MotionDiv className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 lg:gap-14 my-12">
          {teamImages.map((member, index) => (
            <MotionDiv
              key={index}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden text-center"
            >
              <img
                src={member.img}
                alt={member.alt}
                className="w-full h-72 object-cover hover:scale-105 transition-transform duration-500"
              />

              <MotionDiv className="pb-2">
                <MotionH2 className="font-semibold pt-2" text={member.alt} />
                <MotionP className="text-sm text-green-700 dark:text-green-400">
                  {member.designation}
                </MotionP>
              </MotionDiv>
            </MotionDiv>
          ))}
        </MotionDiv>
      </MotionDiv>
    </>
  );
};

export default Team;
