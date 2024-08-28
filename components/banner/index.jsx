import React from "react";
import { Button } from "../ui/button";
import { Icons } from "../icons";

const Banner = () => {
  return (
    <div className="lg:py-20 py-16 lg:px-16 px-4 bg-hero-pattern flex items-center">
      <div className="container mx-auto">
        <div className="flex items-center justify-start">
          <div>
            <h3 className="lg:text-[64px] text-[44px] font-medium lg:leading-[64px] leading-[56px] text-white">
              TechChefz’s{" "}
              <span className="block lg:w-full w-2/3">Partner Program.</span>
            </h3>
            <p className="text-[20px] opacity-60 text-white lg:mt-8 mt-5 lg:mb-14 mb-12 lg:w-2/5">
              Our Partner Program gives you access to one of the broadest SaaS
              product portfolios in the industry, training to build powerful
              product capabilities.
            </p>
            <Button variant="blueBtn" size="lg">
              Become a Partner <Icons.ArrowRight size={15} />
            </Button>
          </div>

          <div className="mask1">
            <svg
              width="964px"
              height="472px"
              viewBox="0 0 964 472"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
            >
              <defs>
                <path
                  d="M426.0801,103.9402 L424.1181,104.3102 C371.2281,53.6232 315.3831,38.6452 248.9471,61.1872 C179.4021,90.1542 147.7211,158.1682 125.4231,260.4522 C109.6431,332.5742 61.7041,378.6562 0,396.6222 C138.9671,499.9432 290.0671,465.6412 462.6871,303.6082 C682.7451,391.9872 838.5801,362.6232 930.1921,215.5172 C866.0551,221.2562 801.9701,201.6132 761.1181,140.6692 C703.1241,53.5142 648.8621,1.6939 573.6681,0 C503.4841,3.33 456.9321,37.6022 426.0801,103.9402 Z"
                  id="path-1"
                ></path>
                <pattern
                  id="pattern-3"
                  patternUnits="objectBoundingBox"
                  x="10.0176992%"
                  width="89.9823008%"
                  height="100%"
                >
                  <use
                    xlinkHref="#image-4"
                    transform="scale(1.31712963,1.31712963)"
                  ></use>
                </pattern>
                <image
                  id="image-4"
                  width="717"
                  height="432"
                  xlinkHref="/images/hero-image.jpg"
                  opacity={0.4}
                  // Change Image here
                ></image>
                <linearGradient
                  x1="94.8643412%"
                  y1="41.2218283%"
                  x2="76.9173168%"
                  y2="58.9626016%"
                  id="linearGradient-5"
                >
                  <stop stopColor="#1E8AF2" offset="0%"></stop>
                  <stop stopColor="#05BED7" offset="100%"></stop>
                </linearGradient>
                <linearGradient
                  x1="94.8643412%"
                  y1="41.2149398%"
                  x2="76.9173168%"
                  y2="58.9696348%"
                  id="linearGradient-6"
                >
                  <stop stopColor="#1E8AF2" offset="0%"></stop>
                  <stop stopColor="#05BED7" offset="100%"></stop>
                </linearGradient>
              </defs>
              <g
                id="Page-1"
                stroke="none"
                strokeWidth="1"
                fill="none"
                fillRule="evenodd"
              >
                <g id="hero-img" transform="translate(9.000000, 4.000000)">
                  <g
                    id="Rectangle-Clipped"
                    transform="translate(8.843940, 4.002180)"
                  >
                    <mask id="mask-2" fill="white">
                      <use xlinkHref="#path-1"></use>
                    </mask>
                    <g id="path-1"></g>
                    <rect
                      id="Rectangle"
                      fill="url(#pattern-3)"
                      fillRule="nonzero"
                      mask="url(#mask-2)"
                      x="-142.697"
                      y="-59.7429"
                      width="1181"
                      height="569"
                    ></rect>
                  </g>
                  <g
                    id="Path-2270"
                    stroke="url(#linearGradient-6)"
                    strokeWidth="8"
                  >
                    <path
                      d="M256.25304,61.49648 L256.37804,61.44448 L256.50604,61.40108 C290.32904,49.92518 321.69004,47.93058 351.43204,55.41058 C380.11604,62.62478 406.99404,78.57598 432.93904,102.78438 C448.31104,70.85248 467.54604,46.24498 491.64904,29.08568 C516.64004,11.29368 546.59604,1.70176 582.32304,0.00663 L582.46204,-1.33226763e-14 L582.60204,-1.33226763e-14 C659.95104,1.7456 715.22604,55.19348 773.29004,142.45238 C813.13104,201.88038 875.60904,221.17838 938.68004,215.53538 L946.67504,214.81938 L942.43204,221.63338 C896.09504,296.03838 833.31804,340.89338 754.19204,355.80238 C675.80504,370.57338 581.80504,355.87738 472.40804,312.27038 C386.52804,392.49838 305.56604,441.53138 228.38004,457.54238 C150.43004,473.71038 76.76494,456.10738 6.45734,403.83438 L-3.55271368e-15,399.03338 L7.72574,396.78438 C68.07774,379.21138 114.90504,334.23638 130.35904,263.60038 C152.68504,161.19138 184.71904,91.29218 256.25304,61.49648 Z"
                      id="Path"
                    ></path>
                  </g>
                </g>
              </g>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
