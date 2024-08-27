"use client";
import Image from "next/image";
import React from "react";
import PartnershipCard from "./partnershipCard";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import { Autoplay } from "swiper/modules";

const PathToPartnership = () => {
  const cardData = [
    {
      imgUrl: "/images/appDev.png",
      title: "Customer App Development",
    },
    {
      imgUrl: "/images/appDev.png",
      title: "Marketing & Sales Strategy",
    },
    {
      imgUrl: "/images/appDev.png",
      title: "Business Analytics & Intelligence",
    },
    {
      imgUrl: "/images/appDev.png",
      title: "Cloud Solutions & Dev Sec Ops",
    },
    {
      imgUrl: "/images/appDev.png",
      title: "Enterprise Tech Solutions",
    },
    {
      imgUrl: "/images/appDev.png",
      title: "Customer App Development",
    },
  ];
  return (
    <section className="lg:px-16 py-[120px] relative bg-[#1F1F1F] md:bg-white">
      <div className="px-4 md:px-0 container mx-auto">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-[50%] flex-initial flex-shrink-0">
            <div className="mb-14">
              <p className="text-[#FFFFFF] md:text-[#111111] text-[16px] leading-[24px] font-normal md:font-bold mb-4 uppercase opacity-80">
                PATH TO PARTNERSHIP
              </p>
              <h2 className="text-white md:text-[#111111] text-[32px] md:text-[44px] leading-[40px] md:leading-[57.2px] font-medium mb-4">
                Tailored Opportunities <br /> Aligned with{" "}
                <span className="text-grad-blue">Your Expertise</span>
              </h2>
              <p className="text-white md:text-[#111111] text-[20px] leading-[30px] font-normal opacity-60">
                Choose a path aligned with your strengths, and join us in
                shaping innovative solutions. Together, we&apos;ll amplify
                success, foster collaboration, and navigate the future of
                technology.
              </p>
            </div>
          </div>
          <div className="w-full md:w-[40%] flex-initial flex-shrink-0 hidden md:block">
            <Image
              src="/images/partnership.png"
              width={200}
              height={95}
              className="w-full h-auto rounded-[12px]"
              alt="globalLogo"
            />
          </div>
        </div>

        <div className="absolute w-full bottom-40">
          <Swiper
            slidesPerView={4.4}
            spaceBetween={30}
            modules={[Autoplay]}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
          >
            {cardData.map((items) => (
              <SwiperSlide className="max-w-72" key={items?.id}>
                <PartnershipCard imgUrl={items.imgUrl} title={items.title} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default PathToPartnership;
