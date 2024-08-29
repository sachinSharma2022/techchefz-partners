import Image from "next/image";
import React from "react";

const WhyPartnerWithUs = ({ whyPartnerWithUsData }) => {
  return (
    <section className="lg:px-16 lg:py-[120px] py-[70px] relative bg-secondary">
      <div className="px-4 md:px-0 container mx-auto">
        <div className="md:max-w-[993px] mx-auto text-center mb-14">
          <p className="text-white text-[16px] leading-[24px] font-normal md:font-bold uppercase mb-4 opacity-80">
            THE NEEDS
          </p>
          <h2 className="text-white text-[32px] md:text-[44px] leading-[40px] md:leading-[57.2px] font-medium mb-4">
            Why <span className="text-grad-blue">Partner</span> with us ?
          </h2>
          <p className="text-white text-[16px] md:text-[20px] leading-[24px] md:leading-[30px] font-normal opacity-60">
            We believe in a customer-centric ethic without and people-centric
            paradigm within. With a strong sense of community, ownership, and
            collaboration our people work in a spirit of co-creation.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 md:gap-12">
          {whyPartnerWithUsData?.map((items) => (
            <div key={items.id} className="text-center py-8 last-of-type:pb-0">
              <div className="w-full h-[147px] mb-10">
                <Image
                  src={items.imgUrl}
                  width={160}
                  height={147}
                  className="w-full h-full object-contain"
                  alt={items.altText}
                />
              </div>
              <div className="py-3">
                <h4 className="text-white text-[20px] md:text-[24px] leading-[28.8px] font-medium mb-4">
                  {items.title}
                </h4>
                <p className="text-white text-[16px] leading-[24px] font-normal opacity-60">
                  {items.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyPartnerWithUs;
