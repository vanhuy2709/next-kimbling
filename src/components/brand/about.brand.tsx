import { useState, useEffect } from "react";
import { sendRequest } from "@/utils/api";
import BoxBrand from "./box.brand";

const Brand = () => {

  const [listBlog, setListBlog] = useState<IBlog[]>([]);

  // Get Data Blog
  const getDataBlog = async () => {
    const res = await sendRequest<IBackendResBlog<IBlog[]>>({
      method: 'get',
      url: `http://localhost:8000/api/v1/blog/find-all`,
    })

    if (res.data) {
      setListBlog(res.data);
    }
  }

  useEffect(() => {
    getDataBlog();
  }, [])


  return (
    <div className="max-w-screen-2xl mx-auto px-4 mb-48">

      {/* List Blog Brand */}
      <div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
      >
        {
          listBlog.map(item =>
            (<BoxBrand key={item._id} blog={item} />)
          )
        }
      </div>
    </div>
  );
};

export default Brand;