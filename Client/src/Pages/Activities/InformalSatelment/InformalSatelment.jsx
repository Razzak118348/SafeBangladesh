import { Link } from "react-router-dom";
import { MotionDiv, MotionH2, MotionP } from "../../../utils/MotionElements";
const InformalSatelment = () => {
    return (
        <>
<MotionDiv>
    <MotionH2
        className="text-xl font-bold underline text-center text-green-700 dark:text-white my-8"
        text="Improving Housing in Informal Settlements"
      />
      <img src="https://raw.githubusercontent.com/MD-Meheraf-Hossan-Nishat/Image_SafeBD/main/Activities/Informal_Setelment/DSC05571.JPG" className="w-full h-96 rounded-lg" alt="cover image" />
<MotionP className="text-gray-700 dark:text-gray-300 text-justify my-6">
    We have recently undertaken a pilot to demonstrate our approach to improved housing in a slum in Dinajpur called Jorgen Babur Mart. This project is part of the Urban Partnerships for Poverty Reduction Project from UKAID and UNDP.
Our approach was underpinned by community involvement and included workshops with local builders and the community, architecture student from BRAC and other building professionals. We shared ideas, learned about the issues facing this community and together are designing and building 10 demonstration houses.
</MotionP>
You can read more about this project here <Link to="https://safebangladesh.wordpress.com/wp-content/uploads/2011/07/improved-design-of-urban-low-cost-housing-in-dinajpur-rev-1.pdf" className="underline hover:text-green-600">Improved design of urban low cost housing in Dinajpur rev 1</Link>
</MotionDiv>

<MotionDiv className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-20 my-8 justify-items-center">
    <img src="https://raw.githubusercontent.com/MD-Meheraf-Hossan-Nishat/Image_SafeBD/main/Activities/Informal_Setelment/DSC05039.JPG" alt="img1" className="rounded-md hover:scale-105" /><img src="https://raw.githubusercontent.com/MD-Meheraf-Hossan-Nishat/Image_SafeBD/main/Activities/Informal_Setelment/DSC05036.JPG" alt="img2" className="rounded-md hover:scale-105" /><img src="https://raw.githubusercontent.com/MD-Meheraf-Hossan-Nishat/Image_SafeBD/main/Activities/Informal_Setelment/DSC05567.JPG" alt="img3" className="rounded-md hover:scale-105" />
</MotionDiv>

        </>
    );};

export default InformalSatelment;