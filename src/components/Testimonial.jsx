import {
  IoIosArrowDropleftCircle,
  IoIosArrowDroprightCircle,
} from "react-icons/io";

// import SectionHead from "./SectionHead";
import { useState } from "react";
import Card from "./CardTestimonial";
import { testimonials } from "../libs/data";

function Testimonial() {
  const [index, setIndex] = useState(0);
  const { name, quote, job, avatar } = testimonials[index];

  const prevTestHandler = () => {
    setIndex((prev) => prev - 1);
    if (index <= 0) {
      setIndex(testimonials.length - 1);
    }
  };

  const nextTestHandler = () => {
    setIndex((prev) => prev + 1);
    if (index >= testimonials.length - 1) {
      setIndex(0);
    }
  };

  return (
    <section className="bg-gray-300 p-0 md:p-3 lg:p-6 flex justify-center items-center">
      <div className="w-full md:w-2/3 flex justify-center items-center flex-col">
        <Card>
          <div className="w-16 h-16 border-2 border-transparent absolute rounded-full -top-8 left-1/2 shadow-sm md:shadow-md lg:shadow-lg overflow-hidden transition-all hover:rounded-full hover:border-red-600">
            <img src={avatar} alt={name} />
          </div>
          <p className="font-extralight mx-0 mt-6 mb-8 italic">{`"${quote}"`}</p>
          <h5>{name}</h5>
          <small className="mt-3">{job}</small>
        </Card>
        <div className="gap-1 items-center justify-center flex mt-9 mx-auto mb-0 w-fit">
          <button className="bg-transparent cursor-pointer">
            <IoIosArrowDropleftCircle
              onClick={prevTestHandler}
              size={55}
              className="text-red-900"
            />
          </button>
          <button className="bg-transparent cursor-pointer">
            <IoIosArrowDroprightCircle
              onClick={nextTestHandler}
              size={55}
              className="text-red-900"
            />
          </button>
        </div>
        <h5 className="pt-8 md:pt-12 lg:pt-16 font-bold text-4xl pb-3">
          OUR COMMUNITY
        </h5>
      </div>
    </section>
  );
}

export default Testimonial;
