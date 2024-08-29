import Image from "next/image";
import Link from "next/link";
import React from "react";

const SeekPartners = () => {
  const seekListData = [
    {
      id: 0,
      iconUrl: "/images/icons/seekIcon.svg",
      text: "An established customer base.",
    },
    {
      id: 1,
      iconUrl: "/images/icons/seekIcon.svg",
      text: "A valid registration and a website.",
    },
    {
      id: 2,
      iconUrl: "/images/icons/seekIcon.svg",
      text: "Team of sales and technical experts.",
    },
    {
      id: 3,
      iconUrl: "/images/icons/seekIcon.svg",
      text: "Demonstrated experience of Sales.",
    },
  ];
  return (
    <section className="lg:px-16 lg:py-[120px] py-[70px] relative bg-[#1A1A1A] lg:bg-[#ffffff]">
      <div className="px-4 lg:px-0 container mx-auto">
        <h2 className="text-white lg:text-[#111111] text-[32px] lg:text-[44px] leading-[40px] lg:leading-[57.2px] font-medium mb-12">
          We seek partners who share our passion for{" "}
          <span className="text-grad-blue">innovation</span>,{" "}
          <span className="text-grad-blue">value collaboration</span>, and{" "}
          <span className="text-grad-blue">aspire for excellence</span>.
          Together, let&apos;s foster growth, and achieve remarkable success.
        </h2>
        <div className="flex flex-wrap justify-between">
          <div className="w-full lg:w-[40%] flex-initial flex-shrink-0">
            <div className="relative mt-20 ml-10 lg:max-w-[400px]">
              <div className="absolute top-[-50px] left-[-50px] lg:w-[167px] lg:h-[167px] border-[6px] lg:border-[12px] border-[#1A1A1A] lg:border-white rounded-[12px] lg:bg-white overflow-hidden z-10">
                <Image
                  src="/images/top_image.png"
                  width={200}
                  height={200}
                  className="w-full h-auto rounded-[12px]"
                  alt="center"
                />
              </div>

              <div className="lg:w-[380px] w-full lg:h-[427px] relative">
                <Image
                  src="/images/center_image.png"
                  width={500}
                  height={500}
                  className="w-full h-auto rounded-[12px]"
                  alt="center"
                />
              </div>

              <div className="absolute bottom-[-50px] lg:right-[-50px] right-[0] lg:w-[167px] lg:h-[167px] border-[6px] lg:border-[12px] border-[#1A1A1A] lg:border-white rounded-[12px] lg:bg-white overflow-hidden z-10">
                <Image
                  src="/images/bottom_image.png"
                  width={200}
                  height={200}
                  className=" w-full h-auto rounded-[12px]"
                  alt="center"
                />
              </div>
            </div>
          </div>
          <div className="w-full lg:w-[40%] flex-initial flex-shrink-0 mt-8 lg:mt-0">
            <div className="pt-8">
              <p className="text-white lg:text-[#111111] text-[20px] leading-[30px] font-normal opacity-60 mb-6">
                We believe in a customer-centric ethic without and
                people-centric paradigm within. With a strong sense of
                community, ownership, and collaboration.
              </p>
              <ul>
                {seekListData?.map((items) => (
                  <li key={items.id}>
                    <Link
                      href="/"
                      className="relative flex items-center text-white lg:text-[#111111] text-[20px] lg:text-[24px] leading-[24px] lg:leading-[36px] font-normal py-6 border-b border-[#1111111F] after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-0 after:bg-[#26A0F8] hover:after:w-[40%] after:transition-all duration-[3s]"
                    >
                      <Image
                        src={items.iconUrl}
                        width={18}
                        height={20}
                        className="mr-6"
                        alt=""
                      />
                      {items.text}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SeekPartners;
