import Banner from "@/components/banner";
import ElevateExperience from "@/components/elevateExperience";
import GlobalPartners from "@/components/globalPartners";
import PartnerProgram from "@/components/partnerProgram";
import Partnerships from "@/components/partnerships";
import PathToPartnership from "@/components/pathToPartnership";
import SeekPartners from "@/components/seekPartners";
import Testimonials from "@/components/testimonials";
import TrustedPartners from "@/components/trustedPartners";
import WhyPartnerWithUs from "@/components/whyPartnerWithUs";

const HomePage = async () => {
  const whyPartnerWithUsData = [
    {
      id: 0,
      imgUrl: "/images/requirement_analysis.png",
      altText: "requirement",
      title: "Enrich your Solution.",
      text: "We Believe In Superior Frontend Development With The Combination Of JavaScript, HTML And CSS helps us design awesome web designs.",
    },
    {
      id: 1,
      imgUrl: "/images/development.png",
      altText: "development",
      title: "Develop product Integration.",
      text: "We Believe In Superior Frontend Development With The Combination Of JavaScript, HTML And CSS helps us design awesome web designs.",
    },
    {
      id: 2,
      imgUrl: "/images/optimize.png",
      altText: "optimize",
      title: "Expand your market Network.",
      text: "We Believe In Superior Frontend Development With The Combination Of JavaScript, HTML And CSS helps us design awesome web designs.",
    },
  ];
  const elevateExperienceData = [
    {
      id: 0,
      logo: "/images/SuccessiveDigitalLogo.png",
      altTxt: "logo1",
      title: "50+",
      text: "Technology Innovation",
      title2: "10",
      text2: "AI solutions integrated.",
    },
    {
      id: 2,
      logo: "/images/22_Feet.png",
      altTxt: "logo2",
      title: "10+",
      text: "Technology Innovation",
      title2: "3",
      text2: "AI solutions integrated.",
    },
    {
      id: 3,
      logo: "/images/ACTS.png",
      altTxt: "logo3",
      title: "60+",
      text: "Technology Innovation",
      title2: "24",
      text2: "AI solutions integrated.",
    },
  ];
  const trustedPartnersData = [
    {
      id: 0,
      logoUrl: "/images/icons/Logo_Wnderlab_India.svg",
      altTxt: "logo3",
    },
    {
      id: 1,
      logoUrl: "/images/icons/22_Feet.svg",
      altTxt: "logo4",
    },
    {
      id: 0,
      logoUrl: "/images/icons/Logo_Wnderlab_India.svg",
      altTxt: "logo3",
    },
    {
      id: 1,
      logoUrl: "/images/icons/22_Feet.svg",
      altTxt: "logo4",
    },
    {
      id: 0,
      logoUrl: "/images/icons/Logo_Wnderlab_India.svg",
      altTxt: "logo3",
    },
    {
      id: 1,
      logoUrl: "/images/icons/22_Feet.svg",
      altTxt: "logo4",
    },
    {
      id: 0,
      logoUrl: "/images/icons/Logo_Wnderlab_India.svg",
      altTxt: "logo3",
    },
    {
      id: 1,
      logoUrl: "/images/icons/22_Feet.svg",
      altTxt: "logo4",
    },
  ];
  return (
    <div>
      <Banner />
      <TrustedPartners trustedPartnersData={trustedPartnersData} />
      <WhyPartnerWithUs whyPartnerWithUsData={whyPartnerWithUsData} />
      <SeekPartners />
      <ElevateExperience elevateExperienceData={elevateExperienceData} />
      <GlobalPartners />
      <PathToPartnership />
      <Partnerships />
      <Testimonials />
      <PartnerProgram />
    </div>
  );
};

export default HomePage;
