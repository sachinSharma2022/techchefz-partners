"use client";
import Image from "next/image";
import React from "react";
import PartnershipCard from "./partnershipCard";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import { Autoplay, Navigation } from "swiper/modules";
import { Icons } from "../icons";

const PathToPartnership = () => {
  const navigationPrevRef = React.useRef(null);
  const navigationNextRef = React.useRef(null);

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
    <section className="lg:px-16 lg:pt-[120px] py-[70px] relative bg-[#1F1F1F] lg:bg-white overflow-x-hidden">
      <div className="px-4 lg:px-0 lg:pr-4 pr-0  container mx-auto">
        <div className="flex flex-wrap justify-between">
          <div className="w-full lg:w-[50%] flex-initial flex-shrink-0">
            <div className="mb-14">
              <p className="text-[#FFFFFF] lg:text-[#111111] text-[16px] leading-[24px] font-normal lg:font-bold mb-4 uppercase opacity-80">
                PATH TO PARTNERSHIP
              </p>
              <h2 className="text-white lg:text-[#111111] text-[32px] lg:text-[44px] leading-[40px] lg:leading-[57.2px] font-medium mb-4">
                Tailored Opportunities <br /> Aligned with{" "}
                <span className="text-grad-blue">Your Expertise</span>
              </h2>
              <p className="text-white lg:text-[#111111] text-[20px] leading-[30px] font-normal opacity-60">
                Choose a path aligned with your strengths, and join us in
                shaping innovative solutions. Together, we&apos;ll amplify
                success, foster collaboration, and navigate the future of
                technology.
              </p>
            </div>
          </div>
          <div className="w-full lg:w-[40%] flex-initial flex-shrink-0 hidden lg:block">
            <Image
              src="/images/partnership.png"
              width={200}
              height={95}
              className="w-full h-auto rounded-[12px]"
              alt="globalLogo"
            />
          </div>
        </div>

        <div className="lg:absolute w-full lg:bottom-40">
          <Swiper
            slidesPerView={4.4}
            breakpoints={{
              300: {
                slidesPerView: 1.3,
              },
              1200: {
                slidesPerView: 3,
              },
              1500: {
                slidesPerView: 4.4,
              },
              2400: {
                slidesPerView: 5,
              },
              4000: {
                slidesPerView: 7,
              },
            }}
            spaceBetween={30}
            navigation={{ nextEl: ".arrow-right", prevEl: ".arrow-left" }}
            modules={[Autoplay, Navigation]}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            onSwiper={(swiper) => {
              swiper.params.navigation.prevEl = navigationPrevRef.current;
              swiper.params.navigation.nextEl = navigationNextRef.current;
              swiper.navigation.destroy();
              swiper.navigation.init();
              swiper.navigation.update();
            }}
          >
            {cardData.map((items) => (
              <SwiperSlide className="max-w-72" key={items?.id}>
                <PartnershipCard imgUrl={items.imgUrl} title={items.title} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="slider-controller lg:top-4 relative">
          <button ref={navigationPrevRef} className="btn btn-arrow btn-back">
            <Icons.ArrowLeft size={20} className="asset-white" />
          </button>
          <button ref={navigationNextRef} className="btn btn-arrow btn-move">
            <Icons.ArrowRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default PathToPartnership;
