'use client'
import Image from "next/image";
import { useRouter } from "next/navigation";

const BlogHeader = () => {
  const router = useRouter();

  return (
    <div
      className="m-2 cursor-pointer"
      onClick={() => router.push('/')}
    >
      <div className="w-full h-14 relative">
        <Image
          src={'/user/user-logo.jpg'}
          alt=""
          fill
          sizes="100%"
          style={{ objectFit: 'cover' }}
        />
      </div>
    </div>
  );
};

export default BlogHeader;