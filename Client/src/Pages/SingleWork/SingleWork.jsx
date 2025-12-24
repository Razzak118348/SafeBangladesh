import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { MotionDiv, MotionH2, MotionP } from '../../utils/MotionElements';

const SingleWork = () => {
const singlework =useLoaderData();
console.log(singlework);
    return (
        <MotionDiv className='max-w-7xl mx-auto p-4'>
            <MotionH2 text={singlework.title}></MotionH2>
            <img className='' src={singlework.image} alt={singlework.title} />
            <MotionP>{singlework.description}</MotionP>
        </MotionDiv>
    );
};

export default SingleWork;