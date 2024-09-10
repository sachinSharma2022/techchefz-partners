"use client";
import React from "react";
import GlobalPartnersCard from "./globalPartnersCard";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import { Autoplay, Navigation } from "swiper/modules";
import { Icons } from "../icons";

const GlobalPartners = () => {
  const navigationPrevRef = React.useRef(null);
  const navigationNextRef = React.useRef(null);
  const cardData = [
    {
      imgUrl: "/images/Wondrlap_1.png",
      title: "WondrLab",
      description: "We are in the business of providing brand strategy",
    },
    {
      imgUrl: "/images/Wondrlap_1.png",
      title: "ATCS",
      description: "We are in the business of providing brand strategy",
    },
    {
      imgUrl: "/images/Wondrlap_1.png",
      title: "DWAO",
      description: "We are in the business of providing brand strategy",
    },
    {
      imgUrl: "/images/Wondrlap_1.png",
      title: "22 Feet",
      description: "We are in the business of providing brand strategy",
    },
    {
      imgUrl: "/images/Wondrlap_1.png",
      title: "DWAO",
      description: "We are in the business of providing brand strategy",
    },
    {
      imgUrl: "/images/Wondrlap_1.png",
      title: "WondrLab",
      description: "We are in the business of providing brand strategy",
    },
  ];
  return (
    <section className="lg:pl-16 lg:py-[120px] py-[70px] pl-5 relative bg-[#111111] overflow-x-hidden lg:h-[800px]">
      <div className="container mx-auto">
        <p className="text-white text-[16px] leading-[24px] font-normal lg:font-bold mb-4 opacity-80">
          CURRENT PARTNERS
        </p>
        <div className="flex items-end justify-between lg:mb-14 mb-10">
          <h2 className="text-white text-[32px] lg:text-[44px] leading-[40px] lg:leading-[57.2px] font-medium">
            Check out our <br />{" "}
            <span className="text-grad-blue">B2B Global Partner</span>
          </h2>
        </div>

        <div className="w-full lg:absolute">
          <Swiper
            slidesPerView={4.4}
            breakpoints={{
              300: {
                slidesPerView: 1.3,
              },
              1200: {
                slidesPerView: 3,
              },
              1300: {
                slidesPerView: 4,
              },
              1600: {
                slidesPerView: 5,
              },
              2000: {
                slidesPerView: 6,
              },
            }}
            spaceBetween={30}
            className="global-partner-slider"
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
            {cardData.map((items) => (
              <SwiperSlide key={items?.id}>
                <GlobalPartnersCard
                  title={items.title}
                  imgUrl={items.imgUrl}
                  description={items.description}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="slider-controller testimonial-control dark-theme">
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

export default GlobalPartners;
