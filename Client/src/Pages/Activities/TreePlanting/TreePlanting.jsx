import { Link } from 'react-router-dom';

import { MotionDiv, MotionH1, MotionH2, MotionP } from '../../../utils/MotionElements';
import PageBanner from '../../../Components/PageBanner/PageBanner';
import useGalleryData from '../../../hooks/useGalleryData';
import Loading from '../../../Components/Loading/Loading';

const TreePlanting = () => {
    const { gallery, loading } = useGalleryData("tree_planting");

    if (loading) {
        return <Loading></Loading>;
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
                        text="Tree Plantation"
                        className="text-green-700 dark:text-green-400 mb-4"
                    />

                    <MotionP className="text-gray-700 dark:text-gray-300 leading-relaxed text-justify space-y-4">

                        Nirapod Bangladesh Songstha’s environmental work focuses on raising awareness of the
                        importance of a diverse and healthy environment and its critical role in reducing disaster risk and
                        strengthening climate resilience.
                        <br /><br />

                        We undertake tree plantation initiatives and environmental awareness workshops with local
                        schools and communities. These activities help participants understand how trees contribute to
                        soil stability, flood protection, biodiversity, and improved living environments.
                        <br /><br />

                        Our tree plantation work focuses on planting local tree species along rural road banks and verges.
                        These plantations create shaded green corridors where wildlife can flourish, while also
                        stabilizing road embankments, reducing erosion, and providing fruit and other resources for local
                        people and passers-by.
                        <br /><br />

                        We work in close partnership with schools to engage students in hands-on environmental
                        learning. Through interactive sessions, students learn about local medicinal plants, fruits,
                        environmental protection, and the long-term benefits of tree planting.
                        <br /><br />

                        To encourage practical action, we provide the trees and support students to plant trees in their
                        own schools and communities, helping to build a sense of responsibility, ownership, and
                        environmental stewardship from a young age.
                        <br /><br />

                        <b>By combining awareness, education, and action, our tree plantation activities contribute to:</b>
                        <ul className="list-disc ml-6 mt-3 space-y-1">
                            <li>Reduced environmental and disaster risk</li>
                            <li>Improved biodiversity and ecosystem health</li>
                            <li>Stronger community awareness of climate resilience</li>
                            <li>Greener, safer, and more livable public spaces</li>
                        </ul>

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

                                {/* Text Overlay */}
                                <div className="
                                  absolute bottom-4 left-4 right-4
                                  translate-y-6 opacity-0
                                  group-hover:translate-y-0 group-hover:opacity-100
                                  transition-all duration-500
                                ">
                                    <h3 className="text-white text-sm md:text-base font-semibold">
                                        Tree plantation Image {index + 1}
                                    </h3>
                                    <p className="text-gray-200 text-xs mt-1">
                                        We save the earth
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
