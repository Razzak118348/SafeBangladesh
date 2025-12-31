import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { MotionDiv} from '../../utils/MotionElements';

const LatestWork = () => {
    const [latesWork, setLatestWork] = useState([])
    useEffect(() => {
        axios
            .get("/latestWork.json")
            .then((res) => setLatestWork(res.data))
            .catch((err) => console.error(err));
    }, []);

    return (
        <MotionDiv className='p-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 text-center justify-items-center'>
            {latesWork.map((work) => (
                <MotionDiv className="card bg-base-100 dark:bg-gray-800 w-full md:w-96  shadow-lg">
                    <figure>
                        <img
                            src={work.image}
                            alt={work.title} />
                    </figure>
                    <div className="card-body">

                        <h2 className="text-[#3e8846] dark:text-green-700 dark:hover:text-green-500 hover:text-[#2bd73d] underline"><Link to={`/singlework/${work.id}`}> {work.title}</Link></h2>
                    </div>

                </MotionDiv>
            ))}
        </MotionDiv>
    );
};

export default LatestWork;