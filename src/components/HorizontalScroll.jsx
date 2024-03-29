import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import PropTypes from "prop-types";

function HorizontalScroll({ data }) {
  const slideLeft = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft - 500;
  };
  const slideRight = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft + 500;
  };

  return (
    <div
      className="pt-8 flex
     flex-col w-full md:w-[95%] m-auto"
    >
      <div className="relative flex items-center bg-red-950/10 px-0 md:px-18 lg:px-24 py-1 md:py-5">
        <MdChevronLeft
          className="text-red-950 cursor-pointer hover:opacity-80"
          onClick={slideLeft}
          size={70}
        />
        <div
          id="slider"
          className="flex justify-center items-center w-full whitespace-nowrap scroll-smooth scrollbar-hide no-scrollbar overflow-hidden py-1"
        >
          {data.map((item) => (
            <div
              key={item.id}
              className="bg-red-950 p-0 md:p-5 rounded-full mr-1 md:mr-3"
            >
              <img
                className=" w-14 h-14 md:w-20 md:h-20 object-cover inline-block p-2 cursor-pointer hover:scale-105 ease-in-out duration-300"
                src={item.url}
                alt="img"
              />
            </div>
          ))}
        </div>
        <MdChevronRight
          className="text-red-950 cursor-pointer hover:opacity-80"
          onClick={slideRight}
          size={70}
        />
      </div>
    </div>
  );
}

HorizontalScroll.propTypes = {
  data: PropTypes.array,
};

export default HorizontalScroll;
