import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { MotionDiv, MotionH2 } from '../../utils/MotionElements';

const LatestWork = () => {
    const [latesWork, setLatestWork] = useState([])
    useEffect(() => {
        axios
            .get("/latestWork.json")
            .then((res) => setLatestWork(res.data))
            .catch((err) => console.error(err));
    }, []);

    return (
        <MotionDiv className='p-10 md:p-0 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 text-center justify-items-center'>
            {latesWork.map((work) => (
                <MotionDiv className="card bg-base-100 w-full md:w-96  shadow-lg">
                    <figure>
                        <img
                            src={work.image}
                            alt={work.title} />
                    </figure>
                    <div className="card-body">

                        <h2 className="text-[#3e5a41] hover:text-[#4a8b51] underline"><Link to={`/singlework/${work.id}`}> {work.title}</Link></h2>
                    </div>

                </MotionDiv>
            ))}
        </MotionDiv>
    );
};

export default LatestWork;