import { sequel } from "@/data/font";

const Hero = () => {

  return (
    <div className="pt-20 lg:pt-0">

      {/* Wrapper */}
      <div className="max-w-screen-2xl mx-auto px-4">

        <div
          className="bg-[url('../../public/user/main-image.png')] bg-no-repeat bg-top lg:bg-right-top bg-[length:25rem] md:bg-[length:32rem] lg:bg-[length:45rem] py-28"
        >
          <h2
            className={`${sequel.className} text-[1.5rem] md:text-[3rem] lg:text-[4rem] font-extrabold leading-[63px] pt-[22rem] lg:pt-[19rem] pb-20 lg:pb-96 uppercase`}
          >
            HELLO
            <br />
            I'M KIM BLING.
            <br />
            Master of Ceremony.
          </h2>
        </div>

      </div>
      {/* End Wrapper */}

    </div>
  );
};

export default Hero;