import BlogCover from "@/components/blog/blog.cover";
import BlogTitle from "@/components/blog/blog.title";
import BlogDesc from "@/components/blog/blog.desc";
import BlogVideo from "@/components/blog/blog.video";
import BlogImage from "@/components/blog/blog.image";
import AppFooter from "@/components/footer/app.footer";
import { sendRequest } from "@/utils/api";
import type { Metadata, ResolvingMetadata } from 'next';

type Props = {
  params: { idBlog: string }
  searchParams: { [key: string]: string | string[] | undefined }
}

export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  // read route params
  const temp = params?.idBlog?.split('.html') ?? [];
  const temp1 = temp[0]?.split('-') ?? [];
  const blogId = temp1[temp1.length - 1]

  // fetch data
  const res = await sendRequest<IBackendResBlog<IBlog>>({
    method: 'GET',
    url: `https://kimtuyen.blog/api/v1/blog/${blogId}`
  })

  return {
    title: res.data?.title,
    description: res.data?.description
  }
}

const DetailBlogPage = async ({ params }: { params: { idBlog: string } }) => {

  const temp = params?.idBlog?.split('.html') ?? [];
  const temp1 = temp[0]?.split('-') ?? [];
  const blogId = temp1[temp1.length - 1]

  // Fetch API Blog by ID
  const res = await sendRequest<IBackendResBlog<IBlog>>({
    method: 'get',
    url: `https://kimtuyen.blog/api/v1/blog/${blogId}`,
    nextOption: { cache: 'no-store' }
  })

  return (
    <div className="bg-black lg:px-8 xl:px-60">
      <BlogCover thumb={res.data?.thumb} />

      {/* @ts-ignore */}
      <BlogTitle title={res.data?.title} color={res.data?.color} />

      {/* @ts-ignore */}
      <BlogDesc description={res.data.description} />

      {/* Video Youtube */}
      {res.data?.video.map(item => (
        <BlogVideo key={item} video={item} />
      ))}

      {/* List Image */}
      <div className="flex flex-col gap-8">
        {res.data?.photo.map(item => (
          <BlogImage key={item} photo={item} />
        ))}
      </div>

      <AppFooter />
    </div>
  );
};

export default DetailBlogPage;