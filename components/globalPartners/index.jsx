"use client";
import React from "react";
import GlobalPartnersCard from "./globalPartnersCard";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import { Autoplay } from "swiper/modules";

const GlobalPartners = () => {
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
    <section className="lg:pl-16 lg:py-[120px] py-[70px] pl-5 relative bg-[#111111] overflow-x-hidden">
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

        <div className="w-full">
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
            className="mySwiper"
            modules={[Autoplay]}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
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
      </div>
    </section>
  );
};

export default GlobalPartners;
