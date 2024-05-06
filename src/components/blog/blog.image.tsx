import Image from 'next/image';

interface IProps {
  photo: string;
}

const BlogImage = (props: IProps) => {

  const { photo } = props;

  return (
    <div className="w-[250px] h-[250px] md:w-[500px] md:h-[500px] xl:w-[1000px] xl:h-[1000px] relative mx-auto border border-white rounded-lg overflow-hidden">
      <Image
        src={`https://kimtuyen.blog/images/${photo}`}
        alt="blog-image"
        fill
        sizes="100%"
        priority
        style={{ objectFit: 'contain' }} />
    </div>
  );
};

export default BlogImage;