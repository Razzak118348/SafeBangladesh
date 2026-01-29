
import { Home as HomeIcon, Users, Leaf } from "lucide-react";
import Tilt from "react-parallax-tilt";
import Slider from "../../Components/Slider/Slider";
import { MotionDiv, MotionH2, MotionP } from "../../utils/MotionElements";

const cards = [
  {
    icon: <Users className="h-6 w-6 text-[#55835b]" />,
    title: "Community Empowerment",
    desc: "We believe real change begins within communities by strengthening local knowledge, skills, and leadership, especially among women and youth.",
  },
  {
    icon: <HomeIcon className="h-6 w-6 text-[#55835b]" />,
    title: "Resilient Housing",
    desc: "Our approach builds safer and more resilient homes using locally trusted techniques and materials, adapted to climate risks and community needs.",
  },
  {
    icon: <Leaf className="h-6 w-6 text-[#55835b]" />,
    title: "Environmental Care",
    desc: "Through tree planting and environmental awareness, we support communities to protect nature while improving everyday living conditions.",
  },
];
const HomeContent = () => {
    return (
        <div>

<section className="pt-10 lg:pt-20 px-4 text-black dark:text-white">
  <div className="">

    {/* Heading */}
<h1 className="text-lg md:text-2xl lg:text-3xl text-green-600 dark:text-white text-center mb-5 text-wrap">Building Safer Homes with Nirapod Bangladesh Songstha</h1>

    {/* Paragraph */}
    <MotionDiv className="space-y-6 max-w-4xl mx-auto text-justify">
      <MotionP className="text-gray-700 text-sm md:text-base dark:text-gray-300">
      Nirapod Bangladesh Songstha is a community-led non-government organization working in
Bangladesh to support vulnerable communities in building safe, affordable, and climate-resilient
homes. We strengthen traditional building practices by combining local knowledge, practical
training, and locally available materials.
<br /><br />
We believe real change begins within communities. Through hands-on learning, local
craftsmanship, and environmental initiatives such as tree planting, we support people to protect
their homes, livelihoods, and surrounding environment with dignity and confidence.
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