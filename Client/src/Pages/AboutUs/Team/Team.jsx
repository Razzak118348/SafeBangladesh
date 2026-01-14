import { useEffect, useState } from "react";
import Loading from "../../../Components/Loading/Loading";
import PageBanner from "../../../Components/PageBanner/PageBanner";
import { MotionDiv, MotionH1, MotionH2, MotionP } from "../../../utils/MotionElements";
import axios, { all } from "axios";


const Team = () => {
  const [allMember, setAllMember] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchLatestWork = async () => {
      try {
        const response = await axios.get("https://safebangladesh-server.vercel.app/team",{withCredentials:true});
        setAllMember(response.data);
      } catch (error) {
        console.error("Error fetching latest work:", error);
        setAllMember([]);
      } finally {
        setLoading(false);
      }
    };

    fetchLatestWork();
  }, []);
// console.log(allMember)
  if(loading){
    return <Loading></Loading>
  }
  // const teamImages =
  // [
  //   {
  //     img: "https://raw.githubusercontent.com/MD-Meheraf-Hossan-Nishat/Image_SafeBD/main/About_Us/Team/AzuKo_036.jpg",
  //     alt: "AzuKo Team Member 1",
  //     designation: "Project Coordinator",
  //   },
  //   {
  //     img: "https://raw.githubusercontent.com/MD-Meheraf-Hossan-Nishat/Image_SafeBD/main/About_Us/Team/AzuKo_038.jpg",
  //     alt: "AzuKo Team Member 2",
  //     designation: "Community Architect",
  //   },
  //   {
  //     img: "https://raw.githubusercontent.com/MD-Meheraf-Hossan-Nishat/Image_SafeBD/main/About_Us/Team/AzuKo_039-1.jpg",
  //     alt: "AzuKo Team Member 3",
  //     designation: "Construction Supervisor",
  //   },
  //   {
  //     img: "https://raw.githubusercontent.com/MD-Meheraf-Hossan-Nishat/Image_SafeBD/main/About_Us/Team/AzuKo_039-3.jpg",
  //     alt: "AzuKo Team Member 4",
  //     designation: "Field Engineer",
  //   },
  //   {
  //     img: "https://raw.githubusercontent.com/MD-Meheraf-Hossan-Nishat/Image_SafeBD/main/About_Us/Team/AzuKo_041.jpg",
  //     alt: "AzuKo Team Member 5",
  //     designation: "Programme Officer",
  //   },
  //   {
  //     img: "https://raw.githubusercontent.com/MD-Meheraf-Hossan-Nishat/Image_SafeBD/main/About_Us/Team/AzuKo_042.jpg",
  //     alt: "AzuKo Team Member 6",
  //     designation: "Technical Advisor",
  //   },
  //   {
  //     img: "https://raw.githubusercontent.com/MD-Meheraf-Hossan-Nishat/Image_SafeBD/main/About_Us/Team/AzuKo_044-1.jpg",
  //     alt: "AzuKo Team Member 7",
  //     designation: "Research Assistant",
  //   },
  //   {
  //     img: "https://raw.githubusercontent.com/MD-Meheraf-Hossan-Nishat/Image_SafeBD/main/About_Us/Team/AzuKo_044.jpg",
  //     alt: "AzuKo Team Member 8",
  //     designation: "Community Mobilizer",
  //   },
  //   {
  //     img: "https://raw.githubusercontent.com/MD-Meheraf-Hossan-Nishat/Image_SafeBD/main/About_Us/Team/AzuKo_045.jpg",
  //     alt: "AzuKo Team Member 9",
  //     designation: "Site Manager",
  //   },
  //   {
  //     img: "https://raw.githubusercontent.com/MD-Meheraf-Hossan-Nishat/Image_SafeBD/main/About_Us/Team/AzuKo_046.jpg",
  //     alt: "AzuKo Team Member 10",
  //     designation: "Security Officer",
  //   },
  // ];

  return (
    <>
      {/* Banner */}
     <PageBanner></PageBanner>

      {/* Team Section */}
      <MotionDiv className="p-4">
        <MotionH2
          className="text-green-700 dark:text-green-400 my-10"
          text="We All Together"
        />

        <MotionDiv className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 lg:gap-14 my-12">
          {allMember.map((member, index) => (
            <MotionDiv
  key={index}
  className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden text-center"
>
  <img
    src={member.img}
    alt={member.alt}
    className="w-full h-72 object-cover hover:scale-105 transition-transform duration-500"
  />

  <MotionDiv className="p-2">
    <h2 className="text-lg font-semibold text-gray-800 dark:text-white">
      {member.designation}
    </h2>
    <p className="text-gray-600 dark:text-gray-300">NBS Member {index+1}</p>
  </MotionDiv>
</MotionDiv>
          ))}
        </MotionDiv>
      </MotionDiv>
    </>
  );
};

export default Team;
