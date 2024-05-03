import Image from "next/image";

interface IProps {
  thumb: string | undefined;
}

const BlogCover = (props: IProps) => {

  const { thumb } = props;

  return (
    <div className="w-full h-[350px] md:h-[500px] xl:h-screen relative">
      <Image
        src={`http://localhost:8000/images/${thumb}`}
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