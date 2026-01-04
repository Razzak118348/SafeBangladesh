import { Leaf, Users, Home, Target, CheckCircle } from "lucide-react";
import { MotionDiv, MotionH2, MotionP } from "../../../utils/MotionElements";

const GoalsVision = () => {
  return (
    <section className="px-6 md:px-16 py-16 dark:text-white">
      {/* Heading */}
      <MotionDiv className="text-center mb-14">
        <MotionH2 text="Goal, Mission & Vision" className="underline font-bold text-green-900 dark:text-white">

        </MotionH2>
        <MotionP className="mt-4 text-gray-600 dark:text-white max-w-3xl mx-auto">
          Building climate-resilient homes while strengthening women’s leadership,
          cultural knowledge, and environmental responsibility in rural Bangladesh.
        </MotionP>
      </MotionDiv>

      {/* Goal / Mission / Vision Cards */}
      <MotionDiv className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        {/* Goal */}
        <MotionDiv className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 hover:shadow-lg transition">
          <Target className="text-green-700 w-10 h-10 mb-4" />
          <h3 className="text-lg font-semibold text-green-600 mb-3">
            Project Goal
          </h3>
          <MotionP className="text-sm leading-relaxed">
            To improve women’s leadership and promote climate-resilient rural housing
            by reviving traditional sustainable homebuilding practices and advancing
            public health through training, education, and low-carbon homemaking
            techniques.
          </MotionP>
        </MotionDiv>

        {/* Mission */}
        <MotionDiv className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 hover:shadow-lg transition">
          <Target className="text-green-700 w-10 h-10 mb-4" />
          <h3 className="text-lg font-semibold text-green-600 mb-3">
            Mission
          </h3>
          <MotionP className="text-sm leading-relaxed">
            To empower rural communities—especially women—by strengthening local
            knowledge, skills, and confidence to build, maintain, and improve healthy,
            affordable, and environmentally responsible homes.
          </MotionP>
        </MotionDiv>

        {/* Vision */}
        <MotionDiv className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 hover:shadow-lg transition">
          <Leaf className="text-green-700 w-10 h-10 mb-4" />
          <h3 className="text-lg font-semibold text-green-600 mb-3">
            Vision
          </h3>
          <MotionP className=" text-sm leading-relaxed">
            A future where rural communities in Bangladesh live in climate-adaptive,
            culturally rooted homes, guided by women leaders and sustained through
            local knowledge rather than carbon-intensive construction.
          </MotionP>
        </MotionDiv>
      </MotionDiv>

      {/* Outcomes & Impact */}
      <MotionDiv className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Outcomes */}
        <MotionDiv>
          <h3 className="text-xl font-semibold text-green-600 mb-4 flex items-center gap-2">
            <Home className="w-6 h-6" />
            Major Outcomes & Outputs
          </h3>
          <ul className="space-y-3  text-sm">
            <li>• Educational manuals, visual guides, and documentation on vernacular construction</li>
            <li>• Demonstration homes, kitchens, and eco-toilets as practical models</li>
            <li>• Increased community awareness of housing, health, and environmental links</li>
            <li>• Skilled local builders and women capable of sharing sustainable practices</li>
            <li>• Public storytelling through photos and narratives connecting local to global</li>
          </ul>
        </MotionDiv>

        {/* Success Indicators */}
        <MotionDiv>
          <h3 className="text-xl font-semibold text-green-600 mb-4 flex items-center gap-2">
            <CheckCircle className="w-6 h-6" />
            How We Measure Success
          </h3>
          <ul className="space-y-3  text-sm">
            <li>• Adoption of bamboo and earth-based building methods</li>
            <li>• Improved hygiene and maintenance of kitchens and toilets</li>
            <li>• Active participation of women in training and home decisions</li>
            <li>• Replication of techniques beyond project sites</li>
          </ul>
        </MotionDiv>
      </MotionDiv>

      {/* Bigger Picture */}
      <MotionDiv className="mt-16 bg-green-100 rounded-xl p-8">
        <h3 className="text-xl font-semibold text-green-900 mb-3">
          Linking to the Bigger Picture
        </h3>
        <MotionP className="text-gray-800 text-sm leading-relaxed">
          This project is part of Nirapod Bangladesh Songstha’s broader commitment to
          integrating cultural heritage, education, and environmental responsibility
          into development practice. It demonstrates that sustainable progress in rural
          Bangladesh can be achieved by strengthening community traditions and
          re-learning how to live in balance with nature.
        </MotionP>
      </MotionDiv>
    </section>
  );
};

export default GoalsVision;
