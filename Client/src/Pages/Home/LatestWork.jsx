import axios from 'axios';
import  { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { MotionDiv, MotionH2} from '../../utils/MotionElements';
import useAuth from "../../hooks/useAuth";
import Loading from "../../Components/Loading/Loading";
const LatestWork = () => {
    const [latesWork, setLatestWork] = useState([])
    const {loading,setLoading}=useAuth()

    useEffect(() => {
        setLoading(true)
        axios
            .get("/latestWork.json")
            .then((res) => setLatestWork(res.data))
            .catch((err) => console.error(err));
            setLoading(false)
    }, []);

if(loading){
    return(
        <Loading></Loading>
    )
}
    return (
        <div>
            <MotionH2 className="underline text-green-900 dark:text-white my-8 text-center" text="Our Latest Work">
            </MotionH2>
            <MotionDiv className='p-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-center justify-items-center'>
            {latesWork.map((work) => (
                <Link to={`/latestwork/${work.id}`}>
                <MotionDiv key={work.id} className="card bg-base-100 dark:bg-gray-800 w-full md:w-96  shadow-lg">
                    <figure>
                        <img
                            src={work.image}
                            alt={work.title} />
                    </figure>
                    <div className="card-body">

                        <h2 className="text-[#3e8846] dark:text-green-700 dark:hover:text-green-500 hover:text-[#2bd73d] hover:underline">{work.title}</h2>
                    </div>

                </MotionDiv>
                </Link>
            ))}
        </MotionDiv>
        </div>
    );
};

export default LatestWork;