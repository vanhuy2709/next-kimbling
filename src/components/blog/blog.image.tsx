import Image from 'next/image';

const BlogImage = () => {
  return (
    <div className="w-[250px] h-[250px] md:w-[500px] md:h-[500px] xl:w-[1000px] xl:h-[1000px] relative mx-auto border border-white rounded-lg overflow-hidden">
      <Image
        src={'/user/user-logo.jpg'}
        alt=""
        fill
        sizes="100%"
        priority
        style={{ objectFit: 'cover' }} />
    </div>
  );
};

export default BlogImage;