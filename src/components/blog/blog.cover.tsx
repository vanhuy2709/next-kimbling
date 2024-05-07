import Image from "next/image";

interface IProps {
  thumb: string | undefined;
}

const BlogCover = (props: IProps) => {

  const { thumb } = props;

  return (
    <div className="w-full h-[350px] md:h-[500px] xl:h-screen relative">
      <Image
        src={`${process.env.NEXT_PUBLIC_BACKEND_URL}/images/${thumb}`}
        alt=""
        fill
        priority
        sizes="100%"
        style={{ objectFit: "contain" }}
      />
    </div>
  );
};

export default BlogCover;