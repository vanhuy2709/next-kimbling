import { sourceSerif, sequel, tungSten } from "@/data/font";
import { social } from "@/data/menu";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Tooltip } from 'antd';
import Link from "next/link";

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

            {/* Test */}
            <div className="flex items-center gap-8">
              {
                social.map(item => (
                  <Link key={item.id} href={item.path} target="_blank">
                    <Tooltip
                      title={item.desc}
                    >
                      <FontAwesomeIcon
                        icon={item.icon}
                        className={`cursor-pointer ${item.name} w-7 h-7 md:w-10 md:h-10`}
                      />
                    </Tooltip>
                  </Link>
                ))
              }
            </div>


            <p className={`${sourceSerif.className} text-lg md:text-xl font-normal mb-4`}>
              Yêu tự do, yêu những giai điệu và yêu Tiếng Việt. Không ngại chinh phục thử thách, luôn sẵn sàng làm việc, làm mới bản thân. Hướng đến mục tiêu lan toả giá trị tích cực cho cộng đồng.
            </p>
            <p className={`${sourceSerif.className} text-lg md:text-xl font-normal mb-4`}>
              MC Phóng viên tại ZNews, VJ tại ZStudio.
            </p>
            <p className={`${sourceSerif.className} text-lg md:text-xl font-normal mb-4`}>
              MC VTV4, Đài Phát thanh - Truyền hình Tây Ninh, Đài Phát thanh - Truyền hình Bình Dương, Đài Phát Thanh Truyền hình - Báo Bình Phước
            </p>
            <p className={`${sourceSerif.className} text-lg md:text-xl font-normal mb-4`}>
              MC Host Podcast Tài chính, HOW2MONEY - loạt Podcast về Tài chính cá nhân - Đoạt giải bạc Best Podcast - Giải thưởng Truyền thông Kỹ thuật số Châu Á 2023
              <br />
            </p>
            <p className={`${sourceSerif.className} text-lg md:text-xl font-normal mb-4`}>
              MC Host Podcast Du lịch, MC BTV 24h News Blockchain,…
            </p>
            <p className={`${sourceSerif.className} text-lg md:text-xl font-normal mb-4`}>
              KOL Fashion, Beauty
            </p>
          </div>

          {/* Right */}
          <div className="flex flex-col flex-1 gap-14">
            <ul className="flex flex-col gap-7">
              <li
                className={`${tungSten.className} text-sm tracking-[0.5em] mb-5`}
              >
                EDUCATION
              </li>

              <li className={`${sequel.className} text-xs md:text-base`}>
                Bachelor of arts in Linguistics
                <br />
                VNU University of Social Sciences and Humanities, 2022
              </li>
              <li className={`${sequel.className} text-xs md:text-base`}>
                Voice Acting
                <br />
                DAT PHI MEDIA, 2023
              </li>
              <li className={`${sequel.className} text-xs md:text-base`}>
                Impressive Face
                <br />
                SAIGONNEWS ACADEMY, 2024
              </li>
            </ul>

            <ul className="flex flex-col gap-7">
              <li
                className={`${tungSten.className} text-sm tracking-[0.5em] mb-5`}
              >
                EXPERIENCE
              </li>
              <li className={`${sequel.className} text-xs md:text-base`}>
                Master of Ceremonies, Video Jockey, Host Livetream, Reviewer
              </li>
              <li className={`${sequel.className} text-xs md:text-base`}>
                MC VTV4, TTV11, BPTV, BTV1, 2024
              </li>
              <li className={`${sequel.className} text-xs md:text-base`}>
                MC Host - Znews:
                <br />
                How2Money, TAbalo, ZWeather, ZReview, Rushhour, CarTips, Review Car VMS2022, VoiceOver,…
                <br />
                2021-2024
              </li>
              <li className={`${sequel.className} text-xs md:text-base`}>
                HOW2MONEY - Personal Finance Podcast series
                <br />
                Silver winner of Best Podcast
                <br />
                Asia Digital Media Awards
                <br />
                2023
              </li>
              <li className={`${sequel.className} text-xs md:text-base`}>
                MC BTV 24h News, Blockchain Event GFI,
                <br />
                VBI 2021-2024
              </li>
              <li className={`${sequel.className} text-xs md:text-base`}>
                Top 5 Glowie Spotlight Streetstyle,
                <br />
                2021-2022
              </li>
              <li className={`${sequel.className} text-xs md:text-base`}>
                Freelance Kol, Model & Other artistic activities: Film Co Nang Lap Lanh, Mv Ngay nao do, Gameshow Khau Vi Ngoi Sao,…
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