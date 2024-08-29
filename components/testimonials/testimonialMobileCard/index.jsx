"use client";
import Image from "next/image";
import React, { useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

// import required modules
import { FreeMode, Navigation, Thumbs } from "swiper/modules";

const TestimonialMobileCard = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const cardData = [
    {
      userImage: "/images/user.jpg",
      name: "Jamie Olga",
      description:
        "We believe in a customer-centric ethic without and people-centric paradigm within.  With a strong sense of community, ownership, and collaboration our people work.",
      designation: "VP of Revenue Operations",
    },
    {
      userImage: "/images/user.jpg",
      name: "Jamie Olga",
      description:
        "We believe in a customer-centric ethic without and people-centric paradigm within.  With a strong sense of community, ownership, and collaboration our people work.",
      designation: "VP of Revenue Operations",
    },
    {
      userImage: "/images/user.jpg",
      name: "Jamie Olga",
      description:
        "We believe in a customer-centric ethic without and people-centric paradigm within.  With a strong sense of community, ownership, and collaboration our people work.",
      designation: "VP of Revenue Operations",
    },
    {
      userImage: "/images/user.jpg",
      name: "Jamie Olga",
      description:
        "We believe in a customer-centric ethic without and people-centric paradigm within.  With a strong sense of community, ownership, and collaboration our people work.",
      designation: "VP of Revenue Operations",
    },
    {
      userImage: "/images/user.jpg",
      name: "Jamie Olga",
      description:
        "We believe in a customer-centric ethic without and people-centric paradigm within.  With a strong sense of community, ownership, and collaboration our people work.",
      designation: "VP of Revenue Operations",
    },
    {
      userImage: "/images/user.jpg",
      name: "Jamie Olga",
      description:
        "We believe in a customer-centric ethic without and people-centric paradigm within.  With a strong sense of community, ownership, and collaboration our people work.",
      designation: "VP of Revenue Operations",
    },
  ];
  return (
    <div className="p-5">
      <div className="lg:text-dreamless-sleep lg:bg-beluga text-white border rounded-[20px] pb-10">
        <Swiper
          style={{
            "--swiper-navigation-color": "#fff",
            "--swiper-pagination-color": "#fff",
          }}
          spaceBetween={10}
          thumbs={{ swiper: thumbsSwiper }}
          modules={[FreeMode, Navigation, Thumbs]}
          className="mySwiper2"
        >
          {cardData.map((items) => (
            <SwiperSlide key={items?.id}>
              <div className="lg:p-7 p-5 w-full">
                <p className="text-[20px]">
                  <span className="mb-3 block">
                    <svg
                      width="24"
                      height="20"
                      viewBox="0 0 24 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M-1.74846e-06 20L-8.10395e-07 9.26984C-2.83083e-07 3.23809 2.98413 0.126983 9.01587 7.88193e-07L10.3492 9.04756e-07L10.3492 5.01587L8.95238 5.07936C6.92064 5.20635 5.90476 6.47619 5.90476 8.95238L5.90476 9.96825L10.3492 9.96825L10.3492 20L-1.74846e-06 20ZM23.6825 5.01587L22.2857 5.07937C20.254 5.20635 19.3016 6.47619 19.3016 8.95238L19.3016 9.96826L23.6825 9.96826L23.6825 20L13.3333 20L13.3333 9.26984C13.3333 3.2381 16.3175 0.126984 22.3492 1.95383e-06L23.6825 2.07039e-06L23.6825 5.01587Z"
                        fill="#FD7000"
                      />
                    </svg>
                  </span>
                  <span className="opacity-60">{items.description}</span>
                </p>

                <div className="mt-8">
                  <div className="text-[20px] font-medium"> {items.name}</div>
                  <div className="text-[16px] font-normal opacity-60">
                    {items.designation}
                  </div>
                  <div className="mt-4">
                    <Image
                      src="/images/atcs.png"
                      width={82}
                      height={24}
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="px-5 mt-8 pr-20">
        <Swiper
          onSwiper={setThumbsSwiper}
          spaceBetween={10}
          slidesPerView={4}
          freeMode={true}
          watchSlidesProgress={true}
          modules={[FreeMode, Navigation, Thumbs]}
          className="testimonials-thumb"
        >
          {cardData.map((items) => (
            <SwiperSlide key={items?.id}>
              <div className="thumb-img">
                <Image
                  src={items.userImage}
                  className="object-cover absolute h-full"
                  width={300}
                  height={300}
                  alt=""
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        </div>
      </div>
    </div>
  );
};

export default TestimonialMobileCard;
