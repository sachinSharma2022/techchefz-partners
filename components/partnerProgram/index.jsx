import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";

const PartnerProgram = () => {
  return (
    <div className="container mx-auto lg:px-16 py-16 relative">
      <div className="">
        <Image
          src="/images/partner-bg.jpg"
          className="w-full"
          width={1200}
          height={400}
          alt=""
        />
      </div>

      <div className="lg:grid block grid-cols-2 gap-x-36 lg:absolute top-60 left-0 lg:px-36 w-full px-4">
        <div className="text-white bg-dreamless-sleep rounded-[20px] lg:py-8 lg:mt-0 mt-[-70px] relative p-8 border-4 border-[#1e8af2]">
          <h3 className="lg:text-[44px] text-[32px] font-medium m-0 lg:leading-[3.3rem] leading-[2.3rem] lg:mb-8 mb-6">
            Want to join the <span className="block">Partner Program ?</span>
          </h3>
          <p>
            At our core, we champion a customer-centric approach and foster a
            people-centric paradigm internally. United by a strong sense of
            community, ownership, and collaboration, we navigate each endeavor.
          </p>
          <Button variant="lightBlueBtn" size="lg" className="mt-7">Become a Partner</Button>
        </div>

        <div className="text-white lg:mt-0 mt-5">
          <p className="mb-3">Number Insights :</p>
          <div className="grid grid-cols-2 lg:gap-7 gap-4 lg:w-3/4 w-full">
            <div className="bg-white bg-opacity-15 rounded-[20px] p-[24px] border">
              <div className="text-[44px] font-medium leading-10 mb-4">
                500+
              </div>
              <p>Technology Innovation</p>
            </div>
            <div className="bg-white bg-opacity-15 rounded-[20px] p-[24px] border">
              <div className="text-[44px] font-medium leading-10 mb-4">
                200+
              </div>
              <p>AI solutions integrated.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="lg:grid block lg:grid-cols-2 lg:gap-x-44 lg:py-12 px-4 lg:px-20 lg:mt-32 mt-16">
        <div className="text-white">
          <h3 className="lg:text-[44px] text-[32px] font-medium lg:leading-[3.3rem] leading-[2.3rem] lg:mb-7 mb-5">
            Steps through our
            <span className="block">Application Process.</span>
          </h3>
          <p>
            We believe in a customer-centric ethic without and people-centric
            paradigm within. With a strong sense of community, ownership, and
            collaboration.
          </p>
        </div>
        <div className="text-white lg:mt-0 mt-8">
          <li className="flex list-none mb-3">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="mr-3 min-w-8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="24" height="24" rx="12" fill="#00BD4D" />
              <path
                d="M16 9L10.5299 14.4701L8 11.9418"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            Fill out our online inquiry form expressing your interest in
            collaboration.
          </li>
          <li className="flex list-none mb-3">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="mr-3 min-w-8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="24" height="24" rx="12" fill="#00BD4D" />
              <path
                d="M16 9L10.5299 14.4701L8 11.9418"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            Our partnership team will reach out to schedule an initial
            consultation, understanding your goals and expectations.
          </li>
          <li className="flex list-none mb-3">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="mr-3 min-w-8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="24" height="24" rx="12" fill="#00BD4D" />
              <path
                d="M16 9L10.5299 14.4701L8 11.9418"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            Review the proposal and provide feedback. We value open
            communication to ensure alignment with your objectives.
          </li>
        </div>
      </div>
    </div>
  );
};

export default PartnerProgram;
