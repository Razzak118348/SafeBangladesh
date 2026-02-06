import { useEffect, useState } from "react";
import Loading from "../../../Components/Loading/Loading";
import PageBanner from "../../../Components/PageBanner/PageBanner";
import { MotionDiv, MotionH2, MotionP } from "../../../utils/MotionElements";
import axios from "axios";

const Team = () => {
  const [allMember, setAllMember] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTeam = async () => {
      try {
        const res = await axios.get(
          "https://safebangladesh-server.vercel.app/team",
          { withCredentials: true }
        );
        setAllMember(res.data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchTeam();
  }, []);

  if (loading) return <Loading />;

  /* -------------------------
     Group by category
  -------------------------- */
  const grouped = allMember.reduce((acc, member) => {
    const cat = member.category || "others";
    if (!acc[cat]) acc[cat] = [];
    acc[cat].push(member);
    return acc;
  }, {});

  /* -------------------------
     Category order
  -------------------------- */
  const categoryOrder = [
    "general",
    "program&operations",
    "field&support",
    "volunteers",
    "cultural",
    "advisors",
  ];

  const formatTitle = (text) =>
    text
      ?.replace(/&/g, " & ")
      .replace(/\b\w/g, (c) => c.toUpperCase());

  return (
    <>
      <PageBanner />

      <div className="px-4 md:px-10 lg:px-20 py-12 space-y-20">
        <MotionH2
          text="Meet Our Team"
          className="text-center text-green-700 dark:text-green-400"
        />

        {/* CATEGORY LOOP*/}
        {categoryOrder.map((cat) =>
          grouped[cat] ? (
            <MotionDiv key={cat} >
              {/* Category Title */}
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-8 border-l-4 border-green-600 pl-4">
                {formatTitle(cat)}
              </h3>

              {/* Members Grid */}
              <MotionDiv className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                {grouped[cat].map((member, index) => (
                  <MotionDiv
                    key={index}
                    className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition duration-300 overflow-hidden group"
                  >
                    {/* Image */}
                    <MotionDiv className="h-64 overflow-hidden">
                      <img
                        src={
                          member.image
                            ? member.image
                            : "/default-avatar.png"
                        }
                        alt={member.name}
className="w-full aspect-square object-cover object-center group-hover:scale-105 transition duration-500"


                      />
                    </MotionDiv>

                    {/* Info */}
                    <MotionDiv className="p-5 text-center space-y-2">
                      <MotionH2 className="font-semibold text-lg text-gray-900 dark:text-white">
                        {member.name}
                      </MotionH2>

                      <p className="text-green-600 text-sm font-medium">
                        {member.designation}
                      </p>

                      {member.message && (
                        <MotionP className="text-gray-500 text-sm">
                          {member.message}
                        </MotionP>
                      )}

                      {member.email && (
                        <a
                          href={`mailto:${member.email}`}
                          className="text-xs text-blue-500 underline"
                        >
                          {member.email}
                        </a>
                      )}
                    </MotionDiv>
                  </MotionDiv>
                ))}
              </MotionDiv>
            </MotionDiv>
          ) : null
        )}
      </div>
    </>
  );
};

export default Team;
