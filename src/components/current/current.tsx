import { sequel } from "@/data/font";
import Title from "../title/title";

const Current = () => {
  return (
    <div className="max-w-screen-2xl mx-auto px-4">
      <Title name="currently" color="white" />

      {/* Video */}
      <div className="relative">
        <video
          src="https://www.anthonydesigner.com/static/av-flag-video-3e2a0cc191bb00238afe5c841ccdc5d1.mp4"
          autoPlay
          loop
          playsInline
          muted
          className="mx-auto w-11/12 h-96 object-cover block"
        />
        <p className={`absolute text-xl md:text-2xl xl:text-7xl font-extrabold ${sequel.className} text-white top-28 left-8 md:left-12 lg:left-20`}>
          HELPING
          <br />
          BRANDS WIN.
        </p>
      </div>

    </div>
  );
};

export default Current;