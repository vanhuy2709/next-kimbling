import Image from "next/image";
import { sequel, ridleyGroteskDemo } from "@/data/font";

const DetailBlogPage = () => {

  return (
    <div className="bg-black lg:px-8 xl:px-60">

      {/* Image */}
      <div className="w-full h-[350px] md:h-[500px] xl:h-screen relative">
        <Image
          src={'/user/user-logo.jpg'}
          alt=""
          fill
          sizes="100%"
          style={{ objectFit: "cover" }}
        />
      </div>

      {/* Content */}
      <h2
        className={`${sequel.className}`}
        style={{
          fontSize: 'calc(2.5rem + (1.25 * (100vw - 85.375rem)) / 34.625)',
          margin: '5rem 0 3rem',
          textAlign: 'center',
          color: 'white',
          textTransform: 'uppercase',
        }}
      >
        Hello
      </h2>

      {/* Description */}
      <p
        className={`${ridleyGroteskDemo.className}`}
        style={{
          fontSize: 'calc(1rem + (0.25 * (100vw - 85.375rem)) / 34.625)',
          color: 'white',
          marginBottom: '3rem',
          textAlign: 'center'
        }}
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores facilis dolorem dolores sunt eum magni minima! Accusantium animi, nobis, mollitia veniam aut nihil et natus voluptates officia, molestiae nam voluptatibus?
      </p>

      {/* Video Youtube */}
      <div style={{
        overflow: "hidden",
        paddingBottom: '56.25%', /* 16:9 aspect ratio */
        position: 'relative',
        height: 0,
      }}>
        <iframe
          src={`https://www.youtube.com/embed/xypzmu5mMPY`}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          style={{
            left: 0,
            top: 0,
            height: "100%",
            width: "100%",
            position: "absolute",
          }}
        ></iframe>
      </div>

      {/* Image */}
      <div>Image</div>
    </div>
  );
};

export default DetailBlogPage;