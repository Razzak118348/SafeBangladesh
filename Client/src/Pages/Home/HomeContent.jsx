
import { Home as HomeIcon, Users, Leaf } from "lucide-react";
import Tilt from "react-parallax-tilt";
import Slider from "../../Components/Slider/Slider";
import { MotionDiv, MotionH2, MotionP } from "../../utils/MotionElements";

const cards = [
  {
    icon: <Users className="h-6 w-6 text-[#55835b]" />,
    title: "Community Empowerment",
    desc: "We believe real change begins within communities through shared knowledge and local skills.",
  },
  {
    icon: <HomeIcon className="h-6 w-6 text-[#55835b]" />,
    title: "Resilient Housing",
    desc: "Our approach builds safer homes using proven techniques that people already trust.",
  },
  {
    icon: <Leaf className="h-6 w-6 text-[#55835b]" />,
    title: "Environmental Care",
    desc: "Through tree planting and awareness programs, we protect nature alongside people.",
  },
];
const HomeContent = () => {
    return (
        <div>

<section className="pt-10 lg:pt-24 px-4 text-black dark:text-white">
  <div className="">

    {/* Heading */}
    <MotionH2
      text="Building Safer Homes, Stronger Communities"
      className="mb-4 pt-8 md:pt-4 md:mb-8 text-green-600 hover:text-green-700 "
    />

    {/* Paragraph */}
    <MotionDiv className="space-y-6 max-w-4xl mx-auto text-justify">
      <MotionP className="text-gray-700 text-sm md:text-base dark:text-gray-300">
        SAFE Bangladesh is a non-government organization dedicated to helping vulnerable communities build safer homes and stronger futures.
        We promote <b><i> safe, affordable, and locally appropriate housing solutions</i></b> by strengthening traditional building practices.
        <br />
        We believe real change happens within communities. Through practical learning, local craftsmanship, and environmental initiatives such as tree planting, SAFE supports people in protecting their homes, livelihoods, and surroundings.
      </MotionP>
    </MotionDiv>

    {/* Cards */}
    <MotionDiv className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-5">
      {cards.map((card, i) => (
        <MotionDiv key={i} className="" delay={i * 0.2} y={50}>
          <Tilt
            glareEnable
            glareMaxOpacity={0.2}
            glareColor="#34d399"
            glarePosition="all"
            className="p-6 rounded-2xl border border-emerald-500/30 hover:border-[#55835b] hover:shadow-xl transition-all"
          >
            <MotionDiv className=" flex items-start gap-4">
              <div className="p-3 rounded-full bg-emerald-500/10">{card.icon}</div>
              <div>
                <h4 className="font-semibold md:text-lg mb-1">{card.title}</h4>
                <MotionP className="text-gray-700 dark:text-white text-sm">{card.desc}</MotionP>
              </div>
            </MotionDiv>
          </Tilt>
        </MotionDiv>
      ))}
    </MotionDiv>
  </div>
</section>

        </div>
    );
};

export default HomeContent;