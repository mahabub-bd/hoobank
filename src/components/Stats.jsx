import { stats } from "../constants";
import styles from "../style";

const Stats = () => (
  <section className={`${styles.flexCenter} flex-row flex-wrap sm:mb-20 mb-6`}>

  {stats.map((stat)=>(
    <div key={stat.id} className="flex flex-1 justify-start items-center flex-row m-3">
      <h4 className="text-white font-poppins font-semibold xs:text-[40px] text-[30px] xs:leading-[53px] leading-[43px]">{stat.value}</h4>
      <p className="text-gradient font-poppins font-normal uppercase ml-3 xs:text-[20px] text-[15px] xs:leading-[26px] leading-[21px]">{stat.title}</p>
    </div>
  ))}
  
  </section>
);

export default Stats;