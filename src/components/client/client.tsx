'use client'
import { useEffect, useState } from "react";
import Title from "../title/title";
import { sendRequest } from "@/utils/api";
import Image from "next/image";

const Client = () => {
  const [listBrand, setListBrand] = useState<IBrand[]>([]);
  const [meta, setMeta] = useState<IMeta>({
    current: 1,
    pageSize: 50,
    pages: 0,
    total: 0
  })

  // Get Data Brand
  const getDataBrand = async () => {
    const res = await sendRequest<IBackendRes<IBrand>>({
      method: 'GET',
      url: `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/brand`,
      queryParams: {
        current: meta.current,
        pageSize: meta.pageSize
      }
    })

    if (res?.data) {
      setListBrand(res?.data?.result);
    }
  }

  useEffect(() => {
    getDataBrand();
  }, [])

  return (
    <div>
      {/* Wrapper */}
      <div className="max-w-screen-2xl mx-auto px-4 py-48">
        {/* Title */}

        <Title name="clients" color="white" />

        <div className="grid grid-cols-2 md:grid-cols-5 gap-20">
          {listBrand.map((brand: IBrand) => (
            <div key={brand._id} className="flex items-center justify-center">
              <Image
                src={`${process.env.NEXT_PUBLIC_BACKEND_URL}/images/${brand.urlImage}`}
                alt="logo-brand"
                className="object-contain"
                width={160}
                height={160}
              />
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Client;