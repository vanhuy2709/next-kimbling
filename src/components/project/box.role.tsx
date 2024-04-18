import Image from "next/image";
import SubTitle from "../title/subTitle";
import Description from "../title/description";
import { tungSten } from "@/data/font";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { convertSlugUrl } from "@/utils/api";

interface IProps {
  isReverse?: boolean,
  role: {
    _id: string,
    nameRole: string,
    description: string,
    thumb: string,
  }
}

const BoxRole = (props: IProps) => {
  const { isReverse, role } = props;

  return (
    <div className={`flex flex-col items-center justify-between gap-8 mb-40 ${isReverse ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
      {/* Left */}
      <div className="flex-1">
        <SubTitle title={role.nameRole} isUpperCase />
        <Description content={role.description} />
        <Link
          href={`/project/${convertSlugUrl(role.nameRole)}-${role._id}.html`}
          className={`text-xl font-normal tracking-[0.2rem] text-[#fecd1a] ${tungSten.className}`}
        >
          <FontAwesomeIcon icon={faArrowRight} className="mr-4" />
          Read more
        </Link>
      </div>

      {/* Right */}
      {/* relative border-black flex-1 rounded-3xl overflow-hidden border-[0.5rem] */}
      <div
        className="w-full h-80 md:h-96 lg:w-[40rem] lg:h-[30rem] relative overflow-hidden border-[0.3rem] border-black rounded-3xl"
      >
        <Image
          src='/user/user-logo.jpg'
          alt=""
          fill
          priority
          sizes="100%"
          style={{ objectFit: 'cover' }}
        />
      </div>
    </div>
  );
};

export default BoxRole;