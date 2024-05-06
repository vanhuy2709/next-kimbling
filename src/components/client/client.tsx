'use client'
import { useEffect, useState } from "react";
import Title from "../title/title";
import { sendRequest } from "@/utils/api";
import Image from "next/image";

const Client = () => {
  const [listBrand, setListBrand] = useState<IBrand[]>([]);

  // Get Data Brand
  const getDataBrand = async () => {
    const res = await sendRequest<IBackendRes<IBrand>>({
      method: 'GET',
      url: 'https://kimtuyen.blog/api/v1/brand'
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
                src={`https://kimtuyen.blog/images/${brand.urlImage}`}
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