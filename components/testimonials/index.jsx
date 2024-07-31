import React from 'react'
import TestimonialCard from './testimonialCard'

const Testimonials = () => {
  return (
    <div className="container mx-auto lg:px-16 py-16 relative text-dreamless-sleep bg-white">
        <h6 className="text-[16px] uppercase font-bold mb-3">Testimonials</h6>
        <h2 className="text-[44px] font-medium w-1/3 leading-[57px] mb-10">What our partners <span>say about us.</span></h2>

        <TestimonialCard />
    </div>
  )
}

export default Testimonials