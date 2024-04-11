import { sourceSerif, sequel, tungSten } from "@/data/font";

const Resume = () => {

  return (
    <div>

      {/* Wrapper */}
      <div className="max-w-screen-2xl mx-auto px-4">

        <div
          className="flex flex-col lg:flex-row justify-between gap-y-20 gap-x-40 mb-16 md:mb-[12.5rem]"
        >
          {/* Left */}
          <div className="flex flex-col gap-10 flex-[1.3]">
            <p className={`${sourceSerif.className} text-lg md:text-xl font-normal mb-4`}>
              "Xây dựng thương hiệu cá nhân là hành trình không đích đến, bản thân
              có giá trị sẽ tạo nên giá trị" - <span className={`${sequel.className} font-medium`}>KIM BLING</span>
            </p>
            <p className={`${sourceSerif.className} text-lg md:text-xl font-normal mb-4`}>
              <span className={`${sequel.className} font-medium`}>
                KIM BLING
              </span> luôn theo đuổi hành trình tạo ra giá
              trị cho cộng đồng, mong muốn lan toả, truyền tải những điều ý nghĩa
              tích cực.
            </p>
            <p className={`${sourceSerif.className} text-lg md:text-xl font-normal mb-4`}>
              Quan điểm sống "KHÔNG GÌ LÀ KHÔNG THỂ" và xem "THÁI ĐỘ" là tiêu chí
              tiên quyết khi giải quyết vấn đề.
            </p>
            <p className={`${sourceSerif.className} text-lg md:text-xl font-normal mb-4`}>
              Tâm hồn nghệ sĩ, yêu những giai điệu và không ngại thử
              thách.
            </p>
          </div>

          {/* Right */}
          <div className="flex flex-col flex-1 gap-14">
            <ul>
              <li
                className={`${tungSten.className} text-sm tracking-[0.5em] mb-5`}
              >
                EDUCATION
              </li>
              <li className={`${sequel.className} text-xs md:text-base`}>
                VNU University of Social Sciences and Humanities
                <br />
                LINGUISTIC SECTOR, 2022
              </li>
            </ul>

            <ul className="flex flex-col gap-7">
              <li
                className={`${tungSten.className} text-sm tracking-[0.5em] mb-5`}
              >
                EXPERIENCE
              </li>
              <li className={`${sequel.className} text-xs md:text-base`}>
                HOSTING How2Money, ZReview, ZWeather...
                <br />
                ZNEWS, 6/2021
              </li>
              <li className={`${sequel.className} text-xs md:text-base`}>
                MC News 24h, Blockchain Event
                <br />
                GFI BLOCKCHAIN, 2021-2022
              </li>
              <li className={`${sequel.className} text-xs md:text-base`}>
                Host Glowie Spotlight Streetstyle
                <br />
                GLOWIE APP, 2021-2022
              </li>
              <li className={`${sequel.className} text-xs md:text-base`}>
                FREELANCE MC, MODEL, KOL,...
                <br />
              </li>
            </ul>
          </div>
        </div>

      </div>
      {/* End Wrapper */}

    </div>
  );
};

export default Resume;