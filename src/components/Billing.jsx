import React from 'react'
import { apple, bill, google } from '../assets'
import styles, { layout } from '../style'



const Billing = () => {
  return (
    <section className={`${layout.sectionReverse}`}>
      <div className={`${layout.sectionImgReverse}`}>
        <img src={bill} alt="billing" className='w-[100%] h-[100%] relative z-[5]' />

        <div className="absulate z-[3] -left-1/2 top-0 w-[50%] h-[50%] rouended-full white__gradient" />
        <div className="absulate z-[0] -left-1/2 buttom-0 w-[50%] h-[50%] rouended-full pink__gradient" />
      </div>

      <div className={`${layout.sectionInfo}`}>
        <h2 className={`${styles.heading2}`}>Easily control your <br className='sm:block hidden' /> billing & invoicing.</h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea placerat.</p>
        <div className='flex flex-row flex-wrap sm:mt-10 mt-6 '>
          <img className='w-[128px] h-[42px] object-contain mr-5 cursor-pointer' src={apple} alt="appstore" />
          <img className='w-[128px] h-[42px] object-contain' src={google} alt="playstore" />
        </div>
      </div>
    </section>
  )
}

export default Billing
