import Banner from "../../../Components/Banner/Banner";
import { MotionDiv, MotionH2, MotionP } from "../../../utils/MotionElements";

const Workshops = () => {
    const galleryImages = [
        "https://raw.githubusercontent.com/MD-Meheraf-Hossan-Nishat/Image_SafeBD/main/Activities/Workshop/WorkshopDay-111.jpg",
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
                <MotionH2
                    className="text-xl font-bold underline text-center text-green-700 dark:text-white my-8"
                    text="‘Building-for-Safety’ Workshops"
                />
                <Banner
                    imageUrl="https://raw.githubusercontent.com/MD-Meheraf-Hossan-Nishat/Image_SafeBD/main/Activities/Workshop/WorkshopDay-118.jpg"
                    altText="Building-for-Safety Workshop"
                />
                <MotionP className="text-gray-700 dark:text-gray-300 text-justify my-6 leading-relaxed">
                    Workshop participants working in teams to complete house budget exercise.
                </MotionP>

                <MotionP className="text-gray-700 dark:text-gray-300 text-justify my-6 leading-relaxed">
                   <i> Using traditional song</i> to reinforce the messages taught in the workshops.
                </MotionP>

                <MotionP className="text-gray-700 dark:text-gray-300 text-justify my-6 leading-relaxed">
                    Workshop participants practice mixing <i>borax solution</i> - a low cost technique for treating bamboo.
                </MotionP>

                <MotionP className="text-gray-700 dark:text-gray-300 text-justify my-6 leading-relaxed">
                    Our workshops are designed to teach participants about the link between hazards and disasters.
                    We demonstrate clearly the long term financial benefit of investing a little extra money and thought from the outset.
                </MotionP>
                <MotionP className="text-gray-700 dark:text-gray-300 text-justify my-6 leading-relaxed">
                    The best way of learning: learning by doing. Our workshops involve a strong practical focus that give participants
                    the chance to practice the improved building techniques that we promote. All the workshops include the use of traditional song
                    to reinforce the messages we promote.
                </MotionP>

                <MotionP className="text-gray-700 dark:text-gray-300 text-justify my-6 leading-relaxed">
                    Workshops will often cover two days and involve up to 20 people: men and women from the local community, local builders and students.
                    During the building season we are running approximately 1-2 workshops per month.
                </MotionP>
            </MotionDiv>

            {/* Image Gallery */}
            <MotionDiv className="mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 lg:gap-16 my-12">
                {galleryImages.map((img, index) => (
                    <MotionDiv key={index} className="overflow-hidden rounded-md shadow-md">
                        <img
                            src={img}
                            alt={`Workshop ${index + 1}`}
                            className="w-full h-72 object-cover hover:scale-105 transition-transform duration-500"
                        />
                    </MotionDiv>
                ))}
            </MotionDiv>
        </>
    );
};

export default Workshops;
