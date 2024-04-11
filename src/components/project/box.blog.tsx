import Image from "next/image";
import { faMinus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { sourceSerif, ridleyGroteskDemo } from "@/data/font";

interface IProps {
  blog: IBlogByRole
}

const BoxBlog = (props: IProps) => {

  const { blog } = props;

  return (
    <div
      className="rounded-xl shadow-lg cursor-pointer border-white border hover:bg-black hover:text-white transition-all overflow-hidden"
    >

      {/* Image */}
      <div className="h-64 w-full relative overflow-hidden">
        <Image
          src={'/user/user-logo.jpg'}
          alt=""
          fill
          sizes="100%"
          style={{ objectFit: 'cover' }}
        />
      </div>

      {/* Content */}
      <div className="flex items-center gap-4 p-6">
        <FontAwesomeIcon
          icon={faMinus}
          color="#ffea2f"
          fontSize={34}
        />

        <div>
          <h2
            className={`${sourceSerif.className} text-2xl font-bold capitalize`}
          >
            {blog.title}
          </h2>
          <p
            className={`${ridleyGroteskDemo.className}`}
          >
            Kimbling
          </p>
        </div>
      </div>
    </div>
  );
};

export default BoxBlog;