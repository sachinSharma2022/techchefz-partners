"use client"
import Image from "next/image";
import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import { Autoplay, Navigation } from "swiper/modules";

import { Icons } from "../icons";

const ElevateExperience = ({ elevateExperienceData }) => {
  const navigationPrevRef = React.useRef(null);
  const navigationNextRef = React.useRef(null);
  return (
    <section className="lg:px-16 lg:py-[120px] py-[70px] relative  bg-[#1A1A1A]">
      <div className="px-4 lg:px-0 container mx-auto">
        <p className="text-white text-[16px] leading-[24px] font-normal lg:font-bold mb-4 uppercase opacity-80 tracking-widest">
          PERKS
        </p>
        <div className="flex flex-wrap items-end justify-between mb-14">
          <h2 className="text-white text-[32px] lg:text-[44px] leading-[40px] lg:leading-[57.2px] font-medium mb-5 lg:mb-0">
            Elevate Your{" "}
            <span className="text-grad-blue">
              Partner <br className="hidden lg:block" /> Experience
            </span>{" "}
            with us.
          </h2>
          <p className="w-full lg:w-[50%] text-white text-[16px] lg:text-[20px] leading-[24px] lg:leading-[30px] font-normal opacity-60">
            We believe in a customer-centric ethic without and people-centric
            paradigm within. With a strong sense of community, ownership, and
            collaboration.
          </p>
        </div>

        <div className="hidden lg:grid grid-cols-1 lg:grid-cols-3 gap-12">
          {elevateExperienceData?.map((items) => (
            <div
              key={items?.id}
              className="relative flex flex-col justify-between min-h-40 p-10 border border-[#1111111F] rounded-[12px] bg-[#111111]"
            >
              <div className="absolute right-0 top-0 w-full h-full z-[1]">
                <Image
                  src="/images/cardBg.png"
                  width={270}
                  height={55}
                  className="w-full h-full"
                  alt="bg-image"
                />
              </div>
              <div className="relative z-10 lg:mb-28 mb-16">
                <Image
                  src={items?.logo}
                  width={270}
                  height={55}
                  className="w-auto h-auto"
                  alt={items.altTxt}
                />
              </div>
              <div className="relative z-10 ">
                <div className="mb-4">
                  <h4 className="text-[#0066CC] text-[44px] leading-[52.8px] font-medium mb-2">
                    {items?.title}
                  </h4>
                  <p className="text-white text-[20px] leading-[30px] font-normal opacity-60">
                    {items?.text}
                  </p>
                </div>
                <div className="mt-4">
                  <h4 className="text-[#0066CC] text-[44px] leading-[52.8px] font-medium mb-2">
                    {items?.title2}
                  </h4>
                  <p className="text-white text-[20px] leading-[30px] font-normal opacity-60">
                    {items?.text2}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="lg:hidden">
          <Swiper
            spaceBetween={20}
            slidesPerView={1.2}
            navigation={{ nextEl: ".arrow-right", prevEl: ".arrow-left" }}
          modules={[Autoplay, Navigation]}
          autoplay={{
            delay: 25500,
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
            {elevateExperienceData?.map((items) => (
              <SwiperSlide key={items?.id}>
                <div className="relative flex flex-col justify-between min-h-40 p-10 border border-[#1111111F] rounded-[12px] bg-[#111111]">
                  <div className="absolute right-0 top-0 w-full h-full z-[1]">
                    <Image
                      src="/images/cardBg.png"
                      width={270}
                      height={55}
                      className="w-full h-full"
                      alt="bg-image"
                    />
                  </div>
                  <div className="relative z-10 mb-28">
                    <Image
                      src={items?.logo}
                      width={270}
                      height={55}
                      className="w-auto h-auto"
                      alt={items.altTxt}
                    />
                  </div>
                  <div className="relative z-10 ">
                    <div className="mb-4">
                      <h4 className="text-[#0066CC] text-[44px] leading-[52.8px] font-medium mb-2">
                        {items?.title}
                      </h4>
                      <p className="text-white text-[20px] leading-[30px] font-normal opacity-60">
                        {items?.text}
                      </p>
                    </div>
                    <div className="mt-4">
                      <h4 className="text-[#0066CC] text-[44px] leading-[52.8px] font-medium mb-2">
                        {items?.title2}
                      </h4>
                      <p className="text-white text-[20px] leading-[30px] font-normal opacity-60">
                        {items?.text2}
                      </p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="slider-controller testimonial-control">
        <button ref={navigationPrevRef} className="btn btn-arrow btn-back">
          <Icons.ArrowLeft size={20} className="asset-white" />
        </button>
        <button ref={navigationNextRef} className="btn btn-arrow btn-move">
          <Icons.ArrowRight size={20} />
        </button>
      </div>
        </div>
      </div>
    </section>
  );
};

export default ElevateExperience;
