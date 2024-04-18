import Image from "next/image";

const BlogCover = () => {
  return (
    <div className="w-full h-[350px] md:h-[500px] xl:h-screen relative">
      <Image
        src={'/user/user-logo.jpg'}
        alt=""
        fill
        priority
        sizes="100%"
        style={{ objectFit: "cover" }}
      />
    </div>
  );
};

export default BlogCover;