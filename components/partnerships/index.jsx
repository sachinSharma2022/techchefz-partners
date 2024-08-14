import React from "react";
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import Image from "next/image";

const Partnerships = () => {
  const categories = [
    {
      name: "Digital agency Partner",
      posts: [
        {
          id: 1,
          title: "Comprehensive Services",
          details:
            "Showcase the range of digital marketing services offered, including web design, SEO, PPC, social media management, and more.",
        },
        {
          id: 2,
          title: "Proven Track Record",
          details:
            "Offer personalized support and resources to assist partners in delivering exceptional results to clients.",
        },
        {
          id: 3,
          title: "Strategic Collaboration",
          details:
            "Emphasize the opportunity for strategic collaboration to enhance both parties' offerings and drive mutual growth.",
        },
      ],
    },
    {
      name: "Systematic relation Partner",
      posts: [
        {
          id: 1,
          title: "Comprehensive Services",
          details:
            "Showcase the range of digital marketing services offered, including web design, SEO, PPC, social media management, and more.",
        },
        {
          id: 2,
          title: "Proven Track Record",
          details:
            "Offer personalized support and resources to assist partners in delivering exceptional results to clients.",
        },
        {
          id: 3,
          title: "Strategic Collaboration",
          details:
            "Emphasize the opportunity for strategic collaboration to enhance both parties' offerings and drive mutual growth.",
        },
      ],
    },
    {
      name: "Product Partner",
      posts: [
        {
          id: 1,
          title: "Comprehensive Services",
          details:
            "Showcase the range of digital marketing services offered, including web design, SEO, PPC, social media management, and more.",
        },
        {
          id: 2,
          title: "Proven Track Record",
          details:
            "Offer personalized support and resources to assist partners in delivering exceptional results to clients.",
        },
        {
          id: 3,
          title: "Strategic Collaboration",
          details:
            "Emphasize the opportunity for strategic collaboration to enhance both parties' offerings and drive mutual growth.",
        },
      ],
    },
  ];

  return (
    <div className="lg:px-16 py-20 relative bg-secondary text-dreamless-sleep text-white">
      <div className="container mx-auto">
        <div className="flex items-center">
          <div>
            <h6 className="text-[1rem] uppercase font-bold mb-3 opacity-80">
              Types of Partnerships
            </h6>
            <h2 className="text-[2.75rem] font-medium leading-[3.5625rem] mb-10">
              Explore <span>Partnership Possibilities</span> with TechChefz.
            </h2>
          </div>
          <p className="text-white opacity-60 text-[1.25rem] w-1/3 font-normal leading-[1.875rem] ">
            Partnership avenues tailored to your needs and goals. Join us in
            shaping innovation, driving growth together.
          </p>
        </div>

        <div className="bg-eerie-black px-7 rounded-[12px]">
          <div className="flex w-full justify-center">
            <div className="w-full">
              <TabGroup>
                <TabList className="flex gap-4 justify-center border-b-[1px] border-[#353535]">
                  {categories.map(({ name, icon }) => (
                    <Tab
                      key={name}
                      className="text-[20px] relative after:w-[1px] after:h-[30px] after:bg-[#D9D9D9] after:opacity-5 last:after:hidden after:absolute after:right-0 w-full justify-center font-semibold flex items-center text-white/80 focus:outline-none data-[selected]:border-b-2 data-[selected]:text-white  border-b-2 border-transparent data-[selected]:border-[#1e8af2] py-6"
                    >
                      <span className="mr-3">
                        <svg
                          width="22"
                          height="23"
                          viewBox="0 0 22 23"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M17.4644 5.09723L20.0674 15.5154C20.1822 15.9709 20.1363 16.4521 19.9375 16.8777C19.7387 17.3033 19.3992 17.6473 18.9762 17.8517L11.76 21.3039C11.4908 21.433 11.196 21.5 10.8975 21.5C10.5989 21.5 10.3041 21.433 10.0349 21.3039L2.81978 17.8527C2.3968 17.6484 2.05726 17.3043 1.85846 16.8787C1.65966 16.4531 1.61377 15.9719 1.72853 15.5164L4.33255 5.09723C4.4068 4.79883 4.54785 4.52119 4.74506 4.28525C4.94227 4.04931 5.19048 3.86124 5.47098 3.73523L10.0821 1.67376C10.3387 1.5592 10.6165 1.5 10.8975 1.5C11.1784 1.5 11.4563 1.5592 11.7128 1.67376L16.324 3.73523C16.8921 3.98753 17.3116 4.49007 17.4644 5.09723Z"
                            stroke="url(#paint0_linear_1_1085)"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M17.0517 4.3915L11.7206 6.77501C11.4621 6.89053 11.1822 6.95024 10.8991 6.95024C10.6159 6.95024 10.336 6.89053 10.0775 6.77501L4.74438 4.39047"
                            stroke="url(#paint1_linear_1_1085)"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M10.8978 6.95592V21.499"
                            stroke="url(#paint2_linear_1_1085)"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <defs>
                            <linearGradient
                              id="paint0_linear_1_1085"
                              x1="1.88208"
                              y1="7.7"
                              x2="11.8928"
                              y2="12.596"
                              gradientUnits="userSpaceOnUse"
                            >
                              <stop stop-color="#1E8AF2" />
                              <stop offset="1" stop-color="#05BED7" />
                            </linearGradient>
                            <linearGradient
                              id="paint1_linear_1_1085"
                              x1="4.88797"
                              y1="5.184"
                              x2="5.99223"
                              y2="7.99686"
                              gradientUnits="userSpaceOnUse"
                            >
                              <stop stop-color="#1E8AF2" />
                              <stop offset="1" stop-color="#05BED7" />
                            </linearGradient>
                            <linearGradient
                              id="paint2_linear_1_1085"
                              x1="10.9094"
                              y1="11.4643"
                              x2="11.5805"
                              y2="11.4887"
                              gradientUnits="userSpaceOnUse"
                            >
                              <stop stop-color="#1E8AF2" />
                              <stop offset="1" stop-color="#05BED7" />
                            </linearGradient>
                          </defs>
                        </svg>
                      </span>
                      {name}
                    </Tab>
                  ))}
                </TabList>
                <TabPanels className="mt-3">
                  {categories.map(({ name, posts }) => (
                    <TabPanel key={name}>
                      <div className="flex py-8">
                        <div>
                          <Image
                            src="/images/digital-agency.jpg"
                            width={540}
                            height={360}
                            alt=""
                            className="rounded-[12px]"
                          />
                        </div>
                        <div className="pl-24">
                          {posts.map((item, key) => (
                            <div key={key} className="mb-5 flex">
                              <span className="mr-5 mt-2">
                                <svg
                                  width="20"
                                  height="15"
                                  viewBox="0 0 21 16"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M1.25 8L7.5 14.25L20 1.75"
                                    stroke="url(#paint0_linear_1_1114)"
                                    stroke-width="1.6"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                  />
                                  <defs>
                                    <linearGradient
                                      id="paint0_linear_1_1114"
                                      x1="1.46875"
                                      y1="5.625"
                                      x2="9.1904"
                                      y2="11.7615"
                                      gradientUnits="userSpaceOnUse"
                                    >
                                      <stop stop-color="#1E8AF2" />
                                      <stop offset="1" stop-color="#05BED7" />
                                    </linearGradient>
                                  </defs>
                                </svg>
                              </span>
                              <div>
                                <span className="block items-center text-[16px] font-medium mb-2">
                                  {item.title}
                                </span>
                                <p className="text-[16px] m-0 font-normal text-white/60 leading-[24px]">
                                  {item.details}
                                </p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </TabPanel>
                  ))}
                </TabPanels>
              </TabGroup>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Partnerships;
