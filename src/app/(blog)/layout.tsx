import BlogHeader from "@/components/header/blog.header";
import BlogFooter from "@/components/footer/blog.footer";

export default function RootLayout(
  { children, }: { children: React.ReactNode; }
) {

  return (
    <div className="flex h-screen">
      {/* Side Header */}
      <div className="w-20 bg-[#0A0A0A] h-full fixed left-0 top-0 hidden lg:block">
        <BlogHeader />
      </div>

      {/* Main Content */}
      <div className="flex-1 lg:px-20 bg-black">
        {children}
      </div>

      {/* Side Footer */}
      <div className="w-20 bg-[#0A0A0A] h-full fixed right-0 top-0 hidden lg:block">
        <BlogFooter />
      </div>

    </div>
  );
}
