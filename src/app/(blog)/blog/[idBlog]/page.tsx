import BlogCover from "@/components/blog/blog.cover";
import BlogTitle from "@/components/blog/blog.title";
import BlogDesc from "@/components/blog/blog.desc";
import BlogVideo from "@/components/blog/blog.video";
import BlogImage from "@/components/blog/blog.image";
import AppFooter from "@/components/footer/app.footer";

const DetailBlogPage = () => {

  return (
    <div className="bg-black lg:px-8 xl:px-60">
      <BlogCover />

      <BlogTitle />

      <BlogDesc />

      {/* Video Youtube */}
      <BlogVideo />

      {/* List Image */}
      <div className="flex flex-col gap-8">
        <BlogImage />
      </div>

      <AppFooter />
    </div>
  );
};

export default DetailBlogPage;