import { sequel } from "@/data/font";
import './about.hero.css';

const AboutHero = () => {

  return (
    <div className="max-w-screen-2xl mx-auto px-4 py-[18rem] md:py-[26rem]">
      <h2
        className={`${sequel.className} text-[1.5rem] md:text-[3rem] lg:text-[4rem] font-extrabold lg:leading-[63px] uppercase`}
      >
        <p className="line">SHIFTING BRANDS FROM</p>
        <p className="line">GIVING UP TO MOVING</p>
        <p className="line">FORWARD.</p>
      </h2>
    </div>
  );
};

export default AboutHero;