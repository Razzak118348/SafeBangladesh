import React from "react";
import { MotionDiv, MotionH2, MotionP } from "../../../utils/MotionElements";

const Background = () => {
  const images = [
    {
      src: "https://raw.githubusercontent.com/MD-Meheraf-Hossan-Nishat/Image_SafeBD/main/About_Us/Background/AzuKo_028.jpg",
      alt: "Traditional housing practice",
    },
    {
      src: "https://raw.githubusercontent.com/MD-Meheraf-Hossan-Nishat/Image_SafeBD/main/About_Us/Background/AzuKo_016.jpg",
      alt: "Earthen wall construction",
    },
    {
      src: "https://raw.githubusercontent.com/MD-Meheraf-Hossan-Nishat/Image_SafeBD/main/About_Us/Background/AzuKo_015.jpg",
      alt: "Community building activity",
    },
    {
      src: "https://raw.githubusercontent.com/MD-Meheraf-Hossan-Nishat/Image_SafeBD/main/About_Us/Background/AzuKo_003.jpg",
      alt: "Women participating in construction",
    },
  ];

  return (
    <MotionDiv
      className="
        mx-auto
        max-w-7xl
        3xl:max-w-[1650px]
        pt-8
      "
    >
      {/* Title */}
      <MotionH2
        className="text-xl font-bold underline text-green-900 dark:text-white"
        text="Background of Nirapod Bangladesh Songstha"
      />

      {/* First Paragraph */}
      <MotionP className="py-6 text-justify leading-relaxed text-gray-700 dark:text-gray-300">
        In Sundarban Village of Dinajpur District, northern Bangladesh, daily life
        is closely shaped by rivers, seasonal heat, and agriculture. For
        generations, families built their homes using earth and bamboo—materials
        that were locally available, climate-responsive, and deeply connected to
        cultural traditions. Earthen walls kept homes cool during hot seasons,
        bamboo structures provided flexibility, and regular repairs were managed
        by family members, especially women. These homes were not only shelters;
        they reflected knowledge developed through long interaction with the
        environment.
        <br />
        <br />
        Over the last two decades, this tradition has changed rapidly. Brick and
        concrete houses, once limited to cities, are now widely seen as symbols of
        progress and economic success in rural areas. Many families invested
        their limited savings to replace earthen homes with brick structures,
        expecting durability and reduced maintenance. However, this shift has
        created new challenges. Brick production removes fertile topsoil and
        releases high levels of carbon from nearby kilns. Brick houses often trap
        heat, making indoor spaces uncomfortable during dry seasons, and repairs
        require skilled labor that increases household costs. As a result, women
        have lost traditional roles in maintaining and caring for their homes.
        <br />
        <br />
        At the same time, northern Bangladesh is facing increasing climate
        stress. Although Sundarban Village is not regularly flooded, rising
        temperatures, irregular rainfall, droughts, and sudden monsoon surges
        from the Atrai River affect daily life. In this changing climate,
        low-carbon, thermally comfortable, and locally repairable housing
        materials are essential for long-term resilience. The loss of vernacular
        building knowledge therefore represents both an environmental risk and a
        cultural loss.
      </MotionP>

      {/* Image Gallery */}
      <MotionDiv className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 my-10 justify-items-center">
        {images.map((img, index) => (
          <div
            key={index}
            className="overflow-hidden rounded-md shadow-md"
          >
            <img
              src={img.src}
              alt={img.alt}
              className="h-72 w-80 object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
        ))}
      </MotionDiv>

      {/* Second Paragraph */}
      <MotionP className="py-6 text-justify leading-relaxed text-gray-700 dark:text-gray-300">
        Nirapod Bangladesh Songstha (NBS) has been working in Dinajpur since 2010
        to respond to these challenges. Rather than returning blindly to the
        past, NBS documents traditional building practices and improves them
        through simple scientific methods. Earth and bamboo techniques are
        strengthened using stabilized mud blocks, treated bamboo joints, and
        basic concrete foundations where needed. These methods are shared
        through participatory workshops that combine learning with hands-on
        construction.
        <br />
        <br />
        So far, the project has developed two housing prototypes, installed over
        600 eco-sanitation toilets, and built around 80 improved kitchens across
        local communities. Each structure serves as a learning space where women
        gain skills to maintain healthy homes. The project demonstrates that
        climate-resilient housing can be affordable, culturally meaningful, and
        built using local knowledge.
      </MotionP>
    </MotionDiv>
  );
};

export default Background;
