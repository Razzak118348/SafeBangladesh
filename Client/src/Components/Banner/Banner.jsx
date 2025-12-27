import { MotionDiv } from "../../utils/MotionElements";


const Banner = ({ imageUrl, altText = "Banner", height = "h-[300px] md:h-[450px]" }) => {
  return (
    <MotionDiv className={`w-full ${height} overflow-hidden mt-0 md:mt-2`}>
      <img
        src={imageUrl}
        alt={altText}
        className="w-full h-full object-cover rounded-lg"
      />
    </MotionDiv>
  );
};

export default Banner;
