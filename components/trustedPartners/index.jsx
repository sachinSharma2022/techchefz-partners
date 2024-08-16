import Image from "next/image";
import React from "react";

const TrustedPartners = ({trustedPartnersData}) => {
  return (
    <section className="lg:px-16 py-16 relative bg-[#111111]">
      <div className="px-4 md:px-0 container mx-auto">
        <div className="flex flex-wrap items-center">
          <div className="w-full lg:w-[30%] xl:w-[20%] flex-initial flex-shrink-0 mb-8 md:mb-0 md:border-r md:border-[#FFFFFF1F]">
            <h2 className="text-white text-[16px] md:text-[20px] leading-[18.56px] md:leading-[23.2px] font-medium">
              Our trusted <br className="hidden md:block"/> Partners :
            </h2>
          </div>
          <div className="flex w-full lg:w-[60%] xl:w-[80%] flex-initial flex-shrink-0">
            {trustedPartnersData?.map((items) => (
              <div key={items?.id} className="w-[200px] h-[50px]">
                <Image
                  src={items?.logoUrl}
                  width={82}
                  height={40}
                  className="w-full h-full object-contain"
                  alt={items?.altText}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustedPartners;
