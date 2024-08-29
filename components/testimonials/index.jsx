"use client";
import React from "react";
import TestimonialCard from "./testimonialCard";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import { Autoplay } from "swiper/modules";

const Testimonials = () => {
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
    <section className="lg:bg-white lg:py-[120px] py-[70px] testimonial-card relative overflow-x-hidden">
      <div className="container mx-auto">
        <div className="lg:text-dreamless-sleep text-white lg:px-16 px-5">
          <h6 className="text-[16px] uppercase lg:font-bold font-normal lg:mb-3 mb-2 opacity-80">Testimonials</h6>
          <h2 className="lg:text-[44px] text-[32px] font-medium lg:w-1/3 lg:leading-[57px] leading-[40px] mb-10">
            What our partners{" "}
            <span className="text-grad-blue">say about us.</span>
          </h2>
        </div>
      </div>
      <div className="w-full bg-black lg:pl-16 lg:px-0 px-5">
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
          modules={[Autoplay]}
          autoplay={{
            delay: 25500,
            disableOnInteraction: false,
          }}
        >
          {cardData.map((items) => (
            <SwiperSlide key={items?.id}>
              <TestimonialCard
                useImage={items.userImage}
                description={items.description}
                name={items.name}
                designation={items.designation}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;
