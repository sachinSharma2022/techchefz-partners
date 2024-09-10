import TestimonialCard from "./testimonialCard";
import TestimonialMobileCard from "./testimonialMobileCard";

const Testimonials = () => {
  return (
    <section className="bg-secondary lg:bg-white lg:py-[120px] py-[70px] relative overflow-x-hidden">
      <div className="container mx-auto">
        <div className="lg:text-dreamless-sleep text-white px-5 lg:px-0">
          <h6 className="text-[16px] uppercase lg:font-bold font-normal lg:mb-3 mb-2 opacity-80 tracking-widest">
            Testimonials
          </h6>
          <h2 className="lg:text-[44px] text-[32px] font-medium lg:w-1/3 lg:leading-[57px] leading-[40px] mb-10">
            What our partners{" "}
            <span className="text-grad-blue">say about us.</span>
          </h2>
        </div>

        <div className="hidden lg:block testimonial-card">
          <TestimonialCard />
        </div>
      </div>

      <div className="lg:hidden">
        <TestimonialMobileCard />
      </div>
    </section>
  );
};

export default Testimonials;
