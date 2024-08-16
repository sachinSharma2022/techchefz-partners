import React from "react";
import GlobalPartnersCard from "./globalPartnersCard";

const GlobalPartners = () => {
  return (
    <section className="lg:px-16 py-16 relative bg-[#111111]">
      <div className="px-4 md:px-0 container mx-auto">
        <p className="text-white text-[16px] leading-[24px] font-normal md:font-bold mb-4 opacity-80">
          CURRENT PARTNERS
        </p>
        <div className="flex items-end justify-between mb-14">
          <h2 className="text-white text-[32px] md:text-[44px] leading-[40px] md:leading-[57.2px] font-medium">
            Check out our <br />{" "}
            <span className="text-grad-blue">B2B Global Partner</span>
          </h2>
        </div>
        <div className="flex">
          <GlobalPartnersCard />
        </div>
      </div>
    </section>
  );
};

export default GlobalPartners;
