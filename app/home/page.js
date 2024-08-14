import PartnerProgram from "@/components/partnerProgram";
import Partnerships from "@/components/partnerships";
import Testimonials from "@/components/testimonials";

const HomePage = async () => {
  return (
    <div>
      <Partnerships />
      <Testimonials />
      <PartnerProgram />   
    </div>
  );
};

export default HomePage;
