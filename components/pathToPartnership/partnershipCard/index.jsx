import Image from "next/image";
import React from "react";

const PartnershipCard = () => {
  return (
    <div className="p-8 border border-[#1111111F] rounded-[20px] bg-[#111111] md:bg-[#F1F1F1]">
      <div className="w-[56px] h-[56px]">
        <Image
          src="/images/appDev.png"
          width={56}
          height={56}
          className="w-full h-full object-contain"
          alt="globalLogo"
        />
      </div>
      <h4 className="text-white md:text-[#111111] text-[20px] leading-[28px] md:leading-[24px] font-medium mt-16">
        Customer App Development
      </h4>
    </div>
  );
};

export default PartnershipCard;
