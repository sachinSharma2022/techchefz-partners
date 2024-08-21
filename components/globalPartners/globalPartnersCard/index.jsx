import Image from "next/image";
import React from "react";

const GlobalPartnersCard = ({title, imgUrl, description}) => {
  return (
    <div className="p-3 border border-[#FFFFFF1F] rounded-[20px] bg-[#111111] w-full">
      <div className="text-center h-[100px] mt-12 mb-14">
        <Image
          src={imgUrl}
          width={200}
          height={95}
          className="w-full h-full object-contain"
          alt="globalLogo"
        />
      </div>
      <div className="p-5 rounded-[12px] bg-[#1F1F1F]">
        <h4 className="text-white text-[24px] leading-[28.8px] font-medium mb-2">
        {title}
        </h4>
        <p className="text-white text-[16px] leading-[24px] font-normal"> 
        {description}
        </p>
      </div>
    </div>
  );
};

export default GlobalPartnersCard;
