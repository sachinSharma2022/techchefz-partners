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
    <section className="lg:pl-16 py-[120px] relative bg-[#111111] pb-[500px] overflow-x-hidden">
      <div className="container mx-auto">
        <p className="text-white text-[16px] leading-[24px] font-normal md:font-bold mb-4 opacity-80">
          CURRENT PARTNERS
        </p>
        <div className="flex items-end justify-between mb-14">
          <h2 className="text-white text-[32px] md:text-[44px] leading-[40px] md:leading-[57.2px] font-medium">
            Check out our <br />{" "}
            <span className="text-grad-blue">B2B Global Partner</span>
          </h2>
        </div>

        <div className="absolute w-full">
          <Swiper
            slidesPerView={4.4}
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
