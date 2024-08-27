import { Icons } from "@/components/icons";
import { ImageCustom } from "@/components/ui/imageCustom";
import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header className="lg:px-16 px-4 py-3 top-0 left-0 w-full border-b border-[#23476c] sticky z-50 bg-marine h-20 flex items-center">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <Link href="/">
            <ImageCustom
              src="/images/logo-2.svg"
              width={153}
              height={40}
              alt="Logo"
              className="lg:w-auto w-2/3"
            />
          </Link>

          <div className="flex items-center gap-5">
            <Link href="/" className="text-white text-[16px]">
              Sign In
            </Link>
            <Link
              href="/"
              className="bg-info text-white text-[16px] px-6 py-2 rounded-[5px] hidden lg:flex items-center gap-2"
            >
              Register Now <Icons.ArrowRight width={14} />
            </Link>

            <button className="lg:hidden block min-w-10 leading-[0px]">
              <span className="w-2/3 bg-white h-[2px] mb-[3px] inline-block rounded"></span>
              <span className="w-2/3 bg-white h-[2px] inline-block rounded"></span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
