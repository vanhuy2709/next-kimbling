import BoxBlog from "@/components/project/box.blog";
import { sendRequest } from "@/utils/api";

const BlogPage = async ({ params }: { params: { idRole: string } }) => {

  const temp = params?.idRole?.split('.html') ?? [];
  const temp1 = temp[0]?.split('-');
  const roleId = temp1[temp1.length - 1];

  // Fetch Data Roles
  const listBlogByRole = await sendRequest<IBackendRes<IBlog>>({
    url: `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/blog/find/?value=${roleId}`,
    method: 'GET',
  })

  return (
    <div className="max-w-screen-2xl mx-auto px-8 py-[18rem] md:py-[20rem]">

      <div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
      >
        {
          listBlogByRole.data instanceof Array ?
            listBlogByRole.data?.map(item => (
              <BoxBlog
                key={item._id}
                blog={item}
              />
            ))
            :
            (<></>)
        }
      </div>
    </div>
  );
};

export default BlogPage;