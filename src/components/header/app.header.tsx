'use client'
import Link from "next/link";
import Image from "next/image";
import { menu } from "@/data/menu";
import './app.header.css';
import { usePathname } from "next/navigation";

// Import font
import { tungSten, sourceSerif } from "@/data/font";

const AppHeader = () => {
  const pathname = usePathname();

  return (
    <header className="flex items-center justify-between pt-4 px-4 lg:p-8 fixed top-0 w-full">
      {/* Logo */}
      <div className="flex items-center gap-6">
        <Image
          src={'/user/user-logo.jpg'}
          alt=""
          width="0"
          height="0"
          sizes="100vw"
          priority
          className="cursor-pointer w-10 h-10 object-contain"
          id="header__logo--img"
        />
        <h4
          className={`${sourceSerif.className} text-2xl`}
          id="header__logo--title"
        >
          Kim Tuyến
        </h4>
      </div>

      {/* Menu Route */}
      <div className="flex flex-col gap-2 md:gap-4 text-right">
        {
          menu.map(item => (
            <Link
              key={item.id}
              href={item.path}
              className={
                `text-black text-xs md:text-sm leading-4 tracking-[0.5rem] uppercase 
                  ${tungSten.className} 
                  ${pathname === item.path ? 'hidden' : 'block'}`}
            >
              {item.name}
            </Link>
          ))
        }
      </div>
    </header>
  );
};

export default AppHeader;