import Image from "next/image";
import React from "react";

const TestimonialCard = ({ description, name, designation }) => {
  return (
    <div className="lg:text-dreamless-sleep lg:bg-beluga text-white border rounded-[20px] lg:flex w-full lg:h-[466px] pb-[80px] lg:pb-[0]">
      <div className="lg:min-w-[300px] lg:h-[466px] h-[45px] w-[45px] lg:w-[300px] absolute bottom-5 lg:bottom-0 left-6 lg:left-0 lg:relative testimonial-img">
        <Image
          src="/images/user.jpg"
          className="lg:rounded-s-[20px] rounded-[50px] object-cover h-full"
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
          <span className="opacity-60">{description}</span>
        </p>

        <div className="mt-8">
          <div className="text-[20px] font-medium"> {name}</div>
          <div className="text-[16px] font-normal opacity-60">
            {designation}
          </div>
          <div className="mt-4">
            <Image src="/images/atcs.png" width={82} height={24} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
