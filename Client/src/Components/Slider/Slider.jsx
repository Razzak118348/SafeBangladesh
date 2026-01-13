import { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "../../utils/color.css"
import Loading from "../Loading/Loading";

const Slider = () => {
  // const [slides, setSlides] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [animate, setAnimate] = useState(true);
  const intervalRef = useRef(null);

  // useEffect(() => {
  //   axios
  //     .get("/sliderData.json")
  //     .then((res) => setSlides(res.data))
  //     .catch((err) => console.error(err));
  // }, []);

  const slides=[
  {
    title: "Your House will be the best quality",
    desc: "Providing quality house for your little Family and worth ",
    img: "https://raw.githubusercontent.com/MD-Meheraf-Hossan-Nishat/Image_SafeBD/main/News_%26_Blogs/News/AMH_1802.JPG",
    path:"/aboutus/background"
  },
  {
    title: "Initiative house with bamboo",
    desc: "Building sustainable homes for a greener tomorrow.",
    img: "https://raw.githubusercontent.com/MD-Meheraf-Hossan-Nishat/Image_SafeBD/main/Activities/SAFE_Materials/20190203_171813.jpg",
    path:"/activities/safe-materials"
  },
  {
    title: "Keep your house safe with Nirapod Bangladesh",
    desc: "Ensuring safety and security for your loved ones.",
    img: "https://raw.githubusercontent.com/MD-Meheraf-Hossan-Nishat/Image_SafeBD/main/Activities/Workshop/WorkshopDay-124.jpg",
    path:"/activities/workshops"
  }
]

  useEffect(() => {
    if (!slides.length) return;

    intervalRef.current = setInterval(() => {
      setAnimate(false);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % slides.length);
        setAnimate(true);
      }, 400);
    }, 3000);

    return () => clearInterval(intervalRef.current);
  }, [slides]);

  if (!slides.length) return null;

  const { title, desc, img,path } = slides[currentIndex];

  if (!slides.length) return <Loading></Loading>;

  return (
    <section className="relative w-full h-[360px] md:h-[520px] overflow-hidden mt-0 md:mt-3 rounded-lg">
      {/* Image */}
      <img
        src={img}
        alt={title}
        className={`absolute inset-0 w-full h-full object-cover transition-all duration-[1200ms] ease-out
          ${animate ? "scale-100" : "scale-110"}
        `}
      />

      {/* Dark Gradient Overlay */}
      <div className="absolute" />

      {/* Content */}
      <div
        className={`relative z-10 h-full flex items-center
        transition-all duration-700 ease-out
        ${animate ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"}
        `}
      >
        <div className="px-6 md:px-16 max-w-7xl mx-auto text-white">
          <h2 className="text-lg md:text-xl lg:text-2xl font-extrabold leading-tight max-w-3xl">
            {title}
          </h2>

          <p className="mt-5 max-w-xl text-gray-200 text-base md:text-lg">
            {desc}
          </p>

          <Link to={path} className="inline-block mt-8">
            <button className="px-7 py-3 rounded-md bg-[#3d6542] hover:bg-[#3f7d48] active:scale-95 transition-all shadow-lg">
              Read More →
            </button>
          </Link>
        </div>
      </div>

      {/* Dots Indicator */}
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-2 z-20">
        {slides.map((_, i) => (
          <span
            key={i}
            className={`h-2.5 w-2.5 rounded-full transition-all duration-300
              ${i === currentIndex ? "bg-[#3d6542] w-6" : "bg-white/50"}
            `}
          />
        ))}
      </div>
    </section>
  );
};

export default Slider;
