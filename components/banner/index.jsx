import React from "react";
import { Button } from "../ui/button";
import { Icons } from "../icons";
import Image from "next/image";

const Banner = () => {
  return (
    <div className="lg:py-20 py-16 lg:px-16 px-4 bg-hero-pattern h-[67dvh] flex items-center">
      <div className="container mx-auto">
        <div className="flex items-center justify-start">
          <div>
            <h3 className="lg:text-[64px] text-[44px] font-medium lg:leading-[64px] leading-[56px] text-white">
              TechChefz’s{" "}
              <span className="block lg:w-full w-2/3">Partner Program.</span>
            </h3>
            <p className="text-[20px] opacity-60 text-white lg:mt-8 mt-5 lg:mb-14 mb-12 w-2/5">
              Our Partner Program gives you access to one of the broadest SaaS
              product portfolios in the industry, training to build powerful
              product capabilities.
            </p>
            <Button variant="blueBtn" size="lg">
              Become a Partner <Icons.ArrowRight size={15} />
            </Button>
          </div>

          <div className="absolute right-[-15vw] opacity-40 top-[120px] w-7/12 mask1">
            <Image
              src="/images/hero-image.jpg"
              width={1000}
              height={1000}
              className="w-full h-full"
              alt="bg-image"
            />

            <div className="border-mask"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
