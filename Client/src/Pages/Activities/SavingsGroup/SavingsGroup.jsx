import { Link } from 'react-router-dom';
import Banner from '../../../Components/Banner/Banner';
import { MotionDiv,MotionH1,MotionH2,MotionP } from '../../../utils/MotionElements';
import PageBanner from '../../../Components/PageBanner/PageBanner';

const SavingsGroup = () => {
       const savingGroupImage = [
       "https://raw.githubusercontent.com/MD-Meheraf-Hossan-Nishat/Image_SafeBD/main/Activities/Saving%20Groups/AzuKo_304.jpg",

"https://raw.githubusercontent.com/MD-Meheraf-Hossan-Nishat/Image_SafeBD/main/Activities/Saving%20Groups/P1040712.JPG",

"https://raw.githubusercontent.com/MD-Meheraf-Hossan-Nishat/Image_SafeBD/main/Activities/Saving%20Groups/P1040722.JPG",

    ]
    return (
         <MotionDiv className="w-full mt-3">
            {/* Reusable Banner */}
           <PageBanner></PageBanner>

            <MotionDiv className="max-w-7xl mx-auto mt-10">
            {/* content 1 */}
<MotionDiv className="max-w-5xl mx-auto mt-8 md:mt-16 p-6 md:p-8 bg-white dark:bg-gray-800 shadow-lg rounded-xl">
  <MotionH2
    text="We are Commited to Best output and best Savings"
    className="text-green-700 dark:text-green-400 mb-4"
  />

  <MotionP className="text-gray-700 dark:text-gray-300 leading-relaxed text-justify space-y-4">
    The creation of women’s savings groups are a key element to encouraging households to build stronger houses. They empower households to plan for the future.

We facilitate the creation of saving groups by providing willing communities with the appropriate structure and accountancy training.
  </MotionP>
</MotionDiv>

                {/* IMAGE GALLERY */}
                <MotionDiv className="py-14">
                    <MotionDiv className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-5 md:gap-8 px-4">
                        {savingGroupImage.map((img, index) => (
                            <MotionDiv
                                key={index}
                                whileHover={{ scale: 1.04 }}
                                transition={{ duration: 0.4, ease: "easeOut" }}
                                className={`
          group relative overflow-hidden rounded-2xl
          shadow-lg hover:shadow-2xl
          ${index === 0 || index == 5 || index == 6 || index == 11 ? "md:col-span-2" : ""}
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

export default SavingsGroup;