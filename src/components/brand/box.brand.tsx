import Link from "next/link";
import Image from "next/image";
import { convertSlugUrl } from "@/utils/api";

interface IProps {
  blog: IBlog;
}
const BoxBrand = (props: IProps) => {

  const { blog } = props;

  return (
    <>
      <Link href={`/blog/${convertSlugUrl(blog.title)}-${blog._id}.html`}>
        <div
          className="bg-[#1A1A1A] flex items-center justify-center cursor-pointer h-[20rem] md:h-[21rem] xl:h-[28rem]"
        >
          <Image
            src={`http://localhost:8000/images/${blog.thumb}`}
            alt="blog-thumb"
            width={200}
            height={200} />
        </div>
      </Link>
    </>
  );
};

export default BoxBrand;