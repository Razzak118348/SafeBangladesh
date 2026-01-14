import { Link } from 'react-router-dom';
import { MotionDiv, MotionH2 } from '../../utils/MotionElements';
import Loading from "../../Components/Loading/Loading";
import { useState, useEffect } from 'react';
import axios from 'axios';

const LatestWork = () => {
  const [latestWork, setLatestWork] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchLatestWork = async () => {
      try {
        const response = await axios.get("https://safebangladesh-server.vercel.app/latestwork",{withCredentials:true});
        setLatestWork(response.data);
      } catch (error) {
        console.error("Error fetching latest work:", error);
        setLatestWork([]);
      } finally {
        setLoading(false);
      }
    };

    fetchLatestWork();
  }, []);

  if (loading) return <Loading />;
  if (!latestWork.length) return <p className="text-center mt-10 text-gray-500">No latest work found</p>;

  return (
    <div>
      <MotionH2
        className="underline text-green-900 dark:text-white my-8 text-center"
        text="Our Latest Work"
      />

      <MotionDiv className='p-10 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10 lg:gap-6 text-center justify-items-center'>
        {latestWork.map((work) => (
          <Link key={work._id} to={`/latestwork/${work._id}`} className='transition-transform duration-700 hover:scale-110'>
            <MotionDiv className="card bg-base-100 dark:bg-gray-800 w-full md:w-52 lg:w-96 shadow-lg">
              <figure>
                <img src={work.image} alt={work.title} className="object-cover w-full h-48" />
              </figure>
              <div className="card-body">
                <h2 className="text-[#3e8846] dark:text-green-700 dark:hover:text-green-500 hover:text-[#23ba32] hover:underline text-wrap">
                  {work.title}
                </h2>
              </div>
            </MotionDiv>
          </Link>
        ))}
      </MotionDiv>
    </div>
  );
};

export default LatestWork;
