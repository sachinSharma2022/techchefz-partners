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
    <section className="bg-white lg:px-16 py-[120px] testimonial-card relative pb-[600px]">
      <div className="container mx-auto">
        <div className="text-dreamless-sleep">
          <h6 className="text-[16px] uppercase font-bold mb-3">Testimonials</h6>
          <h2 className="text-[44px] font-medium w-1/3 leading-[57px] mb-10">
            What our partners{" "}
            <span className="text-grad-blue">say about us.</span>
          </h2>

          <div className="absolute w-full bg-black">
            <Swiper
              slidesPerView={3}
              spaceBetween={30}
              breakpoints={{
                569: {
                  slidesPerView: 1,
                },
                767: {
                  slidesPerView: 2,
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
                delay: 2500,
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
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
