import Testimonial from "./Testimonial";

function TestimonialSection() {
  return (
    <div className="w-full mt-4 md:mt-8 lg:mt-16">
      <h2 className="uppercase text-center text-black text-3xl font-bold p-3 md:p-5 mb-1 md:mb-2 lg:mb-3">
        testimonies
      </h2>
      <Testimonial />
    </div>
  );
}

export default TestimonialSection;
