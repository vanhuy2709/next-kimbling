import Link from "next/link";
import Image from "next/image";

const BoxBrand = () => {

  return (
    <div
      className="bg-[#1A1A1A] flex items-center justify-center cursor-pointer h-[20rem] md:h-[21rem] xl:h-[28rem]"
    >
      <Image
        src={'/user/user-logo.jpg'}
        priority
        alt=""
        width={100}
        height={100} />
    </div>
  );
};

export default BoxBrand;