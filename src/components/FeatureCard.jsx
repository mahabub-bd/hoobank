import React from 'react';
import { features } from '../constants';
import styles from '../style';

function FeatureCard({ icon, title, content, index }) {
  return (
    <div className={`flex flex-row p-6  rounded-[20px] feature-card ${index !== features.length - 1 ? "md-6" : "mb-0"}`}>

      <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`} >
        <img src={icon} alt="star" className='w-[50%] h-[50%] object-contain' />
      </div>
      <div className='flex flex-1 flex-col ml-3'>
        <h4 className='font-poppins font-semibold text-white text-[18px] leading-[23.4px] mb-1'>
          {title}
        </h4>
        <p className='font-poppins font-normal text-dimWhite text-[16px] leading-[24px] '>{content}</p>
      </div>
    </div>
  )
}

export default FeatureCard;


