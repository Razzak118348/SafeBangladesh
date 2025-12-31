import { MotionDiv,MotionH2,MotionP } from "../../../utils/MotionElements";

const TechnicalSupport = () => {
  return (
    <div className="bg-gray-50 dark:bg-gray-900 py-10 md:py-16 px-4">

      {/* PAGE HEADER */}
      <MotionDiv className="max-w-4xl mx-auto text-center mb-12">
        <MotionH2
          text="Technical Support & Housing Subsidy"
          className="text-green-700 dark:text-green-400 mb-4"
        />
        <MotionP className="text-gray-600 dark:text-gray-300">
          Supporting safe, affordable, and climate-resilient housing solutions
          for low-income communities.
        </MotionP>
      </MotionDiv>

      {/* MAIN CONTENT */}
      <MotionDiv className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">

        {/* TECHNICAL SUPPORT */}
        <MotionDiv className="bg-white dark:bg-gray-800 p-6 md:p-8 rounded-xl shadow-lg">
          <h3 className="text-xl font-semibold text-green-700 dark:text-green-400 mb-4">
            Free Technical Consultation
          </h3>
          <MotionP className="text-gray-700 dark:text-gray-300 leading-relaxed text-justify">
            SAFE provides a free technical consultation service for individuals
            and families interested in using our improved and sustainable
            building techniques. Our team offers guidance on material selection,
            construction methods, and climate-resilient design to ensure safer
            and longer-lasting homes.
          </MotionP>
        </MotionDiv>

        {/* SUBSIDY SUPPORT */}
        <MotionDiv className="bg-white dark:bg-gray-800 p-6 md:p-8 rounded-xl shadow-lg">
          <h3 className="text-xl font-semibold text-green-700 dark:text-green-400 mb-4">
            Housing Subsidy Support
          </h3>
          <MotionP className="text-gray-700 dark:text-gray-300 leading-relaxed text-justify">
            For low-income households who have participated in SAFE workshops and
            wish to apply our construction techniques, we offer limited financial
            support through a small subsidy fund. This assistance helps cover
            additional material costs, such as cement used in mud stabilization,
            making safer housing more accessible.
          </MotionP>
        </MotionDiv>

      </MotionDiv>

      {/* NEW ADDITIONAL SECTION */}
      <MotionDiv className="max-w-5xl mx-auto mt-10 bg-white dark:bg-gray-800 p-6 md:p-8 rounded-xl shadow-lg">
        <h3 className="text-xl font-semibold text-green-700 dark:text-green-400 mb-4">
          Ongoing Support & Community Capacity Building
        </h3>
        <MotionP className="text-gray-700 dark:text-gray-300 leading-relaxed text-justify">
          Beyond initial consultation and material support, SAFE remains engaged
          with communities throughout the construction process. Our team
          provides follow-up visits, practical advice, and problem-solving
          support to ensure that building techniques are correctly applied.
          <br /><br />
          By strengthening local knowledge and skills, we help households and
          community members gain confidence in maintaining and replicating safe
          construction practices, fostering long-term resilience and
          self-reliance.
        </MotionP>
      </MotionDiv>

      {/* FOOTER NOTE */}
      <MotionDiv className="max-w-4xl mx-auto mt-12 bg-green-50 dark:bg-gray-800 p-6 rounded-xl border border-green-200 dark:border-gray-700">
        <MotionP className="text-gray-700 dark:text-gray-300 text-center">
          Participation in SAFE workshops is required to access technical
          support and housing subsidy programs. Our services are designed to
          ensure transparency, sustainability, and community empowerment.
        </MotionP>
      </MotionDiv>

    </div>
  );
};

export default TechnicalSupport;
