import { useState, useEffect } from "react";
import { sendRequest } from "@/utils/api";
import BoxBrand from "./box.brand";

const Brand = () => {

  const [listBlog, setListBlog] = useState<IBlog[]>([]);
  const [meta, setMeta] = useState({
    current: 1,
    pageSize: 50,
    pages: 0,
    total: 0
  });

  // Get Data Blog
  const getDataBlog = async () => {
    const res = await sendRequest<IBackendRes<IBlog>>({
      method: 'get',
      url: `http://localhost:8000/api/v1/blog`,
      queryParams: {
        current: meta.current,
        pageSize: meta.pageSize,
      }
    })

    if (res.data) {
      setListBlog(res.data?.result);
      setMeta({
        current: res.data?.meta.current!,
        pageSize: res.data?.meta.pageSize!,
        pages: res.data?.meta.pages,
        total: res.data?.meta.total,
      })
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
          listBlog.map(item => {
            if (item.isFeatured) {
              return (
                <BoxBrand />
              )
            }
          })
        }
      </div>
    </div>
  );
};

export default Brand;