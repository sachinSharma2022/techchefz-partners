"use client";
import Image from "next/image";
import React from "react";
// import required modules
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import { Autoplay, Navigation } from "swiper/modules";
import { Icons } from "@/components/icons";

const TestimonialCard = () => {
  const navigationPrevRef = React.useRef(null);
  const navigationNextRef = React.useRef(null);

  const cardData = [
    {
      // userImage: "/images/user.jpg",
      name: "Jamie Olga",
      description:
        "We believe in a customer-centric ethic without and people-centric paradigm within.  With a strong sense of community, ownership, and collaboration our people work.",
      designation: "VP of Revenue Operations",
    },
    {
      // userImage: "/images/user.jpg",
      name: "Jamie Olga",
      description:
        "We believe in a customer-centric ethic without and people-centric paradigm within.  With a strong sense of community, ownership, and collaboration our people work.",
      designation: "VP of Revenue Operations",
    },
    {
      // userImage: "/images/user.jpg",
      name: "Jamie Olga",
      description:
        "We believe in a customer-centric ethic without and people-centric paradigm within.  With a strong sense of community, ownership, and collaboration our people work.",
      designation: "VP of Revenue Operations",
    },
    {
      // userImage: "/images/user.jpg",
      name: "Jamie Olga",
      description:
        "We believe in a customer-centric ethic without and people-centric paradigm within.  With a strong sense of community, ownership, and collaboration our people work.",
      designation: "VP of Revenue Operations",
    },
    {
      // userImage: "/images/user.jpg",
      name: "Jamie Olga",
      description:
        "We believe in a customer-centric ethic without and people-centric paradigm within.  With a strong sense of community, ownership, and collaboration our people work.",
      designation: "VP of Revenue Operations",
    },
    {
      // userImage: "/images/user.jpg",
      name: "Jamie Olga",
      description:
        "We believe in a customer-centric ethic without and people-centric paradigm within.  With a strong sense of community, ownership, and collaboration our people work.",
      designation: "VP of Revenue Operations",
    },
  ];
  return (
    <>
      <div className="w-full bg-black absolute">
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          breakpoints={{
            300: {
              slidesPerView: 1,
            },
            1200: {
              slidesPerView: 3,
            },
            1500: {
              slidesPerView: 4,
            },
            2400: {
              slidesPerView: 5,
            },
            4000: {
              slidesPerView: 7,
            },
          }}
          className="mySwiper"
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
              <div className="lg:text-dreamless-sleep lg:bg-beluga text-white border rounded-[20px] lg:flex w-full lg:h-[466px] pb-[80px] lg:pb-[0] overflow-hidden testimonial-slide">
                <div className="lg:min-w-[300px] lg:h-[466px] h-[45px] w-[45px] lg:w-[300px] absolute bottom-5 lg:bottom-0 left-6 lg:left-0 lg:relative testimonial-img">
                  <Image
                    src="/images/user.jpg"
                    className="object-cover h-full"
                    width={373}
                    height={466}
                    alt=""
                  />
                </div>

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
                          fill="#0066CC"
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
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="slider-controller testimonial-control">
        <button ref={navigationPrevRef} className="btn btn-arrow btn-back">
          <Icons.ArrowLeft size={20} className="asset-white" />
        </button>
        <button ref={navigationNextRef} className="btn btn-arrow btn-move">
          <Icons.ArrowRight size={20} />
        </button>
      </div>
    </>
  );
};

export default TestimonialCard;
