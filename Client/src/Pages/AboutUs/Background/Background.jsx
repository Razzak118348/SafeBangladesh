
import { MotionDiv, MotionH1, MotionH2, MotionP } from "../../../utils/MotionElements";
import Banner from "../../../Components/Banner/Banner";
import { Link, useLocation } from "react-router-dom";
import PageBanner from "../../../Components/PageBanner/PageBanner";
import useGalleryData from "../../../hooks/useGalleryData";
import Loading from "../../../Components/Loading/Loading";

const Background = () => {
const { gallery, loading} =useGalleryData("background")
console.log(gallery)
  // const backgroundImages = [
  //   "https://raw.githubusercontent.com/MD-Meheraf-Hossan-Nishat/Image_SafeBD/main/About_Us/Background/AzuKo_028.jpg",
  //   "https://raw.githubusercontent.com/MD-Meheraf-Hossan-Nishat/Image_SafeBD/main/About_Us/Background/AzuKo_016.jpg",
  //   "https://raw.githubusercontent.com/MD-Meheraf-Hossan-Nishat/Image_SafeBD/main/About_Us/Background/AzuKo_015.jpg",
  //   "https://raw.githubusercontent.com/MD-Meheraf-Hossan-Nishat/Image_SafeBD/main/Activities/Demonstration_House/DSC_0127.JPG",
  //   "https://raw.githubusercontent.com/MD-Meheraf-Hossan-Nishat/Image_SafeBD/main/About_Us/Background/AzuKo_003.jpg",
  // ];

  if(loading){
    return <Loading></Loading>
  }
// if (!gallery || !gallery.images || gallery.images.length === 0) {
//   return <p className="text-center mt-20">No gallery images found</p>;
// }
  return (
    <MotionDiv className="w-ful">
      {/* banner  */}
      <PageBanner></PageBanner>

      <MotionDiv className="max-w-5xl mx-auto mt-16 p-8 md:p-10 bg-white/90 dark:bg-gray-800/90 backdrop-blur shadow-xl rounded-2xl border border-green-100 dark:border-gray-700">
        <MotionH2
          text="Our Background"
          className="text-green-800 dark:text-green-400 mb-4"
        />
        <div className="w-20 h-1 bg-green-600 rounded mb-6" />
        <MotionDiv className="text-gray-700 dark:text-gray-300 leading-relaxed text-justify">
     Across Bangladesh, many families continue to live in unsafe housing and face increasing risks
from floods, cyclones, heat, and poor sanitation. These risks are often not caused by disasters
alone, but by poverty, lack of access to safe construction knowledge, rising material costs,
insecure land tenure, and limited financial options—particularly in rural areas and informal
settlements. <br />
Simple improvements in housing design and construction can significantly reduce these risks.
However, because most homes are self-built, information and affordable solutions must reach
communities in ways that are practical, understandable, and locally relevant.
The foundation of our work dates back to 1998, when Housing & Hazards, a group of building
professionals linked to the University of Exeter, began working in Bangladesh to explore low-
cost, locally available technologies that could make non-engineered buildings safer against
floods and wind.
<br />
This early work focused on improving communication at the grassroots level and developing
affordable solutions that communities could implement themselves. Through this process, Azit
Roy became involved in low-cost housing and disaster-resilient construction. With support from
Housing & Hazards, he went on to establish Nirapod Bangladesh Songstha in 2009, laying the
groundwork for the community-led housing approach that continues today.
Nirapod Bangladesh Songstha is a registered non-government organization in Bangladesh
working with vulnerable and marginalized communities to improve housing safety, sanitation,
environmental resilience, and social empowerment.
<br />
Our work spans rural communities, urban low-income areas, and informal settlements, where we
support people to strengthen their homes, livelihoods, and local environments through practical,
affordable, and community-led solutions.

<br /> <br />
<div>
<b>We take an integrated approach that brings together housing, skills, finance, and environmental care, including:</b>
<br />
<ul>
  <li>(1) Safe and climate-resilient housing, including demonstration houses</li>
  <li>(2) Housing and sanitation improvements for low-income households</li>
  <li>(3) Build for Safety training and workshops using hands-on learning</li>
  <li>(4) Women’s savings groups, currently supporting 37 groups and over 1,600 women</li>
  <li>(5) Youth engagement through skills training and environmental action</li>
  <li>(6) Sustainable building materials, including bamboo, concrete katla, mud blocks, and
rammed earth</li>
<li>(7) Tree plantation and environmental awareness with communities and schools</li>
</ul>
</div>
        </MotionDiv>
      </MotionDiv>

      {/* GALLERY TITLE  */}
      <MotionDiv className="text-center max-w-3xl mx-auto mt-24 mb-12 px-4">
        <MotionH2
          text="Demonstration Housing & Field Activities"
          className="text-green-800 dark:text-green-400"
        />
        <MotionP className="text-gray-600 dark:text-gray-400 mt-3">
          Visual documentation of community-based housing construction and safety innovations
        </MotionP>
      </MotionDiv>

      {/* IMAGE GALLERY  */}
      <MotionDiv className="max-w-7xl mx-auto px-4 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">

          {/* FEATURE IMAGE */}
          <MotionDiv
            whileHover={{ scale: 1.03 }}
            className="md:col-span-7 relative overflow-hidden rounded-3xl shadow-2xl group"
          >
            <img
              src={gallery?.images[0]}
              alt="Demonstration housing project"
              className="w-full h-[320px] md:h-[420px] object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </MotionDiv>

          {/* SUPPORTING IMAGES */}
          <div className="md:col-span-5 grid grid-cols-2 gap-6">
            {gallery?.images?.slice(1, 5).map((img, index) => (
              <MotionDiv
                key={index}
                whileHover={{ scale: 1.05 }}
                className="relative overflow-hidden rounded-2xl shadow-lg group"
              >
                <img
                  src={img}
                  alt={`Project activity ${index + 1}`}
                  className="w-full h-40 md:h-48 object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </MotionDiv>
            ))}
          </div>

        </div>
      </MotionDiv>

      {/* CONTENT SECTION 2 */}
      <MotionDiv className="max-w-5xl mx-auto mb-24 p-8 md:p-10 bg-gradient-to-br from-green-50 to-white dark:from-gray-800 dark:to-gray-900 shadow-xl rounded-2xl border-l-4 border-green-600">
        <MotionH2
          text="Rammed Earth Wall Under Construction"
          className="text-green-800 dark:text-green-400 mb-4"
        />
        <MotionP className="text-gray-700 dark:text-gray-300 leading-relaxed text-justify">
<b>Our work is guided by a few core principles:</b>
<ul>
  <li>(1) Community-led: communities are partners, not beneficiaries</li>
<li>(2) Affordable and practical: solutions must work within local realities</li>
<li>(3) Learning by doing: hands-on experience builds confidence and skills</li>
<li>(4) Gender-inclusive: women’s leadership is central to resilience</li>
<li>(5) Climate-aware: housing and environments must respond to climate risks</li>
</ul>
        </MotionP>

        <Link
          to="https://safebangladesh.wordpress.com/wp-content/uploads/2011/07/improved-design-of-urban-low-cost-housing-in-dinajpur-rev-1.pdf"
          target="_blank"
          className="inline-flex items-center gap-2 mt-8 px-6 py-3 bg-green-700 text-white rounded-lg hover:bg-green-800 transition"
        >
          Read Full Research Document →
        </Link>
      </MotionDiv>

    </MotionDiv>
  );
};

export default Background;

