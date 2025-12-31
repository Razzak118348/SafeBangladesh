import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { MotionDiv, MotionH2, MotionP } from '../../utils/MotionElements';

const SingleWork = () => {
const singlework =useLoaderData();
console.log(singlework);
    return (
        <>
        <MotionDiv className="hero min-h-screen">
  <div className="hero-content flex-col lg:flex-row">
    <img
      src={singlework.image}
      className="max-w-lg rounded-lg shadow-2xl"
    />
    <div>
      <MotionH2 className=" text-green-900" text={singlework.title}></MotionH2>
      <MotionP className="py-6">
        {singlework.description}
      </MotionP>
    </div>
  </div>
</MotionDiv>
        </>
    );
};

export default SingleWork;