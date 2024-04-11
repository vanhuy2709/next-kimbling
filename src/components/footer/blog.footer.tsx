import { tungSten } from "@/data/font";

const BlogFooter = () => {

  return (
    <div className="flex justify-center">
      <p
        className={`${tungSten.className}`}
        style={{
          writingMode: 'vertical-lr',
          position: 'absolute',
          bottom: 0,
          fontSize: '2rem',
          letterSpacing: '1rem',
          color: 'white'
        }}
      >
        KIM BLING
      </p>
    </div>
  );
};

export default BlogFooter;