import Banner from "../../../Components/Banner/Banner";
import Loading from "../../../Components/Loading/Loading";
import PageBanner from "../../../Components/PageBanner/PageBanner";
import useGalleryData from "../../../hooks/useGalleryData";
import { MotionDiv, MotionH1 } from "../../../utils/MotionElements";

const PrototypeDesign = () => {
  const {gallery,loading}=useGalleryData("prototype_design")
//     const prototypeDesignImages=[
// "https://raw.githubusercontent.com/MD-Meheraf-Hossan-Nishat/Image_SafeBD/main/prototype_and_design/AzuKo_210.jpg",
// "https://raw.githubusercontent.com/MD-Meheraf-Hossan-Nishat/Image_SafeBD/main/prototype_and_design/AzuKo_218.jpg",
// "https://raw.githubusercontent.com/MD-Meheraf-Hossan-Nishat/Image_SafeBD/main/prototype_and_design/AzuKo_237.jpg",
// "https://raw.githubusercontent.com/MD-Meheraf-Hossan-Nishat/Image_SafeBD/main/prototype_and_design/AzuKo_286.jpg",
// "https://raw.githubusercontent.com/MD-Meheraf-Hossan-Nishat/Image_SafeBD/main/prototype_and_design/AzuKo_289.jpg",
// "https://raw.githubusercontent.com/MD-Meheraf-Hossan-Nishat/Image_SafeBD/main/prototype_and_design/Design/Kitchen%20Plan-1.JPG",
// "https://raw.githubusercontent.com/MD-Meheraf-Hossan-Nishat/Image_SafeBD/main/prototype_and_design/Design/Kitchen%20Plan.JPG",
// "https://raw.githubusercontent.com/MD-Meheraf-Hossan-Nishat/Image_SafeBD/main/prototype_and_design/Design/Kitchen%20plan-11.jpg",
// ]

if(loading){
  <Loading></Loading>
}
    return (
        <div>

 <PageBanner></PageBanner>

  <MotionDiv className="pt-14">
    <MotionH1 text="Our Prototype and All design here" className="text-green-600 mb-6" ></MotionH1>


  <MotionDiv className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-5 md:gap-8 px-4">
    {gallery?.images?.map((img, index) => (
      <MotionDiv
        key={index}
        whileHover={{ scale: 1.04 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className={`
          group relative overflow-hidden rounded-2xl
          shadow-lg hover:shadow-2xl
          ${index === 0 ||index ==5 || index==6 || index==11 || index === gallery?.images?.length - 1 ? "md:col-span-2" : ""}
        `}
      >
        {/* Image */}
        <img
          src={img}
          alt={`Workshop ${index + 1}`}
          className="
            h-52 sm:h-60 md:h-72 lg:h-80
            w-full  object-center object-contain
            transition-transform duration-700 group-hover:scale-110
          "
        />

        {/* Gradient Overlay */}
        <div className="
          absolute inset-0 bg-gradient-to-t
          from-black/60 via-black/20 to-transparent
          opacity-0 group-hover:opacity-100
          transition-opacity duration-500
        " />

        {/* Caption */}
        <div className="
          absolute bottom-4 left-4 right-4
          translate-y-6 opacity-0
          group-hover:translate-y-0 group-hover:opacity-100
          transition-all duration-500
        ">
          <h3 className="text-white text-sm md:text-base font-semibold">
            Prototype and Design House {index + 1}
          </h3>
          <p className="text-gray-200 text-xs mt-1">
            Make a reliable and comfort house
          </p>
        </div>
      </MotionDiv>
    ))}
  </MotionDiv>
</MotionDiv>

        </div>
    );
};

export default PrototypeDesign;