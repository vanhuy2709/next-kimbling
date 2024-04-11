'use client'
import { social } from "@/data/menu";
import { tungSten, sequel } from "@/data/font";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './app.footer.css';

const AppFooter = () => {

  // Scroll To Top
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  return (
    <div className="bg-black">

      {/* Wrapper */}
      <div className="max-w-screen-2xl mx-auto px-4 py-48">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-8 lg:gap-0">
          {/* Left */}
          <div>
            <p
              className={`${tungSten.className} font-normal text-sm tracking-[0.5em] text-white mb-5 uppercase`}
            >
              Get in Touch
            </p>

            <div className="flex items-center gap-8 mb-10 md:mb-24">
              {
                social.map(item => (
                  <FontAwesomeIcon
                    key={item.id}
                    icon={item.icon}
                    className={`cursor-pointer ${item.name} w-7 h-7 md:w-10 md:h-10`}
                  />
                ))
              }
            </div>

            <h2
              className={`${sequel.className} text-sm md:text-[2rem] lg:text-[2.5rem] font-extrabold uppercase text-white`}
            >
              Want to move forward?
            </h2>
          </div>

          {/* Right */}
          <div>
            <p
              className={`${tungSten.className} font-normal text-sm tracking-[0.5em] cursor-pointer uppercase text-white`}
              onClick={() => handleScrollToTop()}
            >
              Back to top
            </p>
          </div>
        </div>
      </div>
      {/* End Wrapper */}


    </div>
  );
};

export default AppFooter;