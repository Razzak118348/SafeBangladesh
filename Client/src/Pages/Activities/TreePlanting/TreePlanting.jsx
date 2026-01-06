
import { Link } from 'react-router-dom';

import { MotionDiv, MotionH1, MotionH2, MotionP } from '../../../utils/MotionElements';
import PageBanner from '../../../Components/PageBanner/PageBanner';
import useGalleryData from '../../../hooks/useGalleryData';
import Loading from '../../../Components/Loading/Loading';

const TreePlanting = () => {
    const{gallery,loading}=useGalleryData("tree_planting")
    // const treePlantingImage = [
    //     "https://raw.githubusercontent.com/MD-Meheraf-Hossan-Nishat/Image_SafeBD/main/Activities/Tree_Planting/IMG-20231002-WA0102.jpg",

    //     "https://raw.githubusercontent.com/MD-Meheraf-Hossan-Nishat/Image_SafeBD/main/Activities/Tree_Planting/IMG-20231002-WA0255.jpg",

    //     "https://raw.githubusercontent.com/MD-Meheraf-Hossan-Nishat/Image_SafeBD/main/Activities/Tree_Planting/T15.JPG",

    //     "https://raw.githubusercontent.com/MD-Meheraf-Hossan-Nishat/Image_SafeBD/main/Activities/Tree_Planting/T225.JPG",

    //     "https://raw.githubusercontent.com/MD-Meheraf-Hossan-Nishat/Image_SafeBD/main/Activities/Tree_Planting/T86.JPG",

    //     "https://raw.githubusercontent.com/MD-Meheraf-Hossan-Nishat/Image_SafeBD/main/Activities/Tree_Planting/T88.JPG",

    // ]

    if(loading){
        return <Loading></Loading>
    }
    return (
        <MotionDiv className="w-full mt-3">
            {/* Reusable Banner */}
            <PageBanner>
            </PageBanner>

            <MotionDiv className="mx-auto mt-10">

                {/* content 1 */}
                <MotionDiv className="max-w-5xl mx-auto mt-8 md:mt-16 p-6 md:p-8 bg-white dark:bg-gray-800 shadow-xl rounded-xl">
                    <MotionH2
                        text="Environmental Awareness & Community Action"
                        className="text-green-700 dark:text-green-400 mb-4"
                    />

                    <MotionP className="text-gray-700 dark:text-gray-300 leading-relaxed text-justify space-y-4">
                        Our environmental work focuses on raising awareness about the importance of a
                        diverse and healthy environment, and the vital role it plays in reducing the
                        impact of natural disasters.
                        <br /><br />
                        We conduct workshops and tree-planting initiatives in collaboration with
                        local schools and communities. These initiatives include planting indigenous
                        tree species along rural road banks and verges, creating beautiful and shady
                        green corridors where wildlife can thrive.
                        <br /><br />
                        These plantations also help stabilize soil, reduce erosion, and provide
                        fruits and other natural resources for the enjoyment of local residents and
                        passersby.
                        <br /><br />
                        In partnership with schools, we educate students about local flora and fauna
                        while subsidizing the cost of saplings, empowering young people to plant and
                        care for trees within their own communities and contribute to a greener,
                        more resilient future.
                    </MotionP>
                </MotionDiv>

                {/* IMAGE GALLERY */}
                <MotionDiv className="py-14">
                    <MotionDiv className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-5 md:gap-8 px-4">
                        {gallery?.images?.map((img, index) => (
                            <MotionDiv
                                key={index}
                                whileHover={{ scale: 1.04 }}
                                transition={{ duration: 0.4, ease: "easeOut" }}
                                className={`
          group relative overflow-hidden rounded-2xl
          shadow-lg hover:shadow-2xl
          ${index === 0 || index == 5 || index == 6 || index == 11 || index === gallery?.images?.length - 1 ? "md:col-span-2" : ""}
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
                                        Demonstration house {index + 1}
                                    </h3>
                                    <p className="text-gray-200 text-xs mt-1">
                                        Make a reliable and comfort house
                                    </p>
                                </div>
                            </MotionDiv>
                        ))}
                    </MotionDiv>
                </MotionDiv>
            </MotionDiv>

        </MotionDiv>
    );
};

export default TreePlanting;