"use client";
import Image from "next/image";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import { Autoplay } from "swiper/modules";

const TrustedPartners = ({ trustedPartnersData }) => {
  return (
    <section className="relative bg-[#111111] lg:h-[101px] flex items-center">
      <div className="px-4 md:px-0 container mx-auto py-5 lg:py-0">
        <div className="flex flex-wrap items-center">
          <div className="w-full lg:w-[30%] xl:w-[20%] flex-initial flex-shrink-0 mb-5 lg:mb-0 md:border-r md:border-[#FFFFFF1F]">
            <h2 className="text-white text-[16px] md:text-[20px] leading-[18.56px] md:leading-[23.2px] font-medium lg:pl-16">
              Our trusted <br className="hidden md:block" /> Partners :
            </h2>
          </div>
          <div className="flex w-full lg:w-[60%] xl:w-[80%] flex-initial flex-shrink-0 lg:pl-5">
            <Swiper
              breakpoints={{
                569: {
                  slidesPerView: 1,
                },
                767: {
                  slidesPerView: 3,
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
              {trustedPartnersData?.map((items) => (
                <SwiperSlide key={items?.id}>
                  <div className="w-[200px] h-[50px]">
                    <Image
                      src={items?.logoUrl}
                      width={82}
                      height={40}
                      className="w-full h-full object-contain"
                      alt={items?.altText}
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustedPartners;
