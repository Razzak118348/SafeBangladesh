import Banner from "../../../Components/Banner/Banner";
import PageBanner from "../../../Components/PageBanner/PageBanner";
import { MotionDiv, MotionH2, MotionP } from "../../../utils/MotionElements";

const Workshops = () => {
    const galleryImages = [
        "https://raw.githubusercontent.com/MD-Meheraf-Hossan-Nishat/Image_SafeBD/main/Activities/Workshop/WorkshopDay-116.jpg",
        "https://raw.githubusercontent.com/MD-Meheraf-Hossan-Nishat/Image_SafeBD/main/Activities/Workshop/WorkshopDay-110.jpg",
        "https://raw.githubusercontent.com/MD-Meheraf-Hossan-Nishat/Image_SafeBD/main/Activities/Workshop/WorkshopDay-111.jpg",
        "https://raw.githubusercontent.com/MD-Meheraf-Hossan-Nishat/Image_SafeBD/main/Activities/Workshop/WorkshopDay-122.jpg",
        "https://raw.githubusercontent.com/MD-Meheraf-Hossan-Nishat/Image_SafeBD/main/Activities/Workshop/WorkshopDay-124.jpg",
        "https://raw.githubusercontent.com/MD-Meheraf-Hossan-Nishat/Image_SafeBD/main/Activities/Workshop/WorkshopDay-126.jpg",
        "https://raw.githubusercontent.com/MD-Meheraf-Hossan-Nishat/Image_SafeBD/main/Activities/Workshop/WorkshopDay-133.jpg",
        "https://raw.githubusercontent.com/MD-Meheraf-Hossan-Nishat/Image_SafeBD/main/Activities/Workshop/WorkshopDay-138.jpg",
        "https://raw.githubusercontent.com/MD-Meheraf-Hossan-Nishat/Image_SafeBD/main/Activities/Workshop/WorkshopDay-146.jpg",
        "https://raw.githubusercontent.com/MD-Meheraf-Hossan-Nishat/Image_SafeBD/main/Activities/Workshop/WorkshopDay-160.jpg",
        "https://raw.githubusercontent.com/MD-Meheraf-Hossan-Nishat/Image_SafeBD/main/Activities/Workshop/WorkshopDay-15.jpg",
        "https://raw.githubusercontent.com/MD-Meheraf-Hossan-Nishat/Image_SafeBD/main/Activities/Workshop/WorkshopDay-16.jpg",
        "https://raw.githubusercontent.com/MD-Meheraf-Hossan-Nishat/Image_SafeBD/main/Activities/Workshop/WorkshopDay-171.jpg",
        " https://raw.githubusercontent.com/MD-Meheraf-Hossan-Nishat/Image_SafeBD/main/Activities/Workshop/WorkshopDay-228.jpg",
    ];

    return (
        <>
            {/* Content Section */}
            <MotionDiv className="">
<PageBanner></PageBanner>

                <MotionH2
                    className="underline text-green-700 dark:text-white my-6"
                    text="‘Building-for-Safety’ Workshops"
                />

                <MotionP className="max-w-5xl mt-10 mx-auto px-4 text-justify text-gray-700 dark:text-gray-300 leading-relaxed">
                    Workshop participants working in teams to complete house budget exercise.
                    <i> Using traditional song</i> to reinforce the messages taught in the workshops.
                    Workshop participants practice mixing <i>borax solution</i> - a low cost technique for treating bamboo.
                    Our workshops are designed to teach participants about the link between hazards and disasters.
                    We demonstrate clearly the long term financial benefit of investing a little extra money and thought from the outset.
                    The best way of learning: learning by doing. Our workshops involve a strong practical focus that give participants
                    the chance to practice the improved building techniques that we promote. All the workshops include the use of traditional song
                    to reinforce the messages we promote.
                    Workshops will often cover two days and involve up to 20 people: men and women from the local community, local builders and students.
                    During the building season we are running approximately 1-2 workshops per month.
                </MotionP>
            </MotionDiv>

{/* Image Gallery */}
<MotionDiv className="py-14">
  <MotionDiv className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-5 md:gap-8 px-4">
    {galleryImages.map((img, index) => (
      <MotionDiv
        key={index}
        whileHover={{ scale: 1.04 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className={`
          group relative overflow-hidden rounded-2xl
          shadow-lg hover:shadow-2xl
          ${index === 0 ||index ==5 || index==6 || index==11 || index === galleryImages.length - 1 ? "md:col-span-2" : ""}
        `}
      >
        {/* Image */}
        <img
          src={img}
          alt={`Workshop ${index + 1}`}
          className="
            h-52 sm:h-60 md:h-72 lg:h-80
            w-full object-cover object-center
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
            Workshop Activity {index + 1}
          </h3>
          <p className="text-gray-200 text-xs mt-1">
            Community Engagement Program
          </p>
        </div>
      </MotionDiv>
    ))}
  </MotionDiv>
</MotionDiv>

        </>
    );
};

export default Workshops;
