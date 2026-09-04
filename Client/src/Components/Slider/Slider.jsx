// import { useEffect, useState, useRef } from "react";
// import { Link } from "react-router-dom";
// import "../../utils/color.css"
// import Loading from "../Loading/Loading";

// const Slider = () => {

//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [animate, setAnimate] = useState(true);
//   const intervalRef = useRef(null);

//   const slides=[
//   {
//     title: "Your House will be the best quality Providing quality house for you little Family and worth",
//     desc: "Providing quality house for your little Family and worth ",
//     img: "https://raw.githubusercontent.com/MD-Meheraf-Hossan-Nishat/Image_SafeBD/main/News_%26_Blogs/News/AMH_1802.JPG",
//     path:"/aboutus/background"
//   },
//   {
//     title: "Building Safe, Affordable Homes with Communities in Bangladesh",
//     desc: "Building sustainable homes for a greener tomorrow.",
//     img: "https://raw.githubusercontent.com/MD-Meheraf-Hossan-Nishat/Image_SafeBD/main/Activities/SAFE_Materials/20190203_171813.jpg",
//     path:"/activities/safe-materials"
//   },
//   {
//     title: "Safe Homes. Stronger Communities. Climate-Resilient Futures.",
//     desc: "Ensuring safety and security for your loved ones.",
//     img: "https://raw.githubusercontent.com/MD-Meheraf-Hossan-Nishat/Image_SafeBD/main/Activities/Workshop/WorkshopDay-124.jpg",
//     path:"/activities/workshops"
//   }
// ]

//   useEffect(() => {
//     if (!slides.length) return;

//     intervalRef.current = setInterval(() => {
//       setAnimate(false);
//       setTimeout(() => {
//         setCurrentIndex((prev) => (prev + 1) % slides.length);
//         setAnimate(true);
//       }, 400);
//     }, 3000);

//     return () => clearInterval(intervalRef.current);
//   }, [slides]);

//   if (!slides.length) return null;

//   const { title, desc, img,path } = slides[currentIndex];

//   if (!slides.length) return <Loading></Loading>;

//   return (
//     <section className="relative w-full h-[360px] md:h-[520px] overflow-hidden mt-0 md:mt-3 rounded-lg">
//       {/* Image */}
//       <img
//         src={img}
//         alt={title}
//         className={`absolute inset-0 w-full h-full object-cover transition-all duration-[1200ms] ease-out
//           ${animate ? "scale-100" : "scale-110"}
//         `}
//       />

//       {/* Dark Gradient Overlay */}
//       <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />

//       {/* Content */}
//       <div
//         className={`relativ mt-16 lg:mt-32 z-10 h-full flex items-center
//         transition-all duration-700 ease-out
//         ${animate ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"}
//         `}
//       >
//         <div className="px-6 md:px-16 max-w-7xl mx-auto text-white">
//           <h2 className="text-lg md:text-xl lg:text-2xl font-extrabold leading-tight max-w-3xl">
//             {title}
//           </h2>

//           <p className="mt-5 max-w-xl text-gray-200 text-base md:text-lg">
//             {desc}
//           </p>

//           <Link to={path} className="inline-block mt-8">
//             <button className="px-3 md:px-7 py-1 md:py-3 rounded-md bg-[#3d6542] hover:bg-[#3f7d48] active:scale-95 transition-all shadow-lg">
//             Learn About Our Work
//             </button>
//           </Link>
//         </div>
//       </div>

//       {/* Dots Indicator */}
//       <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-2 z-20">
//         {slides.map((_, i) => (
//           <span
//             key={i}
//             className={`h-2.5 w-2.5 rounded-full transition-all duration-300
//               ${i === currentIndex ? "bg-[#3d6542] w-6" : "bg-white/50"}
//             `}
//           />
//         ))}
//       </div>
//     </section>
//   );
// };

// export default Slider;


import { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import "../../utils/color.css";

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [animate, setAnimate] = useState(true);
  const intervalRef = useRef(null);

  const slides = [
    {
      title: "Building Better Homes for Safer and Stronger Families",
      desc: "Providing quality, affordable, and safe housing solutions for families and communities across Bangladesh.",
      img: "https://raw.githubusercontent.com/MD-Meheraf-Hossan-Nishat/Image_SafeBD/main/News_%26_Blogs/News/AMH_1802.JPG",
      path: "/aboutus/background",
    },
    {
      title: "Building Safe and Affordable Homes with Communities",
      desc: "Creating sustainable and affordable housing solutions while building stronger and more resilient communities.",
      img: "https://raw.githubusercontent.com/MD-Meheraf-Hossan-Nishat/Image_SafeBD/main/Activities/SAFE_Materials/20190203_171813.jpg",
      path: "/activities/safe-materials",
    },
    {
      title: "Safe Homes. Stronger Communities. Resilient Futures.",
      desc: "Working together to create safer communities and prepare families for a changing climate.",
      img: "https://raw.githubusercontent.com/MD-Meheraf-Hossan-Nishat/Image_SafeBD/main/Activities/Workshop/WorkshopDay-124.jpg",
      path: "/activities/workshops",
    },
  ];

  useEffect(() => {
    if (!slides.length) return;

    intervalRef.current = setInterval(() => {
      setAnimate(false);

      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % slides.length);
        setAnimate(true);
      }, 400);
    }, 4000);

    return () => {
      clearInterval(intervalRef.current);
    };
  }, []);

  if (!slides.length) return null;

  const { title, desc, img, path } = slides[currentIndex];

  return (
    <section className="relative w-full overflow-hidden rounded-lg mt-0 lg:mt-8
      h-[400px]
      sm:h-[440px]
      md:h-[500px]
      lg:h-[560px]"
    >
      {/* Background Image */}
      <img
        src={img}
        alt={title}
        className={`absolute inset-0 w-full h-full object-cover
          transition-all duration-[1200ms] ease-out
          ${animate ? "scale-100" : "scale-110"}
        `}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/30" />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/45 to-transparent" />

      {/* Content */}
      <div className="relative z-10 mt-10 lg:mt-24 w-full h-full flex items-center">
        <div
          className={`
            w-full
            px-5
            sm:px-8
            md:px-12
            lg:px-20
            xl:px-28
            transition-all duration-700 ease-out
            ${
              animate
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-10"
            }
          `}
        >
          <div className="max-w-[350px] sm:max-w-[500px] md:max-w-[650px] lg:max-w-[750px]">

            {/* Main Title */}
            <h2
              className="
                text-xl
                sm:text-2xl
                md:text-3xl
                lg:text-4xl
                xl:text-5xl
                font-extrabold
                leading-tight
                text-white
              "
            >
              {title}
            </h2>

            {/* Description */}
            <p
              className="
                mt-4
                sm:mt-5
                md:mt-6
                max-w-[320px]
                sm:max-w-[450px]
                md:max-w-[600px]
                text-sm
                sm:text-base
                md:text-lg
                leading-relaxed
                text-gray-200
              "
            >
              {desc}
            </p>

            {/* Button */}
            <Link to={path} className="inline-block mt-6 sm:mt-7 md:mt-8">
              <button
                className="
                  px-4
                  sm:px-5
                  md:px-7
                  py-2
                  sm:py-2.5
                  md:py-3
                  rounded-md
                  bg-[#3d6542]
                  hover:bg-[#3f7d48]
                  active:scale-95
                  transition-all
                  duration-300
                  shadow-lg
                  text-sm
                  text-white
                "
              >
                Learn About Our Work
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Dots Indicator */}
      <div
        className="
          absolute
          bottom-5
          sm:bottom-6
          left-1/2
          -translate-x-1/2
          flex
          items-center
          gap-2
          z-20
        "
      >
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => {
              setAnimate(false);

              setTimeout(() => {
                setCurrentIndex(i);
                setAnimate(true);
              }, 200);
            }}
            aria-label={`Go to slide ${i + 1}`}
            className={`
              h-2
              sm:h-2.5
              rounded-full
              transition-all
              duration-300
              ${
                i === currentIndex
                  ? "w-7 sm:w-8 bg-[#3d6542]"
                  : "w-2 sm:w-2.5 bg-white/60 hover:bg-white"
              }
            `}
          />
        ))}
      </div>
    </section>
  );
};

export default Slider;