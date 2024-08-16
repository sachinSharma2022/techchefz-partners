import Image from "next/image";
import React from "react";

const GlobalPartnersCard = () => {
  return (
    <div className="p-3 border border-[#FFFFFF1F] rounded-[20px] bg-[#111111]">
      <div className="text-center h-[100px] mt-12 mb-14">
        <Image
          src="/images/Wondrlap_1.png"
          width={200}
          height={95}
          className="w-full h-full object-contain"
          alt="globalLogo"
        />
      </div>
      <div className="p-5 rounded-[12px] bg-[#1F1F1F]">
        <h4 className="text-white text-[24px] leading-[28.8px] font-medium mb-2">
          WondrLab
        </h4>
        <p className="text-white text-[16px] leading-[24px] font-normal">We're in the business of providing brand strategy.</p>
      </div>
    </div>
  );
};

export default GlobalPartnersCard;
